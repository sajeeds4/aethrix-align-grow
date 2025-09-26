import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { 
      name: "Home", 
      href: "/" 
    },
    {
      name: "About",
      href: "/about"
    },
    { 
      name: "Services",
      href: "/services",
      children: [
        { name: "ERP Solutions", href: "/erp" },
        { name: "Web & App Development", href: "/development" },
        { name: "Cloud & Infrastructure", href: "/cloud" },
        { name: "AI & Automation", href: "/ai" }
      ]
    },
    { 
      name: "Industries", 
      href: "/industries" 
    },
    { 
      name: "Case Studies", 
      href: "/case-studies" 
    },
    { 
      name: "Contact", 
      href: "/contact" 
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-start py-2">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <img 
                  src="/aethrix-logo.png" 
                  alt="Aethrix Systems Logo" 
                  className="w-5 h-5 object-contain"
                />
                <h1 className="text-lg font-medium tracking-wide">Aethrix Systems</h1>
              </div>
              <span className="text-xs text-gray-500 mt-0.5 tracking-wide ml-8">Innovation. Security. Agility.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenuDemo />
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a href="mailto:info@aethrixsystems.com" className="text-muted-foreground hover:text-accent transition-smooth">
                info@aethrixsystems.com
              </a>
              <a href="tel:+19175649475" className="text-muted-foreground hover:text-accent transition-smooth">
                +1 917 564 9475
              </a>
            </div>
            <Button variant="cta" asChild>
              <Link to="/consultation">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-accent hover:text-accent-foreground ${
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/consultation">Free Consultation</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;