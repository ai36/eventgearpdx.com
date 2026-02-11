import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Light",
    description: "Ideal for simple events up to 4 hours",
    features: [
      "Video projector + projection screen",
      "All necessary cables",
      "Delivery & pickup included",
      "On-site technician for the duration of the event (up to 4 hours)",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    description: "Designed for events lasting 4–8 hours",
    features: [
      "Everything in Light",
      "Professional audio system",
      "Wireless microphone for speaker",
      "On-site technician for the full event duration (up to 8 hours)",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    description: "Best for extended or full-day events (8+ hours)",
    features: [
      "Everything in Standard",
      "On-site technician up to 12 hours",
      "Additional equipment available upon request",
    ],
    highlight: false,
  },
];

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 mt-0.5"
  >
    <circle cx="8" cy="8" r="8" fill="hsl(var(--accent))" fillOpacity="0.15" />
    <path
      d="M5 8l2 2 4-4"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
            Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rental packages for every need
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From self-service rentals to fully managed event support — choose
            the level that fits your event.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between rounded-xl p-8 transition-all duration-300 ${
                pkg.highlight
                  ? "bg-primary text-primary-foreground shadow-card-hover scale-[1.02]"
                  : "bg-card shadow-card hover:shadow-card-hover"
              }`}
            >
              <h3 className="font-heading text-xl font-bold mb-2">
                {pkg.name}
                {index === 2 && <span className="text-red-600">&nbsp;*</span>}
              </h3>
              <p
                className={cn(
                  "text-sm mb-6",
                  pkg.highlight
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground",
                )}
              >
                {pkg.description}
              </p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {index === 2 && (
                <div className="pt-5">
                  <p className="text-center text-xs text-muted-foreground">
                    <span className="text-red-600">*&nbsp;</span>
                    <span>Minimum booking: 9 hours</span>
                  </p>
                </div>
              )}
              <a
                href="#pricing"
                className={`block mt-8 text-center font-semibold py-3 rounded-lg transition-opacity text-sm ${
                  pkg.highlight
                    ? "bg-accent-gradient text-accent-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
