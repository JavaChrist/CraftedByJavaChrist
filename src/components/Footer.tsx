import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from '@/components/icons/brand';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const links = [
  { name: 'Projets', to: '/projects' },
  { name: 'À propos', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-16 md:px-12">
        <div className="flex flex-col gap-2">
          <Link to="/" className="-mx-2 -my-2.5 inline-flex h-11 items-center self-start rounded-md px-2 text-[15px] font-semibold tracking-[-0.02em]">
            <Logo />
          </Link>
          <p className="max-w-[36ch] text-pretty text-sm text-muted-foreground">
            Développeur freelance, applications web et mobiles, de l’idée à la mise en ligne.
          </p>
        </div>

        <nav aria-label="Pied de page" className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex h-11 items-center text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground md:h-8"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href="mailto:contact@javachrist.fr"
            className="inline-flex h-11 items-center font-mono text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground md:h-8"
          >
            contact@javachrist.fr
          </a>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon-lg"
              render={<a href="https://github.com/javachrist" target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
            >
              <GithubIcon />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              render={<a href="https://linkedin.com/in/javachrist" target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
            >
              <LinkedinIcon />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1440px] px-6 py-6 font-mono text-[13px] text-quiet md:px-12">
          © {year} JavaChrist
        </p>
      </div>
    </footer>
  );
};

export default Footer;
