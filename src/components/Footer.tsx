
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Snack 25</h3>
            <p className="mb-4 text-primary-foreground/80">
              Le meilleur street food d'Errachidia. Saveurs authentiques, 
              ingrédients frais, et passion culinaire depuis notre ouverture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-accent transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-accent transition-colors">
                  Réservation
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations de Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Errachidia, Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+212 6XX XXX XXX</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>Lun - Dim: 11h00 - 23h00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Snack 25. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
