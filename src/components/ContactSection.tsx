import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone e WhatsApp",
    value: "+55 11 99905-5975",
    href: "https://wa.me/5511999055975",
  },
  {
    icon: MapPin,
    label: "Área de Atendimento",
    value: "São Paulo, SP",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Seg a Sex: 9h às 17h",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4">
              Vamos conversar sobre seu tratamento
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato para agendar uma avaliação inicial ou tirar suas dúvidas. 
              Estou à disposição para ajudar você e sua família.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 opacity-0 animate-fade-in-left"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA Card */}
          <div 
            className="bg-gradient-hero rounded-3xl p-10 text-primary-foreground shadow-glow opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Agende sua avaliação gratuita
            </h3>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              A primeira consulta é para conhecer suas necessidades e elaborar 
              um plano de tratamento personalizado. Sem compromisso.
            </p>

            <div className="space-y-4">
              <Button
                variant="secondary"
                size="xl"
                className="w-full bg-card text-foreground hover:bg-card/90"
                asChild
              >
                <a href="https://wa.me/5511999055975" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href="tel:+5511999055975">
                  <Phone className="w-5 h-5" />
                  Ligar agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
