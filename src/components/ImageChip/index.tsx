import "./styles.css";

interface Props {
  src: string;
  alt: string;
  children: React.ReactNode;
  underlineOnHover?: boolean;
}

export default function ImageChip({
  src,
  alt,
  children,
  underlineOnHover,
}: Props) {
  return (
    <span
      className={`image-chip ${underlineOnHover ? "underline-on-hover" : ""}`}
    >
      <img src={src} alt={alt} />
      {/* <span className="image-wrapper">
      </span> */}
      <span className="content">{children}</span>
    </span>
  );
}
