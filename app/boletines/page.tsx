import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search, Calendar, Bus, UtensilsCrossed, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function BoletinesPage() {
  const boletines = [
    {
      titulo: "Boletín Informativo - Marzo 2024",
      fecha: "15 Mar 2024",
      descripcion: "Información sobre actividades del mes, calendario académico y eventos especiales",
      archivo: "boletin-marzo-2024.pdf",
    },
    {
      titulo: "Circular - Reunión de Padres",
      fecha: "08 Mar 2024",
      descripcion: "Convocatoria a reunión general de padres de familia para el mes de marzo",
      archivo: "circular-reunion-padres.pdf",
    },
    {
      titulo: "Boletín Informativo - Febrero 2024",
      fecha: "15 Feb 2024",
      descripcion: "Novedades académicas, actividades extracurriculares y logros estudiantiles",
      archivo: "boletin-febrero-2024.pdf",
    },
    {
      titulo: "Comunicado - Horarios de Transporte",
      fecha: "05 Feb 2024",
      descripcion: "Actualización de horarios y rutas del servicio de transporte escolar",
      archivo: "comunicado-transporte.pdf",
    },
    {
      titulo: "Boletín Informativo - Enero 2024",
      fecha: "15 Jan 2024",
      descripcion: "Inicio del año lectivo, bienvenida y actividades programadas",
      archivo: "boletin-enero-2024.pdf",
    },
    {
      titulo: "Circular - Uniformes Escolares",
      fecha: "20 Dec 2023",
      descripcion: "Información sobre uniformes, proveedores autorizados y fechas importantes",
      archivo: "circular-uniformes.pdf",
    },
  ]

  const accesosRapidos = [
    {
      titulo: "Portal Virtual",
      descripcion: "Accede a calificaciones, tareas y comunicaciones",
      icono: GraduationCap,
      href: "https://www.uedelta.k12.ec/padres/#/login",
      color: "text-[#0070AF]",
      external: true,
    },
    {
      titulo: "Transporte",
      descripcion: "Información sobre rutas y horarios",
      icono: Bus,
      href: "/servicios#transporte",
      color: "text-[#CC9F62]",
    },
    {
      titulo: "Comedor",
      descripcion: "Menús y servicios alimentarios",
      icono: UtensilsCrossed,
      href: "/servicios#comedor",
      color: "text-[#AB121C]",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#0070AF] text-white mb-4">Para Padres Actuales</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-[#231F20]">Boletines Informativos</h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Novedades, circulares y comunicados oficiales del Colegio Delta
            </p>
          </div>
        </div>
      </section>

      {/* Buscador */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Buscar boletines por título o fecha..." className="pl-10 pr-4 py-3 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Últimos Boletines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#231F20] font-serif">Últimos Boletines</h2>

            <div className="space-y-4">
              {boletines.map((boletin, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#AB121C]/10 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-[#AB121C]" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#231F20] mb-2">{boletin.titulo}</h3>
                          <p className="text-gray-600 mb-3">{boletin.descripcion}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{boletin.fecha}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <Button size="sm" className="bg-[#0070AF] hover:bg-[#0070AF]/90">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Anterior
                </Button>
                <Button size="sm" className="bg-[#AB121C] hover:bg-[#790002]">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#231F20] font-serif text-center">Accesos Rápidos</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {accesosRapidos.map((acceso, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    {acceso.external ? (
                      <a href={acceso.href} target="_blank" rel="noopener noreferrer" className="block">
                        <acceso.icono className={`h-12 w-12 mx-auto mb-4 ${acceso.color}`} />
                        <h3 className="font-bold mb-2 text-[#231F20]">{acceso.titulo}</h3>
                        <p className="text-gray-600 text-sm">{acceso.descripcion}</p>
                      </a>
                    ) : (
                      <Link href={acceso.href}>
                        <acceso.icono className={`h-12 w-12 mx-auto mb-4 ${acceso.color}`} />
                        <h3 className="font-bold mb-2 text-[#231F20]">{acceso.titulo}</h3>
                        <p className="text-gray-600 text-sm">{acceso.descripcion}</p>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#0070AF]/5 to-[#AB121C]/5">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 mx-auto mb-6 text-[#AB121C]" />
                <h3 className="text-2xl font-bold mb-4 text-[#231F20]">¿No encuentras lo que buscas?</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Si necesitas información específica o tienes alguna consulta sobre los boletines informativos, no
                  dudes en contactarnos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:infodelta@uedelta.k12.ec">
                    <Button className="bg-[#0070AF] hover:bg-[#0070AF]/90">Contactar Secretaría</Button>
                  </a>
                  <Button
                    variant="outline"
                    className="border-[#AB121C] text-[#AB121C] hover:bg-[#AB121C] hover:text-white bg-transparent"
                  >
                    Ver Archivo Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
