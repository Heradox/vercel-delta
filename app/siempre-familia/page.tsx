import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Users, BookOpen, Church, Heart } from "lucide-react"

export default function SiempreFamiliaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#AB121C] to-[#CC9F62] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-5xl font-bold">Siempre Familia</h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Una comunidad educativa unida por valores compartidos y el compromiso con la excelencia académica
          </p>
        </div>
      </section>

      {/* School Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#231F20] mb-12">Nuestros Colegios</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <div className="flex flex-col items-center group">
              <div className="transition-transform hover:scale-105">
                <Image
                  src="/images/torremar-logo.webp"
                  alt="Torremar"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-[#0070AF] font-semibold">Torremar</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="transition-transform hover:scale-105">
                <Image src="/images/logo-presco.png" alt="Presco" width={200} height={120} className="object-contain" />
              </div>
              <p className="mt-4 text-[#0070AF] font-semibold">Presco</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="transition-transform hover:scale-105">
                <Image
                  src="/images/nuevo_logo_delta_transparente.png"
                  alt="Delta"
                  width={150}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-[#0070AF] font-semibold">Delta</p>
            </div>
          </div>
        </div>
      </section>

      {/* COPECE Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#231F20] mb-4">COPECE</h2>
              <p className="text-xl text-[#CC9F62] font-semibold">
                Corporación para la Educación y Cultura Ecuatoriana
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start mb-6">
                <Users className="w-8 h-8 text-[#AB121C] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#231F20] mb-4">Nuestra Fundación</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    COPECE es una institución fundada por un grupo de padres de familia, profesionales y empresarios que
                    constituyeron una empresa educativa con el objetivo de ofrecer a la sociedad guayaquileña una
                    educación de calidad creativa e innovadora.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start mb-6">
                <BookOpen className="w-8 h-8 text-[#0070AF] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#231F20] mb-4">Educación Personalizada</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Los colegios COPECE imparten una educación personalizada y diferenciada de vanguardia para alumnos
                    cuyas edades están comprendidas entre los 2 y los 18 años (Inicial I a III Bachillerato).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <Church className="w-8 h-8 text-[#CC9F62] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#231F20] mb-4">Formación Espiritual</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    La atención pastoral se encomendó a sacerdotes del{" "}
                    <Link
                      href="https://opusdei.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#AB121C] hover:text-[#CC9F62] font-semibold inline-flex items-center"
                    >
                      Opus Dei
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                    . Las actividades espirituales se realizan enmarcadas en los principios fundamentales de la doctrina
                    católica, inspirados en el mensaje de{" "}
                    <Link
                      href="https://www.josemariaescriva.info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#AB121C] hover:text-[#CC9F62] font-semibold inline-flex items-center"
                    >
                      San Josemaría Escrivá de Balaguer
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>{" "}
                    y con el mayor respeto a la libertad de las conciencias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#231F20] mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#AB121C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#231F20] mb-3">Familia</h3>
              <p className="text-gray-700">
                Fomentamos un ambiente familiar donde cada estudiante se siente valorado y apoyado.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#0070AF] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#231F20] mb-3">Excelencia</h3>
              <p className="text-gray-700">
                Buscamos la excelencia académica y humana en cada aspecto de la formación educativa.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#CC9F62] rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#231F20] mb-3">Valores</h3>
              <p className="text-gray-700">
                Formamos personas íntegras basadas en principios cristianos y valores universales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#0070AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Familia Educativa</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestros colegios pueden ser parte del crecimiento y formación de tu familia.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center bg-white text-[#0070AF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contáctanos
            <ExternalLink className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
