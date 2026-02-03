import { Activity, Home, Brain, Users, Stethoscope, HeartPulse, HandHeart } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Reabilitação Motora",
    description: "Exercícios personalizados para recuperar força, equilíbrio e coordenação motora.",
  },
  {
    icon: Brain,
    title: "Prevenção de Quedas",
    description: "Programa específico para melhorar estabilidade e prevenir acidentes em casa.",
  },
  {
    icon: HeartPulse,
    title: "RPG - Método Souchard",
    description: "Reeducação Postural Global para correção de desvios posturais e alívio de dores crônicas.",
  },
  {
    icon: Users,
    title: "Pilates Clínico",
    description: "Exercícios adaptados para fortalecimento do core, flexibilidade e melhora da postura.",
  },
  {
    icon: Stethoscope,
    title: "Avaliação Geriátrica",
    description: "Análise completa das necessidades físicas e funcionais do idoso.",
  },
  {
    icon: HandHeart,
    title: "Orientação para Familiares",
    description: "Instruções e treinamento para familiares e cuidadores sobre exercícios e cuidados diários.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4">
            Cuidado completo para cada necessidade
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Oferecemos uma gama de serviços especializados em fisioterapia geriátrica, 
            sempre com foco no bem-estar e qualidade de vida.
          </p>
          
          {/* Destaque Atendimento Domiciliar */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Home className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              Todos os atendimentos são realizados no conforto do seu lar
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
