 import { Link } from "react-router-dom";

// Importation du fichier JSON contenant les artisans.
import artisans from "../datas.json";

// Importation du fichier de style de la page d'accueil.
import "./Accueil.scss";

function Accueil() {
  // Fonction qui permet d'afficher une note sous forme d'étoiles.
  function afficherNote(note) {
    // Les notes du fichier JSON sont stockées sous forme de texte.
    const noteNumerique = Number(note);

    // On arrondit la note au palier supérieur de 0,5.
    const noteArrondie = Math.ceil(noteNumerique * 2) / 2;

    // Selon la note arrondie, on retourne le bon affichage.
    switch (noteArrondie) {
      case 0:
        return "";
      case 1:
        return "⭐";
      case 1.5:
        return "⭐ et demi";
      case 2:
        return "⭐⭐";
      case 2.5:
        return "⭐⭐ et demi";
      case 3:
        return "⭐⭐⭐";
      case 3.5:
        return "⭐⭐⭐ et demi";
      case 4:
        return "⭐⭐⭐⭐";
      case 4.5:
        return "⭐⭐⭐⭐ et demi";
      case 5:
        return "⭐⭐⭐⭐⭐";
      default:
        return "";
    }
  }

  // Tableau contenant les étapes demandées dans le sujet.
  const steps = [
    {
      number: 1,
      text: "Choisir la catégorie d’artisanat dans le menu.",
    },
    {
      number: 2,
      text: "Choisir un artisan.",
    },
    {
      number: 3,
      text: "Le contacter via le formulaire de contact.",
    },
    {
      number: 4,
      text: "Une réponse sera apportée sous 48h.",
    },
  ];

  // On récupère uniquement les artisans mis en avant.
  // Puis on garde seulement les trois premiers.
  const topArtisans = artisans
    .filter((artisan) => artisan.top === true)
    .slice(0, 3);

  return (
    <main className="home">
      {/* Section principale de présentation du site */}
      <section className="home__hero" aria-labelledby="home-title">
        <div className="home__hero-content">
          {/* Petit texte d'introduction au-dessus du titre */}
          <p className="home__eyebrow">Plateforme régionale</p>

          {/* Titre principal de la page */}
          <h1 id="home-title">Trouve ton artisan</h1>

          {/* Texte de présentation du site */}
          <p className="home__intro">
            Trouvez facilement un artisan en Auvergne-Rhône-Alpes selon son
            domaine, sa spécialité ou sa ville.
          </p>
        </div>
      </section>

      {/* Section qui explique le fonctionnement du site */}
      <section className="home__steps" aria-labelledby="steps-title">
        <div className="home__section-header">
          {/* Titre de la rubrique demandée dans le devoir */}
          <h2 id="steps-title">Comment trouver mon artisan ?</h2>

          {/* Texte court qui introduit les étapes */}
          <p>Suivez ces étapes pour trouver rapidement le bon professionnel.</p>
        </div>

        {/* Grille contenant les étapes */}
        <div className="home__steps-grid">
          {/* On parcourt le tableau steps avec map pour afficher chaque étape */}
          {steps.map((step) => (
            <article className="home__step-card" key={step.number}>
              {/* Numéro de l'étape */}
              <div className="home__step-number" aria-hidden="true">
                {step.number}
              </div>

              {/* Texte de l'étape */}
              <p className="home__step-text">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Section qui affiche les trois artisans du mois */}
      <section className="home__top" aria-labelledby="top-artisans-title">
        <div className="home__section-header">
          {/* Titre de la section des artisans mis en avant */}
          <h2 id="top-artisans-title">Les artisans du mois</h2>

          {/* Texte d'introduction de la section */}
          <p>
            Découvrez une sélection de trois artisans mis en avant sur la
            plateforme.
          </p>
        </div>

        {/* Grille contenant les cartes des artisans du mois */}
        <div className="home__cards-grid">
          {/* On parcourt les artisans du mois avec map */}
          {topArtisans.map((artisan) => (
            <article className="home__artisan-card" key={artisan.id}>
              {/* Nom de l'artisan cliquable vers sa fiche */}
              <h3>
                <Link
                  className="home__artisan-link"
                  to={`/Artisan/${artisan.id}`}
                >
                  {artisan.name}
                </Link>
              </h3>

              {/* Note de l'artisan affichée avec des étoiles */}
              <p className="home__artisan-rating">
                <strong>Note :</strong> {afficherNote(artisan.note)}
              </p>

              {/* Spécialité de l'artisan */}
              <p className="home__artisan-specialty">
                <strong>Spécialité :</strong> {artisan.specialty}
              </p>

              {/* Ville ou localisation de l'artisan */}
              <p className="home__artisan-location">
                <strong>Localisation :</strong> {artisan.location}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Accueil;