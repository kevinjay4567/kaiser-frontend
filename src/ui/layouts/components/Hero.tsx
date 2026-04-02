import heroImage from "@/assets/hero-barbershop.jpg";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior de barbería premium"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up flex items-center justify-center gap-2 mb-6">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Reserva tu cita online
          </span>
        </div>

        <h1 className="animate-fade-in-up-delay-1 font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
          Tu Estilo,{" "}
          <span className="text-gradient-gold">Nuestra Pasión</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Agenda tu cita en segundos. Elige tu barbero favorito, el servicio que
          necesitas y el horario que mejor te convenga.
        </p>

        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="text-primary-foreground font-body font-semibold text-lg px-8 py-6 shadow-gold hover:opacity-90 transition-opacity"
          >
            Reservar Ahora
          </button>
          <button
            className="border-primary/30 text-primary font-body text-lg px-8 py-6 hover:bg-primary/10 transition-colors"
          >
            Ver Servicios
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;