import { cn } from '@/lib/utils';

/* Marque : le logo orange et gris suivi du nom. */
export const LogoMark = ({ className }: { className?: string }) => (
  <img src="/logo-mark.png" alt="" aria-hidden="true" width={128} height={128} className={cn('size-7 shrink-0', className)} />
);

const Logo = ({ className }: { className?: string }) => (
  <span className={cn('inline-flex items-center gap-2.5', className)}>
    <LogoMark />
    JavaChrist
  </span>
);

export default Logo;
