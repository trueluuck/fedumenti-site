// src/components/ui/Footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-2xl py-20 overflow-hidden">
      <div className="absolute top-0 left-1/4 -mt-16 h-32 w-1/2 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
              FEDUMENTI<span className="text-primary italic">.</span>
            </Link>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              Unimos tecnologia, dados e inovação para acelerar o crescimento de empresas modernas. 
              Transformando desafios em resultados de alta performance.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://www.linkedin.com/company/fedumentigroup/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/30 text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/fcggroup/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/30 text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@LucasFedumentiCastro" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/30 text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Rapid Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Sobre nós', 'Nossos Serviços', 'Cases de Sucesso', 'Cursos e Conteúdo'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <span className="h-px w-0 bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-6">Contato</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary"><Mail size={16} /></div>
                <div className="text-sm text-muted-foreground">contato@fedumentigroup.com.br</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary"><Phone size={16} /></div>
                <div className="text-sm text-muted-foreground">
                  <a href="https://wa.me/5542999217736" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    (42) 9 9921-7736
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary"><MapPin size={16} /></div>
                <div className="text-sm text-muted-foreground leading-relaxed">Guarapuava, Paraná<br/>Hub de Inovação</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
            © {currentYear} Fedumenti Group <span className="mx-2 text-border">•</span> CNPJ 26.306.303/0001-20
          </div>
          <div className="flex items-center gap-6">
            <Link href="/politicas" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest font-bold">Privacidade</Link>
            <Link href="/termos" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest font-bold">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
