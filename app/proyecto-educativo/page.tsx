import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Heart,
  BookOpen,
  Award,
  Target,
  Lightbulb,
  Globe,
  Star,
  ChevronRight,
  GraduationCap,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProyectoEducativoPage() {
  const pilares = [
    {
      icono: Users,
      titulo: "Preceptoría",
      descripcion: "Acompañamiento personalizado para el desarrollo integral de cada estudiante",
      detalles: [
        "Seguimiento académico individualizado",
        "Orientación en la toma de decisiones",
        "Desarrollo de virtudes y valores",
        "Comunicación constante con padres",
      ],
    },
    {
      icono: Heart,
      titulo: "Labor Social SYT",
      descripcion: "Formación en servicio y compromiso social transformador",
      detalles: [
        "Proyectos comunitarios regulares",
        "Desarrollo de conciencia social",
        "Trabajo con poblaciones vulnerables",
        "Liderazgo en iniciativas solidarias",
      ],
    },
    {
      icono: BookOpen,
      titulo: "Formación de Padres",
      descripcion: "Programa MEGs para fortalecer la unidad familiar",
      detalles: [
        "Talleres de educación familiar",
        "Conferencias con expertos",
        "Grupos de reflexión entre padres",
        "Recursos para la educación en casa",
      ],
    },
    {
      icono: Award,
      titulo: "Capellanía",
      descripcion: "Formación espiritual y en valores católicos",
      detalles: [
        "Dirección espiritual personalizada",
        "Celebraciones litúrgicas",
        "Retiros y jornadas de reflexión",
        "Formación en doctrina católica",
      ],
    },
  ]

  const enfoqueFormativo = [
    {
      titulo: "Desarrollo Intelectual",
      descripcion: "Excelencia académica con metodologías innovadoras",
      icono: Lightbulb,
      color: "text-[#0070AF]",
    },
    {
      titulo: "Formación en Virtudes",
      descripcion: "Desarrollo del carácter y valores humanos",
      icono: Star,
      color: "text-[#CC9F62]",
    },
    {
      titulo: "Liderazgo Femenino",
      descripcion: "Preparación para ser protagonistas del cambio",
      icono: Target,
      color: "text-[#AB121C]",
    },
    {
      titulo: "Perspectiva Global",
      descripcion: "Mentalidad internacional y multicultural",
      icono: Globe,
      color: "text-[#790002]",
    },
  ]

  const programasDECE = [
    "Orientación vocacional y profesional",
    "Apoyo psicopedagógico especializado",
    "Programas de prevención y bienestar",
    "Talleres de habilidades socioemocionales",
    "Atención a necesidades educativas especiales",
    "Mediación y resolución de conflictos",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#231F20]/60 to-[#231F20]/50 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Proyecto Educativo</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Formación Académica y Humana Integral</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Nuestro proyecto educativo desarrolla todas las dimensiones de la persona humana con excelencia y valores
            </p>
          </div>
        </div>
      </section>

      {/* Enfoque Formativo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Enfoque Formativo y Académico</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro modelo educativo integra la excelencia académica con la formación humana, preparando mujeres
              líderes para los desafíos del siglo XXI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enfoqueFormativo.map((enfoque, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <enfoque.icono className={`h-12 w-12 mx-auto mb-4 ${enfoque.color}`} />
                  <h3 className="font-bold mb-3 text-[#231F20]">{enfoque.titulo}</h3>
                  <p className="text-gray-600 text-sm">{enfoque.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares del Proyecto Educativo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Pilares de Nuestro Proyecto Educativo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cuatro pilares fundamentales sostienen nuestra propuesta educativa integral
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pilares.map((pilar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <pilar.icono className="h-10 w-10 text-[#AB121C] mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-[#231F20]">{pilar.titulo}</h3>
                      <p className="text-gray-600">{pilar.descripcion}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pilar.detalles.map((detalle, detalleIndex) => (
                      <div key={detalleIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#CC9F62] rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{detalle}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acompañamiento Personalizado */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#0070AF] text-white mb-4">Acompañamiento Personalizado</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Preceptoría: El Corazón de Delta</h2>
              <p className="text-lg text-gray-600 mb-6">
                La preceptoría es el sistema de acompañamiento personalizado que caracteriza nuestra propuesta
                educativa. Cada estudiante tiene una preceptora que la conoce individualmente y la acompaña en su
                crecimiento integral.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Este acompañamiento va más allá de lo académico, abarcando el desarrollo personal, la formación en
                virtudes y la orientación para la toma de decisiones importantes en su vida.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Plan de mejora personal individualizado</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Entrevistas regulares estudiante-preceptora</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Comunicación fluida con padres de familia</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Seguimiento del desarrollo de virtudes</span>
                </div>
              </div>

              <Button className="bg-[#AB121C] hover:bg-[#790002]">
                Conocer más sobre Preceptoría
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="images/profesoras-con-alumnos.webp"
                alt="Preceptoría"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Labor Social SYT */}
      <section className="py-16 bg-[#C5C9C4]/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="images/labor-social.webp"
                alt="Labor Social SYT"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#CC9F62] text-white mb-4">Compromiso Social</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Labor Social SYT</h2>
              <p className="text-lg text-gray-600 mb-6">
                El programa de Labor Social "Servicio y Trabajo" (SYT) desarrolla en nuestras estudiantes una conciencia
                social profunda y un compromiso genuino con la transformación de la sociedad.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                A través de proyectos concretos de servicio comunitario, las estudiantes aprenden que el verdadero
                liderazgo se ejerce sirviendo a los demás, especialmente a quienes más lo necesitan.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="font-bold text-[#AB121C] mb-4">Proyectos Actuales</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Apoyo educativo en comunidades rurales</p>
                  <p>• Programas de alfabetización para adultos</p>
                  <p>• Cuidado del medio ambiente y reciclaje</p>
                  <p>• Visitas a hogares de ancianos</p>
                  <p>• Campañas de salud preventiva</p>
                  <p>• Apoyo a fundaciones locales</p>
                  <p>• Acción Social</p>
                  <p>• CAS (Creatividad, Actividad y Servicio)</p>
                </div>
              </div>

              <Button className="bg-[#CC9F62] hover:bg-[#CC9F62]/90">
                Ver Proyectos de Servicio
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="bg-[#0070AF] hover:bg-[#0070AF]/90 ml-4">
                Siempre Familia
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formación de Padres */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#0070AF] text-white mb-4">Formación Familiar</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Programa MEGs</h2>
              <p className="text-lg text-gray-600 mb-6">
                Los Medios de Educación y Guía (MEGs) son un programa integral de formación para padres de familia,
                diseñado para fortalecer la unidad familiar y mejorar la educación en el hogar.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Reconocemos que los padres son los primeros educadores de sus hijas, por lo que ofrecemos herramientas
                prácticas y formación continua para acompañar mejor el crecimiento de las estudiantes.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#0070AF]/10 p-4 rounded-lg">
                  <h4 className="font-bold text-[#0070AF] mb-2">Talleres Mensuales</h4>
                  <p className="text-sm text-gray-700">Temas de educación familiar y desarrollo adolescente</p>
                </div>
                <div className="bg-[#CC9F62]/10 p-4 rounded-lg">
                  <h4 className="font-bold text-[#CC9F62] mb-2">Conferencias</h4>
                  <p className="text-sm text-gray-700">Expertos en educación y psicología familiar</p>
                </div>
                <div className="bg-[#AB121C]/10 p-4 rounded-lg">
                  <h4 className="font-bold text-[#AB121C] mb-2">Grupos de Reflexión</h4>
                  <p className="text-sm text-gray-700">Intercambio de experiencias entre padres</p>
                </div>
                <div className="bg-[#790002]/10 p-4 rounded-lg">
                  <h4 className="font-bold text-[#790002] mb-2">Recursos Digitales</h4>
                  <p className="text-sm text-gray-700">Materiales y guías para la educación en casa</p>
                </div>
              </div>

              <Button className="bg-[#0070AF] hover:bg-[#0070AF]/90">
                Inscribirse en MEGs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="images/megs.webp"
                alt="Formación de Padres"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capellanía */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="images/capellania.webp"
                alt="Capellanía"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#AB121C] text-white mb-4">Formación Espiritual</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Capellanía y Vida Espiritual</h2>
              <p className="text-lg text-gray-600 mb-6">
                La capellanía del colegio, atendida por sacerdotes del Opus Dei, ofrece formación espiritual sólida y
                acompañamiento en el crecimiento de la fe de nuestras estudiantes y familias.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                La formación católica no es solo una materia más, sino el fundamento que da sentido y orientación a toda
                la educación, ayudando a las estudiantes a descubrir su vocación y misión en la vida.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Dirección espiritual personalizada</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Clases de religión y doctrina católica</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Retiros y jornadas de reflexión</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Celebraciones litúrgicas y sacramentos</span>
                </div>
              </div>

              <Button className="bg-[#AB121C] hover:bg-[#790002]">
                Conocer la Capellanía
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Departamento DECE */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#CC9F62] text-white mb-4">Bienestar Estudiantil</Badge>
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Departamento DECE</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El Departamento de Consejería Estudiantil brinda apoyo integral para el bienestar emocional, social y
              académico de nuestras estudiantes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#AB121C] mb-6">Servicios DECE</h3>
                <div className="space-y-4">
                  {programasDECE.map((programa, index) => (
                    <div key={index} className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-[#CC9F62] mr-3" />
                      <span className="text-gray-700">{programa}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#CC9F62]/5 to-[#AB121C]/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#AB121C] mb-6">Programa de Altas Capacidades</h3>
                <p className="text-gray-600 mb-6">
                  Identificamos y desarrollamos el potencial excepcional de estudiantes con altas capacidades
                  intelectuales, ofreciendo programas de enriquecimiento curricular y apoyo especializado.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Lightbulb className="h-5 w-5 text-[#CC9F62] mr-3" />
                    <span className="text-gray-700 text-sm">Identificación temprana de talentos</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-[#CC9F62] mr-3" />
                    <span className="text-gray-700 text-sm">Programas de enriquecimiento académico</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                    <span className="text-gray-700 text-sm">Apoyo socioemocional especializado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">¿Quieres conocer más sobre nuestro proyecto educativo?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Te invitamos a descubrir cómo formamos mujeres líderes que transforman el mundo con una educación integral
            de excelencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admisiones">
              <Button size="lg" className="bg-[#CC9F62] hover:bg-[#CC9F62]/90">
                Proceso de Admisión
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#AB121C] bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar Visita
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
