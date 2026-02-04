import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg">
            Dra. <span className="text-accent">Eliana Ruiz Miguel</span>
          </p>
          <p className="text-primary-foreground/70 text-sm flex items-center gap-2">
            © {currentYear} Todos os direitos reservados. Feito com{" "}
            <Heart className="w-4 h-4 fill-accent text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
