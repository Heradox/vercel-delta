import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Users, Calendar, Heart, Award, ChevronRight, Phone, Mail, MapPin } from "lucide-react"

export default function AdmisionesPage() {
  const porqueDelta = [
    {
      icono: Award,
      titulo: "Excelencia Académica",
      descripcion: "Programa IB y metodologías innovadoras que preparan para universidades internacionales",
    },
    {
      icono: Heart,
      titulo: "Formación Integral",
      descripcion: "Desarrollo de valores, liderazgo y compromiso social en un ambiente católico",
    },
    {
      icono: "custom-bilingue",
      titulo: "Educación Bilingüe",
      descripcion: "Dominio del inglés y español con certificaciones internacionales",
    },
    {
      icono: Users,
      titulo: "Atención Personalizada",
      descripcion: "Desarrollo de valores, liderazgo y compromiso social en un ambiente católico",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
  className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
  style={{ backgroundImage: "url('/images/header-admisiones.webp')" }} // 🔹 cambia por tu ruta
>
  {/* Overlay oscuro encima de la imagen */}
  <div className="absolute inset-0 bg-[#231F20]/50" />

  {/* Contenido */}
  <div className="relative container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <Badge className="bg-white/20 text-white mb-4">Admisiones</Badge>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
        Tu hija merece la mejor educación
      </h1>
      <p className="text-xl md:text-2xl opacity-90 mb-8">
        Descubre cómo el Colegio Delta puede transformar el futuro de tu hija con una educación de excelencia
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90">
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            width={20}
            height={20}
            className="mr-2"
          />
          WhatsApp
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#AB121C] bg-transparent"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Agendar Visita
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Por qué Delta */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">¿Por qué elegir Delta?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos más que un colegio. Somos una comunidad educativa comprometida con formar mujeres líderes que
              transforman el mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {porqueDelta.map((razon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  {razon.icono === "custom-bilingue" ? (
                    <Image
                      src="/images/bilingue.png"
                      alt="Educación Bilingüe"
                      width={48}
                      height={48}
                      className="mx-auto mb-4"
                    />
                  ) : (
                    <razon.icono className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                  )}
                  <h3 className="font-bold mb-3 text-[#231F20]">{razon.titulo}</h3>
                  <p className="text-gray-600 text-sm">{razon.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Solicita Información</h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo para agendar una visita personalizada
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre-padre">Nombre del Padre/Madre</Label>
                        <Input id="nombre-padre" placeholder="Nombre completo" />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" placeholder="+593 9 xxxx xxxx" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre-estudiante">Nombre de la Estudiante</Label>
                        <Input id="nombre-estudiante" placeholder="Nombre completo" />
                      </div>
                      <div>
                        <Label htmlFor="edad">Edad</Label>
                        <Input id="edad" type="number" placeholder="Edad actual" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="grado">Grado de Interés</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el grado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inicial-3">Inicial 3 años</SelectItem>
                          <SelectItem value="inicial-4">Inicial 4 años</SelectItem>
                          <SelectItem value="inicial-5">Inicial 5 años</SelectItem>
                          <SelectItem value="primero">Primero de Básica</SelectItem>
                          <SelectItem value="segundo">Segundo de Básica</SelectItem>
                          <SelectItem value="tercero">Tercero de Básica</SelectItem>
                          <SelectItem value="cuarto">Cuarto de Básica</SelectItem>
                          <SelectItem value="quinto">Quinto de Básica</SelectItem>
                          <SelectItem value="sexto">Sexto de Básica</SelectItem>
                          <SelectItem value="septimo">Séptimo de Básica</SelectItem>
                          <SelectItem value="octavo">Octavo de Básica</SelectItem>
                          <SelectItem value="noveno">Noveno de Básica</SelectItem>
                          <SelectItem value="decimo">Décimo de Básica</SelectItem>
                          <SelectItem value="primero-bach">Primero de Bachillerato</SelectItem>
                          <SelectItem value="segundo-bach">Segundo de Bachillerato</SelectItem>
                          <SelectItem value="tercero-bach">Tercero de Bachillerato</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje (Opcional)</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntanos sobre las expectativas para tu hija o cualquier pregunta específica"
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-[#AB121C] hover:bg-[#790002]">
                      Enviar Solicitud
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#AB121C] mb-4">Contacto Directo</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Image
                          className="h-5 w-5 text-[#CC9F62] mr-3"
                          src="/images/whatsapp-dorado.png"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                        />
                        <div>
                          <p className="font-medium">WhatsApp Admisiones</p>
                          <p className="text-sm text-gray-600">+593 99 xxx xxxx</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <div>
                          <p className="font-medium">Teléfono</p>
                          <p className="text-sm text-gray-600">+593 4 269-0100</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:infodelta@uedelta.k12.ec"
                            className="text-sm text-gray-600 hover:text-[#CC9F62] transition-colors"
                          >
                            infodelta@uedelta.k12.ec
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-[#CC9F62] mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Dirección</p>
                          <p className="text-sm text-gray-600">X42H+8JJ, Av. Samborondón, Guayaquil 091910</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0070AF] mb-4">Horarios de Atención</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span>7:30 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span>8:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#AB121C]/5 to-[#CC9F62]/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#AB121C] mb-3">¿Sabías que...?</h3>
                    <p className="text-sm text-gray-700">
                      El 95% de nuestras graduadas ingresan a universidades de prestigio nacional e internacional. ¡Tu
                      hija puede ser parte de esta estadística!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">¿Lista para dar el siguiente paso?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda tu visita personalizada y descubre por qué Delta es la mejor opción para el futuro de tu hija
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#CC9F62] hover:bg-[#CC9F62]/90">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Visita Ahora
            </Button>
            <Button size="lg" variant="outline" className=" text-white hover:bg-[#25D366]  bg-[#25D366]">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
              Chatear por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
