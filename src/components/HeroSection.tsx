import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative border-b border-border overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono font-semibold">
              Pakistan's #1 B2B Material Marketplace
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-4">
            Source Industrial Grade Materials with{" "}
            <span className="text-primary">Technical Precision</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Pakistan's largest marketplace for Polymers, Metals, and Chemicals.
            Verified suppliers. Real-time pricing.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-sm font-bold transition-all inline-flex items-center gap-2">
              BROWSE MATERIALS
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 text-sm font-bold border border-border transition-all">
              POST REQUIREMENT
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
        >
          {[
            { icon: Shield, label: "Verified Suppliers", value: "2,400+" },
            { icon: TrendingUp, label: "Materials Listed", value: "18,000+" },
            { icon: Globe, label: "Cities Covered", value: "45+" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 border border-border p-3">
              <stat.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-foreground font-mono">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
