import { Link, useLocation } from "wouter";

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navItems: NavItem[];
  legalItems?: NavItem[];
}

const MobileMenu = ({ isOpen, toggleMenu, navItems, legalItems = [] }: MobileMenuProps) => {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 border-t border-[hsl(var(--neutral-light))]">
      <div className="container">
        <nav className="flex flex-col">
          <div className="pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-[hsl(var(--neutral-dark))] hover:text-primary"
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {legalItems.length > 0 && (
            <>
              <div className="border-t border-[hsl(var(--neutral-light))] my-2 pt-2">
                <h3 className="text-xs uppercase text-[hsl(var(--neutral-mid))] font-medium py-2">Legal</h3>
                {legalItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block py-2 text-sm transition-colors ${
                      isActive(item.path)
                        ? "text-primary font-medium"
                        : "text-[hsl(var(--neutral-dark))] hover:text-primary"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
