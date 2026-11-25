import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Appel à l'action final, le même sur chaque page */
const CtaSection = () => (
  <section className="border-t border-line">
    <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
      <h2 className="max-w-[20ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[.98] font-normal tracking-[-0.05em] text-balance">
        <span className="sm:whitespace-nowrap">Un projet en tête&nbsp;?</span>{' '}
        <span className="text-muted-foreground">Parlons-en.</span>
      </h2>
      <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-pretty text-muted-foreground">
        Décrivez-moi votre idée en quelques lignes, je vous réponds en moins de 24&nbsp;h.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button size="lg" className="h-12 px-6" render={<Link to="/contact" />} nativeButton={false}>
          Démarrer un projet
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
        <a
          href="mailto:contact@javachrist.fr"
          className="inline-flex h-11 items-center font-mono text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          contact@javachrist.fr
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;
