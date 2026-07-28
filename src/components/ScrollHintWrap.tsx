import { useEffect, useRef, useState, type ReactNode } from "react";

function ScrollHintIcon() {
  return (
    <svg
      width="35"
      height="36"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_scrollhint_shared)">
        <path
          d="M34.9665 15.3417C34.94 14.1335 34.7064 13.0074 33.509 12.3874C32.3133 11.7684 31.28 12.1669 30.3196 13.1001C30.0247 11.8534 29.4923 10.9239 28.2709 10.5339C26.9673 10.1175 26.1575 10.8195 25.3713 11.8953C25.1145 10.4402 24.5078 9.46545 23.0983 9.29731C21.7474 9.1362 20.7536 9.7947 19.8328 11.1022C19.7929 8.28432 19.7608 5.78577 19.7193 3.28742C19.712 2.84214 19.7384 2.39604 19.5506 1.96276C19.0813 0.879656 17.9308 0.228803 16.8187 0.447409C15.634 0.680284 14.8061 1.65232 14.8175 2.94286C14.8551 7.24858 14.9281 11.5541 14.9876 15.8596C15.0016 16.8621 15.0161 17.8645 15.0318 18.9792C14.4233 18.827 14.2386 18.4767 14.0031 18.2064C12.9942 17.0478 12.031 15.8486 11.0013 14.7089C9.96637 13.5635 8.70239 13.408 7.60003 14.2102C6.54955 14.9746 6.41863 15.9246 7.24026 17.3745C8.99556 20.4718 10.8874 23.486 12.9701 26.3758C14.7208 28.8049 16.601 31.1454 17.0666 34.2531C17.2386 35.4009 18.1115 35.9928 19.2456 35.9959C23.1139 36.0065 26.9855 36.0172 30.8412 35.6476C32.1863 35.5188 32.8154 34.7674 32.9778 33.1861C33.1206 31.7959 33.471 30.4708 33.9325 29.159C34.1794 28.4575 34.4063 27.7305 34.5007 26.9969C34.9989 23.1272 35.052 19.2359 34.9663 15.3411L34.9665 15.3417Z"
          fill="#ffffff"
        />
        <path
          d="M13.4126 4.79854V2.28592C13.4126 2.05532 13.2251 1.86836 12.9937 1.86836H5.43536C5.20402 1.86836 5.01646 1.6814 5.01646 1.45079V0.418365C5.01646 0.0742214 4.62245 -0.122255 4.34608 0.0843554L0.167594 3.20832C-0.0558646 3.37543 -0.0558646 3.70944 0.167594 3.87655L4.34629 7.00052C4.62245 7.20692 5.01666 7.01065 5.01666 6.66651V5.63387C5.01666 5.40327 5.20423 5.21631 5.43557 5.21631H12.9939C13.2253 5.21631 13.4129 5.02935 13.4129 4.79875L13.4126 4.79854Z"
          fill="#ffffff"
        />
      </g>
      <defs>
        <clipPath id="clip0_scrollhint_shared">
          <rect width="35" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ScrollHintWrap({
  children,
  className,
  center = false,
  innerClassName = "drs-chart-wrap",
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hintActive, setHintActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = () => {
      if (center) el.scrollLeft = Math.max(0, (el.scrollWidth - el.clientWidth) / 2);
    };
    apply();
    const imgs = el.querySelectorAll("img");
    imgs.forEach((img) => {
      if (!(img as HTMLImageElement).complete)
        img.addEventListener("load", apply, { once: true });
    });
    window.addEventListener("resize", apply);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setHintActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      window.removeEventListener("resize", apply);
      io.disconnect();
    };
  }, [center]);
  return (
    <div className={`drs-scroll-host ${className ?? ""}`}>
      <div ref={ref} className={innerClassName}>
        {children}
      </div>
      {hintActive && (
        <div className="drs-scroll-hint" aria-hidden="true">
          <ScrollHintIcon />
        </div>
      )}
    </div>
  );
}
