import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Evenements from './pages/Evenements.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/evenements" element={<Evenements />} />
    </Routes>
  );
}
