import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SiteFooter } from '../components/SiteFooter';
import { blogPosts } from '../data/blogPosts';

const formatPostDate = (isoDate: string) =>
  new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${isoDate}T12:00:00`));

export const BlogPage = () => {
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
    <div className="blog">
      <Helmet>
        <title>Блог | Цифровой офис</title>
        <meta
          name="description"
          content="Обновления браузерной игры «Цифровой офис» и сайта. Новые записи появляются с каждым релизом."
        />
        <meta property="og:title" content="Блог | Цифровой офис" />
        <meta
          property="og:description"
          content="Следи за обновлениями игры и сайта. Свежие записи — сверху."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.svg" />
      </Helmet>

      <main className="blog-main">
        <div className="container">
          <header className="blog-hero">
            <p className="blog-kicker">Блог</p>
            <h1>Что нового</h1>
            <p className="blog-lead">
              Здесь публикуем обновления игры и сайта. Свежие записи всегда сверху.
            </p>
          </header>

          <div className="blog-feed">
            {blogPosts.map((post) => (
              <article className="blog-post" id={post.slug} key={post.slug}>
                <div className="blog-post-meta">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <ul className="blog-tags">
                    {post.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <h2>{post.title}</h2>
                {post.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {post.items ? (
                  <ul className="blog-changelog">
                    {post.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};
