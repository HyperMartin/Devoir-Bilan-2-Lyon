import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import Logo from "./Logo.PNG";

function Header({ searchTerm, setSearchTerm }) {
  // useNavigate permet de changer de page avec du JavaScript.
  const navigate = useNavigate();

  // État qui permet de savoir si le menu burger est ouvert ou fermé.
  const [menuOuvert, setMenuOuvert] = useState(false);

  // Fonction qui ouvre ou ferme le menu burger.
  function toggleMenu() {
    setMenuOuvert(!menuOuvert);
  }

  // Fonction qui ferme le menu burger.
  function fermerMenu() {
    setMenuOuvert(false);
  }

  // Fonction appelée quand l'utilisateur valide la barre de recherche.
  function handleSubmit(event) {
    // Empêche le rechargement automatique de la page.
    event.preventDefault();

    // Après la recherche, on envoie l'utilisateur vers la page des artisans.
    navigate("/Artisan");

    // On ferme aussi le menu après la recherche.
    fermerMenu();
  }

  return (
    <nav className="navbar navbar-expand-lg header-navbar" data-bs-theme="dark">
      <div className="container-fluid header-container">
        {/* Logo cliquable vers la page d'accueil */}
        <Link className="navbar-brand header-brand" to="/" onClick={fermerMenu}>
          <img
            src={Logo}
            alt="Logo Trouve ton artisan"
            className="header-logo"
          />
        </Link>

        

        {/* Bouton du menu burger */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOuvert}
          aria-label="Ouvrir ou fermer le menu"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navigation */}
        <div
          className={
            menuOuvert
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarNav"
        >
          <ul className="navbar-nav header-links me-auto">
   {/* Lien vers la page  Accueil */}
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={fermerMenu}>
                Accueil
              </Link>
            </li>

            {/* Lien vers la page contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={fermerMenu}>
                Contact
              </Link>
            </li>

            {/* Lien vers la page  Services */}
            <li className="nav-item">
              <Link className="nav-link" to="/Services" onClick={fermerMenu}>
                Services
              </Link>
            </li>

 {/* Lien vers la page  Fabrications */}
            <li className="nav-item">
              <Link className="nav-link" to="/Fabrication" onClick={fermerMenu}>
                Fabrication
              </Link>
            </li>

           {/* Lien vers la page  Alimentation */}
            <li className="nav-item">
              <Link className="nav-link" to="/Alimentation" onClick={fermerMenu}>
               Alimentation
              </Link>
            </li>

     {/* Lien vers la page  Bâtiment */}
            <li className="nav-item">
              <Link className="nav-link" to="/Batiment" onClick={fermerMenu}>
Bâtiment     
</Link>
   </li>


          </ul>

          {/* Barre de recherche dynamique */}
          <form className="search-form" role="search" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="search"
              placeholder="Recherche..."
              aria-label="Rechercher un artisan"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <button className="search-button" type="submit">
              Entrez
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;