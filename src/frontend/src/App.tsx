import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  Eye,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "Get Involved", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const ACTIVITIES = [
  "Child rights activities — formed CRST with NGOs and CBOs",
  "Working with regional, national & international networks for textile workers",
  "Awareness programs on Girls Education",
  "Camps on law related to women & women rights",
  "Medical camps",
  "Vocational training & Counselling for Youth Girls",
  "Community based programs",
  "Children activity programmes at Rural Villages",
  "Motivation centres in target areas",
  "Awareness about safety of Girl Children in project villages",
  "Village level health camps for adolescent girls",
  "Life skill education for adolescent girls in spinning mills",
  "Income generation activities for economically weaker sections",
  "Life skill training in textile adolescent girls",
  "Forming IC committees in textile mills, garments and spinning mills",
];

const STATS = [
  {
    icon: Users,
    value: "5,000+",
    label: "Textile Workers & Families Benefited",
  },
  { icon: Award, value: "300", label: "Students Placed in Decent Jobs" },
  { icon: Star, value: "200", label: "Girls Completed Nursing Training" },
  { icon: ShieldCheck, value: "10", label: "Child Marriages Prevented" },
];

const ACHIEVEMENTS = [
  {
    icon: Wrench,
    title: "300 Tailoring Graduates",
    desc: "Students completed tailoring courses and are now self-employed, running their own tailoring work and generating steady income.",
  },
  {
    icon: Star,
    title: "120 Beautician-Trained Women",
    desc: "Trained in beautician courses, now working in parlours and freelance services — earning good, regular income independently.",
  },
  {
    icon: Heart,
    title: "50 Mill Workers Counselled",
    desc: "Mill workers received life skills counselling, improving their wellbeing, workplace safety awareness, and personal resilience.",
  },
  {
    icon: BookOpen,
    title: "20 Children Completed B.Ed.",
    desc: "Children who received career guidance and educational counselling have now successfully completed Bachelor of Education.",
  },
  {
    icon: Building2,
    title: "15 Internal Committees (POSH)",
    desc: "15 factories in Dindigul established Internal Committees under the Sexual Harassment of Women at Workplace Act, 2013.",
  },
  {
    icon: TrendingUp,
    title: "100+ Government Scheme Beneficiaries",
    desc: "100 members benefited from government welfare schemes. Pink Boxes distributed to 15 textile mills for menstrual health.",
  },
];

const GOVT_PARTNERS = [
  "District Legal Services Authority — One Stop Crisis Team (Human Trafficking)",
  "181-Sahi One Stop Centre",
  "District Vigilance Committee for Bonded Labour",
  "DCPU — District Child Protection Unit (Block & District Level)",
  "State Level Migration Regional Co-ordination Committee (Labour Welfare & Skill Development)",
  "Child Labour Prevention and Regulation Committee",
];

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i].replace("#", ""));
        if (el && el.getBoundingClientRect().top <= 80) {
          setActive(ids[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy([
    "#home",
    "#about",
    "#work",
    "#achievements",
    "#contact",
  ]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-card"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2.5 group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/Hope-1-1.jpeg"
              alt="HOPE Trust Logo"
              width={36}
              height={36}
              className="rounded-full object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg text-teal tracking-tight">
                HOPE
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                Trust
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.slice(0, 5).map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                data-ocid="nav.link"
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-teal bg-teal/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={() => handleNav("#contact")}
              data-ocid="nav.primary_button"
              className="bg-teal text-white hover:bg-teal-dark font-semibold px-5"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-foreground/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-cream border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  data-ocid="nav.link"
                  className="text-left px-4 py-2.5 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNav("#contact")}
                className="mt-2 bg-teal text-white hover:bg-teal-dark"
                data-ocid="nav.primary_button"
              >
                Contact Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-start overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1400x600.jpg')",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge className="mb-6 bg-orange/20 text-orange-light border border-orange/40 text-xs font-semibold px-3 py-1 backdrop-blur-sm">
              Registered Trust · Tamil Nadu · Est. 2019
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Empowering Women,{" "}
            <span className="text-orange-light">Children</span> &amp;
            Communities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl"
          >
            Human Organization And Progressive Education Trust — Building hope,
            dignity, and opportunity for all since 2019.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-7 gap-2 text-base shadow-lg"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="hero.primary_button"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 font-semibold px-7 text-base"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="hero.secondary_button"
            >
              Get Involved
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-teal/10 text-teal border-teal/20 text-xs font-semibold">
            About HOPE Trust
          </Badge>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            HOPE Trust was founded in 2019 by committed volunteers of Vedasandur
            Taluk, Dindigul District, Tamil Nadu. Led by Mr. N. Palanichamy, the
            organization has grown into a registered trust that has benefited
            over 5,000 textile workers and their families.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-80 lg:h-auto min-h-[360px]"
          >
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-card"
              style={{
                backgroundImage:
                  "url('/assets/generated/activity-education.dim_600x400.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute -bottom-4 -right-4 w-48 h-36 rounded-xl overflow-hidden shadow-card-hover border-4 border-background">
              <img
                src="/assets/generated/activity-vocational.dim_600x400.jpg"
                alt="Vocational training"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-3 shadow-card">
              <div className="font-display text-2xl font-bold">5,000+</div>
              <div className="text-xs text-white/80">Families Helped</div>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Mission card */}
            <div
              className="bg-card rounded-2xl p-7 shadow-card border border-border"
              data-ocid="about.card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dedicated to enhancing motivation for children's tuition,
                    uplifting textile working women, and empowering educational
                    and economic development of women and children across Tamil
                    Nadu.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision card */}
            <div
              className="bg-card rounded-2xl p-7 shadow-card border border-border"
              data-ocid="about.card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A compassionate world where every woman and child is
                    protected, educated, and empowered — free from child
                    marriage, labour, abuse, and poverty.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal badge */}
            <div className="bg-teal/5 border border-teal/20 rounded-xl px-5 py-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-teal flex-shrink-0" />
              <p className="text-sm text-teal font-medium">
                Registered under Tamil Nadu Trust Registration Act · Reg. No. 29
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const [showAll, setShowAll] = useState(false);

  const workCards = [
    {
      image: "/assets/generated/activity-education.dim_600x400.jpg",
      icon: BookOpen,
      title: "Child Rights & Education",
      desc: "Forming Child Rights Support Teams (CRST), conducting awareness programs on girls' education, running motivation centres in rural villages to keep children in school.",
    },
    {
      image: "/assets/generated/activity-vocational.dim_600x400.jpg",
      icon: Wrench,
      title: "Vocational Training & Women Empowerment",
      desc: "Tailoring, beautician, and nursing training for adolescent girls; life skill education; and income generation activities for economically weaker sections.",
    },
    {
      image: "/assets/generated/activity-health.dim_600x400.jpg",
      icon: Stethoscope,
      title: "Health & Community Programs",
      desc: "Village-level health camps for adolescent girls, medical camps, counselling for youth girls, and spreading awareness about girl child safety across project villages.",
    },
  ];

  return (
    <section id="work" className="py-20 lg:py-28 bg-beige">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-orange/10 text-orange border-orange/20 text-xs font-semibold">
            Our Programs
          </Badge>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Impacting lives through education, health, and empowerment
          </p>
        </motion.div>

        {/* 3 program cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-14">
          {workCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border"
              data-ocid={`work.card.${i + 1}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center shadow-card">
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Activities */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl border border-border shadow-card p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold text-foreground">
              All 15 Program Activities
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll((v) => !v)}
              className="text-teal border-teal/30 hover:bg-teal/5 font-medium gap-1"
              data-ocid="work.toggle"
            >
              {showAll ? "Show Less" : "View All"}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </Button>
          </div>

          <AnimatePresence initial={false}>
            <div className="grid sm:grid-cols-2 gap-3">
              {(showAll ? ACTIVITIES : ACTIVITIES.slice(0, 6)).map((act, i) => (
                <motion.div
                  key={act}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 leading-snug">
                    {act}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {!showAll && (
            <p className="text-xs text-muted-foreground mt-4">
              Showing 6 of 15 activities.{" "}
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="text-teal underline underline-offset-2 hover:no-underline"
                data-ocid="work.toggle"
              >
                View all
              </button>
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-teal/10 text-teal border-teal/20 text-xs font-semibold">
            Impact
          </Badge>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Achievements & Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Years of dedicated work, measured in lives changed
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-teal rounded-2xl p-6 text-center shadow-card"
              data-ocid={`achievements.card.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-display text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/75 text-xs leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow"
              data-ocid={`achievements.item.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                <ach.icon className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {ach.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ach.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovtPartnersSection() {
  return (
    <section className="py-16 lg:py-20 bg-beige">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge className="mb-4 bg-teal/10 text-teal border-teal/20 text-xs font-semibold">
            Government
          </Badge>
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Government Memberships & Partnerships
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            HOPE Trust holds official membership in key government bodies
            working on child welfare and women's rights.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GOVT_PARTNERS.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="bg-background rounded-xl border border-border px-5 py-4 shadow-xs flex items-start gap-3"
              data-ocid={`govt.item.${i + 1}`}
            >
              <Building2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/85 leading-snug">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-orange/10 text-orange border-orange/20 text-xs font-semibold">
            Reach Out
          </Badge>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a question, want to volunteer, or support our work? We'd love
            to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                Human Organization And Progressive Education Trust
              </h3>
              <p className="text-muted-foreground text-sm">(HOPE Trust)</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    Postal Address
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    40, Anna Nagar, Trichy Main Road,
                    <br />
                    Ayyalur Post, Vedasandur Taluk,
                    <br />
                    Dindigul (DT) – 624801
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    N. Palanichamy (Director)
                  </p>
                  <a
                    href="tel:+918012253120"
                    className="text-teal hover:underline text-sm font-medium"
                    data-ocid="contact.link"
                  >
                    +91 80122 53120
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:hopetrust111@gmail.com"
                    className="text-teal hover:underline text-sm font-medium"
                    data-ocid="contact.link"
                  >
                    hopetrust111@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    Legal Status
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Registered under Tamil Nadu Trust Registration Act
                    <br />
                    Registration Number: 29
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border shadow-card p-8 space-y-5"
              data-ocid="contact.dialog"
            >
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-foreground"
                  htmlFor="contact-name"
                >
                  Your Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="bg-background"
                  data-ocid="contact.input"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-foreground"
                  htmlFor="contact-email"
                >
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  className="bg-background"
                  data-ocid="contact.input"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-foreground"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="How can we help, or how would you like to get involved?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  rows={5}
                  className="bg-background resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-teal hover:bg-teal-dark text-white font-semibold"
                disabled={sending}
                data-ocid="contact.submit_button"
              >
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-teal text-white">
      <div className="container mx-auto px-4 max-w-7xl py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/uploads/Hope-1-1.jpeg"
                alt="HOPE Trust Logo"
                width={36}
                height={36}
                className="rounded-full object-contain"
              />
              <div>
                <div className="font-display text-lg font-bold">HOPE Trust</div>
                <div className="text-white/60 text-xs">Tamil Nadu</div>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs">
              Human Organization And Progressive Education Trust — Empowering
              communities since 2019.
            </p>
            <p className="text-white/50 text-xs mt-3">
              Reg. Trust No. 29 · Tamil Nadu
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Address
            </h4>
            <address className="not-italic text-white/75 text-sm leading-relaxed">
              40, Anna Nagar, Trichy Main Road,
              <br />
              Ayyalur Post, Vedasandur Taluk,
              <br />
              Dindigul (DT) – 624801,
              <br />
              Tamil Nadu, India
            </address>
            <a
              href="tel:+918012253120"
              className="mt-3 flex items-center gap-2 text-white/75 text-sm hover:text-white transition-colors"
              data-ocid="footer.link"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 80122 53120
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Our Work", "#work"],
                ["Achievements", "#achievements"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <button
                  type="button"
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left text-white/70 text-sm hover:text-white transition-colors w-fit"
                  data-ocid="footer.link"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>
            © {year} HOPE Trust. All rights reserved. · Registered Trust No. 29
            · Tamil Nadu
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors flex items-center gap-1"
          >
            Built with <Heart className="w-3 h-3 fill-current mx-0.5" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <AchievementsSection />
        <GovtPartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
