
import React from 'react';
import { Award, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Chaque plat est préparé avec amour et passion pour la cuisine marocaine authentique."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualité",
      description: "Nous sélectionnons rigoureusement nos ingrédients pour garantir une qualité exceptionnelle."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Communauté",
      description: "Nous sommes fiers d'être au cœur de la communauté d'Errachidia depuis notre ouverture."
    }
  ];

  const team = [
    {
      name: "Ahmed El Fassi",
      role: "Chef Cuisinier",
      image: "assets/chef.jpg",
      description: "15 ans d'expérience dans la cuisine traditionnelle et moderne"
    },
    {
      name: "Fatima Benali",
      role: "Responsable Service",
      image: "assets/Fatima Benali.jpg",
      description: "Experte en service client et organisation d'événements"
    },
    {
      name: "Youssef Amrani",
      role: "Manager",
      image: "assets/Youssef Amrani.jpg",
      description: "Vision stratégique et gestion quotidienne du restaurant"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Le Riad Restaurant </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Une histoire de passion culinaire au cœur d'Errachidia, 
              où tradition marocaine et innovation se rencontrent.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                  Le Riad Restaurant a ouvert ses portes avec une vision simple mais ambitieuse : 
                    proposer le meilleur street food d'Errachidia en alliant traditions 
                    culinaires marocaines et techniques modernes.
                  </p>
                  <p>
                    Situés au cœur de la ville, nous avons rapidement gagné la confiance 
                    des habitants grâce à notre engagement envers la qualité, la fraîcheur 
                    et l'authenticité de nos plats.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes fiers d'être devenus une référence locale, 
                    accueillant chaque jour des familles, des jeunes et des visiteurs 
                    qui viennent découvrir nos saveurs uniques.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="assets/a.jpg"
                  alt="Intérieur du restaurant"
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="assets/b.jpg"
                  alt="Nos spécialités"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ce qui nous guide au quotidien pour vous offrir la meilleure expérience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Les artisans de votre expérience culinaire
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Faire découvrir et redécouvrir les saveurs authentiques du Maroc 
              à travers une cuisine moderne, accessible et de qualité, 
              tout en créant un lieu de convivialité au cœur d'Errachidia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div>Ingrédients Frais</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div>Années d'Expérience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div>Clients Satisfaits</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
