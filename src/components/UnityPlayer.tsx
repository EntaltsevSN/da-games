import { useEffect, useMemo, useRef, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { unityBuildConfig } from '../config/unityBuild';

type UnityPlayerProps = {
  onSessionStart?: () => void;
};

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: (flags?: number) => Promise<void> | void;
  webkitRequestFullScreen?: (flags?: number) => Promise<void> | void;
};

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
  webkitCancelFullScreen?: () => Promise<void> | void;
};

const KEYBOARD_INPUT_ALLOWED = 1;

const isAppleTouchDevice = () => {
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return iOS || iPadOS;
};

const isSafari = () =>
  /safari/i.test(navigator.userAgent) && !/chrome|chromium|crios|android|edg|opr|fxios/i.test(navigator.userAgent);

const getFullscreenElement = () => {
  const doc = document as FullscreenDocument;
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
};

const requestElementFullscreen = (element: HTMLElement) => {
  const target = element as FullscreenElement;
  const webkitRequest = target.webkitRequestFullscreen ?? target.webkitRequestFullScreen;

  try {
    if (isSafari() && webkitRequest) {
      return Promise.resolve(webkitRequest.call(target, KEYBOARD_INPUT_ALLOWED));
    }
    if (target.requestFullscreen) {
      return Promise.resolve(target.requestFullscreen());
    }
    if (webkitRequest) {
      return Promise.resolve(webkitRequest.call(target, KEYBOARD_INPUT_ALLOWED));
    }
  } catch (error) {
    return Promise.reject(error);
  }

  return Promise.reject(new Error('Fullscreen API is unavailable'));
};

const exitElementFullscreen = () => {
  const doc = document as FullscreenDocument;
  const exit = document.exitFullscreen?.bind(document) ?? doc.webkitExitFullscreen?.bind(doc) ?? doc.webkitCancelFullScreen?.bind(doc);
  if (!exit) {
    return;
  }

  try {
    const result = exit();
    if (result && typeof result.catch === 'function') {
      result.catch(() => undefined);
    }
  } catch {
    // The document is already out of fullscreen.
  }
};

export const UnityPlayer = ({ onSessionStart }: UnityPlayerProps) => {
  const shellRef = useRef<HTMLElement>(null);
  const [hasFailed, setHasFailed] = useState(false);
  const [pseudoFullscreen, setPseudoFullscreen] = useState(false);
  const [nativeFullscreen, setNativeFullscreen] = useState(false);

  const unityOptions = useMemo(
    () => ({
      ...unityBuildConfig,
      companyName: 'YourStudio',
      productName: 'YourGame',
      productVersion: '1.0.0',
    }),
    [],
  );

  const { unityProvider, loadingProgression, isLoaded, addEventListener, removeEventListener } = useUnityContext(unityOptions);

  useEffect(() => {
    const onLoaded = () => {
      onSessionStart?.();
    };
    const onError = (message: string) => {
      console.error('Unity runtime error:', message, unityBuildConfig);
      setHasFailed(true);
    };

    addEventListener('loaded', onLoaded);
    addEventListener('error', onError);
    return () => {
      removeEventListener('loaded', onLoaded);
      removeEventListener('error', onError);
    };
  }, [addEventListener, onSessionStart, removeEventListener]);

  useEffect(() => {
    const syncFullscreen = () => {
      setNativeFullscreen(Boolean(getFullscreenElement()));
      window.dispatchEvent(new Event('resize'));
    };

    document.addEventListener('fullscreenchange', syncFullscreen);
    document.addEventListener('webkitfullscreenchange', syncFullscreen);
    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreen);
      document.removeEventListener('webkitfullscreenchange', syncFullscreen);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('player-pseudo-fullscreen', pseudoFullscreen);
    const frame = requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
    return () => {
      cancelAnimationFrame(frame);
      document.body.classList.remove('player-pseudo-fullscreen');
    };
  }, [pseudoFullscreen]);

  const isFullscreen = pseudoFullscreen || nativeFullscreen;
  const loadingPercent = Math.round(loadingProgression * 100);

  const focusCanvas = () => {
    shellRef.current?.querySelector('canvas')?.focus();
  };

  const toggleFullscreen = () => {
    if (pseudoFullscreen) {
      setPseudoFullscreen(false);
      return;
    }

    if (getFullscreenElement()) {
      exitElementFullscreen();
      return;
    }

    const shell = shellRef.current;
    if (!shell) {
      return;
    }

    // iPhone and iPad cannot fullscreen a canvas. Cover the viewport instead.
    if (isAppleTouchDevice()) {
      setPseudoFullscreen(true);
      focusCanvas();
      return;
    }

    requestElementFullscreen(shell)
      .then(() => {
        focusCanvas();
      })
      .catch(() => {
        setPseudoFullscreen(true);
        focusCanvas();
      });
  };

  if (hasFailed) {
    return (
      <section className="panel">
        <h2>Unity build was not found</h2>
        <p>Check files in `src/game/Build` and names configured in `src/config/unityBuild.ts`.</p>
      </section>
    );
  }

  return (
    <section
      className={`panel player-shell${isFullscreen ? ' is-fullscreen' : ''}${pseudoFullscreen ? ' pseudo-fullscreen' : ''}`}
      ref={shellRef}
    >
      <div className="player-toolbar">
        <span className="status">{isLoaded ? 'Готово' : `Загрузка ${loadingPercent}%`}</span>
        <button className="ghost-btn" type="button" disabled={!isLoaded} aria-pressed={isFullscreen} onClick={toggleFullscreen}>
          {isFullscreen ? 'Свернуть' : 'Во весь экран'}
        </button>
      </div>

      <div className="unity-stage">
        <Unity className="unity-canvas" tabIndex={-1} unityProvider={unityProvider} />
      </div>
    </section>
  );
};
