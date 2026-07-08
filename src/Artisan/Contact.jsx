// Importation de useState pour gérer les champs du formulaire.
import { useState } from "react";

// Importation du fichier de style de la page Contact.
import "./Contact.scss";

function Contact() {
  // État du champ "nom".
  const [nom, setNom] = useState("");

  // État du champ "email".
  const [email, setEmail] = useState("");

  // État du champ "objet".
  const [objet, setObjet] = useState("");

  // État du champ "message".
  const [message, setMessage] = useState("");

  // Fonction appelée quand l'utilisateur envoie le formulaire.
  async function handleSubmit(event) {
    // Empêche le rechargement automatique de la page.
    event.preventDefault();

    // Données qui seront envoyées au serveur Node / MailDev.
    const emailData = {
      to: "contact@trouve-ton-artisan.local",
      artisanName: "Contact général du site",
      nom: nom,
      email: email,
      objet: objet,
      message: message,
    };

    try {
      // Envoi des données vers le serveur Express.
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      // Si l'envoi fonctionne.
      if (response.ok) {
        alert("Votre message a été envoyé.");

        // Réinitialise les champs du formulaire après l'envoi.
        setNom("");
        setEmail("");
        setObjet("");
        setMessage("");
      } else {
        alert("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      // Ce message apparaît si React ne parvient pas à contacter le serveur.
      alert("Impossible de contacter le serveur d'envoi.");
    }
  }

  return (
    <main className="contact-page">
      {/* Titre principal de la page */}
      <h1>Contact</h1>

      {/* Texte d'introduction de la page */}
      <p className="contact-introduction">
        Vous pouvez nous contacter en remplissant le formulaire ci-dessous.
        Nous vous répondrons dans les meilleurs délais.
      </p>

      {/* Formulaire de contact général */}
      <form className="contact-form" onSubmit={handleSubmit} method="POST">
        {/* Champ pour le nom */}
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
            required
          />
        </div>

        {/* Champ pour l'adresse e-mail */}
        <div>
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        {/* Champ pour l'objet du message */}
        <div>
          <label htmlFor="objet">Objet</label>
          <input
            type="text"
            id="objet"
            name="objet"
            value={objet}
            onChange={(event) => setObjet(event.target.value)}
            required
          />
        </div>

        {/* Champ pour le message */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>
        </div>

        {/* Bouton d'envoi du formulaire */}
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}

export default Contact;