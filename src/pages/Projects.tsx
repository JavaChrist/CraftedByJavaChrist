import ProjectCard from '@/components/ui/ProjectCard';
import CtaSection from '@/components/CtaSection';
import { projects, ongoingStatuses, type Project } from '@/data/projects';

const isOngoing = (p: Project) => !!p.status && ongoingStatuses.includes(p.status);
const completedProjects = projects.filter((p) => !isOngoing(p));
const ongoingProjects = projects.filter(isOngoing);

const ProjectGrid = ({ items }: { items: Project[] }) => (
  <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
    {items.map((project) => (
      <ProjectCard key={project.slug} project={project} />
    ))}
  </div>
);

const Projects = () => {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pt-20 pb-16 md:px-12 md:pt-28">
        <p className="font-mono text-[13px] text-quiet">{projects.length}&nbsp;projets présentés sur 145</p>
        <h1 className="mt-6 max-w-[20ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[.98] font-normal tracking-[-0.05em] text-balance">
          Des sites clients, des apps sur Google Play et des outils métier
        </h1>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-pretty text-muted-foreground">
          Une sélection de ce que j’ai livré depuis 2019&nbsp;: chaque carte indique son statut, s’il s’agit d’un projet client ou d’une app perso, et mène au site ou au store.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-20 md:px-12 md:pb-28">
        <h2 className="text-2xl font-normal tracking-[-0.03em]">
          Projets livrés <span className="font-mono text-base text-quiet">{completedProjects.length}</span>
        </h2>
        <ProjectGrid items={completedProjects} />

        {ongoingProjects.length > 0 && (
          <>
            <h2 className="mt-20 text-2xl font-normal tracking-[-0.03em]">
              En cours de développement <span className="font-mono text-base text-quiet">{ongoingProjects.length}</span>
            </h2>
            <ProjectGrid items={ongoingProjects} />
          </>
        )}
      </section>

      <CtaSection />
    </>
  );
};

export default Projects;
