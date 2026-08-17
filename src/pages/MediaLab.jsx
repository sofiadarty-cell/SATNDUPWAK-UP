import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

export default function MediaLab() {
  return (
    <>
      <Nav />
      <main className="medialab-page">
        <div className="container medialab-page__hero">
          <span className="eyebrow">MediaLab Stand Up Wak'Up</span>
          <h1>Créer pour<br />prendre sa place.</h1>
          <p>Écriture, captation, montage et podcast : le MediaLab apprend le métier en le pratiquant.</p>
          <Link to="/a-propos#decouvrir" className="link-arrow">Retour à À propos →</Link>
        </div>
        <div className="container medialab-page__media">
          <div className="photo-placeholder photo-placeholder--hero" aria-label="Visuel MediaLab à venir" />
          <div className="medialab-page__copy"><span className="eyebrow">Le programme</span><h2>Une vraie immersion, des compétences qui restent.</h2><p>Cette page accueillera le détail du programme MediaLab, ses ateliers, ses participantes et ses médias partenaires.</p></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
