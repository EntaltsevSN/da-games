import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CtaVisual } from '../components/CtaVisual';
import {
  ArrowIcon,
  ChartIcon,
  ClipboardIcon,
  GamepadIcon,
  GearIcon,
  ListIcon,
  SparkIcon,
} from '../components/Icons';
import { PlayButton } from '../components/PlayButton';
import { SiteFooter } from '../components/SiteFooter';
import mascot from '../assets/mascot.png';

const features = [
  {
    title: 'Простой запуск',
    text: 'Не требуется установки. Играй прямо в браузере в один клик',
    icon: GamepadIcon,
  },
  {
    title: 'Лёгкая механика',
    text: 'Понятные задания, простой интерфейс и приятный прогресс',
    icon: ListIcon,
  },
  {
    title: 'Фирменный стиль',
    text: 'Простая графика и атмосфера настоящего офиса',
    icon: SparkIcon,
  },
];

const steps = [
  {
    n: '1',
    title: 'Бери задачи',
    text: 'Получай поручения и исследуй уголки знакомой локации',
    icon: ClipboardIcon,
  },
  {
    n: '2',
    title: 'Выполняй',
    text: 'Работай с документами, решай небольшие задачи и развивайся',
    icon: GearIcon,
  },
  {
    n: '3',
    title: 'Открывай новое',
    text: 'Получай награды и расширяй свои возможности',
    icon: ChartIcon,
  },
];

export const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }
    const id = hash.slice(1);
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="landing">
      <Helmet>
        <html lang="ru" />
        <title>Цифровой офис | Браузерная игра</title>
        <meta
          name="description"
          content="Небольшая браузерная игра про задачи, документы и жизнь офиса. Запускается в один клик прямо в браузере"
        />
        <meta property="og:title" content="Цифровой офис" />
        <meta
          property="og:description"
          content="Выполняй задания, организуй рабочий день и наслаждайся офисной атмосферой"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.svg" />
      </Helmet>

      <main>
        <section className="hero-section" id="about">
          <div className="container">
            <div className="hero-card">
              <span className="hero-frame hero-frame-tl" />
              <span className="hero-frame hero-frame-tr" />
              <span className="hero-frame hero-frame-bl" />
              <span className="hero-frame hero-frame-br" />
              <span className="deco deco-gray deco-hero-1" />
              <span className="deco deco-red deco-hero-2" />
              <span className="deco deco-gray deco-hero-3" />
              <span className="deco deco-red deco-hero-4" />
              <span className="deco deco-gray deco-hero-5" />
              <span className="deco deco-red deco-hero-6" />

              <div className="hero-copy-block">
                <h1>
                  Цифровой
                  <br />
                  офис
                </h1>
                <p className="hero-lead">
                  Небольшая браузерная игра про задачи, документы и жизнь офиса.
                </p>
                <p className="hero-copy">
                  Выполняй задания, организуй рабочий день, открывай новые возможности и
                  наслаждайся офисной атмосферой. Запускается в один клик прямо в браузере.
                </p>
                <PlayButton source="landing-hero" />
              </div>

              <div className="hero-visual">
                <img src={mascot} alt="Маскот цифрового офиса" />
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="container">
            <h2>Особенности</h2>
            <div className="feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article className="feature-card" key={feature.title}>
                    <span className="feature-icon">
                      <Icon />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="steps-section" id="how">
          <div className="container">
            <h2>Как это работает?</h2>
            <div className="steps-row">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="steps-item" key={step.n}>
                    <article className="step-card">
                      <div className="step-head">
                        <span className="step-icon">
                          <Icon />
                        </span>
                        <h3>{step.title}</h3>
                      </div>
                      <p>{step.text}</p>
                    </article>
                    {index < steps.length - 1 ? (
                      <span className="step-arrow" aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-section" id="cta">
          <div className="container">
            <div className="cta-card">
              <span className="deco deco-red deco-cta-1" />
              <span className="deco deco-gray deco-cta-2" />
              <span className="deco deco-red deco-cta-3" />
              <div className="cta-copy">
                <h2>
                  Готов открыть
                  <br />
                  цифровой офис?
                </h2>
                <p>Запускай игру и погрузись в небольшое офисное приключение прямо сейчас.</p>
                <PlayButton source="landing-cta" />
              </div>
              <CtaVisual />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};
