import "./styles.css";

interface Props {
  children: React.ReactNode;
  src: string;
  href: string;
}

export default function DealCard({ children, src, href }: Props) {
  return (
    <div className="deal-card bg-product">
      <img src={src} alt="" />
      <div className="content">{children}</div>
      <div className="learn-more-link">
        <a href={href} target="_blank" rel="noreferrer">
          Learn more
        </a>
        <svg
          id="uuid-373b6927-6096-45d0-aaee-7c108501509f"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <title>Go to site</title>
          <path d="M71.3,63.97l-25.25-25.25c-.96-.96-1.42-2.11-1.39-3.46.03-1.35.53-2.51,1.49-3.46.96-.96,2.13-1.44,3.52-1.44s2.56.48,3.51,1.44l28.71,28.71c.53.53.9,1.07,1.11,1.63.21.56.32,1.17.32,1.83s-.11,1.27-.32,1.83c-.21.56-.59,1.1-1.11,1.63l-28.81,28.81c-.96.96-2.11,1.42-3.47,1.39-1.35-.03-2.51-.53-3.46-1.49s-1.44-2.13-1.44-3.52.48-2.56,1.44-3.51l25.15-25.15Z" />
        </svg>
      </div>
    </div>
  );
}
