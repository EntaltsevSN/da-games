import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { trackEvent } from '../lib/analytics';

const UnityPlayer = lazy(async () => {
  const module = await import('../components/UnityPlayer');
  return { default: module.UnityPlayer };
});

export const PlayPage = () => {
  return (
    <main className="page play-page">
      <Helmet>
        <title>Play | Unity Game Player</title>
        <meta
          name="description"
          content="Play the Unity WebGL build directly inside your browser with fullscreen support."
        />
      </Helmet>

      <section className="play-header">
        <h1>Цифровой офис</h1>
        <p>Начни свой путь маскота во благо общего дела!</p>
      </section>

      <Suspense fallback={<p className="panel loading">Loading player shell...</p>}>
        <UnityPlayer
          onSessionStart={() => {
            trackEvent('SessionStart', { source: 'play-page' });
          }}
        />
      </Suspense>
    </main>
  );
};
