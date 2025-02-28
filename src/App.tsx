import "./index.css";

export function App() {
	return (
		<div className="root">
			<div className="page-nav-header">
				<h1 className="product-title">Pixel Base</h1>
				<div className="nav-items">
					<p className="active-link-fake">Overview</p>
					<button type="button">Toggle Design Commentary</button>
					<div className="buy-box">
						<div>
							<p>From $599</p>
							<p>or $49.91/month with 12-month financing*</p>
						</div>
						<button type="button">Buy</button>
					</div>
				</div>
			</div>

			<div className="intro-header">pow!</div>
		</div>
	);
}

export default App;
