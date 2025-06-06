
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { toast } from "@/hooks/use-toast";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const { addToCart } = useCart();

  const categories = [
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'sandwichs', name: 'Sandwichs', icon: '🥪' },
    { id: 'tacos', name: 'Tacos', icon: '🌮' },
    { id: 'boissons', name: 'Boissons', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
  ];

  const menuItems = {
    burgers: [
      {
        id: 'burger-1',
        name: 'Burger Classique',
        description: 'Steak haché, salade, tomate, oignon, sauce maison',
        price: 35,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: true
      },
      {
        id: 'burger-2',
        name: 'Burger Royal',
        description: 'Double steak, fromage, bacon, salade, sauce BBQ',
        price: 45,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: false
      },
      {
        id: 'burger-3',
        name: 'Burger Épicé',
        description: 'Steak épicé, piment jalapeño, sauce harissa, cheddar',
        price: 40,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: true
      }
    ],
    sandwichs: [
      {
        id: 'sandwich-1',
        name: 'Club Sandwich',
        description: 'Poulet grillé, bacon, salade, tomate, mayo',
        price: 30,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: false
      },
      {
        id: 'sandwich-2',
        name: 'Sandwich Thon',
        description: 'Thon, œuf dur, salade, tomate, mayonnaise',
        price: 25,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: true
      }
    ],
    tacos: [
      {
        id: 'tacos-1',
        name: 'Tacos Poulet',
        description: 'Poulet grillé, salade, tomate, sauce blanche, frites',
        price: 28,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: true
      },
      {
        id: 'tacos-2',
        name: 'Tacos Viande',
        description: 'Viande hachée, salade, tomate, sauce algérienne, frites',
        price: 32,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: false
      }
    ],
    boissons: [
      {
        id: 'boisson-1',
        name: 'Jus d\'Orange Frais',
        description: 'Jus d\'orange pressé à la minute',
        price: 12,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: true
      },
      {
        id: 'boisson-2',
        name: 'Coca Cola',
        description: 'Boisson gazeuse rafraîchissante',
        price: 8,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: false
      }
    ],
    desserts: [
      {
        id: 'dessert-1',
        name: 'Tiramisu',
        description: 'Dessert italien traditionnel au café',
        price: 18,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
        popular: true
      }
    ]
  };

  const handleAddToCart = (item: any) => {
    addToCart(item);
    toast({
      title: "Ajouté au panier !",
      description: `${item.name} a été ajouté à votre panier.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Menu</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection de plats préparés avec passion et des ingrédients de qualité
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.popular && (
                    <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                      Populaire
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <span className="text-xl font-bold text-primary">{item.price} DH</span>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="w-full flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter au panier
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
