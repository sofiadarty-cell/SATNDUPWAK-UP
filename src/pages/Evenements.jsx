import { useState, useMemo } from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import EventCard from '../components/EventCard.jsx';
import Modal from '../components/Modal.jsx';

const FILTERS = [
  { key: 'tous', label: 'Tous' },
  { key: 'talents', label: 'Talents' },
  { key: 'emploi', label: 'Emploi' },
  { key: 'solidarite', label: 'Solidarité' },
  { key: 'culture', label: 'Culture & sport' },
];

const EVENTS = {
  forums: {
    category: 'talents',
    date: '05 AU 12 SEPTEMBRE 2026',
    title: 'Forums des associations',
    link: 'Voir les rendez-vous →',
    group: 'prochains',
    modal: {
      dateBadge: '05 au 12 septembre 2026',
      title: 'Forums des associations',
      description: "Détails à venir — cet événement n'est pas encore documenté dans les sources du réseau. À compléter dès confirmation du format.",
      ctaLabel: 'Être prévenu·e',
    },
  },
  digitalents: {
    category: 'talents',
    date: '31 OCTOBRE 2026',
    title: "Digi'TalentS. 4e édition",
    link: 'Réserver sur HelloAsso →',
    group: 'prochains',
    modal: {
      dateBadge: '31 octobre 2026',
      status: 'Paris 11e',
      title: "Digi'TalentS. 4e édition",
      description: "La marketplace du talent : casting ouvert en chant, rap, slam, danse, humour et autres performances. Thème 2026 : « Notre citoyenneté, reflet de notre diversité ».",
      ctaLabel: 'Voir la page complète →',
    },
  },
  fafr: {
    category: 'emploi',
    date: 'Date à confirmer',
    title: 'F.A.F.R. — Face à face avec un recruteur',
    link: 'Ouvrir la page dédiée →',
    group: 'prochains',
    modal: {
      dateBadge: 'Date à confirmer',
      title: 'F.A.F.R. — Face à Face avec un Recruteur',
      description: "Pitchs, prise en main, mentorat et speed networking avec de vrais recruteurs : une passerelle vers l'avenir professionnel, depuis la genèse de l'association en 2006. Édition pilote réussie le 11 octobre 2025 à l'Espace Beaujon.",
      ctaLabel: 'Être prévenu·e',
    },
  },
  panier: {
    category: 'solidarite',
    date: 'Date à confirmer',
    title: 'Panier du Cœur',
    link: 'Suivre la prochaine action →',
    group: 'autres',
    modal: {
      dateBadge: 'Date à confirmer',
      status: 'Rentrée ou décembre',
      title: 'Panier du Cœur',
      description: 'Collecte et distribution alimentaire portée par les jeunes du réseau pour les familles et étudiants touchés par la précarité, en partenariat avec Phenix et Franprix. Édition 2025 : plus de 1000kg de denrées collectées en 2 jours par 15 membres.',
      ctaLabel: 'Suivre la prochaine action',
    },
  },
  teamChallenge: {
    category: 'culture',
    date: '04 JUILLET 2026 · RETOUR EN IMAGES',
    title: 'Team Challenge 2026',
    link: 'Voir les photos de l\u2019édition →',
    group: 'retours',
    modal: {
      dateBadge: '04 juillet 2026',
      status: 'Retour en images',
      title: 'Team Challenge 2026',
      description: "Parcours d'obstacles, escape game grandeur nature et esprit d'équipe : une journée pour se découvrir, se challenger et décompresser ensemble. 3e édition en collaboration avec la ville de Sceaux, lancée en 2019.",
      ctaLabel: "Voir les photos de l'édition",
    },
  },
};

export default function Evenements() {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [openModalKey, setOpenModalKey] = useState(null);

  const visible = useMemo(() => {
    return Object.entries(EVENTS).filter(
      ([, e]) => activeFilter === 'tous' || e.category === activeFilter
    );
  }, [activeFilter]);

  const isVisible = (key) => visible.some(([k]) => k === key);

  return (
    <>
      <Nav />

      <header className="section section--tight">
        <div className="container">
          <h1>Trouver un rendez-vous</h1>
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter${activeFilter === f.key ? ' is-active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="section section--tight">
        <div className="container">
          <h2>Les prochains rendez-vous</h2>
          <p style={{ marginTop: 8 }}>
            Les dates confirmées apparaissent en premier. Les événements sans date restent signalés « à confirmer ».
          </p>
          <div className="agenda-row" style={{ marginTop: 32 }}>
            {['forums', 'digitalents', 'fafr'].filter(isVisible).map((key) => (
              <EventCard
                key={key}
                as="button"
                date={EVENTS[key].date}
                title={EVENTS[key].title}
                linkLabel={EVENTS[key].link}
                category={EVENTS[key].category}
                onClick={() => setOpenModalKey(key)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <h2>Autres rendez-vous</h2>
          <div className="agenda-row agenda-row--with-aside" style={{ marginTop: 24 }}>
            {isVisible('panier') && (
              <EventCard
                as="button"
                date={EVENTS.panier.date}
                title={EVENTS.panier.title}
                linkLabel={EVENTS.panier.link}
                category={EVENTS.panier.category}
                onClick={() => setOpenModalKey('panier')}
              />
            )}
            <div className="newsletter">
              <h3>Restez informé·e</h3>
              <p>Recevez les ouvertures de billetterie et les appels à participation.</p>
              <a href="#" className="link-arrow">Recevoir les prochaines dates →</a>
              <a href="#" className="link-arrow">Communiquer une date →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <h2>Retours en images</h2>
          <div className="agenda-row" style={{ marginTop: 24 }}>
            {isVisible('teamChallenge') && (
              <EventCard
                as="button"
                date={EVENTS.teamChallenge.date}
                title={EVENTS.teamChallenge.title}
                linkLabel={EVENTS.teamChallenge.link}
                category={EVENTS.teamChallenge.category}
                onClick={() => setOpenModalKey('teamChallenge')}
              />
            )}
          </div>
        </div>
      </section>

      <Footer />

      {Object.entries(EVENTS).map(([key, e]) => (
        <Modal
          key={key}
          isOpen={openModalKey === key}
          onClose={() => setOpenModalKey(null)}
          dateBadge={e.modal.dateBadge}
          status={e.modal.status}
          title={e.modal.title}
          description={e.modal.description}
          ctaLabel={e.modal.ctaLabel}
        />
      ))}
    </>
  );
}
