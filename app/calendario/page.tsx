"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function CalendarioPage() {
  const [currentMonth, setCurrentMonth] = useState("Marzo 2024")

  const eventos = [
    {
      fecha: "25 Mar",
      dia: "Lunes",
      titulo: "Reunión de Padres - Inicial",
      hora: "8:00 AM",
      descripcion: "Reunión informativa para padres de Educación Inicial",
      categoria: "reunion",
      color: "bg-[#0070AF]",
    },
    {
      fecha: "28 Mar",
      dia: "Jueves",
      titulo: "Feria de Ciencias",
      hora: "9:00 AM - 3:00 PM",
      descripcion: "Exposición de proyectos científicos de todas las secciones",
      categoria: "academico",
      color: "bg-[#CC9F62]",
    },
    {
      fecha: "01 Abr",
      dia: "Lunes",
      titulo: "Inicio Segundo Parcial",
      hora: "Todo el día",
      descripcion: "Inicio del segundo parcial del segundo quimestre",
      categoria: "academico",
      color: "bg-[#AB121C]",
    },
    {
      fecha: "05 Abr",
      dia: "Viernes",
      titulo: "Día del Deporte",
      hora: "8:00 AM - 4:00 PM",
      descripcion: "Actividades deportivas y competencias inter-casas",
      categoria: "deportivo",
      color: "bg-[#790002]",
    },
    {
      fecha: "10 Abr",
      dia: "Miércoles",
      titulo: "Exámenes Parciales",
      hora: "8:00 AM - 12:00 PM",
      descripcion: "Evaluaciones del segundo parcial",
      categoria: "examenes",
      color: "bg-[#AB121C]",
    },
    {
      fecha: "15 Abr",
      dia: "Lunes",
      titulo: "Semana Cultural",
      hora: "Todo el día",
      descripcion: "Celebración de la diversidad cultural con actividades especiales",
      categoria: "cultural",
      color: "bg-[#CC9F62]",
    },
    {
      fecha: "01 May",
      dia: "Miércoles",
      titulo: "Día del Trabajo",
      hora: "Sin clases",
      descripcion: "Feriado nacional - No hay actividades académicas",
      categoria: "feriado",
      color: "bg-gray-500",
    },
    {
      fecha: "10 May",
      dia: "Viernes",
      titulo: "Día de la Madre",
      hora: "9:00 AM - 11:00 AM",
      descripcion: "Celebración especial del Día de la Madre",
      categoria: "celebracion",
      color: "bg-[#CC9F62]",
    },
  ]

  const categorias = [
    { id: "todos", nombre: "Todos los eventos", color: "bg-gray-500" },
    { id: "academico", nombre: "Académico", color: "bg-[#AB121C]" },
    { id: "reunion", nombre: "Reuniones", color: "bg-[#0070AF]" },
    { id: "deportivo", nombre: "Deportivo", color: "bg-[#790002]" },
    { id: "cultural", nombre: "Cultural", color: "bg-[#CC9F62]" },
    { id: "examenes", nombre: "Exámenes", color: "bg-[#AB121C]" },
    { id: "feriado", nombre: "Feriados", color: "bg-gray-500" },
    { id: "celebracion", nombre: "Celebraciones", color: "bg-[#CC9F62]" },
  ]

  // Simulación de calendario mensual
  const diasMes = Array.from({ length: 31 }, (_, i) => i + 1)
  const eventosDelMes = eventos.filter(
    (evento) => evento.fecha.includes("Mar") || evento.fecha.includes("Abr") || evento.fecha.includes("May"),
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#231F20]/60 to-[#231F20]/50 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Para Padres Actuales</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Calendario Escolar</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Consulta las fechas importantes del año lectivo y mantente al día con todos los eventos
            </p>
          </div>
        </div>
      </section>

      {/* Filtros y Búsqueda */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input placeholder="Buscar eventos..." className="pl-10 pr-4" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categorias.slice(0, 5).map((categoria) => (
                  <Button key={categoria.id} variant="outline" size="sm" className="text-xs bg-transparent">
                    <div className={`w-3 h-3 rounded-full ${categoria.color} mr-2`}></div>
                    {categoria.nombre}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Más filtros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vista de Calendario */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calendario Mensual */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-[#231F20]">{currentMonth}</h2>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Días de la semana */}
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((dia) => (
                        <div key={dia} className="text-center text-sm font-medium text-gray-500 py-2">
                          {dia}
                        </div>
                      ))}
                    </div>

                    {/* Días del mes */}
                    <div className="grid grid-cols-7 gap-2">
                      {/* Días vacíos del mes anterior */}
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={`empty-${i}`} className="h-12"></div>
                      ))}

                      {/* Días del mes actual */}
                      {diasMes.map((dia) => {
                        const eventoDelDia = eventosDelMes.find((evento) =>
                          evento.fecha.includes(dia.toString().padStart(2, "0")),
                        )

                        return (
                          <div
                            key={dia}
                            className={`h-12 flex items-center justify-center text-sm cursor-pointer rounded-lg hover:bg-gray-100 ${
                              eventoDelDia ? "bg-[#AB121C]/10 text-[#AB121C] font-bold" : "text-gray-700"
                            }`}
                          >
                            {dia}
                            {eventoDelDia && <div className={`w-2 h-2 rounded-full ${eventoDelDia.color} ml-1`}></div>}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Lista de Eventos */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#231F20]">Próximos Eventos</h3>
                <div className="space-y-4">
                  {eventos.slice(0, 6).map((evento, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className={`w-3 h-3 rounded-full ${evento.color} mt-2`}></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-[#AB121C]">
                                {evento.fecha} - {evento.dia}
                              </span>
                            </div>
                            <h4 className="font-bold text-[#231F20] mb-1">{evento.titulo}</h4>
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{evento.hora}</span>
                            </div>
                            <p className="text-sm text-gray-600">{evento.descripcion}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button className="w-full mt-4 bg-[#0070AF] hover:bg-[#0070AF]/90">Ver Todos los Eventos</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#231F20] font-serif text-center">Eventos Destacados</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventos
                .filter((evento) => evento.categoria === "cultural" || evento.categoria === "deportivo")
                .map((evento, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-full h-2 ${evento.color} rounded-t-lg mb-4`}></div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {evento.fecha}
                        </Badge>
                        <span className="text-sm text-gray-500">{evento.dia}</span>
                      </div>
                      <h3 className="font-bold text-[#231F20] mb-2">{evento.titulo}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{evento.hora}</span>
                      </div>
                      <p className="text-sm text-gray-600">{evento.descripcion}</p>
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
                <Calendar className="h-16 w-16 mx-auto mb-6 text-[#AB121C]" />
                <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Mantente Informado</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Recibe notificaciones automáticas de eventos importantes directamente en tu correo electrónico o
                  WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#0070AF] hover:bg-[#0070AF]/90">Suscribirse a Notificaciones</Button>
                  <Button
                    variant="outline"
                    className="border-[#AB121C] text-[#AB121C] hover:bg-[#AB121C] hover:text-white bg-transparent"
                  >
                    Descargar Calendario PDF
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
