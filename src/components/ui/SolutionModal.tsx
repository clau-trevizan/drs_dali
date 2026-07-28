import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect } from "react";
import { stopLenis, startLenis } from "@/components/ui/SmoothScroll";
import { useTranslation } from '@/hooks/useTranslation';

export interface SolutionModalData {
  title: string;
  description: string;
  diferenciais: string[];
  destaques: string[];
  image?: string;
  imageAfter?: number;
}

interface SolutionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: SolutionModalData | null;
}

export function SolutionModal({ open, onOpenChange, data }: SolutionModalProps) {
  const { t } = useTranslation();

  React.useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      const locked = body.getAttribute("data-scroll-locked") === "1";

      if (locked) {
        html.setAttribute("data-scroll-locked", "1");
      } else {
        html.removeAttribute("data-scroll-locked");
      }
    });

    observer.observe(body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent
    className="max-w-2xl p-0 border-0"
    style={{
      background: 'none',
      borderRadius: '0'
    }}
    >
    {/* Content area */}
    <div
    className="p-6 pt-8 lg:p-10 lg:pt-8 relative"
    style={{
      borderRadius: '30px',
      background: 'rgb(255, 255, 255)'
    }}
    >
    {/* Close button - top right */}
    <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
    <button
    onClick={() => onOpenChange(false)}
    className="px-4 py-2 text-white text-sm font-medium rounded-[10px] hover:opacity-80 transition-opacity"
    style={{
      backgroundColor: '#274B41'
    }}
    >
    {t(`fechar`)}
    </button>
    </div>

    <DialogHeader className="mb-6 pr-24">
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
    <div className="content-scroll overflow-y-auto" data-lenis-prevent>
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
      {t(`diferenciais`)}
      </h3>

      <ul className="space-y-2">
      {data.diferenciais.map((item, index) => (
        <React.Fragment key={index}>
        <li
        className="flex items-start gap-2"
        style={{ fontSize: '15px', color: '#274B41' }}
        >
        <span>•</span>
        <span>{item}</span>
        </li>

        {data.image && data.imageAfter === index + 1 && (
          <li className="py-4">
          <img
          src={data.image}
          alt={data.title}
          className="w-full rounded-lg"
          />
          </li>
        )}
        </React.Fragment>
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
      {t(`destaques`)}
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
    {data.image && data.imageAfter == null && (
      <div className="mb-6">
      <img
      src={data.image}
      alt={data.title}
      className="w-full rounded-lg"
      />
      </div>
    )}
    </div>
    </div>
    </DialogContent>
    </Dialog>
  );
}
