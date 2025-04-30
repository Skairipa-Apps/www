import { Link, useLocation } from "wouter";

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, toggleMenu, navItems }: MobileMenuProps) => {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 border-t border-[hsl(var(--neutral-light))]">
      <div className="container">
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors ${
                isActive(item.path)
                  ? "text-primary font-medium"
                  : "text-[hsl(var(--neutral-dark))] hover:text-primary"
              }`}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
