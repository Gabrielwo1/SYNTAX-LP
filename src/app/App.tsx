import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { ArchitecturePage } from './pages/ArchitecturePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/arquiteto" element={<ArchitecturePage />} />
      <Route path="/engenharia" element={<ArchitecturePage />} />
    </Routes>
  );
}