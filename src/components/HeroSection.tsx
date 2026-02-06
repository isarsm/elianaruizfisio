import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-soft pt-20 lg:pt-0">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center flex-wrap gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-xs sm:text-sm w-fit">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="leading-tight break-words">Cuidado especializado para idosos</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Fisioterapia com{" "}
              <span className="text-gradient">carinho e dedicação</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Atendimento domiciliar personalizado para idosos, promovendo 
              qualidade de vida, independência e bem-estar através de técnicas 
              especializadas em gerontologia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contato">
                  <Phone className="w-5 h-5" />
                  Agende uma consulta
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#servicos">Conheça os serviços</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div 
            className="relative opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Fisioterapeuta cuidando de paciente idoso"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-card animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-foreground">+500</p>
                  <p className="text-muted-foreground text-sm">Pacientes atendidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
