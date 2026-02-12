import { Developer } from "./developer/Developer";

const Footer = () => {
  return (
    <>
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <span className="font-heading text-xl font-bold tracking-tight">
                Present<span className="text-accent">Pro</span>
              </span>
              <p className="text-primary-foreground/60 text-sm mt-2 max-w-xs">
                Presentation equipment rental with full-service support in
                Portland, OR and Vancouver, WA.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-primary-foreground/60">
                  <li>
                    <a
                      href="#services"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Service Area</h4>
                <ul className="space-y-2 text-primary-foreground/60">
                  <li>Portland, OR</li>
                  <li>Vancouver, WA</li>
                  <li>Metro Area</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Event Gear PDX. All rights reserved
          </div>
        </div>
      </footer>
      <Developer />
    </>
  );
};

export default Footer;
