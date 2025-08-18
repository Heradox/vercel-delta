import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#231F20] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-8 flex items-center justify-center">
                <Image
                  src="/images/nuevo_logo_delta_transparente.png"
                  alt="Colegio Delta"
                  width={32}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Formando mujeres líderes que transforman el mundo desde 1991. Educación católica de excelencia con valores
              y compromiso social.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#AB121C]">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#AB121C]">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#AB121C]">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-[#CC9F62]">Enlaces Rápidos</h3>
            <div className="space-y-2">
              {[
                { href: "/admisiones", label: "Admisiones" },
                { href: "/programas-academicos", label: "Programas Académicos" },
                { href: "/vida-escolar", label: "Vida Escolar" },
                { href: "/servicios", label: "Servicios" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* For Parents */}
          <div>
            <h3 className="font-bold mb-4 text-[#0070AF]">Para Padres</h3>
            <div className="space-y-2">
              {[
                { href: "/boletines", label: "Boletines" },
                { href: "/portal-virtual", label: "Portal Virtual" },
                { href: "/calendario", label: "Calendario" },
                { href: "/transporte", label: "Transporte" },
                { href: "/soy-padre", label: "Soy Padre de Estudiante" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-[#CC9F62]">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-[#CC9F62]" />
                <div className="text-sm text-gray-300">
                  <p>X42H+8JJ, Av. Samborondón</p>
                  <p>Guayaquil 091910, Ecuador</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#CC9F62]" />
                <span className="text-sm text-gray-300">+593 4 269-0100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#CC9F62]" />
                <a
                  href="mailto:infodelta@uedelta.k12.ec"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  infodelta@uedelta.k12.ec
                </a>
              </div>
              <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 mt-4">
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Unidad Educativa Bilingüe Delta. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-400 hover:text-white text-sm">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
