import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';

const navItems = [
  { name: 'Accueil', to: '/' },
  { name: 'Projets', to: '/projects' },
  { name: 'À propos', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-12">
        <Link
          to="/"
          aria-label="JavaChrist, accueil"
          className="-mx-2 inline-flex h-11 items-center rounded-md px-2 text-[15px] font-semibold tracking-[-0.02em]"
        >
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'inline-flex h-9 items-center rounded-md px-3 text-sm transition-colors duration-150 hover:text-foreground',
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden h-9 md:inline-flex"
            render={<Link to="/contact" />}
            nativeButton={false}
          >
            Démarrer un projet
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon-lg" className="md:hidden" />}
            >
              <MenuIcon />
              <span className="sr-only">Ouvrir le menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full gap-0 border-line">
              <SheetHeader className="h-16 justify-center border-b border-line px-6 py-0">
                <SheetTitle className="text-[15px] font-semibold tracking-[-0.02em]">
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">Navigation du site</SheetDescription>
              </SheetHeader>
              <nav aria-label="Navigation mobile" className="flex flex-col px-3 py-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex h-14 items-center rounded-md px-3 text-2xl tracking-[-0.03em] transition-colors duration-150 hover:bg-accent',
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto border-t border-line p-6">
                <Button
                  size="lg"
                  className="w-full"
                  render={<Link to="/contact" onClick={() => setOpen(false)} />}
                  nativeButton={false}
                >
                  Démarrer un projet
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
