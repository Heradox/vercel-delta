import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Users,
  Target,
  Eye,
  Star,
  Mail,
  ChevronRight,
  Crown,
  Lightbulb,
  Sword,
  Trophy,
  Compass,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NosotrosPage() {
  const valores = [
    {
      title: "Servir para trascender",
      description: "Excelencia, trabajo bien hecho, transformación social",
    },
    {
      title: "Preocupación por la persona",
      description: "Formación integral, trato cercano, alegre y familiar",
    },
    {
      title: "Libertad",
      description: "Asumida con responsabilidad y fe",
    },
    {
      title: "Valentía",
      description: "Compromiso con la verdad y liderazgo",
    },
    {
      title: "Alegría",
      description: "Virtud cristiana esencial",
    },
    {
      title: "Creatividad",
      description: "Motor de innovación y adaptación",
    },
  ]

  const equipoDirectivo = [
    {
      nombre: "Daniella Medina de Massúh",
      cargo: "Directora General",
      email: "dmedina@uedelta.edu.ec",
    },
    {
      nombre: "Lissette Faggioni de Jurado",
      cargo: "Directora Administrativa y Financiera",
      email: "lfaggioni@uedelta.edu.ec",
    },
    {
      nombre: "Katherine Guerrero Abad",
      cargo: "Directora Académica",
      email: "kguerrero@uedelta.edu.ec",
    },
    {
      nombre: "Gisella Casal de Grunauer",
      cargo: "Formación y Familia",
      email: "gcasal@uedelta.edu.ec",
    },
    {
      nombre: "Carlota Alvarado de Illingworth",
      cargo: "Coordinadora Básica",
      email: "calvarado@uedelta.edu.ec",
    },
    {
      nombre: "Daniela Portugal Martínez",
      cargo: "Coordinadora Bachillerato",
      email: "dportugal@uedelta.edu.ec",
    },
    {
      nombre: "Alicia Yépez de Tumbaco",
      cargo: "Coordinadora DECE",
      email: "ayepezm@uedelta.edu.ec",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/consejo-estudiantil.webp')",
        }}
      >
        <div className="absolute inset-0 bg-[#231F20]/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Sobre Nosotros</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Más de 30 años formando líderes</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Una institución comprometida con la excelencia educativa y la formación integral de mujeres líderes
            </p>
          </div>
        </div>
      </section>

      {/* Historia del Colegio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Historia del Colegio</h2>
              <p className="text-lg text-gray-600 mb-6">
                El Colegio Delta fue fundado en 1991 por COPECE (Corporación de Promoción Educativa y Cultural del
                Ecuador), con el objetivo de ofrecer una educación integral de calidad que combine la excelencia
                académica con la formación en valores católicos.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Desde sus inicios, nuestra institución ha estado comprometida con la formación de mujeres líderes,
                capaces de transformar positivamente la sociedad. Con más de tres décadas de experiencia, hemos graduado
                generaciones de estudiantes que destacan en diversas áreas profesionales y sociales.
              </p>
              <p className="text-lg text-gray-600">
                La atención pastoral del Opus Dei enriquece nuestra propuesta educativa, proporcionando un marco
                espiritual sólido que complementa la formación académica y humana de nuestras estudiantes.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/historia-delta.webp"
                alt="Graduación III Bachillerato - Generación de estudiantes Delta"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COPECE y Misión */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="images/opus-dai-cofece.jpeg"
                alt="Fundación COPECE"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Fundación COPECE</h2>
              <p className="text-lg text-gray-600 mb-6">
                COPECE es una corporación sin fines de lucro dedicada a la promoción educativa y cultural en Ecuador. Su
                misión es contribuir al desarrollo integral de la persona humana a través de la educación, promoviendo
                valores éticos y cristianos.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                La fundación se caracteriza por su compromiso con la excelencia educativa, la innovación pedagógica y la
                formación integral que abarca las dimensiones intelectual, moral, espiritual y social de la persona.
              </p>
              <div className="bg-[#AB121C]/10 p-6 rounded-lg">
                <h3 className="font-bold text-[#AB121C] mb-3">Atención Pastoral - Opus Dei</h3>
                <p className="text-gray-700">
                  La atención pastoral del Opus Dei enriquece nuestra propuesta educativa con una sólida formación
                  espiritual y moral, ayudando a las estudiantes a desarrollar una visión cristiana de la vida y del
                  trabajo profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito, Misión, Visión */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Nuestro Propósito, Misión y Visión</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                <h3 className="text-xl font-bold mb-4 text-[#231F20]">Propósito</h3>
                <p className="text-gray-600">
                  Formar mujeres íntegras, líderes y comprometidas con la transformación positiva de la sociedad, a
                  través de una educación de excelencia basada en valores católicos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                <h3 className="text-xl font-bold mb-4 text-[#231F20]">Misión</h3>
                <p className="text-gray-600">
                  La Unidad Educativa Bilingüe Delta forma mujeres con identidad cristiana, capaces de liderar y
                  transformar para bien la sociedad que les toque vivir, a través de una educación personalizada, con un
                  currículo académicamente exigente y en estrecha colaboración con los padres de familia.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                <h3 className="text-xl font-bold mb-4 text-[#231F20]">Visión</h3>
                <p className="text-gray-600">
                  Ser referente internacional de innovación pedagógica en la educación personalizada y diferenciada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores Delta */}
      <section className="py-16 bg-[#C5C9C4]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Valores Delta</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestros valores fundamentales guían cada aspecto de la formación que ofrecemos, creando un ambiente
              educativo que promueve el crecimiento integral de nuestras estudiantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Star className="h-6 w-6 text-[#CC9F62] mr-3" />
                    <h3 className="font-bold text-[#231F20]">{valor.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manifiesto de la Mujer Delta */}
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

      {/* Certificación EFQM */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Certificación EFQM</h2>
              <p className="text-lg text-gray-600 mb-6">
                El Delta es la primera institución educativa en América Latina en alcanzar más de 600 puntos en el
                Modelo Europeo de Excelencia EFQM (2019). Reconocimiento de excelencia en gestión educativa y resultados
                académicos y sociales.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Esta certificación valida nuestros procesos de calidad, la satisfacción de nuestras familias, el
                desarrollo profesional de nuestro equipo docente y los resultados académicos de nuestras estudiantes.
              </p>
              <div className="bg-[#0070AF]/10 p-6 rounded-lg">
                <h3 className="font-bold text-[#0070AF] mb-3">Modelo Europeo de Excelencia</h3>
                <p className="text-gray-700">
                  El modelo EFQM nos permite evaluar y mejorar continuamente nuestros procesos educativos, asegurando
                  que cumplimos con los más altos estándares internacionales de calidad educativa.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="images/efqm-logo.jpg?height=300&width=300"
                alt="Certificación EFQM"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#231F20] font-serif">Equipo Directivo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo directivo está conformado por profesionales altamente calificados, comprometidos con la
              excelencia educativa y el desarrollo integral de nuestras estudiantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipoDirectivo.map((miembro, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#CC9F62] to-[#CC9F62] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-[#231F20] mb-2">{miembro.nombre}</h3>
                  <p className="text-[#CC9F62] font-medium mb-3">{miembro.cargo}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#0070AF] text-[#0070AF] hover:bg-[#0070AF] hover:text-white bg-transparent"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contactar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">
            ¿Quieres conocer más sobre nuestra propuesta educativa?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Te invitamos a descubrir cómo formamos mujeres líderes que transforman el mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/proyecto-educativo">
              <Button size="lg" className="bg-[#CC9F62] hover:bg-[#CC9F62]/90">
                Ver Proyecto Educativo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#AB121C] bg-transparent"
              >
                Agendar Visita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
