const steps = [
  {
    number: "01",
    title: "Request",
    description: "Tell us your event date, venue, and what you need. We'll confirm availability within an hour.",
  },
  {
    number: "02",
    title: "Delivery",
    description: "We bring the equipment to your location on time. No pickup hassles, no last-minute runs.",
  },
  {
    number: "03",
    title: "Setup",
    description: "Our technician sets up, calibrates, and tests everything before your guests arrive.",
  },
  {
    number: "04",
    title: "Event Support",
    description: "We monitor equipment throughout your event. If anything needs adjusting, we handle it.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Four simple steps from request to a flawless presentation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="font-heading text-5xl font-bold text-accent/15">{step.number}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 text-border">
                  <svg viewBox="0 0 24 8" fill="none">
                    <path d="M0 4h20m0 0l-4-3.5M20 4l-4 3.5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
