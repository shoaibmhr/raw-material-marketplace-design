import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MaterialCardProps {
  id: string;
  name: string;
  grade: string;
  origin: string;
  minOrder: string;
  pricePerKg: string;
  inStock: boolean;
}

const MaterialCard = ({ id, name, grade, origin, minOrder, pricePerKg, inStock }: MaterialCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0 } },
      }}
      whileHover={{ scale: 1.01 }}
      className="group relative bg-card border border-border p-4 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
          ID: {id}
        </span>
        <span
          className={`px-2 py-0.5 text-[10px] font-bold rounded-full font-mono ${
            inStock
              ? "bg-secondary text-primary"
              : "bg-secondary text-muted-foreground"
          }`}
        >
          {inStock ? "IN STOCK" : "PRE-ORDER"}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Grade: {grade} | Origin: {origin}
      </p>

      <div className="grid grid-cols-2 gap-2 mb-6 border-t border-border pt-4">
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Min Order</p>
          <p className="text-sm font-mono text-foreground">{minOrder}</p>
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Price/KG</p>
          <p className="text-sm font-mono text-foreground">{pricePerKg}</p>
        </div>
      </div>

      <button className="w-full py-2.5 bg-foreground text-background font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2">
        REQUEST QUOTE
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default MaterialCard;
