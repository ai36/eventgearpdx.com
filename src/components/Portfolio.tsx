import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import Image from "next/image";

const events = [
  {
    image: portfolio1,
    title: "Quarterly Strategy Review",
    location: "Portland, OR",
    description: "Full projector and screen setup for a 40-person corporate strategy session. Standard package with on-site calibration.",
  },
  {
    image: portfolio2,
    title: "Startup Demo Day",
    location: "Portland, OR",
    description: "Back-to-back pitch presentations at a coworking space. Full Support package with real-time tech management throughout the event.",
  },
  {
    image: portfolio3,
    title: "Sales Training Workshop",
    location: "Vancouver, WA",
    description: "Two-day training event at a hotel conference center. Dual-screen setup with audio support and dedicated technician.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Events we&apos;ve powered
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real setups. Real events. Here&apos;s a look at how we help businesses present with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {events.map((event) => (
            <div key={event.title} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="aspect-4/3 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent">{event.location}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
