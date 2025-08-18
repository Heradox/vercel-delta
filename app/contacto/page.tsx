import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Users,
  GraduationCap,
  Heart,
  Building,
  Globe,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
  className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
  style={{ backgroundImage: "url('/images/banner-contacto.webp')" }} // 🔹 cambia por tu imagen en /public/images
>
  {/* Overlay degradado encima de la imagen */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/60 to-[#231F20]/50" />

  {/* Contenido */}
  <div className="relative container mx-auto px-4">
    <div className="text-center max-w-4xl mx-auto">
      <Badge className="bg-white/20 text-white mb-4 text-sm">Contacto</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
        Estamos aquí para ayudarte
      </h1>
      <p className="text-xl md:text-2xl opacity-90 mb-8">
        Contáctanos para conocer más sobre nuestra propuesta educativa y cómo podemos acompañar el crecimiento de tu hija
      </p>
    </div>
  </div>
</section>


      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#AB121C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-[#AB121C]" />
                </div>
                <h3 className="font-bold text-[#231F20] mb-2">Ubicación</h3>
                <p className="text-gray-600 text-sm">
                  X42H+8JJ, Av. Samborondón
                  <br />
                  Guayaquil 091910, Ecuador
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#0070AF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-[#0070AF]" />
                </div>
                <h3 className="font-bold text-[#231F20] mb-2">Teléfono</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+59342590720" className="hover:text-[#0070AF] transition-colors">
                    (+593-4) 2590720
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#CC9F62]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-[#CC9F62]" />
                </div>
                <h3 className="font-bold text-[#231F20] mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:infodelta@uedelta.k12.ec" className="hover:text-[#CC9F62] transition-colors">
                    infodelta@uedelta.k12.ec
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#25D366]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={32} height={32} />
                </div>
                <h3 className="font-bold text-[#231F20] mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">
                  <a
                    href="https://wa.me/593939023650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors"
                  >
                    (+593) 939-023-650
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Envíanos un mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad posible.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-[#231F20] mb-2">
                      Nombre completo *
                    </label>
                    <Input id="nombre" placeholder="Tu nombre completo" required />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-[#231F20] mb-2">
                      Teléfono *
                    </label>
                    <Input id="telefono" type="tel" placeholder="Tu número de teléfono" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#231F20] mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" required />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-[#231F20] mb-2">
                    Asunto
                  </label>
                  <Input id="asunto" placeholder="¿En qué podemos ayudarte?" />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-[#231F20] mb-2">
                    Mensaje *
                  </label>
                  <Textarea id="mensaje" placeholder="Cuéntanos más detalles sobre tu consulta..." rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-[#AB121C] hover:bg-[#790002] text-white" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Departments and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Departamentos</h2>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#AB121C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-[#AB121C]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#231F20] mb-2">Admisiones</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Información sobre proceso de admisión, requisitos y fechas importantes.
                          </p>
                          <a
                            href="mailto:infodelta@uedelta.k12.ec"
                            className="text-[#AB121C] hover:text-[#790002] text-sm font-medium"
                          >
                            infodelta@uedelta.k12.ec
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#0070AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="h-6 w-6 text-[#0070AF]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#231F20] mb-2">Secretaría Académica</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Certificados, boletines, información académica y trámites estudiantiles.
                          </p>
                          <a
                            href="mailto:infodelta@uedelta.k12.ec"
                            className="text-[#0070AF] hover:text-[#0070AF]/80 text-sm font-medium"
                          >
                            infodelta@uedelta.k12.ec
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#CC9F62]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-[#CC9F62]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#231F20] mb-2">Preceptoría</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Acompañamiento personalizado, orientación académica y formación integral.
                          </p>
                          <a
                            href="mailto:infodelta@uedelta.k12.ec"
                            className="text-[#CC9F62] hover:text-[#CC9F62]/80 text-sm font-medium"
                          >
                            infodelta@uedelta.k12.ec
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Heart className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#231F20] mb-2">Capellanía</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Formación espiritual, acompañamiento pastoral y actividades religiosas.
                          </p>
                          <a
                            href="mailto:infodelta@uedelta.k12.ec"
                            className="text-green-500 hover:text-green-600 text-sm font-medium"
                          >
                            infodelta@uedelta.k12.ec
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#231F20]">
                    <Clock className="mr-2 h-5 w-5 text-[#AB121C]" />
                    Horarios de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lunes - Viernes:</span>
                      <span className="font-medium text-[#231F20]">7:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábados:</span>
                      <span className="font-medium text-[#231F20]">8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domingos:</span>
                      <span className="font-medium text-[#231F20]">Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#231F20]">
                    <Globe className="mr-2 h-5 w-5 text-[#AB121C]" />
                    Síguenos en Redes Sociales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Nuestra Ubicación</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos encontramos en el corazón de Samborondón, en un campus diseñado especialmente para la formación
              integral de nuestras estudiantes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#AB121C] mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Mapa Interactivo</p>
                <p className="text-sm text-gray-500">X42H+8JJ, Av. Samborondón, Guayaquil 091910</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-serif">¿Tienes alguna pregunta específica?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo está listo para brindarte toda la información que necesitas sobre nuestra propuesta
              educativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/593939023650" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
                  Chatear por WhatsApp
                </Button>
              </a>
              <a href="tel:+59342590720">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#AB121C] bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
