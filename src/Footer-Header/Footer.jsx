 import "./Footer.scss";

 // Icônes réseaux sociaux.
 //Le tableaux permet d'avoir une gestion dynamique .
import facebookIcon from "./Facebook.avif";
import linkedinIcon from "./linkedin.avif";
import instagramIcon from "./instagram.png";
import tiktokIcon from "./tiktok.png";
import youtubeIcon from "./youtube.png";
import xIcon from "./X.webp";
import whatsappIcon from "./whatsapp.jpg";

function Footer() {
  // Liens 
  const legalLinks = [
    { label: "Mentions légales", href: "#" ,id:"0"},
    { label: "Données personnelles", href: "#",id:"1" },
    { label: "Accessibilité", href: "#",id:"2" },
    { label: "Cookies", href: "#",id:"3" },
  ];

  // Réseaux sociaux officiels fournis
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/RegionAuvergneRhoneAlpes",
      icon: facebookIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/auvergne-rhone-alpes",
      icon: linkedinIcon,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/c/regionauvergnerhonealpes",
      icon: youtubeIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/region_auvergnerhonealpes",
      icon: instagramIcon,
    },
    {
      name: "X",
      href: "https://x.com/auvergnerhalpes",
      icon: xIcon,
    },
    {
      name: "WhatsApp",
      href: "https://www.whatsapp.com/channel/0029Vb67SCEG3R3jaCrWfY41",
      icon: whatsappIcon,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@regionauvergnerhonealpes",
      icon: tiktokIcon,
    },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        {/* Bloc principal du footer */}
        <div className="site-footer__top">
          {/* Informations de contact */}
          <section className="site-footer__contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className="site-footer__title">
              Antenne de Lyon
            </h2>

            <address className="site-footer__address">
              <p>101 cours Charlemagne</p>
              <p>CS 20033</p>
              <p>69269 LYON CEDEX 02</p>
              <p>France</p>
              <p>
                <a href="tel:+33426734000">+33 4 26 73 40 00</a>
              </p>
            </address>
          </section>

          {/* Liens légaux */}
          <nav
            className="site-footer__legal"
            aria-labelledby="footer-legal-title"
          >
            <h2 id="footer-legal-title" className="site-footer__title">
              Informations légales
            </h2>
          {/* Affichage dynamique des valeurs du tableau. */}

            <ul className="site-footer__legal-list">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Réseaux sociaux */}
        <section
          className="site-footer__social"
          aria-labelledby="footer-social-title"
        >
          <div id="Boite"> 
            <h2 id="footer-social-title" className="site-footer__title">
            Suivez-nous
          </h2>
          <ul className="site-footer__social-list">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvrir ${social.name} dans un nouvel onglet`}
                  title={social.name}
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              </li>
            ))}
          </ul>
          </div>
        </section>

        {/* Bas de footer */}
        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} Trouve ton artisan — Région
            Auvergne-Rhône-Alpes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;