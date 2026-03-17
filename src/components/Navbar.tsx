import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6 lg:gap-8">
          <span className="text-xl font-black tracking-tighter text-foreground">
            RAW<span className="text-primary">MAT</span>
          </span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Browse Materials</a>
            <a href="#" className="hover:text-foreground transition-colors">Suppliers</a>
            <a href="#" className="hover:text-foreground transition-colors">Logistics</a>
          </div>
        </div>

        {/* Search */}
        <div className="hidden sm:block flex-1 max-w-md mx-6 lg:mx-12 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by Grade, CAS No, or Material..."
            className="w-full bg-secondary border border-border pl-10 pr-16 py-1.5 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground font-mono">
            CMD+K
          </kbd>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-bold transition-all">
            POST REQUIREMENT
          </button>
          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-4 py-4 space-y-3 bg-background">
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Browse Materials</a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Suppliers</a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Logistics</a>
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full bg-secondary border border-border pl-10 pr-4 py-2 text-sm rounded-md text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <button className="w-full bg-primary text-primary-foreground py-2 text-sm font-bold mt-2">
            POST REQUIREMENT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
