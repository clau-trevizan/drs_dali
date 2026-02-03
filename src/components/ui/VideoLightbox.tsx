import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface VideoLightboxProps {
  thumbnailSrc: string;
  videoUrl: string;
  title?: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  isMP4?: boolean;
}

export function VideoLightbox({ 
  thumbnailSrc, 
  videoUrl, 
  title = "Assista ao vídeo",
  className,
  objectFit = 'cover',
  isMP4 = false
}: VideoLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Stop video when dialog closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`relative group cursor-pointer block ${className}`}
        aria-label={title}
      >
        <img 
          src={thumbnailSrc} 
          alt={title}
          className={`w-full h-full ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : objectFit === 'fill' ? 'object-fill' : ''}`}
          loading="eager"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary ml-1" />
          </div>
        </div>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black border-none">
          <VisuallyHidden>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Vídeo institucional da DRS</DialogDescription>
          </VisuallyHidden>
          <div className="relative aspect-video">
            {isMP4 ? (
              <video
                ref={videoRef}
                src={videoUrl}
                title={title}
                className="w-full h-full"
                controls
                autoPlay
              />
            ) : (
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default VideoLightbox;
