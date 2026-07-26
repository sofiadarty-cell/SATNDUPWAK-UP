import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import EventCard from '../components/EventCard.jsx';

const PROGRAMMES = [
  {
    eyebrow: 'Emploi',
    title: "F.A.F.R. — Face à Face avec un Recruteur",
    desc: "Se confronter à de vrais recruteurs, sortir du CV théorique et repartir avec un projet professionnel plus clair, et la confiance pour le porter.",
    link: 'Voir le prochain F.A.F.R. →',
  },
  {
    eyebrow: 'Talents',
    title: "Digi'TalentS",
    desc: "Une marketplace du talent : les jeunes créateur·rices exposent, rencontrent des pros et transforment une passion en début de parcours pro.",
    link: 'Découvrir le programme →',
  },
  {
    eyebrow: 'Médias',
    title: "MediaLab Stand Up Wak'Up",
    desc: "Écriture, captation, montage, podcast : le MediaLab apprend le métier en le pratiquant, avec une vraie immersion chez un média partenaire à la clé.",
    link: 'Découvrir le MediaLab →',
  },
  {
    eyebrow: 'Cohésion',
    title: 'Sport & engagement',
    desc: "Le terrain de sport comme premier terrain d'engagement : esprit d'équipe, autonomie, et le déclic citoyen qui vient souvent plus vite là qu'ailleurs.",
    link: 'Découvrir le programme →',
  },
];

const PARCOURS = [
  { num: '01', title: 'Trouver ma voie', desc: "Être accompagné·e vers l'emploi, une formation ou une reconversion." },
  { num: '02', title: 'Révéler mon talent', desc: 'Expérimenter, créer, prendre la parole et montrer ce que je sais faire.' },
  { num: '03', title: 'Transmettre mon expérience', desc: "Devenir mentor, bénévole ou partenaire d'un parcours." },
];

const TEASER_EVENTS = [
  { date: '05 AU 12 SEPTEMBRE 2026', title: 'Forums des associations', link: 'Voir les rendez-vous →' },
  { date: '31 OCTOBRE 2026', title: "Digi'TalentS. 4e édition", link: 'Réserver sur HelloAsso →' },
  { date: 'Date à confirmer', title: 'F.A.F.R. — Face à face avec un recruteur', link: 'Ouvrir la page dédiée →' },
];

export default function Home() {
  return (
    <>
      <Nav />

      <header className="section section--dark">
        <div className="container hero">
          <div className="hero__content">
            <span className="eyebrow">Le terrain comme point de départ</span>
            <h1>On ne révèle pas<br />un talent derrière<br />un bureau.</h1>
            <p className="hero__desc">
              Depuis 2006, Stand Up Wak'Up accompagne les jeunes de 13 à 35 ans par l'événementiel : plutôt
              que de les enfermer dans un cadre scolaire ou administratif, on les met en situation réelle : face
              à un recruteur, sur un terrain de sport, derrière une caméra. C'est dans l'expérience vécue qu'on
              découvre ce qu'on sait faire.
            </p>
            <div className="hero__actions">
              <a href="#programmes" className="btn btn--filled-light">Découvrir nos programmes</a>
              <a href="#" className="btn btn--outline-light">Devenir mentor</a>
            </div>
          </div>
          <div className="hero__image placeholder-img" role="img" aria-label="Jeunes en immersion lors d'un atelier Stand Up Wak'Up" />
        </div>
      </header>

      <section className="section section--tight">
        <div className="container stats">
          <div className="stat">
            <div className="stat__number">20 ans</div>
            <div className="stat__label">d'expérience terrain</div>
          </div>
          <div className="stat">
            <div className="stat__number">+400</div>
            <div className="stat__label">jeunes accompagnés</div>
          </div>
          <div className="stat">
            <div className="stat__number">4 parcours</div>
            <div className="stat__label">pour passer à l'action</div>
          </div>
          <div className="stat">
            <div className="stat__number">73%</div>
            <div className="stat__label">de progression dans leur parcours</div>
          </div>
        </div>
      </section>

      <section className="section" id="programmes">
        <div className="container">
          <h2>Des programmes pour transformer l'envie en expérience</h2>
          <p style={{ marginTop: 8 }}>Choisissez le parcours qui correspond à votre besoin aujourd'hui.</p>
          <div className="grid">
            {PROGRAMMES.map((p) => (
              <a href="#" className="card-dark" key={p.title}>
                <div className="placeholder-img" style={{ aspectRatio: '4/3', borderRadius: 8, marginBottom: 8 }} />
                <span className="eyebrow">{p.eyebrow}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="link-arrow">{p.link}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <h2>Il n'y a pas une seule façon de passer à l'action.</h2>
          <div className="grid grid--3">
            {PARCOURS.map((p) => (
              <a href="#" className="card-profile" key={p.num}>
                <span className="eyebrow-num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="link-arrow">Commencer →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container featured-event">
          <div className="featured-event__image placeholder-img" role="img" aria-label="Digi'TalentS 2026" />
          <div>
            <span className="eyebrow">Digi'TalentS. 4e édition</span>
            <h2 style={{ marginTop: 8 }}>Thème 2026 : « Notre citoyenneté, reflet de notre diversité »</h2>
            <p style={{ marginTop: 16, maxWidth: '48ch' }}>
              Talks, performances artistiques, expositions et interviews live pour révéler les talents de la
              jeunesse et les mettre en lien avec recruteurs, mentors et médias.
            </p>
            <a href="#" className="link-arrow" style={{ marginTop: 20, display: 'inline-flex' }}>Découvrir le programme →</a>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container testimonial">
          <blockquote>« Je pensais juste déposer un CV. Je suis repartie avec une direction — et l'envie d'y croire. »</blockquote>
          <div className="testimonial__links">
            <span className="eyebrow" style={{ color: 'var(--white)', opacity: 0.6 }}>Ce récit peut être le vôtre</span>
            <a href="#" className="link-arrow">Je cherche ma voie</a>
            <a href="#" className="link-arrow">Je veux transmettre</a>
            <a href="#" className="link-arrow">J'engage mon organisation</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Les prochains rendez-vous.</h2>
          <p style={{ marginTop: 8 }}>Un aperçu de l'agenda du réseau.</p>
          <div className="grid grid--3" style={{ marginTop: 24 }}>
            {TEASER_EVENTS.map((e) => (
              <Link to="/evenements" className="event-card" key={e.title}>
                <div className="event-card__image placeholder-img" />
                <div className="event-card__stripe" />
                <div className="event-card__legend">
                  <div className="event-card__top">
                    <span className="event-card__date">{e.date}</span>
                  </div>
                  <div className="event-card__title">{e.title}</div>
                  <span className="link-arrow">{e.link}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/evenements" className="link-arrow">Voir tous les rendez-vous →</Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Une mission crédible se prouve sur le terrain.</h2>
          <p style={{ marginTop: 8, color: 'var(--grey-text)' }}>
            Agrément en cours · Intérêt général · 20 ans d'existence · 14 partenaires actifs
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>N'attends pas que ton histoire s'écrive. Réalise-la.</h2>
            <div className="cta-banner__links">
              <a href="#">Je trouve mon parcours</a>
              <a href="#">Je deviens mentor</a>
              <a href="#">J'engage mon entreprise</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
