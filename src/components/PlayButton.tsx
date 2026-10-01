import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';
import { PlayIcon } from './Icons';

type PlayButtonProps = {
  source: string;
  className?: string;
  children?: string;
};

export const PlayButton = ({ source, className = '', children = 'Запустить игру' }: PlayButtonProps) => {
  return (
    <Link
      className={`play-btn ${className}`.trim()}
      to="/play"
      aria-label={children}
      onClick={() => {
        trackEvent('PlayClick', { source });
      }}
    >
      <span className="play-btn-icon">
        <PlayIcon />
      </span>
      <span className="play-btn-text">{children}</span>
    </Link>
  );
};
