import CtaSection from '@/components/CtaSection';

const skills = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Mobile', techs: ['React Native', 'Applications installables (PWA)', 'Publication Google Play'] },
  { category: 'Backend', techs: ['Node.js', 'Firebase', 'API REST', 'Authentification'] },
  { category: 'Hébergement', techs: ['Vercel', 'Cloudflare', 'Git', 'GitHub'] },
  { category: 'Paiements', techs: ['Stripe', 'PayPal', 'Facturation automatisée'] },
  { category: 'Outils', techs: ['VS Code', 'Figma'] },
];

const experiences = [
  {
    period: '2023 → aujourd’hui',
    title: 'Développeur freelance full stack',
    company: 'CraftedByJavaChrist',
    description:
      'Applications web et mobiles sur mesure pour des clients variés, avec une spécialité pour les SaaS et les boutiques en ligne.',
  },
  {
    period: '2022 → 2023',
    title: 'Développeur React / Next.js',
    company: 'EDF (Unitep)',
    description:
      'Application Next.js professionnelle de gestion de fichiers via NAS, avec authentification Firebase.',
  },
  {
    period: '2019 → 2022',
    title: 'Développeur full stack',
    company: 'Projets personnels et formation',
    description:
      'Mes débuts : plus de 90 projets et outils créés pour apprendre les technologies modernes sur du concret.',
  },
];

const learning = [
  { title: 'Autoformation', text: 'Documentation officielle, tutoriels et projets personnels.' },
  { title: 'Communauté', text: 'GitHub, Stack Overflow et forums spécialisés.' },
  { title: 'Projets réels', text: 'L’expérience pratique sur des projets clients variés.' },
];

const About = () => {
  return (
    <>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 pt-20 pb-20 md:px-12 md:pt-28 md:pb-28 lg:grid-cols-[1fr_260px] lg:items-end lg:gap-20">
        <div>
          <p className="font-mono text-[13px] text-quiet">JavaChrist · développeur freelance</p>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[.98] font-normal tracking-[-0.05em] text-balance">
            Je construis des applications web et mobiles depuis 2019.
          </h1>
          <div className="mt-8 flex max-w-[60ch] flex-col gap-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            <p>
              Passionné par le développement depuis toujours, j’en ai fait mon métier. Je travaille surtout avec React, Next.js et Firebase, et je cherche toujours le même équilibre&nbsp;: une technique solide et une app agréable à utiliser.
            </p>
            <p>
              En freelance, j’accompagne mes clients de la conception à la mise en ligne, puis dans la durée.
            </p>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-[240px] lg:max-w-none">
          <img
            src="/images/avatar-bureau.webp"
            alt="Avatar 3D de Christian, alias JavaChrist, assis à son bureau"
            width={640}
            height={1034}
            className="h-auto w-full"
          />
          <figcaption className="flex items-center justify-between border-t border-line pt-3 text-[13px] text-muted-foreground">
            <span>Christian</span>
            <span className="font-mono text-quiet">Portet-sur-Garonne</span>
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <h2 className="max-w-[16ch] text-4xl leading-[1.05] font-normal tracking-[-0.04em] text-balance">
            Trois étapes, de la formation au freelance
          </h2>
          <ol className="flex flex-col border-t border-line">
            {experiences.map((exp) => (
              <li key={exp.period} className="grid gap-2 border-b border-line py-8 md:grid-cols-[180px_1fr] md:gap-8">
                <span className="font-mono text-[13px] text-quiet md:pt-1.5">{exp.period}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl tracking-[-0.02em]">{exp.title}</h3>
                  <p className="text-sm text-foreground/80">{exp.company}</p>
                  <p className="max-w-[60ch] text-pretty text-muted-foreground">{exp.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
          <h2 className="max-w-[22ch] text-4xl leading-[1.05] font-normal tracking-[-0.04em] text-balance">
            Les outils que j’utilise tous les jours
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-4 bg-surface p-6 md:p-8">
                <h3 className="text-[13px] text-muted-foreground">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <li key={tech} className="rounded-md border border-line px-2.5 py-1 text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="max-w-[16ch] text-4xl leading-[1.05] font-normal tracking-[-0.04em] text-balance">
              J’apprends en continu, sur de vrais projets
            </h2>
            <p className="max-w-[44ch] text-pretty text-muted-foreground">
              Toujours en veille, je me forme aux dernières technologies et aux bonnes pratiques du web et du mobile.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {learning.map((item) => (
              <li key={item.title} className="flex flex-col gap-2 bg-surface p-6">
                <h3 className="tracking-[-0.01em]">{item.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default About;
