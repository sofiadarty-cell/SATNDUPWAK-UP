# Stand Up Wak'Up — Site (React)

Homepage + page Événements — Agenda, en React + Vite, fidèle à la maquette Figma.

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
  styles.css        — design tokens (couleurs, typo Archivo/Bebas Neue, responsive)
```

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
