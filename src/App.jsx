import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const routes = {
  programmes: ['Nos programmes', 'Des expériences concrètes pour trouver sa voie, révéler son talent et passer à l’action.'],
  evenements: ['Nos événements', 'Des rendez-vous pour rencontrer, expérimenter, créer et s’engager.'],
  'digi-talents': ["Digi’TalenS 2026", 'La marketplace des talents et des compétences — 31 octobre 2026, Paris 11e.'],
  agir: ['Comment voulez-vous agir ?', 'Trouver sa voie, transmettre son expérience ou engager son organisation.'],
  engagement: ['Devenir mentor, bénévole ou ambassadeur', 'Mettre son expérience et son réseau au service d’une trajectoire.'],
  soutenir: ['Don, mécénat et partenariats', 'Soutenir des expériences qui transforment durablement les trajectoires.'],
  histoire: ['Qui sommes-nous ?', 'Depuis 2006, le terrain est notre point de départ.'],
  presse: ['Presse & médias', 'Communiqués, kit presse, visuels HD et contacts médias.'],
  medialab: ['MediaLab', 'Apprendre les médias et le numérique par la pratique.'],
  podcast: ['Libérer la Parole', 'Le podcast qui ouvre un espace aux récits et aux expériences.'],
  emploi: ['Emploi & opportunités', 'Des offres, ressources et conseils pour avancer.'],
  contact: ['Contact', 'Parlez-nous de votre besoin, de votre projet ou de votre envie de contribuer.'],
};

const menus = {
  Programmes: [['Trouver ma voie','/trouver-ma-voie'],['Révéler mon talent','/reveler-mon-talent'],['Transmettre mon expérience','/transmettre'],['Tous les programmes','/programmes']],
  Événements: [['Agenda','/evenements'],["Digi’TalenS 2026",'/digi-talents'],['Podcast','/podcast']],
  "S’engager": [['Choisir comment agir','/agir'],['Mentor, bénévole, ambassadeur','/engagement'],['Mécénat & partenariats','/soutenir']],
  'Qui sommes-nous ?': [['Notre histoire','/histoire'],['Impact & méthode','/histoire#impact'],['Presse & médias','/presse'],['MediaLab','/medialab']],
};

function Header(){
  const [open,setOpen]=useState(null);
  const [mobile,setMobile]=useState(false);
  const loc=useLocation();
  useEffect(()=>{setOpen(null);setMobile(false);window.scrollTo(0,0)},[loc.pathname]);
  return <header className="site-header">
    <button className="mobile-menu" onClick={()=>setMobile(!mobile)} aria-expanded={mobile}>☰ MENU</button>
    <Link className="logo" to="/" aria-label="Accueil Stand Up Wak’Up"><span>STAND UP<br/>WAK’UP</span></Link>
    <nav className={mobile?'main-nav open':'main-nav'} aria-label="Navigation principale">
      {Object.entries(menus).map(([label,items])=><div className="nav-group" key={label}>
        <button onClick={()=>setOpen(open===label?null:label)} aria-expanded={open===label}>{label} <span>↓</span></button>
        {open===label&&<div className="mega">{items.map(([x,to])=><Link to={to} key={x}>{x}<span>→</span></Link>)}</div>}
      </div>)}
      <Link to="/studio">SUWU’STUDIO</Link><Link to="/boutique">BOUTIQUE</Link>
    </nav>
    <div className="header-actions"><Link to="/agir">Trouver mon parcours</Link><Link to="/engagement">Je m’engage</Link><Link to="/soutenir">Faire un don</Link></div>
  </header>
}

function Footer(){return <footer><Link className="footer-logo" to="/">STAND UP<br/>WAK’UP</Link><div className="footer-grid">
  <div><h3>Aide</h3><Link to="/emploi">Emploi & opportunités</Link><Link to="/contact">Contact</Link></div>
  <div><h3>À propos</h3><Link to="/histoire">Qui sommes-nous ?</Link><Link to="/programmes">Nos programmes</Link><Link to="/evenements">Nos événements</Link><Link to="/podcast">Podcast</Link><Link to="/presse">Espace presse</Link><Link to="/studio">SUWU’STUDIO</Link><Link to="/boutique">Boutique</Link></div>
  <div><h3>Nous suivre</h3><a href="https://www.instagram.com/standupwakup/">Instagram</a><a href="https://www.linkedin.com/company/stand-up-wak-up/">LinkedIn</a><a href="https://www.youtube.com/">YouTube</a></div>
  <div><h3>Mentions légales</h3><Link to="/mentions-legales">Mentions légales</Link><Link to="/confidentialite">Politique de confidentialité</Link></div>
  </div><p className="signature">STAND UP WAK’UP — Association d’intérêt général</p></footer>}

const paths=[['01','Trouver ma voie','Être accompagné·e vers l’emploi, une formation ou une reconversion.','/trouver-ma-voie'],['02','Révéler mon talent','Expérimenter, créer, prendre la parole et montrer ce que je sais faire.','/reveler-mon-talent'],['03','Transmettre mon expérience','Devenir mentor, bénévole ou partenaire d’un parcours.','/transmettre']];
function Home(){return <>
  <section className="hero dark"><div><small>LE TERRAIN COMME POINT DE DÉPART</small><h1>PARCE QU’UN SIMPLE DÉCLIC PEUT CHANGER UNE TRAJECTOIRE.</h1><p>Depuis 2006, Stand Up Wak’Up accompagne les 13 à 35 ans par l’événementiel : face à un recruteur, sur un terrain de sport, derrière une caméra ou sur la scène d’un casting. C’est dans l’expérience vécue qu’on découvre ce qu’on sait faire.</p><div className="buttons"><Link to="/programmes">Découvrir nos programmes</Link><Link to="/engagement">Devenir mentor</Link></div></div><div className="hero-media" role="img" aria-label="Photo d’atelier Stand Up Wak’Up à ajouter">PHOTO / VIDÉO D’IMMERSION</div></section>
  <section className="stats">{[['20 ans','d’expérience terrain'],['+400','personnes accompagnées'],['4 parcours','pour passer à l’action'],['73%','de progression dans leur parcours']].map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
  <section className="testimonial"><div className="portrait" role="img" aria-label="Portrait à ajouter"/><blockquote>« Je pensais déposer juste un CV. Je suis repartie avec une direction et l’envie d’y croire. »</blockquote><p>CE RÉCIT PEUT ÊTRE LE VÔTRE</p></section>
  <section className="section"><h2>IL N’Y A PAS UNE SEULE FAÇON DE PASSER À L’ACTION.</h2><div className="cards">{paths.map(([n,t,d,to])=><Link className="card" to={to} key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p><b>Commencer →</b></Link>)}</div></section>
  <section className="feature"><div className="digitalents-media" role="img" aria-label="Visuel Digi’TalenS à ajouter"/><div><h2>DIGI’TALENTS. 4E ÉDITION</h2><strong>31 OCTOBRE 2026</strong><p>« Notre citoyenneté, reflet de notre diversité ». Talks, performances, expositions et interviews live.</p><Link to="/digi-talents">Découvrir le programme →</Link></div></section>
  <section className="cta"><h2>N’ATTENDS PAS QUE TON HISTOIRE S’ÉCRIVE. RÉALISE-LA.</h2><Link to="/agir">Je trouve mon parcours</Link><Link to="/engagement">Je deviens mentor</Link><Link to="/soutenir">J’engage mon entreprise</Link></section>
</>}

const eventData=[['05–12 SEPT. 2026','Forums des associations','Talents'],['02–04 OCT. 2026','SAGASDOM','Culture'],['31 OCT. 2026',"Digi’TalenS",'Talents'],['DATE À CONFIRMER','F.A.F.R.','Emploi'],['NOV.–DÉC. 2026','Panier du Cœur','Solidarité']];
function Events(){const [filter,setFilter]=useState('Tous');return <><PageHero title="NOS ÉVÉNEMENTS" text="Des rencontres qui font passer de l’envie à l’action."/><section className="section"><div className="filters">{['Tous','Talents','Emploi','Solidarité','Culture'].map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><div className="cards">{eventData.filter(e=>filter==='Tous'||e[2]===filter).map(e=><article className="event" key={e[1]}><div className="event-visual"/><small>{e[0]}</small><h3>{e[1]}</h3><Link to={e[1].includes('Digi')?'/digi-talents':'/contact'}>Voir le rendez-vous →</Link></article>)}</div></section></>}
function PageHero({title,text,tone='dark'}){return <section className={`page-hero ${tone}`}><h1>{title}</h1><p>{text}</p></section>}
function StandardPage({title,text}){return <><PageHero title={title} text={text}/><section className="section split"><div><small>LE TERRAIN COMME POINT DE DÉPART</small><h2>UNE EXPÉRIENCE POUR AVANCER.</h2><p>{text} Chaque parcours est construit autour de situations concrètes, d’un accompagnement humain et de rencontres professionnelles.</p></div><div className="media-placeholder">PHOTO / VIDÉO À AJOUTER</div></section><section className="cta"><h2>PRÊT·E À PASSER À L’ACTION ?</h2><Link to="/contact">Nous contacter →</Link></section></>}
function Studio(){return <><PageHero tone="studio" title="SUWU’STUDIO" text="Créer, produire et diffuser les récits du terrain."/><section className="section"><h2>UN ESPACE POUR FAIRE ENTENDRE LES VOIX</h2><p className="lead">Atelier de professionnalisation et société de production : podcasts, vidéos, interviews, portraits, reportages et formats sociaux réalisés avec les talents, les équipes et les partenaires.</p><div className="cards services">{['Coaching média & prise de parole','Podcasts & interviews','Captation & reportage','Contenus sur mesure'].map(x=><article className="card" key={x}><h3>{x}</h3><p>De la conception à la diffusion, une production éditoriale adaptée à votre projet.</p></article>)}</div><Link className="primary" to="/contact">Demander un devis →</Link></section></>}
function Shop(){return <><PageHero title="LA BOUTIQUE" text="Porter les couleurs de Stand Up Wak’Up et soutenir les actions de l’association."/><section className="section"><h2>DES OBJETS QUI ONT DU SENS</h2><div className="cards products">{['T-shirt SUWU','Sweat édition limitée','Tote bag solidaire'].map((x,i)=><article className="card" key={x}><div className={`product p${i}`}/><h3>{x}</h3><p>Collection à venir</p></article>)}</div><p className="notice">La boutique sera connectée au catalogue et au paiement Squarespace lors de la mise en production.</p></section></>}
function App(){return <><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/evenements" element={<Events/>}/><Route path="/studio" element={<Studio/>}/><Route path="/boutique" element={<Shop/>}/>{Object.entries(routes).map(([slug,[title,text]])=><Route key={slug} path={`/${slug}`} element={<StandardPage title={title} text={text}/>}/>)}<Route path="*" element={<StandardPage title="PAGE EN CONSTRUCTION" text="Cette page est prévue dans la maquette et sera alimentée avec ses contenus définitifs."/>}/></Routes></main><Footer/></>}
export default App;
