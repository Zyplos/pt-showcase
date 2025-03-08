import "./styles.css";

interface Props {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function ImageChip({ src, alt, children }: Props) {
  return (
    <span className="image-chip">
      <img src={src} alt={alt} />
      {/* <span className="image-wrapper">
      </span> */}
      <span className="content">{children}</span>
    </span>
  );
}
