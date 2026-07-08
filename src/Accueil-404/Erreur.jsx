// Importation du composant Link de react-router-dom
// Il permet de naviguer vers une autre page sans recharger tout le site
import { Link } from "react-router-dom";

// Importation du fichier de style SCSS associé à la page d'erreur
import "./Erreur.scss";

// Importation de l'image 404
// Comme l'image est dans le même dossier, on peut l'importer directement
import Image from "./Image.PNG";

// Déclaration du composant Erreur
function Erreur() {
  return (
    <>
      {/* Section principale de la page 404 */}
      <section>
        {/* Image illustrant l’erreur 404 */}
        <img src={Image} alt="Image 404." />

        {/* Message affiché à l’utilisateur */}
        <p>Oups ! Cette page est introuvable.</p>

        {/* Lien de retour vers la page d’accueil */}
        <Link to="/">Retour à la page d'accueil</Link>
      </section>
    </>
  );
}

// Exportation du composant pour pouvoir l’utiliser ailleurs
export default Erreur;