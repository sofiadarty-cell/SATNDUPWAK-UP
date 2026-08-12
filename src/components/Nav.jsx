import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuId = 'nav-menu';

  return (
    <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Menu principal">
      <Link to="/" className="nav__logo">Standup<br />Wakup</Link>
      <ul id={menuId} className="nav__links">
        <li><Link to="/#programmes">Programmes</Link></li>
        <li><Link to="/evenements">Événements</Link></li>
        <li><a href="#">Histoires</a></li>
        <li><a href="#">Qui sommes-nous ?</a></li>
      </ul>
      <div className="nav__actions">
        <a href="#" className="btn btn--outline-dark">Je rejoins</a>
        <a href="#" className="btn btn--filled-dark">Je m'engage</a>
        <a href="#" className="btn btn--outline-dark">Faire un don</a>
      </div>
      <button
        className="nav__toggle"
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setOpen(o => !o)}
      >
        <span aria-hidden="true">☰</span>
      </button>
    </nav>
  );
}
