import { cn } from '@/lib/utils';

interface HeroSectionProps {
  tag?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  variant?: 'default' | 'split' | 'full';
  children?: React.ReactNode;
  className?: string;
}

export function HeroSection({
  tag,
  title,
  subtitle,
  description,
  image,
  variant = 'default',
  children,
  className,
}: HeroSectionProps) {
  if (variant === 'split') {
    return (
      <section className={cn('relative overflow-hidden', className)}>
        <div className="drs-container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative">
              {image && (
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
                </div>
              )}
              {/* Decorative shapes */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
            </div>

            {/* Content Side */}
            <div className="lg:pl-8">
              {tag && (
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
                  {tag}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-primary font-medium mb-4">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-muted-foreground mb-6">
                  {description}
                </p>
              )}
              {children}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'full') {
    return (
      <section
        className={cn(
          'relative min-h-[60vh] flex items-center overflow-hidden',
          className
        )}
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />

        <div className="drs-container relative z-10 py-20">
          {tag && (
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-foreground/20 text-primary-foreground mb-4">
              {tag}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-2xl mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary-foreground/90 max-w-xl mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-primary-foreground/80 max-w-xl mb-6">
              {description}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className={cn('bg-background py-12 md:py-20', className)}>
      <div className="drs-container">
        <div className="max-w-3xl">
          {tag && (
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
              {tag}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary font-medium mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-muted-foreground mb-6">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
