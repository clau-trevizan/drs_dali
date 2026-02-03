import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'teal' | 'white' | 'outline';
  className?: string;
}

export function ServiceCard({
  title,
  description,
  buttonText = 'SAIBA MAIS',
  buttonLink = '#',
  variant = 'white',
  className,
}: ServiceCardProps) {
  const variants = {
    teal: 'bg-primary text-primary-foreground rounded-drs-tl',
    white: 'bg-white text-foreground rounded-drs-br border border-border',
    outline: 'bg-transparent text-foreground rounded-2xl border-2 border-primary',
  };

  const buttonVariants = {
    teal: 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary',
    white: 'border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    outline: 'border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  };

  return (
    <div className={cn('p-6 flex flex-col h-full', variants[variant], className)}>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={cn(
        'text-sm mb-6 flex-1',
        variant === 'teal' ? 'text-primary-foreground/80' : 'text-muted-foreground'
      )}>
        {description}
      </p>
      {buttonLink && (
        <Link
          to={buttonLink}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors self-start',
            buttonVariants[variant]
          )}
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}

export default ServiceCard;
