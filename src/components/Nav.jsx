import { useState } from 'react';
import { Link } from 'react-router-dom';

const ABOUT_ITEMS = [
  { title: 'Découvrir', label: 'Notre histoire, notre why', to: '/a-propos#decouvrir', tone: 'gold' },
  { title: 'Le podcast', label: 'Les voix du terrain', to: '/a-propos#podcast', tone: 'pink' },
  { title: 'Le job', label: 'Travailler avec nous', to: '/a-propos#job', tone: 'blue' },
  { title: 'Pôle presse', label: 'Nos ressources médias', to: '/a-propos#presse', tone: 'red' },
  { title: 'MediaLab', label: 'Créer, apprendre, transmettre', to: '/medialab', tone: 'green' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav${open ? ' is-open' : ''}`}>
      <Link to="/" className="nav__logo" aria-label="Stand Up Wak'Up">Standup<br />Wakup</Link>
      <ul className="nav__links">
        <li><Link to="/#programmes">Programmes</Link></li>
        <li><Link to="/evenements">Événements</Link></li>
        <li><a href="#">Histoires</a></li>
        <li className="nav__about">
          <Link to="/a-propos#decouvrir" className="nav__about-trigger">À propos</Link>
          <div className="nav__about-menu" role="menu" aria-label="Pages À propos">
            <div className="nav__about-intro">
              <span className="eyebrow">À propos</span>
              <p>Une association, cinq façons de découvrir son histoire et ses voix.</p>
            </div>
            <div className="nav__about-grid">
              {ABOUT_ITEMS.map((item) => (
                <Link to={item.to} className="nav-card" role="menuitem" key={item.title}>
                  <span className={`nav-card__image nav-card__image--${item.tone}`} aria-hidden="true" />
                  <span className="nav-card__title">{item.title}</span>
                  <span className="nav-card__label">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </li>
      </ul>
      <div className="nav__actions">
        <a href="#" className="btn btn--filled-dark">Je rejoins</a>
        <a href="#" className="btn btn--outline-dark">Je m'engage</a>
        <a href="#" className="btn btn--donation">Faire un don</a>
      </div>
      <button
        className="nav__toggle"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(o => !o)}
      >
        ☰
      </button>
    </nav>
  );
}
