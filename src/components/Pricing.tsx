const plans = [
  {
    name: "Basic",
    price: "$159",
    period: "per event",
    description: "Ideal for simple events up to 4 hours",
    features: ["Video projector", "Projection screen", "Delivery & pickup", "On-site technician up to 4 hours"],
    cta: "Book Basic",
    highlight: false,
  },
  {
    name: "Standard",
    price: "$259",
    period: "per event",
    description: "Designed for events lasting 4–8 hours",
    features: [
      "Everything in Basic",
      "Audio equipment if needed",
      "Wireless microphone for speaker",
      "On-site technician up to 8 hours"
    ],
    cta: "Book Standard",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$30",
    period: "per hour",
    description: "Best for extended events (8+ hours)",
    features: [
      "Everything in Standard",
      "On-site technician up to 12 hours per day",
      "Additional equipment available upon request",
    ],
    cta: "Book Pro",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Straightforward pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No hidden fees. Choose a package or request a custom quote for larger events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-primary text-primary-foreground ring-2 ring-accent"
                  : "bg-background shadow-card"
              }`}
            >
              <h3 className="font-heading text-lg font-bold">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="font-heading text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-lg transition-opacity text-sm ${
                  plan.highlight
                    ? "bg-accent-gradient text-accent-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
