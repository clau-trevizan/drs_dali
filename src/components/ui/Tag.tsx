import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'teal' | 'orange' | 'outline' | 'white';
  size?: 'sm' | 'md';
  className?: string;
}

export function Tag({
  children,
  variant = 'teal',
  size = 'md',
  className,
}: TagProps) {
  const variants = {
    teal: 'bg-primary text-primary-foreground',
    orange: 'bg-secondary text-secondary-foreground',
    outline: 'bg-transparent text-foreground border border-foreground/30',
    white: 'bg-white text-foreground border border-border',
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-block rounded-full font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
