import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  Heart,
  MapPin,
  Phone,
  Mail,
  UtensilsCrossed,
  GraduationCap,
  Star,
  ChevronRight,
  Target,
  Eye,
  Compass,
  Shield,
  Camera,
  UserCheck,
  AlertTriangle,
  HeartHandshake,
  Stethoscope,
  Lightbulb,
  Sword,
  Trophy,
  HandHeart,
  Zap,
  Rocket,
  Crown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const seguridadBienestar = [
    {
      icono: Shield,
      titulo: "Seguridad 24/7",
      descripcion: "Monitoreo constante y protocolos de seguridad actualizados para garantizar un ambiente protegido.",
    },
    {
      icono: Camera,
      titulo: "Sistema de Videovigilancia",
      descripcion: "Cámaras de seguridad estratégicamente ubicadas en todo el campus para mayor tranquilidad.",
    },
    {
      icono: UserCheck,
      titulo: "Control de Acceso",
      descripcion: "Registro y verificación de todas las personas que ingresan al campus educativo.",
    },
    {
      icono: Stethoscope,
      titulo: "Enfermería Escolar",
      descripcion: "Atención médica inmediata con personal capacitado para emergencias y cuidados básicos.",
    },
    {
      icono: AlertTriangle,
      titulo: "Protocolos de Emergencia",
      descripcion: "Planes de evacuación y respuesta ante emergencias debidamente establecidos y practicados.",
    },
    {
      icono: HeartHandshake,
      titulo: "Bienestar Emocional",
      descripcion: "Apoyo psicológico y programas de bienestar para el desarrollo integral de las estudiantes.",
    },
  ]

  const manifestoMujerDelta = [
    {
      icono: Lightbulb,
      texto: "Mujeres pensadoras, reflexivas y creativas que inspiren aquello que mejorará su entorno",
    },
    {
      icono: Sword,
      texto: "Mujeres valientes que defiendan la Verdad, la Vida y la Familia",
    },
    {
      icono: Trophy,
      texto: "Mujeres que buscan la excelencia en el campo profesional y en la vida familiar",
    },
    {
      icono: HandHeart,
      texto: "Mujeres solidarias que fomenten la cooperación y el Bien Común",
    },
    {
      icono: Zap,
      texto: "Mujeres resilientes que superen la adversidad, aprendan de sus errores y sigan adelante",
    },
    {
      icono: Rocket,
      texto: "Mujeres proactivas que implementen los cambios que el mundo necesita",
    },
    {
      icono: Crown,
      texto: "Mujeres líderes que transformen el mundo en un lugar más humano, justo y solidario",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video de fondo (Vimeo) */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1111078982?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[100vw] h-[56.25vw]               /* 16:9 basado en ancho */
              min-w-[177.78vh] min-h-[100vh]      /* 16:9 basado en alto */
            "
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#231F20]/50" />

        {/* Contenido encima */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Formamos mujeres líderes que transforman el mundo
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Educación bilingüe de excelencia con valores católicos desde 1991
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
              Solicita Información
            </Button>
            <a
              href="https://preview-fork-of-bilingual-school-website-kzmlp813q3xdyq7zkmk7.vusercontent.net/admisiones"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#AB121C] px-8 py-3 bg-[#0070AF]"
              >
                Proceso de Admisión
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#231F20]">Accesos Rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                label: "Portal Virtual",
                href: "https://www.uedelta.k12.ec/padres/#/login",
                external: true,
              },
              {
                customIcon: "/images/360-grados.png", // Using custom 360 degrees image instead of Globe icon
                label: "Recorrido 360",
                href: "/recorrido-360",
              },
              {
                icon: UtensilsCrossed,
                label: "Servicios",
                href: "/servicios",
                highlight: "Extracurriculares",
                isImportant: true,
              },
              { icon: BookOpen, label: "Últimos Boletines", href: "/boletines" },
            ].map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow cursor-pointer group ${item.isImportant ? "ring-2 ring-[#CC9F62]" : ""}`}
              >
                <CardContent className="p-6 text-center">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                      {item.customIcon ? (
                        <Image
                          src={item.customIcon || "/placeholder.svg"}
                          alt={item.label}
                          width={48}
                          height={48}
                          className="mx-auto mb-4 group-hover:opacity-80 transition-opacity"
                        />
                      ) : (
                        <item.icon className="h-12 w-12 mx-auto mb-4 text-[#AB121C] group-hover:text-[#790002] transition-colors" />
                      )}
                      <p className="font-medium text-[#231F20]">{item.label}</p>
                      {item.highlight && (
                        <Badge className="mt-2 bg-[#CC9F62] text-white text-xs">{item.highlight}</Badge>
                      )}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      {item.customIcon ? (
                        <Image
                          src={item.customIcon || "/placeholder.svg"}
                          alt={item.label}
                          width={48}
                          height={48}
                          className="mx-auto mb-4 group-hover:opacity-80 transition-opacity"
                        />
                      ) : (
                        <item.icon className="h-12 w-12 mx-auto mb-4 text-[#AB121C] group-hover:text-[#790002] transition-colors" />
                      )}
                      <p className="font-medium text-[#231F20]">{item.label}</p>
                      {item.highlight && (
                        <Badge className="mt-2 bg-[#CC9F62] text-white text-xs">{item.highlight}</Badge>
                      )}
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#0070AF] text-white mb-4">Sobre Nosotros</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Más de 30 años formando líderes</h2>

              <p className="text-lg text-gray-600 mb-6">
                Fundado en 1991 por COPECE, el Colegio Delta es una institución educativa católica comprometida con la
                formación integral de mujeres líderes. Nuestra identidad se basa en la excelencia académica, la
                formación en valores y el desarrollo del potencial único de cada estudiante.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Con atención pastoral del Opus Dei, ofrecemos una educación personalizada que prepara a nuestras
                estudiantes para ser protagonistas positivas en la sociedad del siglo XXI.
              </p>
              <Link href="/nosotros">
                <Button className="bg-[#AB121C] hover:bg-[#790002]">
                  Conoce más sobre nosotros
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="images/III-BACH.webp"
                alt="Campus Colegio Delta"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Académico Preview */}
      <section className="py-16 bg-[#C5C9C4]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#CC9F62] text-white mb-4">Académico</Badge>
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">
              Metodología innovadora para una educación de alta calidad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro proyecto educativo se centra en el desarrollo completo de cada estudiante, combinando excelencia
              académica con formación en valores y liderazgo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Preceptoría",
                description: "Acompañamiento personalizado para cada estudiante",
              },
              {
                customIcon: "/images/padre-e-hijo.png", // Using custom parent-child image instead of BookOpen icon
                title: "Formación de Padres",
                description: "Programas MEGs para fortalecer la familia",
              },
              {
                icon: Heart,
                title: "Labor Social SYT",
                description: "Acción Social y CAS - Formación en servicio y compromiso social",
              },
              {
                icon: Award,
                title: "Capellanía",
                description: "Formación espiritual y en valores católicos",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  {item.customIcon ? (
                    <Image
                      src={item.customIcon || "/placeholder.svg"}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="mx-auto mb-4"
                    />
                  ) : (
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                  )}
                  <h3 className="font-bold mb-2 text-[#231F20]">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/proyecto-educativo">
              <Button
                variant="outline"
                className="border-[#AB121C] text-[#AB121C] hover:bg-[#AB121C] hover:text-white bg-transparent"
              >
                Ver Proyecto Educativo Completo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Women Leadership Section */}
      <section className="py-16 bg-gradient-to-br from-[#AB121C]/5 to-[#CC9F62]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Image
              src="/images/women-leadership.jpg"
              alt="Women Leadership Delta"
              width={350}
              height={100}
              className="mx-auto mb-6 object-contain"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Formamos mujeres líderes que transformen el mundo en un lugar más humano, justo y solidario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Propósito */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#AB121C]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 mr-3 text-[#AB121C]" />
                  <h3 className="text-lg font-bold text-[#231F20]">PROPÓSITO</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Formar mujeres líderes que transformen el mundo en un lugar más humano, justo y solidario.
                </p>
              </CardContent>
            </Card>

            {/* Misión */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#CC9F62]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Compass className="h-8 w-8 mr-3 text-[#CC9F62]" />
                  <h3 className="text-lg font-bold text-[#231F20]">MISIÓN</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Educación personalizada con currículo exigente, formando mujeres con identidad cristiana capaces de
                  liderar y transformar la sociedad.
                </p>
              </CardContent>
            </Card>

            {/* Visión */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#0070AF]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 mr-3 text-[#0070AF]" />
                  <h3 className="text-lg font-bold text-[#231F20]">VISIÓN</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ser referente internacional de innovación pedagógica en la educación personalizada y diferenciada.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores Resumidos */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#231F20] mb-6">NUESTROS VALORES</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Servir para trascender",
                "Preocupación por la persona",
                "Libertad",
                "Valentía",
                "Alegría",
                "Creatividad",
              ].map((valor, index) => (
                <Badge key={index} variant="outline" className="border-[#AB121C] text-[#AB121C] px-4 py-2 text-sm">
                  {valor}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manifiesto de la Mujer Delta section */}
      <section className="py-16 bg-gradient-to-br from-[#AB121C]/5 via-white to-[#CC9F62]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#AB121C] to-[#CC9F62] rounded-full mb-6">
              <Crown className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-[#231F20] font-serif">Manifiesto de la Mujer Delta</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#AB121C] to-[#CC9F62] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formamos mujeres líderes con características distintivas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Pensadoras y Creativas */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#AB121C]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-8 w-8 mr-3 text-[#AB121C]" />
                    <h3 className="text-lg font-bold text-[#231F20]">Pensadoras y Creativas</h3>
                  </div>
                  <p className="text-gray-600">
                    Mujeres reflexivas que inspiran mejoras en su entorno a través de la creatividad e innovación.
                  </p>
                </CardContent>
              </Card>

              {/* Valientes y Comprometidas */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#CC9F62]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Sword className="h-8 w-8 mr-3 text-[#CC9F62]" />
                    <h3 className="text-lg font-bold text-[#231F20]">Valientes y Comprometidas</h3>
                  </div>
                  <p className="text-gray-600">Defienden la verdad, la vida y la familia con valentía y convicción.</p>
                </CardContent>
              </Card>

              {/* Excelentes y Equilibradas */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#0070AF]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-8 w-8 mr-3 text-[#0070AF]" />
                    <h3 className="text-lg font-bold text-[#231F20]">Excelentes y Equilibradas</h3>
                  </div>
                  <p className="text-gray-600">
                    Buscan la excelencia tanto en el ámbito profesional como en la vida familiar.
                  </p>
                </CardContent>
              </Card>

              {/* Líderes Transformadoras */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#25D366]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Crown className="h-8 w-8 mr-3 text-[#25D366]" />
                    <h3 className="text-lg font-bold text-[#231F20]">Líderes Transformadoras</h3>
                  </div>
                  <p className="text-gray-600">
                    Solidarias, resilientes y proactivas, transforman el mundo en un lugar más humano y justo.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Compromiso Final */}
            <Card className="bg-gradient-to-br from-[#AB121C] to-[#CC9F62] border-none text-white">
              <CardContent className="p-8 text-center">
                <Crown className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">Nuestro Compromiso</h3>
                <p className="text-lg leading-relaxed max-w-2xl mx-auto opacity-95">
                  Formamos mujeres íntegras que marcan la diferencia en sus familias, profesiones y comunidades, siendo
                  agentes de cambio positivo en el mundo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programas Académicos Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="images/excelencia-academica-secundaria.webp"
                alt="Programas Académicos"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#0070AF] text-white mb-4">Programas Académicos</Badge>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Siempre Familia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ofrecemos una educación integral desde preescolar hasta III Bachillerato, culminando con el prestigioso
                Programa del Bachillerato Internacional (IB). Nuestro enfoque desarrolla habilidades del siglo XXI,
                pensamiento crítico y liderazgo personal.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Metodologías innovadoras y aprendizaje experiencial</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Programa CAS: Creatividad, Actividad y Servicio</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Formación en valores y desarrollo personal</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Currículo Socioemocional</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#CC9F62] mr-3" />
                  <span className="text-gray-700">Formación</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#231F20]">Familia</h3>
                <div className="flex gap-6">
                  <Link href="https://predelta.edu.ec/" target="_blank" className="flex justify-center items-center">
                    <Image
                      src="/images/logo-presco.png"
                      alt="Presco"
                      width={80} // ajusta según lo grande que quieras el logo
                      height={60}
                      className="object-contain hover:opacity-80 transition"
                    />
                  </Link>

                  <Link href="https://torremar.edu.ec/" target="_blank" className="flex justify-center items-center">
                    <Image
                      src="/images/torremar-logo.webp"
                      alt="Torremar"
                      width={140}
                      height={60}
                      className="object-contain hover:opacity-80 transition"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programas-academicos">
                  <Button className="bg-[#AB121C] hover:bg-[#790002]">
                    Explorar Programas Académicos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/siempre-familia">
                  <Button
                    variant="outline"
                    className="border-[#CC9F62] text-[#CC9F62] hover:bg-[#CC9F62] hover:text-white bg-transparent"
                  >
                    Siempre Familia
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vida Escolar Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#CC9F62] text-white mb-4">Vida Escolar</Badge>
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Formación Integral Más Allá del Aula</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestras estudiantes participan en una amplia variedad de actividades extracurriculares que complementan
              su formación académica y desarrollan sus talentos únicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {["Clubes Deportivos", "Artes y Música", "Ciencia y Tecnología", "Liderazgo y Servicio"].map(
              (activity, index) => {
                const activityImages = [
                  "/images/club-deportivo-vida-escolar.webp", // Clubes Deportivos
                  "/images/arte-vida-escolar.webp", // Artes y Música
                  "/images/ciencia-vida-escolar.webp", // Ciencia y Tecnología
                  "/images/liderazgo-vida-escolar.webp", // Liderazgo y Servicio
                ]

                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="relative h-32 w-full bg-gradient-to-br from-[#AB121C]/10 to-[#CC9F62]/10 rounded-lg mb-4 overflow-hidden">
                        <Image
                          src={activityImages[index] || "/placeholder.svg"}
                          alt={activity}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="font-bold text-[#231F20]">{activity}</h3>
                    </CardContent>
                  </Card>
                )
              },
            )}
          </div>

          <div className="text-center">
            <Link href="/vida-escolar">
              <Button
                variant="outline"
                className="border-[#AB121C] text-[#AB121C] hover:bg-[#AB121C] hover:text-white bg-transparent"
              >
                Ver Todas las Actividades
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
      {/* Testimonios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">
              Lo que dicen nuestras estudiantes y familias
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "María José Rodríguez",
                role: "Exalumna - Promoción 2020",
                quote:
                  "Delta me formó como líder y me preparó para enfrentar los desafíos universitarios con confianza.",
              },
              {
                name: "Ana Lucía Mendoza",
                role: "Madre de Familia",
                quote:
                  "La formación integral que recibe mi hija en Delta es excepcional. Los valores y la excelencia académica van de la mano.",
              },
              {
                name: "Sofía Vásquez",
                role: "Estudiante IB",
                quote:
                  "El programa IB me ha abierto puertas a universidades internacionales. Estoy muy agradecida con mis profesores.",
              },
              {
                name: "Carmen Flores",
                role: "Exalumna - Promoción 2018",
                quote: "Las habilidades de liderazgo que desarrollé en Delta me han ayudado en mi carrera profesional.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#CC9F62] text-[#CC9F62]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-[#231F20]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#CC9F62]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">¿Lista para formar parte de la familia Delta?</h2>
              <p className="text-xl mb-8 opacity-90">
                Contáctanos para conocer más sobre nuestro proceso de admisión y descubrir cómo podemos acompañar el
                crecimiento de tu hija.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90">
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
                  WhatsApp
                </Button>
                <a href="mailto:infodelta@uedelta.k12.ec">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#AB121C] bg-transparent"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Email
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>X42H+8JJ, Av. Samborondón, Guayaquil 091910, Ecuador</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(+593-4) 2590720</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <a href="mailto:infodelta@uedelta.k12.ec" className="hover:text-[#231F20] transition-colors">
                    infodelta@uedelta.k12.ec
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
