import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="footer__logo">Standup Wakup</div>
        <ul className="footer__links">
          <li><Link to="/#programmes">Programmes</Link></li>
          <li><Link to="/evenements">Événements</Link></li>
          <li><a href="#">Actualités</a></li>
          <li><a href="#">Adhésion</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="footer__meta">Association d'intérêt général. Paris et Île-de-France</div>
      </div>
    </footer>
  );
}
