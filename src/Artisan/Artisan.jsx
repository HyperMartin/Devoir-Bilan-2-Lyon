import { Link } from "react-router-dom";
import artisans from "../datas.json";
import "./Artisan.scss";

function Artisan({ searchTerm = "" }) {
  // Fonction simple pour afficher une note avec des étoiles texte
  function afficherNote(note) {
    // Les notes du JSON sont stockées sous forme de texte ("4.7", "4.5", etc.)
    // On les transforme donc en nombre.
    const noteNumerique = Number(note);

    // Ici, on arrondit toujours au palier supérieur de 0,5.
    // Exemples :
    // 4.1 -> 4.5
    // 4.2 -> 4.5
    // 4.6 -> 5
    // 4.7 -> 5
    // 4.9 -> 5
    const noteArrondie = Math.ceil(noteNumerique * 2) / 2;

    // Pour l’instant, l’affichage reste volontairement simple.
    // Ce sera le graphiste qui réalisera ensuite des étoiles visuellement
    // parfaitement cohérentes avec les notes.
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

  // On transforme la recherche en minuscules
  const recherche = searchTerm.toLowerCase();

  // On filtre les artisans selon le nom, la spécialité ou la ville
  const artisansFiltres = artisans.filter((artisan) => {
    return (
      artisan.name.toLowerCase().includes(recherche) ||
      artisan.specialty.toLowerCase().includes(recherche) ||
      artisan.location.toLowerCase().includes(recherche)
    );
  });

  return (
    <main className="artisans-page">
      <h1>Nos artisans</h1>

      {/* Message affiché si aucun artisan ne correspond à la recherche */}
      {artisansFiltres.length === 0 && (
        <p className="no-result">
          Aucun artisan ne correspond à votre recherche.
        </p>
      )}

      <section className="artisans-grid">
        {/* Affichage des artisans filtrés */}
        {artisansFiltres.map((artisan) => (
          <article className="artisan-card" key={artisan.id}>
            {/* Nom de l'artisan ou de l'entreprise */}
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
              <strong>Note :</strong> {afficherNote(artisan.note)}
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

export default Artisan;