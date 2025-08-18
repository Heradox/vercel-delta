import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Camera, Trophy, MessageCircle, ChevronRight, Globe, Target } from "lucide-react"
import Image from "next/image"

export default function VidaEscolarPage() {
  const clubes = [
    {
      categoria: "Deportes",
      color: "bg-[#0070AF]",
      imagen: "/images/club-deportivo-vida-escolar.webp", // Added image for sports category
      actividades: [
        {
          nombre: "Fútbol",
          descripcion: "Desarrollo de habilidades deportivas y trabajo en equipo",
          imagen: "/images/futbol.webp",
        },
        {
          nombre: "Básquet",
          descripcion: "Coordinación, estrategia y liderazgo en la cancha",
          imagen: "/images/basquet.webp",
        },
        {
          nombre: "Voleibol",
          descripcion: "Comunicación efectiva y espíritu de equipo",
          imagen: "/images/volley.webp",
        },
        {
          nombre: "Natación",
          descripcion: "Disciplina personal y superación de límites",
          imagen: "/images/natacion.webp",
        },
      ],
    },
    {
      categoria: "Artes",
      color: "bg-[#CC9F62]",
      imagen: "/images/arte-vida-escolar.webp", // Added image for arts category
      actividades: [
        {
          nombre: "Teatro",
          descripcion: "Expresión artística y desarrollo de la confianza",
          imagen: "/images/teatro.webp",
        },
        {
          nombre: "Danza",
          descripcion: "Expresión corporal y apreciación cultural",
          imagen: "/images/danza.webp",
        },
        {
          nombre: "Artes Visuales",
          descripcion: "Creatividad y desarrollo del pensamiento visual",
          imagen: "/images/artes-visuales.webp",
        },
        {
          nombre: "Fotografía",
          descripcion: "Captura de momentos y narrativa visual",
          imagen: "/images/fotografia.webp",
        },
      ],
    },
    {
      categoria: "Ciencia y Tecnología",
      color: "bg-[#AB121C]",
      imagen: "/images/ciencia-vida-escolar.webp", // Added image for science category
      actividades: [
        {
          nombre: "Robótica",
          descripcion: "Programación y construcción de robots",
          imagen: "/images/robotica.webp",
        },
        {
          nombre: "Club de Ciencias",
          descripcion: "Experimentación y método científico",
          imagen: "/images/club-de-ciencias.webp",
        },
        {
          nombre: "Programación",
          descripcion: "Desarrollo de aplicaciones y pensamiento lógico",
          imagen: "/images/programacion.webp",
        },
        {
          nombre: "Matemática Aplicada",
          descripcion: "Resolución de problemas reales con matemáticas",
          imagen: "/images/matematica-aplicada.webp",
        },
      ],
    },
    {
      categoria: "Liderazgo y Servicio",
      color: "bg-[#790002]",
      imagen: "/images/liderazgo-vida-escolar.webp", // Added image for leadership category
      actividades: [
        {
          nombre: "Gobierno Estudiantil",
          descripcion: "Representación y liderazgo democrático",
          imagen: "/images/gobierno-estudiantil.webp",
        },
        {
          nombre: "Voluntariado",
          descripcion: "Servicio comunitario y compromiso social",
          imagen: "/images/voluntariado.webp",
        },
        {
          nombre: "Debate",
          descripcion: "Oratoria y argumentación estructurada",
          imagen: "/images/debate.webp",
        },
        {
          nombre: "Modelo ONU",
          descripcion: "Diplomacia y comprensión de asuntos globales",
          imagen: "/images/onu.webp",
        },
      ],
    },
  ]

  const beneficios = [
    {
      icono: Users,
      titulo: "Desarrollo Social",
      descripcion: "Fortalecimiento de habilidades interpersonales y trabajo en equipo",
    },
    {
      icono: Target,
      titulo: "Descubrimiento de Talentos",
      descripcion: "Identificación y desarrollo de habilidades y pasiones únicas",
    },
    {
      icono: Heart,
      titulo: "Bienestar Integral",
      descripcion: "Equilibrio entre desarrollo académico, físico y emocional",
    },
    {
      icono: Globe,
      titulo: "Perspectiva Global",
      descripcion: "Comprensión de diferentes culturas y realidades mundiales",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#231F20]/60 to-[#231F20]/50 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Vida Escolar</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Formación Integral Más Allá del Aula</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Descubre el mundo de oportunidades que complementan la educación académica de nuestras estudiantes
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">
                Más que Actividades Extracurriculares
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En Delta, la vida escolar trasciende las aulas. Nuestras estudiantes participan en una amplia variedad
                de actividades que desarrollan sus talentos, fortalecen su carácter y las preparan para ser líderes en
                un mundo globalizado.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Cada actividad está diseñada para complementar la formación académica, promoviendo valores como el
                trabajo en equipo, la perseverancia, la creatividad y el servicio a los demás.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start">
                    <beneficio.icono className="h-6 w-6 text-[#AB121C] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#231F20] mb-1">{beneficio.titulo}</h3>
                      <p className="text-sm text-gray-600">{beneficio.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Vida Escolar Delta"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubes y Actividades */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Clubes y Actividades</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explora las diferentes áreas donde nuestras estudiantes pueden desarrollar sus pasiones y talentos
            </p>
          </div>

          {clubes.map((categoria, categoriaIndex) => (
            <div key={categoriaIndex} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <div className={`w-4 h-4 ${categoria.color} rounded-full mr-4`}></div>
                <div className="flex items-center">
                  <Image
                    src={categoria.imagen || "/placeholder.svg"}
                    alt={categoria.categoria}
                    width={80}
                    height={60}
                    className="rounded-lg mr-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-[#231F20] font-serif">{categoria.categoria}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoria.actividades.map((actividad, actividadIndex) => (
                  <Card key={actividadIndex} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={actividad.imagen || "/placeholder.svg"}
                        alt={actividad.nombre}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-bold text-lg">{actividad.nombre}</h4>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-gray-600 text-sm">{actividad.descripcion}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Copa Delta */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="images/club-deportivo-vida-escolar.webp"
                alt="Copa Delta"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#0070AF] text-white mb-4">Evento Especial</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Copa Delta</h2>
              <p className="text-lg text-gray-600 mb-6">
                Uno de los eventos más esperados del año es la Copa Delta, un torneo de fútbol que reúne a los padres de
                familia en una competencia llena de diversión, camaradería y espíritu deportivo.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Este evento fortalece los lazos entre las familias de nuestra comunidad educativa y demuestra que el
                deporte es una herramienta poderosa para unir generaciones.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Torneo anual de fútbol para padres</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Fortalecimiento de la comunidad educativa</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Ambiente familiar y de sana competencia</span>
                </div>
              </div>

              <Button className="bg-[#AB121C] hover:bg-[#790002]">
                Ver Galería Copa Delta
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Vida Estudiantil */}
      <section className="py-16 bg-[#C5C9C4]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Galería de Vida Estudiantil</h2>
            <p className="text-lg text-gray-600">Momentos especiales que capturan la esencia de nuestra comunidad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                imagen: "/placeholder.svg?height=300&width=400",
                titulo: "Ceremonia de Graduación",
                descripcion: "Celebrando los logros de nuestras estudiantes",
              },
              {
                imagen: "/placeholder.svg?height=300&width=400",
                titulo: "Feria de Ciencias",
                descripcion: "Innovación y creatividad en acción",
              },
              {
                imagen: "/placeholder.svg?height=300&width=400",
                titulo: "Festival Cultural",
                descripcion: "Celebrando la diversidad y las tradiciones",
              },
              {
                imagen: "/placeholder.svg?height=300&width=400",
                titulo: "Día Deportivo",
                descripcion: "Competencia sana y espíritu de equipo",
              },
              {
                imagen: "/placeholder.svg?height=300&width=400",
                titulo: "Exposición de Arte",
                descripcion: "Expresión creativa de nuestras artistas",
              },
              {
                imagen: "/placeholder.svg?height=300&width=400",
                titulo: "Proyecto de Servicio",
                descripcion: "Compromiso social en acción",
              },
            ].map((evento, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={evento.imagen || "/placeholder.svg"} alt={evento.titulo} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{evento.titulo}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">{evento.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-[#AB121C] text-[#AB121C] hover:bg-[#AB121C] hover:text-white bg-transparent"
            >
              <Camera className="mr-2 h-4 w-4" />
              Ver Galería Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Registro para Actividades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#AB121C]/5 to-[#CC9F62]/5">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 mx-auto mb-6 text-[#AB121C]" />
                <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">
                  ¿Tu hija quiere participar en nuestras actividades?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contáctate con Andrea Neira, nuestra coordinadora de actividades extracurriculares, para obtener más
                  información sobre inscripciones y horarios.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#CC9F62] hover:bg-[#CC9F62]/90">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Andrea Neira
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#AB121C] text-[#AB121C] hover:bg-[#AB121C] hover:text-white bg-transparent"
                  >
                    Ver Horarios de Actividades
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Andrea Neira</strong> - Coordinadora de Actividades Extracurriculares
                    <br />
                    WhatsApp: +593 99 xxx xxxx | Email: actividades@colegiodelta.edu.ec
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">¿Lista para una experiencia educativa completa?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubre cómo la vida escolar en Delta complementa la formación académica de tu hija
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#CC9F62] hover:bg-[#CC9F62]/90">
              Agendar Visita al Campus
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#AB121C] bg-transparent"
            >
              Proceso de Admisión
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
