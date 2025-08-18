"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const prospectiveParentsLinks = [
    { href: "/admisiones", label: "Admisiones" },
    { href: "/programas-academicos", label: "Programas Académicos" },
    { href: "/nuestro-campus", label: "Nuestro Campus" },
    { href: "/proyecto-educativo", label: "Proyecto Educativo" },
    { href: "/siempre-familia", label: "Siempre Familia" },
  ]

  const currentParentsLinks = [
    { href: "/boletines", label: "Boletines" },
    { href: "/calendario", label: "Calendario" },
    { href: "https://www.uedelta.k12.ec/padres/#/login", label: "Portal Virtual", external: true },
    { href: "/servicios", label: "Servicios" },
  ]

  const generalLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/vida-escolar", label: "Vida Escolar" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-20 w-20 flex items-center justify-center">
              <Image
                src="/images/nuevo_logo_delta_transparente.png"
                alt="Colegio Delta"
                width={60}
                height={72}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              {/* General Links */}
              {generalLinks.slice(0, 2).map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-none bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-[#AB121C] focus:text-[#AB121C] focus:outline-none">
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Prospective Parents Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" font-medium">
                  Para Futuros Padres
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="text-sm font-medium mb-2">Información para Admisión</div>
                    {prospectiveParentsLinks.map((link) => (
                      <Link key={link.href} href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Current Parents Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" font-medium">
                  Para Padres Actuales
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="text-sm font-medium mb-2">Acceso Rápido</div>
                    {currentParentsLinks.map((link) =>
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </a>
                      ) : (
                        <Link key={link.href} href={link.href} legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.label}</div>
                          </NavigationMenuLink>
                        </Link>
                      ),
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Remaining General Links */}
              {generalLinks.slice(2).map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-none bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-[#AB121C] focus:text-[#AB121C] focus:outline-none">
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Admisiones Button */}
          <div className="hidden md:flex items-center">
            <Link href="/admisiones">
              <Button className="bg-[#0070AF] text-white hover:bg-[#005C8A]">Admisiones</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="space-y-2">
                  <h3 className="font-semibold">Para Futuros Padres</h3>
                  {prospectiveParentsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[#0070AF]">Para Padres Actuales</h3>
                  {currentParentsLinks.map((link) =>
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">General</h3>
                  {generalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 space-y-2">
                  <Link href="/admisiones">
                    <Button className="w-full bg-[#0070AF] hover:bg-[#0070AF]/90">Admisiones</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
