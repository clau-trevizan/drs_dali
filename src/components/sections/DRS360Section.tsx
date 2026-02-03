import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import drs360Banner from '@/assets/drs360-banner.png';
import { WorldMap } from '@/components/ui/WorldMap';
import { useTranslation } from '@/hooks/useTranslation';

interface DRS360SectionProps {
  title?: string;
  tagText?: string;
  buttonLink?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  showTitle?: boolean;
  hasLink?: boolean;
  uppercaseTag?: boolean;
  useWorldMap?: boolean;
}

export function DRS360Section({
  title,
  tagText,
  buttonLink = '/drs-360',
  className,
  imageSrc,
  imageAlt = 'DRS 360 - Saiba mais',
  showTitle = true,
  hasLink = true,
  uppercaseTag = false,
  useWorldMap = false,
}: DRS360SectionProps) {
  const { t } = useTranslation();
  const bannerImage = imageSrc || drs360Banner;
  
  const displayTagText = tagText || t('home.drs360section.tag');
  const displayTitle = title || t('home.drs360section.title');
  
  return (
    <section className={cn('py-20 bg-background', useWorldMap ? '' : '', className)}>
      <div className="drs-container">
        {/* Tag Section - 9 cols for world map text */}
        <div className="grid grid-cols-12">
          <div className={cn(
            "col-span-12",
            useWorldMap ? "lg:col-start-3 lg:col-span-9" : "lg:col-start-3 lg:col-span-9"
          )}>
            {/* Tag */}
            <span 
              style={{ 
                color: '#274B41', 
                fontSize: '20px', 
                fontStyle: 'normal', 
                fontWeight: 400, 
                lineHeight: '40px',
                borderRadius: '30px',
                background: '#69C0AC',
                padding: '5px 20px',
                display: 'inline-block',
                marginBottom: showTitle ? '1rem' : '50px',
                textTransform: uppercaseTag ? 'uppercase' : 'none'
              }}
            >
              {displayTagText}
            </span>
            
            {/* Title */}
            {showTitle && (
              <h2 
                style={{ 
                  color: '#274B41', 
                  fontSize: '35px', 
                  fontStyle: 'normal', 
                  fontWeight: 900, 
                  lineHeight: '40px',
                  marginBottom: '2rem'
                }}
              >
                {displayTitle}
              </h2>
            )}
          </div>
        </div>
        
        {/* Content Section - 12 cols for world map, 9 cols for others */}
        <div className="grid grid-cols-12">
          <div className={cn(
            "col-span-12",
            useWorldMap ? "" : "lg:col-start-3 lg:col-span-9"
          )}>
            {/* Banner Image */}
            {useWorldMap ? (
              <WorldMap />
            ) : hasLink ? (
              <Link to={buttonLink} className="block">
                <img 
                  src={bannerImage} 
                  alt={imageAlt} 
                  className="h-auto"
                  style={{ maxWidth: '95%' }}
                />
              </Link>
            ) : (
              <img 
                src={bannerImage} 
                alt={imageAlt} 
                className="h-auto"
                style={{ maxWidth: '95%' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DRS360Section;
