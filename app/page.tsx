import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Check, FileText, FolderKanban, Receipt, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">KlantPortaal</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm hover:text-blue-600">Functies</a>
            <a href="#pricing" className="text-sm hover:text-blue-600">Prijzen</a>
            <a href="#faq" className="text-sm hover:text-blue-600">FAQ</a>
          </nav>
          <Link href="/dashboard">
            <Button variant="outline">Inloggen</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Geef je klanten een professionele ervaring
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deel projectupdates, bestanden en facturen met je klanten via een strak gebrand portaal.
            Geen gedoe met losse e-mails meer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input 
              type="email" 
              placeholder="jouw@email.nl" 
              className="max-w-xs"
            />
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Gratis starten
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Geen creditcard nodig • Gratis voor 1 klant
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Alles wat je nodig hebt</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <FolderKanban className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Project updates</CardTitle>
              <CardDescription>
                Deel voortgang en mijlpalen in real-time met je klanten
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>File sharing</CardTitle>
              <CardDescription>
                Upload bestanden veilig en geef klanten direct toegang
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Receipt className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle>Invoice tracking</CardTitle>
              <CardDescription>
                Klanten zien direct de status van facturen en kunnen goedkeuren
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-orange-600 mb-2" />
              <CardTitle>Branded portal</CardTitle>
              <CardDescription>
                Jouw logo en kleuren, geen KlantPortaal branding voor klanten
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-20 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Simpele prijzen</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Gratis</CardTitle>
              <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                €0<span className="text-sm font-normal text-gray-600">/maand</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>1 actieve klant</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Onbeperkte projecten</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>5GB opslag</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Basis branding</span>
                </li>
              </ul>
              <Button className="w-full mt-6" variant="outline">
                Start gratis
              </Button>
            </CardContent>
          </Card>
          <Card className="border-blue-600 border-2 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Populair
            </div>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                €12<span className="text-sm font-normal text-gray-600">/maand</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Onbeperkt clients</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Onbeperkte projecten</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>100GB opslag</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Volledige branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Custom domein</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Prioriteit support</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                Start Pro trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Wat ZZP'ers zeggen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                "Mijn klanten zijn veel tevredener sinds ik KlantPortaal gebruik. Ze zien direct de voortgang."
              </p>
              <p className="font-medium">Sarah - Webdesigner</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                "Scheelt me zeker 5 uur per week aan email verkeer. Alles staat overzichtelijk op één plek."
              </p>
              <p className="font-medium">Mohammed - Marketeer</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                "De branded portal geeft mijn kleine bedrijf een veel professionalere uitstraling!"
              </p>
              <p className="font-medium">Lisa - Contentmaker</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 py-20 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hoe werkt de gratis versie?</CardTitle>
              <CardDescription>
                Je kunt gratis starten met 1 actieve klant. Perfect om te testen of KlantPortaal 
                bij je past. Je kunt altijd upgraden naar Pro voor onbeperkte klanten.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Zien mijn klanten jullie branding?</CardTitle>
              <CardDescription>
                Nee! Het klantportaal toont alleen jouw logo en kleuren. KlantPortaal is volledig 
                white-label voor jouw klanten.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kan ik later upgraden?</CardTitle>
              <CardDescription>
                Ja, je kunt op elk moment upgraden naar Pro. Je betaalt dan pro-rata voor de 
                resterende periode van de maand.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is mijn data veilig?</CardTitle>
              <CardDescription>
                Absoluut. We gebruiken SSL encryptie, hebben servers in Nederland, en zijn 
                AVG-compliant. Jouw data is van jou.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-xl">KlantPortaal</span>
              </div>
              <p className="text-sm text-gray-600">
                Het professionele klantportaal voor ZZP'ers
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#features">Functies</a></li>
                <li><a href="#pricing">Prijzen</a></li>
                <li><a href="#">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Bedrijf</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#">Over ons</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Voorwaarden</a></li>
                <li><a href="#">AVG</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            © 2026 KlantPortaal. Made with ❤️ for ZZP'ers.
          </div>
        </div>
      </footer>
    </div>
  );
}
