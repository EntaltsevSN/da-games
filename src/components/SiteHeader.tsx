import { Link, NavLink, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { PlayButton } from './PlayButton';
import { scrollToId, siteNavItems } from './siteNav';

export const SiteHeader = () => {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-link" to="/" aria-label="Цифровой офис">
          <BrandLogo className="brand-logo" />
        </Link>
        <nav className="top-nav" aria-label="Основная навигация">
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
        </nav>
        <div className="header-actions">
          <NavLink className="blog-btn" to="/blog">
            Блог
          </NavLink>
          <PlayButton className="play-btn-header" source="header" />
        </div>
      </div>
    </header>
  );
};
