import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { scrollToId, siteNavItems } from './siteNav';

export const SiteFooter = () => {
  const location = useLocation();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandLogo className="brand-logo brand-logo-footer" />
            <p>Небольшая браузерная игра про задачи, документы и жизнь офиса.</p>
          </div>
          <nav className="footer-nav" aria-label="Навигация в подвале">
            {siteNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={(event) => {
                  if (item.hash && location.pathname === '/') {
                    event.preventDefault();
                    scrollToId(item.hash);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/blog">Блог</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Цифровой офис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
