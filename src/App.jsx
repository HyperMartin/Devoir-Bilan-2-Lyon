import { useState } from "react";
import Header from "./Footer-Header/MonHeader";
import Accueil from "./Accueil-404/Accueil";
import Contact from "./Artisan/Contact";
import Artisan from "./Artisan/Artisan";
import FicheArtisan from "./Artisan/FicheArtisan";
import Batiment from "./Artisan/Batiment";
import Services from "./Artisan/Services";
import Fabrication from "./Artisan/Fabrication";
import Alimentation from "./Artisan/Alimentation";
import Erreur from "./Accueil-404/Erreur";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer-Header/Footer";

function App() {
  // État utilisé par la barre de recherche.
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* Header présent sur toutes les pages */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        {/* Page d'accueil personnalisée */}
        <Route path="/" element={<Accueil />} />

        {/* Page de contact */}
        <Route path="/Contact" element={<Contact />} />

        {/* Page générale conservée pour la recherche */}
        <Route path="/Artisan" element={<Artisan searchTerm={searchTerm} />} />

        {/* Pages par catégorie */}
        <Route path="/Batiment" element={<Batiment />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Fabrication" element={<Fabrication />} />
        <Route path="/Alimentation" element={<Alimentation />} />

        {/* Fiche complète d'un artisan */}
        <Route path="/Artisan/:id" element={<FicheArtisan />} />

        {/* Page 404 */}
        <Route path="*" element={<Erreur />} />
      </Routes>

      {/* Footer présent sur toutes les pages */}
      <Footer />
    </Router>
  );
}

export default App;