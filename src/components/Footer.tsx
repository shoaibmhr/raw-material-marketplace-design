const Footer = () => {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-lg font-black tracking-tighter text-foreground">
              RAW<span className="text-primary">MAT</span>
            </span>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Pakistan's largest B2B marketplace for industrial raw materials.
            </p>
          </div>
          {[
            { title: "Materials", links: ["Polymers", "Metals", "Chemicals", "Textiles"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
            { title: "Support", links: ["Help Center", "Safety", "Terms", "Privacy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground font-mono">
            © 2026 RAWMAT. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground font-mono">
            Built for Pakistani Industry 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
