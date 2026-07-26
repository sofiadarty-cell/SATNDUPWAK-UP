import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Evenements from './pages/Evenements.jsx';
import APropos from './pages/APropos.jsx';
import MediaLab from './pages/MediaLab.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/evenements" element={<Evenements />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/medialab" element={<MediaLab />} />
    </Routes>
  );
}
