
import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from "@/hooks/use-toast";

const Reservation = () => {
  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const reservationData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests'),
      notes: formData.get('notes')
    };
    
    console.log('Réservation soumise:', reservationData);
    toast({
      title: "Réservation confirmée !",
      description: "Nous vous contacterons pour confirmer votre réservation.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Réserver une Table</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Garantissez votre place pour une expérience culinaire inoubliable au Snack 25
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reservation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Formulaire de Réservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReservationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Date *</Label>
                      <Input id="date" name="date" type="date" required />
                    </div>
                    <div>
                      <Label htmlFor="time">Heure *</Label>
                      <Select name="time" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir l'heure" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="12:30">12:30</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="13:30">13:30</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                          <SelectItem value="19:30">19:30</SelectItem>
                          <SelectItem value="20:00">20:00</SelectItem>
                          <SelectItem value="20:30">20:30</SelectItem>
                          <SelectItem value="21:00">21:00</SelectItem>
                          <SelectItem value="21:30">21:30</SelectItem>
                          <SelectItem value="22:00">22:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests">Nombre de personnes *</Label>
                    <Select name="guests" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Nombre de convives" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 personne</SelectItem>
                        <SelectItem value="2">2 personnes</SelectItem>
                        <SelectItem value="3">3 personnes</SelectItem>
                        <SelectItem value="4">4 personnes</SelectItem>
                        <SelectItem value="5">5 personnes</SelectItem>
                        <SelectItem value="6">6 personnes</SelectItem>
                        <SelectItem value="7">7 personnes</SelectItem>
                        <SelectItem value="8">8 personnes</SelectItem>
                        <SelectItem value="8+">Plus de 8 personnes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Demandes spéciales</Label>
                    <Textarea 
                      id="notes" 
                      name="notes" 
                      placeholder="Allergies, régimes spéciaux, occasion spéciale..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Confirmer la Réservation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Restaurant Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Horaires d'Ouverture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lundi - Dimanche</span>
                      <span className="font-semibold">11h00 - 23h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service continu</span>
                      <span className="text-primary">✓</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Informations Pratiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Groupes</h4>
                    <p className="text-sm text-muted-foreground">
                      Pour les groupes de plus de 8 personnes, contactez-nous directement 
                      au +212 6XX XXX XXX pour organiser votre événement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Politique d'Annulation</h4>
                    <p className="text-sm text-muted-foreground">
                      Annulation gratuite jusqu'à 2 heures avant l'heure de réservation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Accessibilité</h4>
                    <p className="text-sm text-muted-foreground">
                      Notre restaurant est accessible aux personnes à mobilité réduite.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Direct</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Téléphone:</strong> +212 6XX XXX XXX</p>
                    <p><strong>WhatsApp:</strong> +212 6XX XXX XXX</p>
                    <p><strong>Adresse:</strong> Errachidia, Maroc</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
                      Réserver via WhatsApp
                    </a>
                  </Button>
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

export default Reservation;
