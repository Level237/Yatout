"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Apple, Play } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0B1221] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Yatou
                <span className="text-primary">App</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              La super app qui simplifie votre quotidien. Réservation, livraison et services à portée de main.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="#">Résidences Meublées</FooterLink>
              <FooterLink href="#">Hôtels & Suites</FooterLink>
              <FooterLink href="#">Restauration</FooterLink>
              <FooterLink href="#">Locations de Voitures</FooterLink>
              <FooterLink href="#">Devenir Prestataire</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Entreprise</h3>
            <ul className="space-y-4">
              <FooterLink href="#">À propos de nous</FooterLink>
              <FooterLink href="#">Carrières</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Presse</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          {/* Download Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Télécharger l'App</h3>
            <p className="text-gray-400 mb-6">
              Disponible sur iOS et Android. Téléchargez maintenant !
            </p>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-3 px-4 w-full sm:w-auto text-left border border-white/5">
                <Apple size={28} className="fill-current" />
                <div>
                  <div className="text-[10px] uppercase font-medium text-gray-400">Télécharger sur</div>
                  <div className="text-sm font-bold leading-none mt-1">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-3 px-4 w-full sm:w-auto text-left border border-white/5">
                <Play size={24} className="fill-current ml-0.5" />
                <div>
                  <div className="text-[10px] uppercase font-medium text-gray-400">DISPONIBLE SUR</div>
                  <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Yatout Inc. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-primary transition-colors">Conditions</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon }: any) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-primary/50"
    >
      <Icon size={18} />
    </a>
  )
}

function FooterLink({ href, children }: any) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-primary transition-colors block">
        {children}
      </Link>
    </li>
  )
}
