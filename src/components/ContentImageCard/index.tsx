import "./styles.css";
//
interface Props {
  children: React.ReactNode;
  src: string;
  alt: string;
  imageFirst?: boolean;
}

export default function ContentImageCard({
  children,
  src,
  alt,
  imageFirst = false,
}: Props) {
  return (
    <div className="content-image-card bg-product">
      {imageFirst ? (
        <>
          <img src={src} alt={alt} className="bg-product-darker" />
          <div className="content">{children}</div>
        </>
      ) : (
        <>
          <div className="content">{children}</div>
          <img src={src} alt={alt} className="bg-product-darker" />
        </>
      )}
    </div>
  );
}
