import { cn } from '@/lib/utils';
import cardBoxSvg from '@/assets/card-box.svg';

interface StairStatCardProps {
  number: string;
  label: string;
  description: string;
  className?: string;
}

export function StairStatCard({ number, label, description, className }: StairStatCardProps) {
  return (
    <div 
      className={cn(
        "relative w-[330px] h-[336px] p-8 flex flex-col justify-between",
        className
      )}
      style={{
        backgroundImage: `url(${cardBoxSvg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <span className="text-5xl md:text-6xl font-bold text-secondary">{number}</span>
        <p className="text-lg font-semibold text-foreground mt-2">{label}</p>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default StairStatCard;
