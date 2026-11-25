import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ui/ProjectCard';
import CtaSection from '@/components/CtaSection';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const featuredSlugs = ['julie-g', 'dourya', 'ridecloud-moto', 'sync-pro', 'saas-facturation', 'app-plombier'];
const featured = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const proofs = [
  { label: '2019 → 2026', value: '145 projets livrés' },
  { label: 'stores', value: 'Apps sur Google Play' },
  { label: 'plateformes', value: 'Web et mobile' },
  { label: 'localisation', value: 'France, à distance' },
];

const Availability = () => (
  <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[13px] text-muted-foreground">
    <span aria-hidden="true" className="size-2 rounded-full bg-ready" />
    Disponible pour un nouveau projet
  </p>
);

const HeroActions = () => (
  <div className="flex flex-wrap gap-3">
    <Button size="lg" className="h-12 px-6" render={<Link to="/contact" />} nativeButton={false}>
      Démarrer un projet
      <ArrowRightIcon data-icon="inline-end" />
    </Button>
    <Button variant="outline" size="lg" className="h-12 px-6" render={<Link to="/projects" />} nativeButton={false}>
      Voir les projets
    </Button>
  </div>
);

const intro =
  'Développeur freelance, j’ai réalisé 145 projets depuis 2019 avec React, Next.js et Firebase, pour des clients comme pour mes propres apps.';

const enter = 'animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500 ease-out motion-reduce:animate-none';

const Hero = () => (
  <>
    <div className={enter}>
      <Availability />
    </div>
    <h1 className={cn(enter, 'mt-8 delay-75 max-w-[18ch] text-[clamp(2.75rem,6vw,5.5rem)] leading-[.95] font-normal tracking-[-0.055em] text-balance')}>
      Je conçois vos applications web et mobiles, de l’idée à la mise en ligne.
    </h1>
    <div className={cn(enter, 'mt-10 delay-150 grid gap-8 md:grid-cols-[1fr_auto] md:items-end')}>
      <p className="max-w-[52ch] text-lg leading-relaxed text-pretty text-muted-foreground">{intro}</p>
      <HeroActions />
    </div>
  </>
);

const Home = () => {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pt-20 pb-20 md:px-12 md:pt-32 md:pb-28">
        <Hero />

        <ul className="mt-20 grid grid-cols-2 border-y border-line text-sm md:grid-cols-4">
          {proofs.map((proof, i) => (
            <li
              key={proof.label}
              className={cn(
                'flex flex-col gap-1 border-line p-6',
                i === 0 && 'pl-0',
                i === 1 && 'border-l',
                i === 2 && 'max-md:border-t max-md:pl-0 md:border-l',
                i === 3 && 'border-l max-md:border-t'
              )}
            >
              <span className="font-mono text-[13px] text-quiet">{proof.label}</span>
              <span>{proof.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[22ch] text-4xl leading-[1.05] font-normal tracking-[-0.04em] text-balance md:text-6xl">
              Des applications qui tournent tous les jours chez mes clients
            </h2>
            <Button variant="ghost" size="lg" className="self-start md:self-auto" render={<Link to="/projects" />} nativeButton={false}>
              Voir les {projects.length}&nbsp;projets
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default Home;
