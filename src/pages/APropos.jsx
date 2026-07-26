import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

const ABOUT_NAV = [
  { label: 'Découvrir', href: '#decouvrir' },
  { label: 'Le podcast', href: '#podcast' },
  { label: 'Le job', href: '#job' },
  { label: 'Pôle presse', href: '#presse' },
  { label: 'MediaLab', href: '/medialab' },
];

export default function APropos() {
  return (
    <>
      <Nav />
      <header className="about-hero">
        <div className="container about-hero__inner">
          <span className="eyebrow">À propos de Stand Up Wak'Up</span>
          <h1>20 ans à faire bouger les lignes</h1>
          <p>L'histoire, la mission et les coulisses de Stand Up Wak'Up.</p>
        </div>
      </header>

      <div className="about-page">
        <aside className="about-sidebar" aria-label="Navigation À propos">
          <span className="about-sidebar__label">Dans ce groupe de pages</span>
          <nav>
            {ABOUT_NAV.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link to={item.href} className="about-sidebar__link" key={item.label}>
                  <span>0{index + 1}</span>{item.label}
                </Link>
              ) : (
                <a href={item.href} className="about-sidebar__link" key={item.label}>
                  <span>0{index + 1}</span>{item.label}
                </a>
              )
            ))}
          </nav>
        </aside>

        <main className="about-content">
          <section className="about-section" id="decouvrir">
            <div className="about-tabs" role="tablist" aria-label="Découvrir Stand Up Wak'Up">
              <a href="#histoire">Histoire</a>
              <a href="#why">Notre why</a>
              <a href="#coulisses">Coulisses</a>
              <a href="#equipe">Équipe</a>
            </div>
            <h2>Rembobiner pour<br />comprendre</h2>
            <div className="about-intro" id="histoire">
              <div className="about-intro__copy">
                <span className="eyebrow eyebrow--red">Face à. Le déclic</span>
                <h3>Une association<br />née d'une<br />conviction</h3>
                <p>Créer un espace où chacun peut reprendre confiance, trouver sa place et transformer une idée en projet. Ici viendra le récit fondateur de Stand Up Wak'Up.</p>
              </div>
              <div className="about-video" role="img" aria-label="Vidéo de présentation à intégrer">
                <div className="about-video__meta">Stand Up Wak'Up Original Tape · 00:00 / 06:30</div>
                <button className="about-video__play" aria-label="Lire la vidéo">▶</button>
                <div className="about-video__caption">▶ La fondatrice raconte la création de l'association</div>
              </div>
            </div>
          </section>

          <section className="about-section about-section--split" id="why">
            <div><span className="eyebrow">Notre why</span><h2>Le terrain<br />comme point<br />de départ.</h2></div>
            <p>Stand Up Wak'Up met les jeunes en situation réelle pour révéler leurs capacités, créer des rencontres et faire émerger des parcours qui leur ressemblent.</p>
          </section>

          <section className="about-section" id="coulisses">
            <span className="eyebrow">Les coulisses</span>
            <h2>Ce qui se passe<br />derrière les lignes.</h2>
            <div className="about-coulisses-grid">
              <div className="photo-placeholder photo-placeholder--wide" aria-label="Photo des coulisses à venir" />
              <div className="photo-placeholder" aria-label="Photo de l'équipe à venir" />
              <div className="photo-placeholder" aria-label="Photo d'un atelier à venir" />
            </div>
          </section>

          <section className="about-section about-section--team" id="equipe">
            <span className="eyebrow">L'équipe</span>
            <h2>Les personnes<br />qui font avancer.</h2>
            <p>Les portraits de l'équipe et des personnes engagées dans l'association seront présentés ici.</p>
          </section>

          <section className="about-section about-section--cards" id="podcast">
            <div><span className="eyebrow">Le podcast</span><h2>Les voix<br />du terrain.</h2></div>
            <div className="editorial-card">
              <span className="editorial-card__number">01</span>
              <h3>Stand Up Wak'Up Original Tape</h3>
              <p>Des récits, des rencontres et des déclics racontés par celles et ceux qui les vivent.</p>
              <a href="#" className="link-arrow">Écouter le podcast →</a>
            </div>
          </section>

          <section className="about-section about-section--split" id="job">
            <div><span className="eyebrow">Le job</span><h2>Travailler<br />avec nous.</h2></div>
            <div><p>Envie de rejoindre une équipe qui croit à l'expérience comme moteur de confiance ? Retrouvez ici les opportunités et les métiers de Stand Up Wak'Up.</p><a href="#" className="link-arrow">Voir les offres →</a></div>
          </section>

          <section className="about-section about-section--press" id="presse">
            <div><span className="eyebrow">Pôle presse</span><h2>Les ressources<br />pour raconter.</h2></div>
            <div className="press-list">
              <a href="#">Dossier de presse <span>↗</span></a>
              <a href="#">Communiqués <span>↗</span></a>
              <a href="#">Nous contacter <span>↗</span></a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
