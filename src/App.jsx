import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import Spinner from './composants/Spinner';
import Home from './pages/Home';
import Errorpage from './pages/Errorpage';
import ProductsDetails from './pages/ProductsDetails';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de page
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Délai de 2 secondes pour simuler le chargement

    return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
  }, []);

  return (
    <Router>
      <div className=''>
        {loading ? (
          <Spinner /> // Affiche le spinner pendant le chargement
        ) : (
          <div>
            {/* Contenu de la page ici */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Order_Now" element={<ProductsDetails />} />
                <Route path="*" element={<Errorpage />} /> {/* Route catch-all pour les pages non trouvées */}
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
