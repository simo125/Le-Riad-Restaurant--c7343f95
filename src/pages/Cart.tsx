
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const orderData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      notes: formData.get('notes'),
      items: items,
      total: total
    };
    
    console.log('Commande soumise:', orderData);
    toast({
      title: "Commande envoyée !",
      description: "Nous vous contacterons bientôt pour confirmer votre commande.",
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
              <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
              <p className="text-muted-foreground mb-8">
                Découvrez notre délicieux menu et ajoutez vos plats favoris !
              </p>
              <Link to="/menu">
                <Button size="lg">Voir le Menu</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Votre Commande</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cart Items */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Articles ({items.length})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="font-bold text-primary">{item.price} DH</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-primary">{total} DH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Informations de Livraison</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input id="name" name="name" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Adresse de livraison *</Label>
                      <Textarea id="address" name="address" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Notes spéciales</Label>
                      <Textarea id="notes" name="notes" placeholder="Instructions particulières..." />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Confirmer la Commande ({total} DH)
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
