import { useState, type KeyboardEvent } from 'react';
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type { Project, ProjectStatus } from '@/data/projects';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const statusDot: Record<ProjectStatus, string> = {
  'Terminé': 'bg-ready',
  'En ligne': 'bg-ready',
  'Sur Google Play': 'bg-ready',
  'Réseau privé': 'bg-quiet',
  'Bientôt sur les stores': 'bg-building',
  'En cours': 'bg-building',
  'En développement': 'bg-building',
};

export const StatusLine = ({ project }: { project: Project }) => {
  if (!project.status) return null;
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span aria-hidden="true" className={cn('size-2 shrink-0 rounded-full', statusDot[project.status])} />
      {project.status}
      {project.kind && <span className="text-quiet">· {project.kind}</span>}
    </span>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const images = project.images ?? [];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const many = images.length > 1;

  const go = (step: number) => setIndex((i) => (i + step + images.length) % images.length);
  const onKeyDown = (e: KeyboardEvent) => {
    if (!many) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  const hasDemo = project.linkDemo && project.linkDemo !== '#';
  const hasCode = project.linkCode && project.linkCode !== '#';

  return (
    <article className="flex flex-col bg-surface p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[13px] text-muted-foreground">
        <StatusLine project={project} />
        <code className="font-mono text-quiet">{project.stack.slice(0, 2).join(' · ')}</code>
      </div>

      <h3 className="mt-6 text-2xl font-normal tracking-[-0.03em] text-balance">{project.name}</h3>
      <p className="mt-2 text-pretty text-muted-foreground">{project.description}</p>

      <div className="mt-auto flex flex-col gap-4 pt-8">
        {images.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
            aria-label={`Agrandir les captures de ${project.name}`}
            className="group/img relative block overflow-hidden rounded-md border border-line outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <img
              src={images[0]}
              alt={`Capture de ${project.name}`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 ease-out group-hover/img:scale-[1.02]"
            />
            {many && (
              <span className="absolute right-3 bottom-3 rounded-md border border-line bg-background/80 px-2 py-1 font-mono text-[12px] text-muted-foreground backdrop-blur-sm">
                1 / {images.length}
              </span>
            )}
          </button>
        )}

        {(hasDemo || project.linkPlay || hasCode) && (
          <div className="flex flex-wrap gap-2">
            {hasDemo && (
              <Button
                variant="outline"
                size="lg"
                render={<a href={project.linkDemo} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
              >
                Voir le site
                <ArrowUpRightIcon data-icon="inline-end" />
              </Button>
            )}
            {project.linkPlay && (
              <Button
                variant="outline"
                size="lg"
                render={<a href={project.linkPlay} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
              >
                Google Play
                <ArrowUpRightIcon data-icon="inline-end" />
              </Button>
            )}
            {hasCode && (
              <Button
                variant="ghost"
                size="lg"
                render={<a href={project.linkCode} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
              >
                Code source
              </Button>
            )}
          </div>
        )}
      </div>

      {images.length > 0 && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            onKeyDown={onKeyDown}
            className="gap-0 overflow-hidden rounded-lg bg-card p-0 ring-line sm:max-w-5xl"
          >
            <img
              src={images[index]}
              alt={`Capture ${index + 1} de ${project.name}`}
              className="max-h-[75vh] w-full bg-background object-contain"
            />
            <div className="flex items-center justify-between gap-4 border-t border-line px-4 py-3 md:px-6">
              <div className="flex min-w-0 flex-col">
                <DialogTitle className="truncate text-[15px] font-medium">{project.name}</DialogTitle>
                <DialogDescription className="font-mono text-[13px] text-quiet">
                  {index + 1} / {images.length}
                </DialogDescription>
              </div>
              {many && (
                <div className="flex gap-2">
                  <Button variant="outline" size="icon-lg" onClick={() => go(-1)}>
                    <ChevronLeftIcon />
                    <span className="sr-only">Capture précédente</span>
                  </Button>
                  <Button variant="outline" size="icon-lg" onClick={() => go(1)}>
                    <ChevronRightIcon />
                    <span className="sr-only">Capture suivante</span>
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </article>
  );
};

export default ProjectCard;
