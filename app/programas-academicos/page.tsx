import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Users,
  Award,
  Globe,
  Lightbulb,
  Target,
  Heart,
  Star,
  ChevronRight,
  GraduationCap,
  Microscope,
  Palette,
  Calculator,
  Languages,
  Dumbbell,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramasAcademicosPage() {
  const niveles = [
    {
      id: "inicial",
      nombre: "Educación Inicial",
      edades: "3-5 años",
      descripcion: "Desarrollo integral a través del juego y la exploración",
      color: "bg-[#CC9F62]",
    },
    {
      id: "primaria",
      nombre: "Educación Primaria",
      edades: "6-11 años",
      descripcion: "Fundamentos sólidos en todas las áreas del conocimiento",
      color: "bg-[#0070AF]",
    },
    {
      id: "secundaria",
      nombre: "Educación Secundaria",
      edades: "12-15 años",
      descripcion: "Desarrollo del pensamiento crítico y habilidades de liderazgo",
      color: "bg-[#AB121C]",
    },
    {
      id: "bachillerato",
      nombre: "Bachillerato IB",
      edades: "16-18 años",
      descripcion: "Programa Internacional que abre puertas al mundo",
      color: "bg-[#790002]",
    },
  ]

  const metodologias = [
    {
      icono: Lightbulb,
      titulo: "Learning is Fun",
      descripcion: "Aprendizaje divertido y significativo que motiva a las estudiantes",
    },
    {
      icono: Users,
      titulo: "Interdisciplinariedad",
      descripcion: "Conexión entre diferentes áreas del conocimiento",
    },
    {
      icono: Target,
      titulo: "Pensamiento Crítico",
      descripcion: "Desarrollo de habilidades de análisis y evaluación",
    },
    {
      icono: Globe,
      titulo: "Aprendizaje Conceptual",
      descripcion: "Comprensión profunda de conceptos fundamentales",
    },
    {
      icono: Award,
      titulo: "Enriquecimiento Curricular",
      descripcion: "Programas especializados para potenciar talentos",
    },
    {
      icono: Star,
      titulo: "Innovación",
      descripcion: "Metodologías vanguardistas en educación",
    },
  ]

  const areasEstudio = [
    { icono: Calculator, nombre: "Matemáticas", color: "text-[#AB121C]" },
    { icono: Languages, nombre: "Lengua y Literatura", color: "text-[#0070AF]" },
    { icono: Globe, nombre: "English", color: "text-[#CC9F62]" },
    { icono: Microscope, nombre: "Science", color: "text-[#790002]" },
    { icono: BookOpen, nombre: "Social Studies", color: "text-[#AB121C]" },
    { icono: Palette, nombre: "Arts", color: "text-[#0070AF]" },
    { icono: Lightbulb, nombre: "Technology", color: "text-[#CC9F62]" },
    { icono: Heart, nombre: "Religión", color: "text-[#790002]" },
    { icono: Dumbbell, nombre: "Educación Física", color: "text-[#AB121C]" },
    { icono: Languages, nombre: "Français", color: "text-[#0070AF]" },
    { icono: Heart, nombre: "Currículo Socioemocional", color: "text-[#CC9F62]" },
    { icono: BookOpen, nombre: "Formación", color: "text-[#790002]" },
  ]

  const asignaturasIB = [
    { grupo: "Grupo 1", materia: "Español A - Literatura", nivel: "Nivel Superior" },
    { grupo: "Grupo 1", materia: "English A - Language and Literature", nivel: "Nivel Superior" },
    { grupo: "Grupo 2", materia: "English B", nivel: "Nivel Medio" },
    { grupo: "Grupo 3", materia: "Historia", nivel: "Nivel Superior" },
    { grupo: "Grupo 3", materia: "Geography", nivel: "Nivel Medio" },
    { grupo: "Grupo 3", materia: "Business Management", nivel: "Nivel Medio" },
    { grupo: "Grupo 4", materia: "Biología", nivel: "Nivel Superior" },
    { grupo: "Grupo 4", materia: "Física", nivel: "Nivel Medio" },
    { grupo: "Grupo 4", materia: "Química", nivel: "Nivel Medio" },
    { grupo: "Grupo 4", materia: "ESS", nivel: "Nivel Medio" },
    { grupo: "Grupo 5", materia: "Matemáticas MAE", nivel: "Nivel Superior" },
    { grupo: "Grupo 5", materia: "Matemáticas MAI", nivel: "Nivel Medio" },
    { grupo: "Grupo 6", materia: "Dance", nivel: "Nivel Medio" },
    { grupo: "Grupo 6", materia: "Visual Arts", nivel: "Nivel Medio" },
    { grupo: "Core", materia: "TOK", nivel: "Obligatorio" },
    { grupo: "Core", materia: "CAS", nivel: "Obligatorio" },
  ]

  const resultadosCAS = [
    "Identificar fortalezas y desarrollar áreas de crecimiento",
    "Demostrar que se han afrontado desafíos y se han desarrollado nuevas habilidades",
    "Demostrar cómo iniciar y planificar una experiencia CAS",
    "Mostrar compromiso y perseverancia en las experiencias CAS",
    "Demostrar las habilidades y reconocer los beneficios del trabajo colaborativo",
    "Demostrar compromiso con cuestiones de importancia global",
    "Reconocer y considerar la ética de las decisiones y acciones",
  ]

  const testimonios = [
    {
      nombre: "María José Rodríguez",
      promocion: "2020",
      universidad: "Universidad de Harvard",
      quote:
        "El programa IB me preparó no solo académicamente, sino que me enseñó a ser una ciudadana global comprometida.",
    },
    {
      nombre: "Ana Lucía Mendoza",
      promocion: "2019",
      universidad: "Universidad de Oxford",
      quote:
        "Las habilidades de investigación y pensamiento crítico que desarrollé en Delta fueron fundamentales para mi éxito universitario.",
    },
    {
      nombre: "Sofía Vásquez",
      promocion: "2021",
      universidad: "MIT",
      quote: "CAS me ayudó a descubrir mi pasión por la ingeniería y el servicio comunitario.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0070AF] to-[#AB121C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Programas Académicos</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              Excelencia Educativa desde Inicial hasta IB
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Formamos mujeres líderes con una educación integral que combina rigor académico, valores y perspectiva
              global
            </p>
          </div>
        </div>
      </section>

      {/* Niveles de Estudio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Familia Copece</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acompañamos el crecimiento de nuestras estudiantes desde los primeros años hasta su preparación para la
              universidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {niveles.map((nivel, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${nivel.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-[#231F20] mb-2">{nivel.nombre}</h3>
                  <p className="text-[#AB121C] font-medium mb-3">{nivel.edades}</p>
                  <p className="text-gray-600 text-sm">{nivel.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologías */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Metodologías Innovadoras</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Utilizamos enfoques pedagógicos modernos que desarrollan habilidades del siglo XXI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metodologias.map((metodologia, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <metodologia.icono className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                  <h3 className="font-bold mb-3 text-[#231F20]">{metodologia.titulo}</h3>
                  <p className="text-gray-600 text-sm">{metodologia.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Estudio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Áreas de Estudio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Curriculum integral que desarrolla todas las dimensiones del conocimiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasEstudio.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <area.icono className={`h-10 w-10 mx-auto mb-3 ${area.color}`} />
                  <h3 className="font-medium text-[#231F20]">{area.nombre}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programa IB */}
      <section className="py-16 bg-[#C5C9C4]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#0070AF] text-white mb-4">Bachillerato Internacional</Badge>
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Programa IB: Tu Pasaporte al Mundo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acceso a todas las alumnas. Diploma Bilingüe y resultados superiores a la media mundial. Profesoras IB
              capacitadas internacionalmente.
            </p>
            <div class="flex justify-center mb-8">
              <a
                href="https://ibo.org/programmes/find-an-ib-school/ibla/u/unidad-educativa-bilingue-delta/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-80 transition-opacity"
                title="Ver perfil oficial en IB Organization"
              >
                <div class="w-48 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-4 border">
                  <svg
                    viewBox="0 0 503 139"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full"
                    aria-label="International Baccalaureate Logo"
                  >
                    <defs>
                      <linearGradient id="ibGradient" x1="20.279%" x2="78.365%" y1="9.1691%" y2="90.957%">
                        <stop stopColor="#66bcd8" offset="0.3"></stop>
                        <stop stopColor="#2a3583" offset="0.89"></stop>
                      </linearGradient>
                    </defs>
                    <circle cx="67.252" cy="67.094" r="67.094" fill="#fff"></circle>
                    <path
                      d="m134.5 67.283c0 37.202-30.227 67.356-67.514 67.356-31.7 0-58.278-21.792-65.543-51.175 13.212-0.15 25.742-3.0961 37.058-8.2425v-26.216c0-2.0762-0.7241-3.597-2.1679-4.5569-1.4438-0.958-4.0085-1.438-7.6992-1.438v-2.4247c4.8916-0.1656 9.3762-0.4523 13.455-0.8617 4.0787-0.4108 7.5967-1.0242 10.554-1.8478v29.33c0.0186-0.015 0.0396-0.0292 0.0606-0.0428v8.7871 7.0717c0 2.4798-0.0396 4.9186-0.1215 7.3156-0.0791 2.3979-0.2006 4.6352-0.3597 6.7168-0.1634 2.0757-0.3596 3.834-0.6001 5.2729 4.006 2.3191 8.4609 4.2352 13.354 5.7569 4.894 1.5178 9.4655 2.2782 13.717 2.2782 3.6093 0 7.0966-0.5423 10.468-1.623 3.3707-1.0768 6.3608-2.6608 8.9679-4.7404 2.6066-2.0815 4.714-4.6431 6.3164-7.6865s2.406-6.4861 2.406-10.328c0-3.5225-0.6026-6.7665-1.8083-9.7291-1.2052-2.9622-2.8896-5.5247-5.0595-7.6851-2.1728-2.1613-4.7422-3.8627-7.7109-5.1035-2.974-1.2409-6.2256-1.8635-9.7622-1.8635-2.6514 0-5.359 0.4649-8.1315 1.3913-2.773 0.9263-5.2839 2.0766-7.5289 3.4445v-11.334c12.156-12.673 20.716-28.812 24.009-46.794-15.05-6.3785-32.488-7.2084-48.983-0.9604-18.326 6.9392-31.725 21.182-38.147 38.146 6.1832-18.261 20.197-33.722 39.667-41.1 16.259-6.157 33.241-5.6162 48.074 0.1645 0.0025-0.0151 0.0049-0.0292 0.0098-0.0443 25.172 9.7871 43.019 34.19 43.019 62.765zm-65.599 34.492c1.841 3.1603 4.9662 4.7375 9.3767 4.7375 4.4056 0 7.5338-1.5772 9.3792-4.7375 1.843-3.1583 2.7632-8.1372 2.7632-14.936 0-6.7966-0.9202-11.776-2.7632-14.935-1.8454-3.1588-4.9736-4.7355-9.3792-4.7355-4.4105 0-7.5357 1.5767-9.3767 4.7355-1.8454 3.1593-2.7656 8.1388-2.7656 14.935 0 6.7986 0.9202 11.778 2.7656 14.936zm-17.592-71.466c1.8713-1.8221 2.8081-4.1037 2.8081-6.8443 0-2.7363-0.9368-5.0179-2.8081-6.84-1.8688-1.825-4.1348-2.7387-6.7906-2.7387-2.6632 0-4.9287 0.9137-6.7975 2.7387-1.8737 1.8221-2.8032 4.1037-2.8032 6.84 0 2.7406 0.9295 5.0222 2.8032 6.8443 1.8688 1.825 4.1343 2.7373 6.7975 2.7373 2.6558 0 4.9218-0.9123 6.7906-2.7373 2.974-1.2409 6.2256-1.8635 9.7622-1.8635 2.6514 0 5.359 0.4649 8.1315 1.3913 2.773 0.9263 5.2839 2.0766 7.5289 3.4445v-11.334c12.156-12.673 20.716-28.812 24.009-46.794-15.05-6.3785-32.488-7.2084-48.983-0.9604-18.326 6.9392-31.725 21.182-38.147 38.146 6.1832-18.261 20.197-33.722 39.667-41.1 16.259-6.157 33.241-5.6162 48.074 0.1645 0.0025-0.0151 0.0049-0.0292 0.0098-0.0443 25.172 9.7871 43.019 34.19 43.019 62.765z"
                      fill="url(#ibGradient)"
                    ></path>
                    <text x="160" y="30" fontSize="24" fontWeight="bold" fill="#2a3583">
                      International
                    </text>
                    <text x="160" y="55" fontSize="24" fontWeight="bold" fill="#2a3583">
                      Baccalaureate
                    </text>
                    <text x="160" y="75" fontSize="14" fill="#CC9F62">
                      Leading Excellence
                    </text>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <Tabs defaultValue="asignaturas" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="asignaturas">Asignaturas</TabsTrigger>
              <TabsTrigger value="perfil">Perfil IB</TabsTrigger>
              <TabsTrigger value="cas">Programa CAS</TabsTrigger>
              <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
            </TabsList>

            <TabsContent value="asignaturas" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#AB121C] mb-4">Asignaturas Ofrecidas</h3>
                    <div className="space-y-3">
                      {asignaturasIB.map((asignatura, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-[#231F20]">{asignatura.materia}</p>
                            <p className="text-sm text-gray-600">{asignatura.grupo}</p>
                          </div>
                          <Badge
                            variant={asignatura.nivel === "Nivel Superior" ? "default" : "secondary"}
                            className={
                              asignatura.nivel === "Nivel Superior"
                                ? "bg-[#AB121C] text-white"
                                : "bg-[#C2C4C6] text-[#231F20]"
                            }
                          >
                            {asignatura.nivel}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="relative">
                  <Image
                    src="images/excelencia-academica-primaria.webp"
                    alt="Estudiantes IB"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="perfil" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-bold text-[#AB121C] mb-6 text-center">Perfil de la Alumna IB</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      "Indagadoras",
                      "Informadas e instruidas",
                      "Pensadoras",
                      "Buenas comunicadoras",
                      "Íntegras",
                      "De mentalidad abierta",
                      "Solidarias",
                      "Audaces",
                      "Equilibradas",
                      "Reflexivas",
                    ].map((atributo, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <Star className="h-6 w-6 mx-auto mb-2 text-[#CC9F62]" />
                        <p className="font-medium text-[#231F20] text-sm">{atributo}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cas" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#AB121C] mb-4">Creatividad, Actividad y Servicio</h3>
                    <p className="text-gray-600 mb-6">
                      CAS es el corazón del Programa del Diploma, donde las estudiantes participan en experiencias de
                      aprendizaje que involucran:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Palette className="h-6 w-6 text-[#CC9F62] mr-3" />
                        <div>
                          <p className="font-medium">Creatividad</p>
                          <p className="text-sm text-gray-600">Artes, música, teatro, escritura creativa</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Dumbbell className="h-6 w-6 text-[#0070AF] mr-3" />
                        <div>
                          <p className="font-medium">Actividad</p>
                          <p className="text-sm text-gray-600">Deportes, danza, actividades físicas</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-6 w-6 text-[#AB121C] mr-3" />
                        <div>
                          <p className="font-medium">Servicio</p>
                          <p className="text-sm text-gray-600">Proyectos comunitarios y voluntariado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0070AF] mb-4">7 Resultados de Aprendizaje CAS</h3>
                    <div className="space-y-3">
                      {resultadosCAS.map((resultado, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-[#CC9F62] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-sm text-gray-700">{resultado}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="beneficios" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                    <h3 className="font-bold mb-3 text-[#231F20]">Reconocimiento Mundial</h3>
                    <p className="text-gray-600 text-sm">Aceptado por más de 5,000 universidades en 100+ países</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-[#0070AF]" />
                    <h3 className="font-bold mb-3 text-[#231F20]">Ventaja Competitiva</h3>
                    <p className="text-gray-600 text-sm">Preferencia en procesos de admisión universitaria</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-[#CC9F62]" />
                    <h3 className="font-bold mb-3 text-[#231F20]">Desarrollo Integral</h3>
                    <p className="text-gray-600 text-sm">Habilidades académicas, sociales y de liderazgo</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Testimonios de Exalumnas</h2>
            <p className="text-lg text-gray-600">Historias de éxito de nuestras graduadas IB</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((testimonio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#CC9F62] text-[#CC9F62]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonio.quote}"</p>
                  <div>
                    <p className="font-bold text-[#231F20]">{testimonio.nombre}</p>
                    <p className="text-sm text-[#AB121C]">Promoción {testimonio.promocion}</p>
                    <p className="text-sm text-gray-500">{testimonio.universidad}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Universitario */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="images/counseling-page.webp"
                alt="Counseling Universitario"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#CC9F62] text-white mb-4">Counseling Universitario</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Acompañamiento hacia la Universidad</h2>
              <p className="text-lg text-gray-600 mb-6">
                Asesoría para ingreso universitario, organización de ferias, talleres, sesiones informativas y redacción
                de cartas. Eventos destacados: To IB or not to IB, ferias internacionales y acompañamiento académico
                transversal.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Orientación vocacional personalizada</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Asesoría para universidades internacionales</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Preparación para exámenes de admisión</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Apoyo en solicitudes de becas</span>
                </div>
              </div>

              <Button className="bg-[#AB121C] hover:bg-[#790002]">
                Conocer más sobre Counseling
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">¿Lista para una educación de clase mundial?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubre cómo nuestros programas académicos pueden transformar el futuro de tu hija
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admisiones">
              <Button size="lg" className="bg-[#CC9F62] hover:bg-[#CC9F62]/90">
                Proceso de Admisión
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/nuestro-campus">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0070AF] bg-transparent"
              >
                Visitar Campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
