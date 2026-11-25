import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  CircleAlertIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
  MailIcon,
  MapPinIcon,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/brand';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const contactInfo = [
  { icon: MailIcon, title: 'Email', value: 'contact@javachrist.fr', link: 'mailto:contact@javachrist.fr' },
  { icon: LinkedinIcon, title: 'LinkedIn', value: 'JavaChrist', link: 'https://linkedin.com/in/javachrist' },
  { icon: GithubIcon, title: 'GitHub', value: 'javachrist', link: 'https://github.com/javachrist' },
  { icon: MapPinIcon, title: 'Localisation', value: '5 rue Maurice Fonvieille, 31120 Portet-sur-Garonne', link: null },
];

const faq = [
  {
    q: 'Quels types de projets acceptez-vous ?',
    a: 'Applications web (React, Next.js), applications mobiles, solutions SaaS, sites e-commerce et intégrations d’API.',
  },
  {
    q: 'Quel est votre délai de réponse ?',
    a: 'Je réponds en moins de 24 h. Pour une urgence, précisez-le dans votre message.',
  },
  {
    q: 'Travaillez-vous à distance ?',
    a: 'Oui, je travaille surtout à distance, avec des clients partout en France et à l’international.',
  },
  {
    q: 'Proposez-vous de la maintenance ?',
    a: 'Oui, je propose des contrats de maintenance et d’évolution pour que vos applications durent.',
  },
];

const emptyForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message envoyé. Je vous réponds en moins de 24 h.',
        });
        setFormData(emptyForm);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Une erreur est survenue lors de l’envoi du message.',
        });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Erreur de connexion. Réessayez dans un instant.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Défilement vers l'ancre (#contactez-moi) à l'arrivée sur la page
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const element = document.querySelector(hash);
    if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }, []);

  return (
    <>
      <section className="mx-auto max-w-[1440px] scroll-mt-16 px-6 pt-20 pb-20 md:px-12 md:pt-28 md:pb-28" id="contact-form">
        <div className="flex items-end justify-between gap-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[13px] text-muted-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-ready" />
              Disponible pour un nouveau projet
            </p>
            <h1
              id="contactez-moi"
              className="mt-8 max-w-[16ch] scroll-mt-24 text-[clamp(2.5rem,5vw,4.5rem)] leading-[.98] font-normal tracking-[-0.05em] text-balance"
            >
              <span className="sm:whitespace-nowrap">Un projet en tête&nbsp;?</span>{' '}
              <span className="text-muted-foreground">Parlons-en.</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-pretty text-muted-foreground">
              Décrivez-moi votre idée en quelques lignes, je vous réponds en moins de 24&nbsp;h.
            </p>
          </div>
          <img
            src="/images/avatar-debout.webp"
            alt="Avatar 3D de Christian, alias JavaChrist, debout en veste bleue"
            width={480}
            height={1193}
            className="hidden h-[340px] w-auto shrink-0 md:block"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <ul className="flex flex-col self-start border-t border-line">
            {contactInfo.map(({ icon: Icon, title, value, link }) => {
              const content = (
                <>
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-[13px] text-quiet">{title}</span>
                    <span className="text-pretty break-words">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={title} className="border-b border-line">
                  {link ? (
                    <a
                      href={link}
                      target={link.startsWith('http') ? '_blank' : undefined}
                      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="-mx-3 flex gap-4 rounded-md px-3 py-5 transition-colors duration-150 hover:bg-accent"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex gap-4 py-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-surface p-6 md:p-8">
            <FieldGroup>
              {submitStatus.type && (
                <p
                  role="status"
                  className={cn(
                    'flex items-start gap-3 rounded-md border px-4 py-3 text-sm',
                    submitStatus.type === 'success'
                      ? 'border-ready/40 text-ready'
                      : 'border-destructive/40 text-destructive'
                  )}
                >
                  {submitStatus.type === 'success' ? (
                    <CircleCheckIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                  ) : (
                    <CircleAlertIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                  )}
                  {submitStatus.message}
                </p>
              )}
              <div className="grid gap-6 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Nom complet</FieldLabel>
                  <Input id="name" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} disabled={isLoading} placeholder="Votre nom" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} disabled={isLoading} placeholder="vous@exemple.fr" />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="subject">Sujet</FieldLabel>
                <Input id="subject" name="subject" required value={formData.subject} onChange={handleChange} disabled={isLoading} placeholder="Site vitrine, app mobile, SaaS…" />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} disabled={isLoading} placeholder="Décrivez votre projet ou votre demande…" />
              </Field>
              <Button type="submit" size="lg" className="h-12 w-full md:w-auto md:self-start md:px-6" disabled={isLoading}>
                {isLoading && <LoaderCircleIcon data-icon="inline-start" className="animate-spin" />}
                {isLoading ? 'Envoi en cours…' : 'Envoyer le message'}
              </Button>
            </FieldGroup>
          </form>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <h2 className="max-w-[16ch] text-4xl leading-[1.05] font-normal tracking-[-0.04em] text-balance">
            Ce qu’on me demande avant de commencer
          </h2>
          <dl className="flex flex-col border-t border-line">
            {faq.map((item) => (
              <div key={item.q} className="grid gap-2 border-b border-line py-6 md:grid-cols-[1fr_1.2fr] md:gap-8">
                <dt className="text-lg tracking-[-0.01em] text-balance">{item.q}</dt>
                <dd className="text-pretty text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
};

export default Contact;
