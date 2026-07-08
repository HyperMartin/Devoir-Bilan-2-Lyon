import { Link } from "react-router-dom";
import artisans from "../datas.json";
import "./Categories.scss";

function Batiment() {
  // On garde uniquement les artisans de la catégorie Bâtiment.
  const artisansBatiment = artisans.filter(
    (artisan) => artisan.category === "Bâtiment"
  );

  return (
    <main className="artisans-page">
      {/* Titre de la page */}
      <h1>Artisans du bâtiment</h1>

      <section className="artisans-grid">
        {/* Affichage des artisans du bâtiment */}
        {artisansBatiment.map((artisan) => (
          <article className="artisan-card" key={artisan.id}>
            {/* Nom de l'artisan */}
            <h2>{artisan.name}</h2>

            {/* Spécialité */}
            <p>
              <strong>Spécialité :</strong> {artisan.specialty}
            </p>

            {/* Localisation */}
            <p>
              <strong>Localisation :</strong> {artisan.location}
            </p>

            {/* Note */}
            <p>
              <strong>Note :</strong> {artisan.note}/5
            </p>

            {/* Lien vers la fiche complète */}
            <Link className="artisan-link" to={`/Artisan/${artisan.id}`}>
              Voir la fiche
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Batiment;