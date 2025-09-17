import { Mail, MapPin, Phone, ArrowRight, Heart } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">G</span>
                </div>
                <span className="font-bold text-xl text-primary">GreenSaas</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering businesses with sustainable cloud solutions. Our eco-friendly SaaS
                platform helps companies reduce their carbon footprint while maximizing efficiency.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@greensaas.tech</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) GREEN-TECH</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">100 Green Valley, Silicon Valley, CA</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Join Our Green Revolution</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Stay updated with our latest green tech innovations and sustainability tips.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 GreenSaas. Sustainably Powered.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-primary fill-current" /> for the planet
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
