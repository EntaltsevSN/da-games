import { useEffect, useMemo, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { unityBuildConfig } from '../config/unityBuild';

type UnityPlayerProps = {
  onSessionStart?: () => void;
};

export const UnityPlayer = ({ onSessionStart }: UnityPlayerProps) => {
  const [bootstrapped, setBootstrapped] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  const unityOptions = useMemo(
    () => ({
      ...unityBuildConfig,
      companyName: 'YourStudio',
      productName: 'YourGame',
      productVersion: '1.0.0',
    }),
    [],
  );

  const {
    unityProvider,
    loadingProgression,
    isLoaded,
    requestFullscreen,
    addEventListener,
    removeEventListener,
  } = useUnityContext(unityOptions);

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

  const loadingPercent = Math.round(loadingProgression * 100);

  if (hasFailed) {
    return (
      <section className="panel">
        <h2>Unity build was not found</h2>
        <p>Check files in `src/game/Build` and names configured in `src/config/unityBuild.ts`.</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <div className="player-toolbar">
        <span className="status">{isLoaded ? 'Готово' : `Загрузка ${loadingPercent}%`}</span>
        <button
          className="ghost-btn"
          type="button"
          disabled={!isLoaded}
          onClick={() => {
            requestFullscreen(true);
          }}
        >
          Во весь экран
        </button>
      </div>

      {!bootstrapped ? (
        <button
          className="primary-btn bootstrap-btn"
          type="button"
          onClick={() => {
            setBootstrapped(true);
          }}
        >
          Запустить игру
        </button>
      ) : (
        <Unity className="unity-canvas" unityProvider={unityProvider} />
      )}
    </section>
  );
};
