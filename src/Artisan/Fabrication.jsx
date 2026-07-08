 import { Link } from "react-router-dom";
import artisans from "../datas.json";
import "./Categories.scss";

function Fabrication() {
  // On garde uniquement les artisans de la catégorie Fabrication.
  const artisansFabrication = artisans.filter(
    (artisan) => artisan.category === "Fabrication"
  );

  return (
    <main className="artisans-page">
      {/* Titre de la page */}
      <h1>Artisans de la fabrication</h1>

      <section className="artisans-grid">
        {/* Affichage des artisans de la fabrication */}
        {artisansFabrication.map((artisan) => (
          <article className="artisan-card" key={artisan.id}>
            <h2>{artisan.name}</h2>

            <p>
              <strong>Spécialité :</strong> {artisan.specialty}
            </p>

            <p>
              <strong>Localisation :</strong> {artisan.location}
            </p>

            <p>
              <strong>Note :</strong> {artisan.note}/5
            </p>

            <Link className="artisan-link" to={`/Artisan/${artisan.id}`}>
              Voir la fiche
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Fabrication;