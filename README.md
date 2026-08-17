# Stand Up Wak'Up — Site (React)

Homepage + page Événements — Agenda + groupe de pages À propos, en React + Vite, fidèle à la maquette Figma.

## Démarrer en local

```bash
npm install
npm run dev
```
Ouvre http://localhost:5173

## Build de production

```bash
npm run build
```
Génère le dossier `dist/`, prêt à déployer (Vercel, Netlify, GitHub Pages...).

## Structure

```
src/
  components/
    Nav.jsx        — nav commune (menu mobile inclus)
    Footer.jsx      — footer commun
    EventCard.jsx   — carte événement réutilisable
    Modal.jsx       — popup événement (accessible, Échap + clic dehors pour fermer)
  pages/
    Home.jsx        — homepage
    Evenements.jsx  — page Événements — Agenda (filtres + 5 popups)
    APropos.jsx     — groupe de pages À propos (Découvrir, podcast, job, presse)
    MediaLab.jsx    — page MediaLab reliée depuis le menu À propos
  styles.css        — design tokens (couleurs, typo Archivo/Bebas Neue, responsive)
```

## Navigation À propos

Le lien « À propos » ouvre un menu au survol ou au clavier avec cinq cartes : Découvrir, Le podcast, Le job, Pôle presse et MediaLab. La page À propos utilise une navigation secondaire à gauche et un traitement éditorial blanc / noir.

## À faire ensuite

- Remplacer les placeholders gris par les vraies photos (dossier `public/` à créer)
- Les boutons de nav (Je rejoins / Je m'engage / Faire un don) et les liens "Commencer →"
  pointent vers `#` — à relier aux futures pages (Je rejoins, Don & Mécénat, Trouver ma voie, etc.)
- Pousser sur GitHub :
  ```bash
  git init
  git add .
  git commit -m "Homepage + Événements — Agenda en React"
  git remote add origin https://github.com/votre-compte/votre-repo.git
  git push -u origin main
  ```
