import { motion } from "framer-motion";
import { Layers, Hexagon, Droplets, Cpu, Wrench, Flame, Package, Zap } from "lucide-react";

const categories = [
  { icon: Hexagon, label: "Polymers", count: "4,200" },
  { icon: Layers, label: "Metals & Alloys", count: "3,800" },
  { icon: Droplets, label: "Chemicals", count: "2,900" },
  { icon: Cpu, label: "Electronics", count: "1,600" },
  { icon: Wrench, label: "Hardware", count: "2,100" },
  { icon: Flame, label: "Petroleum", count: "980" },
  { icon: Package, label: "Textiles", count: "1,400" },
  { icon: Zap, label: "Electrical", count: "1,100" },
];

const CategoryBar = () => {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Browse by Category
          </h2>
          <a href="#" className="text-xs text-primary hover:underline font-mono">
            View All →
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.04 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="group flex flex-col items-center gap-2 border border-border p-4 hover:border-primary/50 transition-all duration-300 surface-elevated"
            >
              <cat.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-xs font-semibold text-foreground">{cat.label}</span>
              <span className="text-[10px] font-mono text-muted-foreground">{cat.count}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryBar;
