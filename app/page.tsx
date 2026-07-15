import { MotionEnhancer } from "./MotionEnhancer";

const services = [
  {
    index: "01",
    title: "Conversion",
    copy: "High-velocity storefronts, landing pages, and CRO programs built to turn more sessions into revenue.",
    tags: ["Web design", "Development", "CRO"],
  },
  {
    index: "02",
    title: "Acquisition",
    copy: "Paid search and social systems that connect sharp creative, disciplined testing, and profitable scale.",
    tags: ["Paid social", "Search", "Influencers"],
  },
  {
    index: "03",
    title: "Retention",
    copy: "Email, SMS, and lifecycle strategy that compounds customer value long after the first conversion.",
    tags: ["Email", "SMS", "Lifecycle"],
  },
  {
    index: "04",
    title: "Creative",
    copy: "A relentless content engine for ads, product stories, social feeds, and every high-intent touchpoint.",
    tags: ["Production", "Design", "Copy"],
  },
];

const partners = [
  {
    label: "Scaling brands",
    title: "$1M—$3M eCommerce brands",
    copy: "Founder-led companies ready to replace fragmented freelancers with one accountable growth team.",
  },
  {
    label: "Investment groups",
    title: "Private equity",
    copy: "Pre-close marketing diligence, post-close growth planning, and hands-on portfolio operations.",
  },
  {
    label: "New ventures",
    title: "Brands built from zero",
    copy: "From positioning and launch to daily operation—we help turn a sharp thesis into a durable company.",
  },
];

const navItems = [
  ["What we do", "#services"],
  ["Our edge", "#method"],
  ["Who we help", "#partners"],
  ["About", "#about"],
];

export default function Home() {
  return (
    <main>
      <MotionEnhancer />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Boomn home">
          BOOMN<span className="brand-dot">.</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
            <a href="#contact">Start a conversation ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> eCommerce growth operators</p>
          <h1><span>We make</span><span>brands <em>boom.</em></span></h1>
          <p className="hero-lede">
            Strategy, creative, media, and retention—one senior team built to
            profitably grow eCommerce companies.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#contact">Build your growth plan <span>↗</span></a>
            <a className="text-link" href="#services">See the machine <span>↓</span></a>
          </div>
        </div>

        <aside className="operator-card" aria-label="Boomn operating model">
          <div className="operator-card-top">
            <span>BOOMN / OPERATING SYSTEM</span>
            <span className="status"><i /> LIVE</span>
          </div>
          <p className="operator-kicker">One team. Every growth lever.</p>
          <div className="operator-grid">
            <div><strong>01</strong><span>Senior team</span></div>
            <div><strong>04</strong><span>Core engines</span></div>
            <div><strong>12</strong><span>Capabilities</span></div>
            <div><strong>∞</strong><span>Iterations</span></div>
          </div>
          <div className="operator-loop">
            <span>DIAGNOSE</span><b>→</b><span>BUILD</span><b>→</b><span>TEST</span><b>→</b><span>SCALE</span>
          </div>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Publications featuring Boomn">
        <p>As seen in</p>
        <div><span>Forbes</span><span>Inc.</span><span>Entrepreneur</span></div>
        <p className="trust-note">Built by operators, not spectators.</p>
      </section>

      <section className="services section" id="services">
        <div className="section-intro">
          <p className="eyebrow eyebrow-dark"><span>●</span> The growth machine</p>
          <h2>Everything your brand needs.<br /><em>Nothing it doesn&apos;t.</em></h2>
          <p>Specialists where depth matters. One connected operating system where coordination matters more.</p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <p className="service-index">{service.index}</p>
              <h3>{service.title}</h3>
              <p className="service-copy">{service.copy}</p>
              <div className="service-tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="method section" id="method">
        <div className="method-heading">
          <p className="eyebrow"><span>●</span> Our unfair advantage</p>
          <h2>We&apos;re obsessed with the two things that move the needle.</h2>
        </div>

        <div className="genius-grid">
          <article className="genius-card genius-web">
            <p>ZONE 01</p>
            <span className="genius-mark" aria-hidden="true">↑</span>
            <div>
              <h3>Websites that convert.</h3>
              <p>Every click, scroll, and message tuned to make buying feel inevitable.</p>
            </div>
          </article>
          <article className="genius-card genius-creative">
            <p>ZONE 02</p>
            <span className="genius-mark" aria-hidden="true">✦</span>
            <div>
              <h3>Creative that earns attention.</h3>
              <p>High-volume concepts built around real customer insight—not recycled trends.</p>
            </div>
          </article>
        </div>

        <div className="method-loop">
          <div>
            <span>01</span><h3>Find the constraint</h3><p>We audit the full journey and name the bottleneck everyone else missed.</p>
          </div>
          <div>
            <span>02</span><h3>Ship the fix</h3><p>Senior operators move from strategy to execution without a handoff maze.</p>
          </div>
          <div>
            <span>03</span><h3>Compound the win</h3><p>Learnings flow across creative, site, media, and retention every week.</p>
          </div>
        </div>
      </section>

      <section className="partners section" id="partners">
        <div className="partners-title">
          <p className="eyebrow eyebrow-dark"><span>●</span> Who we work with</p>
          <h2>Ambitious people building <em>serious</em> companies.</h2>
        </div>
        <div className="partner-cards">
          {partners.map((partner, index) => (
            <article key={partner.title}>
              <div className="partner-top"><span>0{index + 1}</span><span>{partner.label}</span></div>
              <h3>{partner.title}</h3>
              <p>{partner.copy}</p>
              <a href="#contact" aria-label={`Talk to Boomn about ${partner.title}`}>Let&apos;s build ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section" id="about">
        <p className="quote-mark" aria-hidden="true">“</p>
        <blockquote>
          We install our proven system for scaling, invest our specialized team,
          and align around performance—not hours.
        </blockquote>
        <div className="quote-person">
          <span>CM</span>
          <p><strong>Colin McGuire</strong><br />CEO, Boomn</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
        <p className="eyebrow"><span>●</span> Ready when you are</p>
        <h2>Your next growth<br />chapter starts <em>here.</em></h2>
        <p>Tell us where the business is today and where you want it to go. We&apos;ll show you the shortest path between the two.</p>
        <a className="button button-acid" href="https://www.boomn.com/talk-to-us">Start a conversation <span>↗</span></a>
      </section>

      <footer>
        <div className="footer-marquee" aria-hidden="true">
          <div>
            <span>MAKE IT BOOM ✦</span><span>MAKE IT BOOM ✦</span><span>MAKE IT BOOM ✦</span><span>MAKE IT BOOM ✦</span>
          </div>
        </div>

        <div className="footer-shell">
          <div className="footer-lead">
            <p className="footer-kicker"><span>●</span> The bottom line</p>
            <h2>Great brands don&apos;t wait for growth.<br /><em>They build it.</em></h2>
            <a className="button footer-button" href="https://www.boomn.com/talk-to-us">
              Build with Boomn <span>↗</span>
            </a>
          </div>

          <div className="footer-directory">
            <div className="footer-company">
              <a className="brand footer-brand" href="#top">BOOMN<span className="brand-dot">.</span></a>
              <p>Profitably growing eCommerce companies through strategy, creative, media, and retention.</p>
              <div className="footer-signal"><i /> Strategy + execution, under one roof.</div>
            </div>

            <nav aria-label="Footer explore navigation">
              <h3>Explore</h3>
              <a href="#services">What we do</a>
              <a href="#method">Our edge</a>
              <a href="#partners">Who we help</a>
              <a href="#about">About Boomn</a>
            </nav>

            <nav aria-label="Footer capability navigation">
              <h3>Capabilities</h3>
              <a href="#services">Conversion</a>
              <a href="#services">Acquisition</a>
              <a href="#services">Retention</a>
              <a href="#services">Creative</a>
            </nav>

            <nav aria-label="Footer social navigation">
              <h3>Connect</h3>
              <a href="https://www.instagram.com/boomndigital">Instagram ↗</a>
              <a href="https://www.linkedin.com/company/boomn">LinkedIn ↗</a>
              <a href="https://x.com/weareboomn">X / Twitter ↗</a>
              <a href="https://www.boomn.com/talk-to-us">Talk to us ↗</a>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Boomn</span>
            <span>Made for brands in motion.</span>
            <div><a href="#top">Back to top ↑</a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
