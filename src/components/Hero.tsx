import heroImage from "@/assets/hero-image.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Professional presentation setup in a modern conference room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div className="container mx-auto px-6 sm:px-20 2xl:px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest uppercase mb-4 text-primary-foreground/70 dark:text-primary/70 animate-fade-in-up">
            Portland, OR &bull; Vancouver, WA
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground dark:text-primary leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Presentation equipment.
            <br />
            <span className="text-gradient-accent">
              Delivered. Set up. Managed.
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/80 dark:text-primary/80 mb-10 leading-relaxed max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Turn-key projector and screen rental for your meetings, pitches, and
            trainings. We handle every detail so you can focus on your audience.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#pricing"
              className="bg-accent-gradient text-accent-foreground font-semibold px-8 py-4 rounded-lg text-center hover:opacity-90 transition-opacity text-base"
            >
              Book&nbsp;Equipment
            </a>
            <a
              href="#contact"
              className="border border-primary-foreground/30 dark:border-primary/30 text-primary-foreground dark:text-primary font-medium px-8 py-4 rounded-lg text-center hover:bg-primary-foreground/10 transition-colors text-base"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
