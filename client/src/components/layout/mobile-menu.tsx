import { useEffect } from "react";
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

const MobileMenu = ({
  isOpen,
  toggleMenu,
  navItems,
  legalItems = [],
}: MobileMenuProps) => {
  const [location] = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 backdrop-blur-sm bg-white/95 overflow-y-auto py-4 border-t border-[hsl(var(--neutral-light))] min-h-screen">
      <div className="container">
        <nav className="flex flex-col">
          <div className="pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 transition-colors ${
                  item.path === location
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
                <h3 className="text-xs uppercase text-[hsl(var(--neutral-mid))] font-medium py-2">
                  Legal
                </h3>
                {legalItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block py-2 text-sm transition-colors ${
                      item.path === location
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
