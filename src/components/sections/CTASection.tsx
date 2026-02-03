import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface CTASectionProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'default' | 'compact';
  className?: string;
}

export const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(({
  title,
  buttonText,
  buttonLink = '/contato',
  variant = 'default',
  className,
}, ref) => {
  const { t } = useTranslation();
  
  const displayTitle = title || t('cta.title');
  const displayButtonText = buttonText || t('cta.button');

  if (variant === 'compact') {
    return (
      <section ref={ref} className={cn('bg-primary py-8', className)}>
        <div className="drs-container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-primary-foreground">
            {displayTitle}
          </h2>
          <Link to={buttonLink} className="drs-btn drs-btn-uppercase whitespace-nowrap">
            {displayButtonText}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={cn('bg-primary py-16', className)}>
      <div className="drs-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            {displayTitle}
          </h2>
          <Link to={buttonLink} className="drs-btn drs-btn-uppercase">
            {displayButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
