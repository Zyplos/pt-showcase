import "./styles.css";

export default function PageNavHeader() {
  return (
    <div className="page-nav-header-wrapper">
      <div className="page-nav-header limited-width-big">
        <h1 className="product-title">Pixel Base</h1>

        <div className="nav-items">
          <p className="active-link">
            <span>Overview</span>
          </p>
          <button type="button">Toggle Design Commentary</button>
        </div>

        <div className="buy-box">
          <div>
            <p className="price">From $599</p>
            <p className="financing">
              or $49.91/month with 12-month financing*
            </p>
          </div>
          <button type="button">Buy</button>
        </div>
      </div>
    </div>
  );
}
