"use client";

import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Contact</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get a free quote
            </h2>
            <p className="text-muted-foreground">
              Tell us about your event and we&apos;ll respond within one business hour.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-card rounded-xl shadow-card">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Request received</h3>
              <p className="text-muted-foreground">We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-xl p-8 shadow-card">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="event-date" className="block text-sm font-medium text-foreground mb-1.5">
                  Event Date
                </label>
                <input
                  id="event-date"
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-foreground mb-1.5">
                  Event Details
                </label>
                <textarea
                  id="details"
                  rows={4}
                  required
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="Venue, number of attendees, equipment needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-gradient text-accent-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
