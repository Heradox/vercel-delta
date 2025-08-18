import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Users,
  Shield,
  Heart,
  Camera,
  ChevronRight,
  Building,
  TreePine,
  Microscope,
  Music,
  Utensils,
  Church,
  Volume2,
  Dumbbell,
  Eye,
  Phone,
} from "lucide-react"
import Image from "next/image"

export default function NuestroCampusPage() {
  const espaciosAcademicos = [
    {
      nombre: "Aulas Interactivas",
      descripcion: "Espacios modernos equipados con tecnología de vanguardia",
      icono: BookOpen,
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      nombre: "Laboratorio STEM",
      descripcion: "Ciencia, tecnología, ingeniería y matemáticas en acción",
      icono: Microscope,
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      nombre: "Aula de Arte",
      descripcion: "Creatividad y expresión artística sin límites",
      icono: Camera,
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      nombre: "Sala de Música",
      descripcion: "Desarrollo del talento musical y apreciación artística",
      icono: Music,
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      nombre: "Centro de Tecnología",
      descripcion: "Innovación digital y programación",
      icono: Building,
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      nombre: "Biblioteca",
      descripcion: "Centro de recursos para la investigación y el aprendizaje",
      icono: BookOpen,
      imagen: "/placeholder.svg?height=300&width=400",
    },
  ]

  const areasComplementarias = [
    {
      nombre: "Comedor Escolar",
      descripcion: "Full of Grace - Alimentación balanceada y nutritiva",
      icono: Utensils,
    },
    {
      nombre: "Capilla",
      descripcion: "Espacio de reflexión y formación espiritual",
      icono: Church,
    },
    {
      nombre: "Auditorio",
      descripcion: "Eventos académicos y presentaciones estudiantiles",
      icono: Volume2,
    },
    {
      nombre: "Canchas Deportivas",
      descripcion: "Instalaciones para múltiples disciplinas deportivas",
      icono: Dumbbell,
    },
    {
      nombre: "Salón de Danza",
      descripcion: "Expresión corporal y desarrollo artístico",
      icono: Music,
    },
    {
      nombre: "Áreas Verdes",
      descripcion: "Espacios naturales para el esparcimiento y la reflexión",
      icono: TreePine,
    },
  ]

  const seguridadBienestar = [
    {
      titulo: "Guardianía 24/7",
      descripcion: "Seguridad permanente en todo el campus",
      icono: Shield,
    },
    {
      titulo: "Departamento Médico",
      descripcion: "Atención de salud inmediata y primeros auxilios",
      icono: Heart,
    },
    {
      titulo: "Simulacros y Evacuación",
      descripcion: "Protocolos de seguridad y preparación ante emergencias",
      icono: Users,
    },
    {
      titulo: "Sistema de Cámaras",
      descripcion: "Monitoreo continuo para garantizar la seguridad",
      icono: Eye,
    },
    {
      titulo: "DECE",
      descripcion: "Departamento de Consejería Estudiantil y bienestar emocional",
      icono: Heart,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[60vh] text-white overflow-hidden">
  {/* Video de fondo */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <iframe
      title="Campus video"
      src="https://player.vimeo.com/video/1111078982?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
      className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[100vw] h-[56.25vw]              /* 16:9 por ancho */
        min-w-[177.78vh] min-h-[100vh]     /* 16:9 por alto */
        pointer-events-none
      "
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  </div>

  {/* Overlay (degradado oscuro encima del video) */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#231F20]/60 to-[#231F20]/50" />

  {/* Contenido */}
  <div className="relative z-20 container mx-auto px-4 py-20">
    <div className="max-w-4xl mx-auto text-center">
      <Badge className="bg-white/20 text-white mb-4">Nuestro Campus</Badge>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Descubre Nuestro Campus</h1>
      <p className="text-xl md:text-2xl opacity-90">
        Formamos líderes en un espacio seguro y acogedor diseñado para inspirar el aprendizaje integral
      </p>
    </div>
  </div>
</section>


      {/* Espacios que Inspiran */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Espacios que Inspiran</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada rincón de nuestro campus está diseñado para potenciar el aprendizaje, la creatividad y el desarrollo
              integral de nuestras estudiantes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#231F20]">Aulas Modernas</h3>
              <p className="text-lg text-gray-600 mb-6">
                Nuestras aulas están equipadas con tecnología de vanguardia que facilita el aprendizaje interactivo y
                colaborativo. Cada espacio está diseñado para adaptarse a diferentes metodologías pedagógicas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Pizarras interactivas en todas las aulas</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Mobiliario flexible y ergonómico</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Espacios para trabajo colaborativo</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/aulas-delta.jpg"
                alt="Aulas Modernas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/areas-verdes.jpg"
                alt="Áreas Verdes"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-6 text-[#231F20]">Áreas Verdes y Recreativas</h3>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro campus cuenta con amplias áreas verdes que proporcionan un ambiente natural y tranquilo,
                perfecto para el esparcimiento y la reflexión.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <TreePine className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Jardines y espacios naturales</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Áreas de recreo y socialización</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Espacios para la contemplación y el descanso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestructura Académica */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Infraestructura Académica</h2>
            <p className="text-lg text-gray-600">
              Instalaciones especializadas que potencian el aprendizaje en todas las áreas del conocimiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {espaciosAcademicos.map((espacio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={espacio.imagen || "/placeholder.svg"}
                    alt={espacio.nombre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <espacio.icono className="h-8 w-8 mb-2" />
                    <h3 className="font-bold text-lg">{espacio.nombre}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">{espacio.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas Complementarias */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Áreas Complementarias</h2>
            <p className="text-lg text-gray-600">
              Espacios adicionales que enriquecen la experiencia educativa y la vida escolar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasComplementarias.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <area.icono className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                  <h3 className="font-bold mb-3 text-[#231F20]">{area.nombre}</h3>
                  <p className="text-gray-600 text-sm">{area.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad y Bienestar */}
      <section className="py-16 bg-[#C5C9C4]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Seguridad y Bienestar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La seguridad y el bienestar de nuestras estudiantes son nuestra prioridad. Contamos con sistemas y
              protocolos que garantizan un ambiente seguro y protegido.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {seguridadBienestar.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icono className="h-12 w-12 mx-auto mb-4 text-[#0070AF]" />
                  <h3 className="font-bold mb-3 text-[#231F20]">{item.titulo}</h3>
                  <p className="text-gray-600 text-sm">{item.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-[#AB121C]/5 to-[#0070AF]/5">
            <CardContent className="p-8 text-center">
              <Shield className="h-16 w-16 mx-auto mb-6 text-[#AB121C]" />
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Compromiso con la Seguridad</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nuestro campus cuenta con protocolos de seguridad actualizados, personal capacitado y sistemas de
                monitoreo que garantizan un ambiente seguro para el aprendizaje y el desarrollo integral de nuestras
                estudiantes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Formulario de Visita */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">¿Quieres conocer más?</h2>
              <p className="text-lg text-gray-600">
                Solicita una visita personalizada y descubre por qué nuestro campus es el lugar ideal para la formación
                de tu hija
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-[#AB121C]">Solicitar Visita</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo</Label>
                        <Input id="nombre" placeholder="Tu nombre completo" />
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
                        <Label htmlFor="fecha-preferida">Fecha Preferida</Label>
                        <Input id="fecha-preferida" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="hora-preferida">Hora Preferida</Label>
                        <Input id="hora-preferida" type="time" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje (Opcional)</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntanos sobre tus expectativas o preguntas específicas"
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-[#AB121C] hover:bg-[#790002]">
                      Solicitar Visita
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0070AF] mb-4">Información de Visitas</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <div>
                          <p className="font-medium">Visitas Personalizadas</p>
                          <p className="text-sm text-gray-600">Recorrido guiado por nuestras instalaciones</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-3" />
                        <div>
                          <p className="font-medium">Reunión Informativa</p>
                          <p className="text-sm text-gray-600">Presentación de nuestra propuesta educativa</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <div>
                          <p className="font-medium">Ambiente Familiar</p>
                          <p className="text-sm text-gray-600">Conoce nuestra comunidad educativa</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#AB121C] mb-4">Horarios de Visita</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span>8:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span>9:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#0070AF]/10">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0070AF] mb-3">Contacto Directo</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-[#0070AF] mr-2" />
                        <span>+593 4 269-0100</span>
                      </div>
                      <div className="flex items-center">
                        <Image src="/images/whatsapp.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                        <span>WhatsApp: +593 99 xxx xxxx</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Tu hija merece el mejor ambiente para crecer</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubre cómo nuestro campus inspira el aprendizaje, fomenta la creatividad y garantiza la seguridad de
            nuestras estudiantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
              Agendar Visita por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#AB121C] bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
