"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bus,
  UtensilsCrossed,
  Heart,
  Shield,
  Phone,
  Clock,
  Users,
  CheckCircle,
  Star,
  Mail,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react"
import Image from "next/image"

export default function ServiciosPage() {
  const rutasTransporte = [
    { zona: "Norte", sectores: "Urdesa, Las Peñas, Kennedy Norte", horario: "6:30 AM - 4:30 PM" },
    { zona: "Centro", sectores: "9 de Octubre, Malecón, Centro Histórico", horario: "6:45 AM - 4:15 PM" },
    { zona: "Sur", sectores: "Guayacanes, Sauces, Vía a la Costa", horario: "6:15 AM - 4:45 PM" },
    { zona: "Este", sectores: "Samanes, Entreríos, Vía Daule", horario: "6:20 AM - 4:40 PM" },
    { zona: "Oeste", sectores: "Ceibos, Puerto Azul, Vía a Salinas", horario: "6:00 AM - 5:00 PM" },
  ]

  const menuSemanal = [
    {
      dia: "Lunes",
      desayuno: "Yogurt con granola y frutas",
      almuerzo: "Pollo a la plancha con arroz y ensalada",
      merienda: "Sandwich integral con jamón y queso",
    },
    {
      dia: "Martes",
      desayuno: "Tostadas integrales con palta",
      almuerzo: "Pescado al vapor con quinoa y vegetales",
      merienda: "Fruta fresca y galletas integrales",
    },
    {
      dia: "Miércoles",
      desayuno: "Batido de frutas con avena",
      almuerzo: "Pasta integral con salsa de tomate natural",
      merienda: "Wrap de pollo y vegetales",
    },
    {
      dia: "Jueves",
      desayuno: "Huevos revueltos con pan integral",
      almuerzo: "Carne magra con puré de papas y brócoli",
      merienda: "Smoothie de frutas tropicales",
    },
    {
      dia: "Viernes",
      desayuno: "Pancakes integrales con miel",
      almuerzo: "Pollo al horno con arroz integral y ensalada",
      merienda: "Mix de frutos secos y frutas",
    },
  ]

  const canalesAtencion = [
    {
      canal: "WhatsApp Institucional",
      descripcion: "Atención inmediata para consultas generales",
      contacto: "+593 99 xxx xxxx",
      horario: "7:00 AM - 6:00 PM",
      icono: "whatsapp", // Using custom WhatsApp icon instead of MessageCircle
    },
    {
      canal: "Correo Electrónico",
      descripcion: "Para consultas detalladas y documentación",
      contacto: "info@colegiodelta.edu.ec",
      horario: "Respuesta en 24 horas",
      icono: Mail,
    },
    {
      canal: "Teléfono Principal",
      descripcion: "Línea directa para emergencias y urgencias",
      contacto: "+593 4 269-0100",
      horario: "7:00 AM - 5:00 PM",
      icono: Phone,
    },
    {
      canal: "Atención Presencial",
      descripcion: "Oficina de atención a padres de familia",
      contacto: "Campus Delta - Recepción",
      horario: "7:30 AM - 4:00 PM",
      icono: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
  className="relative py-20 bg-[#231F20]/50 text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/images/coro-frances.webp')" }}
>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <Badge className="bg-white/20 text-white mb-4">Servicios</Badge>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
        Servicios Integrales para tu Tranquilidad
      </h1>
      <p className="text-xl md:text-2xl opacity-90">
        Ofrecemos servicios complementarios que facilitan la vida escolar y brindan seguridad a las familias
      </p>
    </div>
  </div>
</section>


      {/* Servicios Principales */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="extracurriculares" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="extracurriculares" className="relative">
                <div className="flex items-center">Extracurriculares</div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#CC9F62] rounded-full"></div>
              </TabsTrigger>
              <TabsTrigger value="transporte">Transporte</TabsTrigger>
              <TabsTrigger value="comedor">Comedor</TabsTrigger>
              <TabsTrigger value="medico">Dept. Médico</TabsTrigger>
              <TabsTrigger value="atencion">Atención</TabsTrigger>
            </TabsList>

            <TabsContent value="extracurriculares" className="mt-8">
              <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center">
                  <div className="inline-flex items-center bg-[#CC9F62]/10 px-4 py-2 rounded-full mb-4">
                    <span className="text-[#CC9F62] font-semibold">Servicio Destacado</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#231F20] mb-4">Clubes y Extracurriculares</h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    Los clubes y extracurriculares brindan a las estudiantes oportunidades que aportan a su formación
                    integral mediante la ejecución de actividades lúdicas y experienciales que contribuyen al
                    descubrimiento y desarrollo de habilidades y talentos, respetando sus preferencias, intereses y
                    diferencias.
                  </p>
                </div>

                {/* Extracurriculares Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-[#CC9F62]/20">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <Users className="h-8 w-8 text-[#CC9F62] mr-3" />
                        <h3 className="text-2xl font-bold text-[#231F20]">Extracurriculares</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          {
                            name: "Gimnasia Artística",
                            icon: "🤸‍♀️",
                            customIcon: "/images/postura-de-gimnasta-artistica-con-cinta.png",
                          },
                          { name: "Atletismo", icon: "🏃‍♀️", customIcon: "/images/corriendo.png" },
                          { name: "Volley", icon: "🏐", customIcon: "/images/voleibol.png" },
                          { name: "Basket", icon: "🏀", customIcon: "/images/deportes.png" },
                          {
                            name: "Tiro con Arco",
                            icon: "🏹",
                            customIcon: "/images/cazador-de-caza-con-arco-y-flecha.png",
                          },
                          {
                            name: "Art Sessions",
                            icon: "🎨",
                            customIcon: "/images/herramientas-artisticas-para-pintar-con-pincel-y-lienzo.png",
                          },
                          { name: "Robótica", icon: "🤖", customIcon: "/images/brazo-robotico.png" },
                          { name: "Beach Tennis", icon: "🎾", customIcon: "/images/raqueta.png" },
                          { name: "Pequeñas Exploradoras", icon: "🔍", customIcon: "/images/busqueda-de-lupa.png" },
                          { name: "Flamenco", icon: "💃", customIcon: "/images/bailaora-de-flamenco.png" },
                          { name: "Hip Hop", icon: "🎵", customIcon: "/images/hip-hop.png" },
                          { name: "Orquesta", icon: "🎼", customIcon: "/images/director-de-orquesta-con-baston.png" },
                          { name: "Violín", icon: "🎻", customIcon: "/images/violin.png" },
                          { name: "Escritura", icon: "✍️", customIcon: "/images/escritura.png" },
                          { name: "Ted Oratoria", icon: "🎤", customIcon: "/images/hablar-en-publico.png" },
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-[#CC9F62]/10 transition-colors"
                          >
                            {activity.customIcon ? (
                              <Image
                                src={activity.customIcon || "/placeholder.svg"}
                                alt={activity.name}
                                width={24}
                                height={24}
                                className="mr-3"
                              />
                            ) : (
                              <span className="text-2xl mr-3">{activity.icon}</span>
                            )}
                            <span className="text-gray-700 font-medium">{activity.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#0070AF]/20">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <Award className="h-8 w-8 text-[#0070AF] mr-3" />
                        <h3 className="text-2xl font-bold text-[#231F20]">Clubes</h3>
                      </div>

                      <div className="space-y-3">
                        {[
                          { name: "Club de Matemáticas", icon: "🔢", customIcon: "/images/funcion.png" },
                          { name: "Coro", icon: "🎵", customIcon: "/images/usuarios.png" },
                          { name: "Pre Canticorum", icon: "🎶", customIcon: "/images/nota-musical.png" },
                          { name: "Canticorum", icon: "🎼", customIcon: "/images/musica.png" },
                          { name: "Banda Musical", icon: "🎺", customIcon: "/images/banda.png" },
                          { name: "ONU", icon: "🌍", customIcon: "/images/en-todo-el-mundo.png" },
                          { name: "Proyecto Vivero", icon: "🌱", customIcon: "/images/planta.png" },
                          { name: "Paper Town", icon: "📰", customIcon: "/images/periodico.png" },
                          { name: "Deltratonics", icon: "⚡", customIcon: "/images/destello.png" },
                        ].map((club, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-[#0070AF]/10 transition-colors"
                          >
                            {club.customIcon ? (
                              <Image
                                src={club.customIcon || "/placeholder.svg"}
                                alt={club.name}
                                width={24}
                                height={24}
                                className="mr-3"
                              />
                            ) : (
                              <span className="text-2xl mr-3">{club.icon}</span>
                            )}
                            <span className="text-gray-700 font-medium">{club.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Registration Section */}
                <Card className="bg-gradient-to-r from-[#CC9F62]/10 to-[#0070AF]/10 border-[#CC9F62]/30">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#231F20] mb-4">¡Inscribe a tu hija hoy!</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                      Contacta a nuestra coordinadora de actividades extracurriculares para más información y proceso de
                      inscripción.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <div className="text-center">
                        <p className="font-semibold text-[#231F20]">Andrea Neira</p>
                        <p className="text-sm text-gray-600">Coordinadora de Extracurriculares</p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                          onClick={() => window.open("https://wa.me/593939023650", "_blank")}
                        >
                          <Image src="/images/whatsapp.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                          WhatsApp: 0939023650
                        </Button>

                        <Button
                          variant="outline"
                          className="border-[#CC9F62] text-[#CC9F62] hover:bg-[#CC9F62] hover:text-white bg-transparent"
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Descargar PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transporte" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Bus className="h-8 w-8 text-[#0070AF] mr-3" />
                      <h2 className="text-2xl font-bold text-[#231F20]">Transporte Escolar</h2>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Nuestro servicio de transporte escolar garantiza la seguridad y puntualidad en el traslado de las
                      estudiantes, cubriendo las principales zonas de Guayaquil.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <span className="text-gray-700">Unidades con GPS y cámaras de seguridad</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <span className="text-gray-700">Conductores certificados y auxiliares capacitadas</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <span className="text-gray-700">Horarios flexibles y rutas optimizadas</span>
                      </div>
                      <div className="flex items-center">
                        <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-3" />
                        <span className="text-gray-700">Comunicación constante con padres vía WhatsApp</span>
                      </div>
                    </div>

                    <Button className="bg-[#25D366] hover:bg-[#25D366]/90">
                      <Image src="/images/whatsapp.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                      Solicitar Información
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="bg-[#0070AF]/10">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-[#0070AF] mb-3">Contacto Transporte</h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Coordinador:</strong> Sr. Carlos Mendoza
                        </p>
                        <p>
                          <strong>WhatsApp:</strong> +593 99 xxx xxxx
                        </p>
                        <p>
                          <strong>Email:</strong> transporte@colegiodelta.edu.ec
                        </p>
                        <p>
                          <strong>Horario:</strong> Lunes a Viernes 6:00 AM - 6:00 PM
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comedor" className="mt-8">
  <div className="grid lg:grid-cols-2 gap-8">
    {/* Card 1 */}
    <Card className="flex-1">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <UtensilsCrossed className="h-8 w-8 text-[#CC9F62] mr-3" />
          <h2 className="text-2xl font-bold text-[#231F20]">Comedor "Full of Grace"</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Nuestro comedor escolar ofrece alimentación balanceada y nutritiva, preparada con ingredientes
          frescos y siguiendo estrictos estándares de calidad e higiene.
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center">
            <Heart className="h-5 w-5 text-[#CC9F62] mr-3" />
            <span className="text-gray-700">Menús balanceados supervisados por nutricionista</span>
          </div>
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-[#CC9F62] mr-3" />
            <span className="text-gray-700">Certificación HACCP en manipulación de alimentos</span>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-[#CC9F62] mr-3" />
            <span className="text-gray-700">Opciones para dietas especiales y alergias</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-[#CC9F62] mr-3" />
            <span className="text-gray-700">Ambiente acogedor y supervisión constante</span>
          </div>
        </div>

        <Button className="bg-[#25D366] hover:bg-[#25D366]/90">
          <Calendar className="mr-2 h-4 w-4" />
          Más Información
        </Button>
      </CardContent>
    </Card>

    {/* Card 2 */}
    <Card className="flex-1 bg-[#CC9F62]/10">
      <CardContent className="p-6">
        <h3 className="font-bold text-[#CC9F62] mb-3">Información del Servicio</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Horarios:</strong>
          </p>
          <p>• Desayuno: 7:00 AM - 8:00 AM</p>
          <p>• Almuerzo: 12:00 PM - 1:30 PM</p>
          <p>• Merienda: 2:30 PM - 3:30 PM</p>
          <p>
            <strong>Contacto:</strong> comedor@colegiodelta.edu.ec
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</TabsContent>


            <TabsContent value="medico" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Heart className="h-8 w-8 text-[#AB121C] mr-3" />
                      <h2 className="text-2xl font-bold text-[#231F20]">Departamento Médico</h2>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Contamos con un departamento médico equipado para atender emergencias menores y brindar primeros
                      auxilios, garantizando la salud y bienestar de nuestras estudiantes.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <span className="text-gray-700">Enfermera profesional de tiempo completo</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <span className="text-gray-700">Equipamiento médico básico y botiquín completo</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <span className="text-gray-700">Protocolo de emergencias y comunicación inmediata</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#CC9F62] mr-3" />
                        <span className="text-gray-700">Seguimiento de estudiantes con condiciones especiales</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-[#AB121C] mb-4">Seguro Estudiantil</h3>
                      <p className="text-gray-600 mb-4">
                        Todas nuestras estudiantes cuentan con seguro estudiantil que cubre:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-[#CC9F62] mr-2" />
                          <span>Accidentes dentro del plantel</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-[#CC9F62] mr-2" />
                          <span>Actividades extracurriculares</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-[#CC9F62] mr-2" />
                          <span>Transporte escolar</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-[#CC9F62] mr-2" />
                          <span>Salidas pedagógicas</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-[#0070AF] mb-4">Servicio de Ambulancia</h3>
                      <p className="text-gray-600 mb-4">
                        En caso de emergencias mayores, contamos con servicio de ambulancia disponible las 24 horas.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>Emergencias:</strong> 911 o +593 4 269-0100 Ext. 100
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="atencion" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[#231F20] mb-4">Canales de Atención para Padres</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Ponemos a tu disposición múltiples canales de comunicación para resolver tus consultas y mantenerte
                    informado sobre la vida escolar de tu hija.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {canalesAtencion.map((canal, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        {canal.icono === "whatsapp" ? (
                          <Image
                            src="/images/whatsapp-dorado.png"
                            alt="WhatsApp"
                            width={48}
                            height={48}
                            className="mx-auto mb-4"
                          />
                        ) : (
                          <canal.icono className="h-12 w-12 mx-auto mb-4 text-[#AB121C]" />
                        )}
                        <h3 className="font-bold text-[#231F20] mb-2">{canal.canal}</h3>
                        <p className="text-gray-600 text-sm mb-3">{canal.descripcion}</p>
                        <div className="space-y-1 text-xs text-gray-500">
                          <p>
                            <strong>{canal.contacto}</strong>
                          </p>
                          <p>{canal.horario}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-[#0070AF]/5 to-[#AB121C]/5">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-xl font-bold text-[#231F20] mb-4">Compromiso con la Comunicación</h3>
                        <p className="text-gray-600 mb-4">
                          En Delta valoramos la comunicación fluida con las familias. Nuestro equipo está siempre
                          disponible para atender sus consultas, sugerencias y necesidades.
                        </p>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>• Respuesta garantizada en menos de 24 horas</p>
                          <p>• Atención personalizada y profesional</p>
                          <p>• Seguimiento de casos hasta su resolución</p>
                          <p>• Comunicación proactiva sobre eventos importantes</p>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Equipo de Atención"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">¿Necesitas más información sobre nuestros servicios?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nuestro equipo está listo para resolver todas tus dudas y ayudarte a elegir los servicios que mejor se
            adapten a las necesidades de tu familia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
              Contactar por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0070AF] bg-transparent"
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
