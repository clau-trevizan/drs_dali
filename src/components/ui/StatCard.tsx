import { cn } from '@/lib/utils';

interface StatCardProps {
  number: string;
  label: string;
  description?: string;
  variant?: 'default' | 'teal' | 'white';
  className?: string;
}

export function StatCard({
  number,
  label,
  description,
  variant = 'default',
  className,
}: StatCardProps) {
  const variants = {
    default: 'bg-white text-foreground',
    teal: 'bg-primary text-primary-foreground',
    white: 'bg-white text-foreground shadow-lg',
  };

  return (
    <div className={cn('p-6 rounded-2xl', variants[variant], className)}>
      <div className="text-3xl md:text-4xl font-bold mb-2">{number}</div>
      <div className={cn(
        'font-semibold mb-1',
        variant === 'teal' ? 'text-primary-foreground' : 'text-foreground'
      )}>
        {label}
      </div>
      {description && (
        <p className={cn(
          'text-sm',
          variant === 'teal' ? 'text-primary-foreground/70' : 'text-muted-foreground'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

export default StatCard;
