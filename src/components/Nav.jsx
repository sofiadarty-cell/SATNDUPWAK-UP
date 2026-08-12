import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav${open ? ' is-open' : ''}`}>
      <Link to="/" className="nav__logo">Standup<br />Wakup</Link>
      <ul className="nav__links">
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
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(o => !o)}
      >
        ☰
      </button>
    </nav>
  );
}
