 import { useParams } from "react-router-dom";
import artisans from "../datas.json";
import "./FicheArtisan.scss";

function FicheArtisan() {
  // On récupère l'id présent dans l'URL.
  const { id } = useParams();

  // On cherche l'artisan qui correspond à l'id de l'URL.
  const artisan = artisans.find((artisan) => artisan.id === id);

  // Fonction simple pour afficher une note avec des étoiles texte.
  function afficherNote(note) {
    // Les notes du JSON sont stockées sous forme de texte.
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

  // Fonction appelée à la soumission du formulaire.
  async function handleSubmit(event) {
    // Empêche le rechargement automatique de la page.
    event.preventDefault();

    // On récupère les données écrites dans le formulaire.
    const formData = new FormData(event.target);

    // On prépare les données qui seront envoyées au serveur Node.
    const emailData = {
      to: artisan.email,
      artisanName: artisan.name,
      nom: formData.get("nom"),
      objet: formData.get("objet"),
      message: formData.get("message"),
    };

    try {
      // On envoie les données au serveur Express.
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      // Si le serveur répond correctement, on confirme l'envoi.
      if (response.ok) {
        alert("Votre message a été envoyé.");

        // On vide le formulaire après l'envoi.
        event.target.reset();
      } else {
        alert("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      // Ce message apparaît si React ne parvient pas à contacter le serveur.
      alert("Impossible de contacter le serveur d'envoi.");
    }
  }

  // Si aucun artisan ne correspond, on affiche un message d'erreur.
  if (!artisan) {
    return (
      <main>
        <h1>Artisan introuvable</h1>
        <p>Aucune fiche artisan ne correspond à cette adresse.</p>
      </main>
    );
  }

  return (
    <main className="fiche-artisan">
      {/* Nom de l'artisan ou de l'entreprise */}
      <h1>{artisan.name}</h1>

      {/* Note avec des étoiles */}
      <p>
        <strong>Note :</strong> {afficherNote(artisan.note)}{" "}
        <span>({artisan.note}/5)</span>
      </p>

      {/* Spécialité */}
      <p>
        <strong>Spécialité :</strong> {artisan.specialty}
      </p>

      {/* Localisation */}
      <p>
        <strong>Localisation :</strong> {artisan.location}
      </p>

      {/* Rubrique À propos */}
      <section>
        <h2>À propos</h2>
        <p>{artisan.about}</p>
      </section>

      {/* Formulaire de contact */}
      <section>
        <h2>Contacter l'artisan</h2>

        <form onSubmit={handleSubmit}>
          {/* Champ du nom de l'utilisateur */}
          <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required />
          </div>

          {/* Champ de l'objet du message */}
          <div>
            <label htmlFor="objet">Objet</label>
            <input type="text" id="objet" name="objet" required />
          </div>

          {/* Champ du message */}
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          {/* Bouton d'envoi */}
          <button type="submit">Envoyer</button>
        </form>
      </section>

      {/* Site web de l'artisan, seulement s'il existe */}
      {artisan.website && (
        <section>
          <h2>Site web</h2>

          <a href={artisan.website} target="_blank" rel="noreferrer">
            Visiter le site web de l'artisan
          </a>
        </section>
      )}
    </main>
  );
}

export default FicheArtisan;