import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Tag } from './Tag';

interface InsightCardProps {
  title: string;
  date: string;
  slug: string;
  image?: string;
  categories?: string[];
  className?: string;
}

export function InsightCard({
  title,
  date,
  slug,
  image,
  categories = [],
  className,
}: InsightCardProps) {
  return (
    <Link
      to={`/insights/${slug}`}
      className={cn('group block', className)}
    >
      {/* Image */}
      <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
        )}
      </div>

      {/* Date */}
      <p className="text-sm text-muted-foreground mb-2">{date}</p>

      {/* Title */}
      <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Tag key={category} variant="outline" size="sm">
              {category}
            </Tag>
          ))}
        </div>
      )}
    </Link>
  );
}

export default InsightCard;
