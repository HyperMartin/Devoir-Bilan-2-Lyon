 // Importation d'Express pour créer un petit serveur.
const express = require("express");

// Importation de Nodemailer pour envoyer des e-mails.
const nodemailer = require("nodemailer");

// Importation de CORS pour autoriser React à communiquer avec ce serveur.
const cors = require("cors");

// Création de l'application Express.
const app = express();

// Autorise les requêtes venant de React.
app.use(cors());

// Permet au serveur de lire les données JSON envoyées par React.
app.use(express.json());

// Configuration de Nodemailer pour envoyer les mails vers MailDev.
const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  secure: false,
});

// Route utilisée par React pour envoyer un e-mail.
app.post("/send-email", async (req, res) => {
  const { to, nom, objet, message } = req.body;

  try {
    await transporter.sendMail({
      from: "contact@trouve-ton-artisan.local",
      to: to,
      subject: objet,
      text: `
Nom de l'expéditeur : ${nom}

Message :
${message}
      `,
    });

    res.status(200).json({ message: "E-mail envoyé avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'envoi de l'e-mail." });
  }
});

// Lancement du serveur sur le port 5000.
app.listen(5000, () => {
  console.log("Serveur MailDev lancé sur http://localhost:5000");
});