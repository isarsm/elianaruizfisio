import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Helena",
    relation: "Filha de paciente",
    content: "Minha mãe de 82 anos recuperou a mobilidade após a cirurgia no quadril. O atendimento em casa fez toda diferença, ela se sentiu muito mais confortável.",
    rating: 5,
  },
  {
    name: "Carlos Roberto",
    relation: "Paciente, 75 anos",
    content: "Depois das sessões, voltei a caminhar sem bengala. A profissional é muito paciente e atenciosa, explica tudo com calma.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    relation: "Cuidadora",
    content: "Além de tratar meu sogro, ela nos ensinou exercícios para fazer com ele nos outros dias. Isso acelerou muito a recuperação.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4">
            O que dizem sobre nosso trabalho
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos pacientes e familiares é o nosso maior orgulho
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card shadow-soft opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
