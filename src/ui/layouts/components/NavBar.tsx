
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          
          <span className="font-heading text-xl font-bold text-foreground">
            BarberApp
          </span>
        </div>

        
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
            Barberos
          </a>
          <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
            Contacto
          </a>
          <button  className="bg-gradient-gold text-primary-foreground font-body font-semibold shadow-gold hover:opacity-90">
            Reservar
          </button>
        </div>

        
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#servicios" className="block font-body text-sm text-muted-foreground hover:text-primary py-2">Servicios</a>
          <a href="#" className="block font-body text-sm text-muted-foreground hover:text-primary py-2">Barberos</a>
          <a href="#" className="block font-body text-sm text-muted-foreground hover:text-primary py-2">Contacto</a>
          <button  className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold">
            Reservar
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;