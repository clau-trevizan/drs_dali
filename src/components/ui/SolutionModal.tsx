import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface SolutionModalData {
  title: string;
  description: string;
  diferenciais: string[];
  destaques: string[];
}

interface SolutionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: SolutionModalData | null;
}

export function SolutionModal({ open, onOpenChange, data }: SolutionModalProps) {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-2xl p-0 overflow-hidden border-0 lg:pt-[68px]"
        style={{
          background: 'none',
          borderRadius: '0'
        }}
      >
        {/* Close button SVG - desktop only (≥1024px) */}
        <div 
          className="absolute right-0 z-10 hidden lg:block"
          style={{ top: '0' }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="158" 
            height="70" 
            viewBox="0 0 157.65 69.65"
            className="w-auto h-auto"
          >
            <g>
              <path fill="#fff" d="M0,69.65c12.02,0,21.77-9.78,21.77-21.84v-25.37C21.77,10.05,31.78,0,44.14,0h88.85c13.62,0,24.66,11.08,24.66,24.75v44.91"/>
              <rect 
                fill="#274b41" 
                x="39.65" 
                y="21" 
                width="100" 
                height="41" 
                rx="10" 
                ry="10"
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onOpenChange(false)}
              />
              <text 
                className="botao cursor-pointer" 
                x="55.5" 
                y="47.5" 
                fontSize="16" 
                fontWeight="400" 
                fill="#FFF"
                onClick={() => onOpenChange(false)}
              >
                FECHAR
              </text>
            </g>
          </svg>
        </div>

        {/* Content area */}
        <div 
          className="p-6 pt-20 lg:p-10 lg:pt-8 relative"
          style={{
            borderRadius: '30px',
            background: 'rgb(255, 255, 255)'
          }}
        >
          {/* Mobile close button (≤1023px) */}
          <button
            onClick={() => onOpenChange(false)}
            className="lg:hidden absolute top-4 right-4 z-10 px-4 py-2 text-white text-sm font-medium rounded-[10px] hover:opacity-80 transition-opacity"
            style={{ 
              backgroundColor: '#274B41',
              minHeight: '40px'
            }}
          >
            FECHAR
          </button>

          <DialogHeader className="mb-6 pr-24 lg:pr-0">
            <DialogTitle 
              className="text-left"
              style={{ 
                fontSize: '28px', 
                fontWeight: 900, 
                color: '#274B41',
                lineHeight: '1.2'
              }}
            >
              {data.title}
            </DialogTitle>
          </DialogHeader>

          <p 
            className="mb-6"
            style={{ 
              fontSize: '16px', 
              color: '#274B41',
              lineHeight: '1.5'
            }}
          >
            {data.description}
          </p>

          {data.diferenciais.length > 0 && (
            <div className="mb-6">
              <h3 
                className="mb-3"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 700, 
                  color: '#274B41' 
                }}
              >
                Diferenciais
              </h3>
              <ul className="space-y-2">
                {data.diferenciais.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2"
                    style={{ fontSize: '15px', color: '#274B41' }}
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.destaques.length > 0 && (
            <div>
              <h3 
                className="mb-3"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 700, 
                  color: '#274B41' 
                }}
              >
                Destaques
              </h3>
              <ul className="space-y-2">
                {data.destaques.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2"
                    style={{ fontSize: '15px', color: '#274B41' }}
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
