import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

export const LandingPage = () => {
  const onPlayClick = () => {
    trackEvent('PlayClick', { source: 'landing-hero' });
  };

  return (
    <main className="page">
      <Helmet>
        <title>Unity Game Player | Play in Browser</title>
        <meta
          name="description"
          content="Play our Unity WebGL game directly in your browser. No install, just click and start."
        />
        <meta property="og:title" content="Unity Game Player" />
        <meta
          property="og:description"
          content="Open the game landing page and start playing instantly in WebGL."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.svg" />
      </Helmet>

      <section className="hero">
        <p className="eyebrow">Играй, чтобы жить</p>
        <h1>Игры цифрового аудита</h1>
        <p className="hero-copy">
          Посмотри на работу со стороны развлечений. Это новый и незабываемый опыт
        </p>
        <div className="hero-actions">
          <Link className="primary-btn" to="/play" onClick={onPlayClick}>
            Играть онлайн
          </Link>
        </div>
      </section>

      <section className="features" id="features">
        <article>
          <h2>Поток без отвлечений</h2>
          <p>Погружайся в процесс полностью: каждый элемент игры ведет к состоянию концентрации и кайфа.</p>
        </article>
        <article>
          <h2>Честный вызов</h2>
          <p>Сложность растет плавно, чтобы каждая победа ощущалась заслуженной и по-настоящему яркой.</p>
        </article>
        <article>
          <h2>Эмоции в каждом раунде</h2>
          <p>Динамика, ритм и визуал собраны так, чтобы каждый запуск дарил новые впечатления.</p>
        </article>
      </section>
    </main>
  );
};
