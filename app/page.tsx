import { MotionEnhancer } from "./MotionEnhancer";

const navItems = [
  ["Services", "#services"],
  ["Process", "#process"],
  ["AI Hub", "#ai-hub"],
  ["Pricing", "#pricing"],
  ["Results", "#results"],
];

const stats = [
  { value: "500+", label: "US businesses scaled" },
  { value: "5,000+", label: "Leads delivered monthly" },
  { value: "98%", label: "Client retention rate" },
  { value: "< 3 wks", label: "From kickoff to live" },
];

const marquee = [
  "AI Chatbot Integration",
  "Voice Agents",
  "Verified Leads",
  "Conversion Web Design",
  "Google Ads",
  "SEO Domination",
  "24/7 Automation",
  "CRM Sync",
  "Gemini LLM",
  "Twilio Voice",
];

const services = [
  {
    id: "leads",
    icon: "◎",
    title: "Verified Lead Engine",
    copy: "500–5,000 hand-verified, ready-to-buy leads delivered to your CRM every month — matched to your exact ICP and territory.",
    tags: ["Data enrichment", "ICP targeting", "CRM sync"],
    span: "wide",
  },
  {
    id: "voice",
    icon: "◈",
    title: "AI Voice Agents",
    copy: "Human-sounding agents on Twilio that call, qualify, and book — answering every lead in seconds, day or night.",
    tags: ["Twilio", "Qualification", "Booking"],
  },
  {
    id: "chat",
    icon: "❖",
    title: "AI Chat & Assistants",
    copy: "Gemini-powered assistants that live on your site, capture intent, and hand hot conversations straight to sales.",
    tags: ["Gemini LLM", "Intent capture", "Handoff"],
  },
  {
    id: "web",
    icon: "▲",
    title: "Conversion Web Design",
    copy: "High-velocity landing pages and sites engineered around one job: turning attention into booked calls.",
    tags: ["Landing pages", "CRO", "Speed"],
  },
  {
    id: "ads",
    icon: "✦",
    title: "Paid Search & Social",
    copy: "Google Ads and social campaigns wired to your lead engine, optimized daily against cost-per-booked-call.",
    tags: ["Google Ads", "Meta", "PPC"],
    span: "wide",
  },
  {
    id: "seo",
    icon: "◆",
    title: "SEO Domination",
    copy: "Local and organic rankings that put you on page one and keep you there while competitors keep scrolling.",
    tags: ["Local SEO", "Content", "Indexing"],
  },
];

const process = [
  {
    week: "W1",
    title: "Discovery & Competitive Audit",
    items: [
      "Analyze local competition and keywords",
      "Design high-converting landing page mockups",
      "Optimize local business registries",
      "Structure targeted paid campaign assets",
    ],
  },
  {
    week: "W2",
    title: "Deployment & Optimization",
    items: [
      "Launch social graphics & Reels calendar",
      "Custom database queries for lead lists",
      "Deploy responsive website template",
      "Integrate AI chatbot workflows & APIs",
    ],
  },
  {
    week: "W3",
    title: "Launch & Database Delivery",
    items: [
      "Initiate targeted PPC search campaigns",
      "Deliver first batch of verified leads",
      "Configure automated lead notifications",
      "Activate Google Search Console indexing",
    ],
  },
  {
    week: "∞",
    title: "Ongoing — Optimization & Domination",
    items: [
      "Monthly verified lead databases",
      "Weekly visual and short-form content",
      "Continuous AI prompt & tree tuning",
      "Conversion performance reporting",
    ],
  },
];

const stack = [
  { name: "Gemini LLM", role: "Reasoning & chat" },
  { name: "Twilio Voice", role: "AI phone agents" },
  { name: "Google Ads", role: "Paid acquisition" },
  { name: "Search Console", role: "Organic indexing" },
  { name: "CRM Sync", role: "Pipeline delivery" },
  { name: "Automation", role: "24/7 workflows" },
];

const pricing = [
  {
    name: "Launch",
    tagline: "Get the machine live.",
    price: "$2,500",
    cadence: "/mo",
    highlight: false,
    features: [
      "500 verified leads / month",
      "Conversion landing page",
      "AI chat assistant",
      "Google Business optimization",
      "Monthly performance report",
    ],
    cta: "Start with Launch",
  },
  {
    name: "Scale",
    tagline: "Full autopilot growth.",
    price: "$5,900",
    cadence: "/mo",
    highlight: true,
    features: [
      "2,500 verified leads / month",
      "AI voice + chat agents",
      "Full conversion website",
      "Google Ads + SEO program",
      "Weekly content calendar",
      "Priority optimization",
    ],
    cta: "Scale my pipeline",
  },
  {
    name: "Dominate",
    tagline: "Own your market.",
    price: "Custom",
    cadence: "",
    highlight: false,
    features: [
      "5,000+ verified leads / month",
      "Dedicated AI operations pod",
      "Multi-location campaigns",
      "Custom integrations & CRM",
      "Quarterly strategy roadmap",
    ],
    cta: "Design my program",
  },
];

export default function Home() {
  return (
    <main>
      <MotionEnhancer />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Boomn AI home">
          BOOMN<span className="brand-ai">AI</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Free Strategy Call <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
            <a href="#contact">Free Strategy Call ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-copy" id="main-content">
          <p className="badge"><i /> Accepting clients · Q3 2026</p>
          <h1 id="hero-title">
            <span className="h1-line"><span>We get you clients.</span></span>
            <span className="h1-line"><span className="grad">On autopilot.</span></span>
          </h1>
          <p className="hero-lede">
            While your competitors scroll, our AI-powered systems capture your leads.
            We deliver <strong>500–5,000 verified leads</strong> a month, dominate
            first-page rankings, and deploy live AI sales pipelines in under 3 weeks.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contact">Get your free strategy call <span>↗</span></a>
            <a className="button button-ghost" href="#ai-hub">Explore the AI system <span aria-hidden="true">◈</span></a>
          </div>

          <ul className="hero-stats">
            {stats.slice(0, 3).map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="live-panel" aria-label="Live pipeline snapshot">
          <div className="live-top">
            <span className="live-tag"><i /> Live data</span>
            <span className="live-flag">US-based team</span>
          </div>
          <div className="live-headline">
            <p>Verified leads this month</p>
            <strong>5,142</strong>
            <span className="live-trend">▲ 18% vs. last cycle</span>
          </div>
          <div className="live-bars" aria-hidden="true">
            {[42, 68, 55, 82, 74, 96, 88].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="live-feed">
            <p><i className="dot-green" /> New lead qualified — <b>Austin, TX</b></p>
            <p><i className="dot-gold" /> AI voice agent booked a call</p>
            <p><i className="dot-green" /> Chat assistant captured intent</p>
          </div>
        </aside>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i}>{item}<b>✦</b></span>
          ))}
        </div>
      </div>

      <section className="services section" id="services">
        <div className="section-intro">
          <p className="eyebrow"><span>●</span> The growth stack</p>
          <h2>Every lever that gets you clients.<br /><span className="grad">Wired into one system.</span></h2>
          <p>Specialists where depth matters. One connected AI engine where coordination matters more — so nothing leaks between the click and the booked call.</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className={`service-card${service.span === "wide" ? " is-wide" : ""}`} key={service.id}>
              <span className="service-number" aria-hidden="true">0{index + 1}</span>
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div className="service-tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-intro center">
          <p className="eyebrow"><span>●</span> 21-day launch roadmap</p>
          <h2>Three weeks from discovery<br />to <span className="grad">automated leads.</span></h2>
          <p>A fixed, transparent path. You always know exactly what ships this week — and what it unlocks next.</p>
        </div>

        <ol className="timeline">
          {process.map((phase) => (
            <li key={phase.week}>
              <div className="timeline-week"><span>{phase.week}</span></div>
              <div className="timeline-body">
                <h3>{phase.title}</h3>
                <ul>
                  {phase.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ai-hub section" id="ai-hub">
        <div className="ai-hub-inner">
          <div className="ai-hub-copy">
            <p className="eyebrow"><span>●</span> The AI hub</p>
            <h2>An operator that never sleeps, never forgets, and never misses a lead.</h2>
            <p>Every inquiry is answered in seconds — qualified by chat, called by an AI voice agent, and dropped into your pipeline enriched and ready. It runs on the tools you already trust.</p>
            <a className="button button-ghost" href="#contact">See it work on your site <span>↗</span></a>
          </div>
          <div className="stack-grid">
            {stack.map((tech) => (
              <div className="stack-chip" key={tech.name}>
                <strong>{tech.name}</strong>
                <span>{tech.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="results section" id="results">
        <div className="results-band">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <figure className="quote">
          <p className="quote-mark" aria-hidden="true">“</p>
          <blockquote>
            We used to chase leads. Boomn AI installed a system that chases them for us —
            verified pipeline every morning and voice agents booking calls before we&apos;re even at our desks.
          </blockquote>
          <figcaption>
            <span className="avatar">JR</span>
            <span><strong>Jordan Rivera</strong><br />Founder, growth services firm</span>
          </figcaption>
        </figure>
      </section>

      <section className="pricing section" id="pricing">
        <div className="section-intro center">
          <p className="eyebrow"><span>●</span> Pricing</p>
          <h2>Simple plans.<br /><span className="grad">Compounding returns.</span></h2>
          <p>No lock-in, no fine print. Pick the pace that fits — scale up the moment the pipeline proves itself.</p>
        </div>

        <div className="price-grid">
          {pricing.map((plan) => (
            <article className={`price-card${plan.highlight ? " is-featured" : ""}`} key={plan.name}>
              {plan.highlight && <span className="price-flag">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="price-tagline">{plan.tagline}</p>
              <p className="price-value"><strong>{plan.price}</strong>{plan.cadence && <span>{plan.cadence}</span>}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>
                ))}
              </ul>
              <a className={`button ${plan.highlight ? "button-gold" : "button-ghost"}`} href="#contact">
                {plan.cta} <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="eyebrow"><span>●</span> Ready when you are</p>
        <h2>Your pipeline could be<br />live in <span className="grad">three weeks.</span></h2>
        <p>Book a free strategy call. We&apos;ll map your market, size the opportunity, and show you the shortest path to leads on autopilot.</p>
        <div className="contact-actions">
          <a className="button button-gold" href="mailto:hello@boomnai.com">Get your free strategy call <span>↗</span></a>
          <a className="button button-ghost" href="#ai-hub">Explore the AI system <span aria-hidden="true">◈</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-marquee" aria-hidden="true">
          <div>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>ON AUTOPILOT ✦</span>
            ))}
          </div>
        </div>

        <div className="footer-shell">
          <div className="footer-company">
            <a className="brand" href="#top">BOOMN<span className="brand-ai">AI</span></a>
            <p>We get you clients. On autopilot. AI-powered lead capture, voice agents, and web systems for high-growth US businesses.</p>
            <div className="footer-signal"><i /> US-based team · Live data</div>
          </div>

          <nav aria-label="Explore navigation">
            <h3>Explore</h3>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#ai-hub">AI Hub</a>
            <a href="#pricing">Pricing</a>
            <a href="#results">Results</a>
          </nav>

          <nav aria-label="Company navigation">
            <h3>Company</h3>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@boomnai.com">hello@boomnai.com</a>
            <a href="#process">How it works</a>
          </nav>

          <div className="footer-cta">
            <h3>Join the AI revolution</h3>
            <p>Monthly playbook on AI lead-gen, voice agents, and conversion systems.</p>
            <a className="footer-playbook" href="mailto:hello@boomnai.com?subject=Send%20me%20the%20Boomn%20AI%20playbook">
              Get the monthly playbook <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BOOMN LLC. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
