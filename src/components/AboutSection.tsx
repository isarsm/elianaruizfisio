import { GraduationCap, Award, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative animate-fade-in">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-elegant bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-sm">Sua foto aqui</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Sobre Mim
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Dra. Eliana Ruiz S Miguel
              </h2>
              <p className="text-muted-foreground text-sm mt-1">CREFITO</p>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                Sou fisioterapeuta apaixonada pelo cuidado com idosos, dedicando mais de 40 anos 
                da minha carreira a proporcionar qualidade de vida e bem-estar para a terceira idade.
              </p>
            </div>

            {/* Academic Background */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Formação Acadêmica</h3>
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                    <li>• Graduação em Fisioterapia pela Universidade de São Paulo (USP)</li>
                    <li>• 40+ anos de experiência profissional</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Especializações</h3>
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                    <li>• Especialização em Fisioterapia Geriátrica</li>
                    <li>• RPG - Reeducação Postural Global (Método Souchard)</li>
                    <li>• Pilates Clínico</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
