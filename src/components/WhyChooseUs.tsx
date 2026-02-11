const reasons = [
  {
    title: "Zero-stress setup",
    description: "You don't touch a single cable. We deliver, set up, and test before your event starts.",
  },
  {
    title: "On-time, every time",
    description: "We arrive early and leave late. Your schedule is our priority.",
  },
  {
    title: "On-site technician",
    description: "A trained professional stays at your venue to handle any issue immediately.",
  },
  {
    title: "Equipment you can rely on",
    description: "Well-maintained, high-quality projectors and screens. No surprises.",
  },
  {
    title: "Pacific Northwest focused",
    description: "Based in Portland. We know the area, the venues, and the logistics.",
  },
  {
    title: "Transparent pricing",
    description: "No hidden fees. You know exactly what you're paying for before you book.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Advantages</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why teams choose Event<span className="text-gradient-accent">Gear</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="group">
              <div className="w-10 h-1 bg-accent-gradient rounded-full mb-4 transition-all group-hover:w-16" />
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
