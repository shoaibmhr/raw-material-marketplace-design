import { motion } from "framer-motion";
import MaterialCard from "./MaterialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const materials = [
  { id: "RM-8829", name: "Polypropylene Granules (PP)", grade: "Injection Molding", origin: "Saudi Arabia", minOrder: "500 KG", pricePerKg: "Rs. 285.00", inStock: true },
  { id: "RM-4401", name: "Hot Rolled Steel Coil (HRC)", grade: "SS400 / Q235B", origin: "China", minOrder: "5 MT", pricePerKg: "Rs. 195.00", inStock: true },
  { id: "RM-6612", name: "Caustic Soda Flakes (NaOH)", grade: "Industrial 99%", origin: "Iran", minOrder: "1 MT", pricePerKg: "Rs. 120.00", inStock: true },
  { id: "RM-7789", name: "HDPE Blow Molding Resin", grade: "HMA 018", origin: "UAE", minOrder: "2 MT", pricePerKg: "Rs. 310.00", inStock: false },
  { id: "RM-3345", name: "Copper Cathode 99.99%", grade: "LME Grade A", origin: "Chile", minOrder: "1 MT", pricePerKg: "Rs. 1,850.00", inStock: true },
  { id: "RM-5567", name: "PET Resin (Bottle Grade)", grade: "IV 0.80 ± 0.02", origin: "Pakistan", minOrder: "3 MT", pricePerKg: "Rs. 245.00", inStock: true },
  { id: "RM-9910", name: "Zinc Ingots 99.995%", grade: "SHG Grade", origin: "Australia", minOrder: "2 MT", pricePerKg: "Rs. 650.00", inStock: true },
  { id: "RM-1123", name: "Calcium Carbonate (CaCO₃)", grade: "Coated / Uncoated", origin: "Pakistan", minOrder: "10 MT", pricePerKg: "Rs. 18.00", inStock: true },
];

const MaterialGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-foreground">Latest Materials</h2>
          <p className="text-xs text-muted-foreground font-mono mt-1">Total Results: 1,240</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="bg-secondary border border-border text-sm text-foreground px-3 py-1.5 rounded-md font-mono focus:outline-none focus:ring-1 focus:ring-primary/50">
            <option>Sort: Newest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
          </select>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
      >
        {materials.map((mat) => (
          <MaterialCard key={mat.id} {...mat} />
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground font-mono">
          Showing 1–8 of 1,240 results
        </p>
        <div className="flex items-center gap-1">
          <button className="p-2 border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2, 3, "...", 155].map((page, i) => (
            <button
              key={i}
              className={`px-3 py-1.5 text-xs font-mono border transition-colors ${
                page === 1
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MaterialGrid;
