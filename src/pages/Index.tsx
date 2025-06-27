
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('assets/Raid.jpg')`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Le Riad Restaurant
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            L'authenticité du street food marocain à Errachidia
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            Découvrez nos burgers gourmet, sandwichs savoureux et tacos épicés, 
            préparés avec des ingrédients frais et locaux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
            <Link to="/menu">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
                Voir le Menu
              </Button>
            </Link>
            <Link to="/reservation">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                Réserver une Table
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi Le Riad Restaurant ?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une expérience culinaire unique alliant tradition marocaine et innovation moderne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🍔</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Ingrédients Frais</h3>
              <p className="text-muted-foreground">
                Nous sélectionnons les meilleurs produits locaux pour garantir 
                la fraîcheur et la qualité de chaque plat.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Service Rapide</h3>
              <p className="text-muted-foreground">
                Commande prête en moins de 10 minutes sans compromis sur la qualité 
                et le goût authentique.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Passion Culinaire</h3>
              <p className="text-muted-foreground">
                Chaque recette est préparée avec amour et respecte les traditions 
                culinaires du Maroc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à découvrir nos saveurs ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour une expérience culinaire inoubliable au cœur d'Errachidia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Commander Maintenant
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
