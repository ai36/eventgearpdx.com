"use client";

import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    eventDate: "",
    details: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send");
      }

      setSubmitted(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              Contact
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get a free quote
            </h2>
            <p className="text-muted-foreground">
              Tell us about your event and we&apos;ll respond within one
              business hour.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-card rounded-xl shadow-card">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Request received
              </h3>
              <p className="text-muted-foreground">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-card rounded-xl p-8 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="event-date"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Event Date
                </label>
                <input
                  id="event-date"
                  type="date"
                  required
                  value={form.eventDate}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, eventDate: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Event Details
                </label>
                <textarea
                  id="details"
                  rows={4}
                  required
                  maxLength={1000}
                  value={form.details}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, details: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="Venue, number of attendees, equipment needs..."
                />
              </div>

              {error ? <p className="text-sm text-red-500">{error}</p> : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent-gradient text-accent-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
