import { createRoot } from 'react-dom/client';
import { Home } from './pages/home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Print } from './pages/print/Print';

const App = () => (
    <HashRouter>
        <Routes>
            <Route Component={Home} path='/' />
            <Route Component={Print} path='/print' />
        </Routes>
    </HashRouter>
);

createRoot(document.getElementById("root")!)
    .render(<App />);
