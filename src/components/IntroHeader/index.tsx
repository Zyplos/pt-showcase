import { useState } from "react";
import "./styles.css";
import yellowFrontView from "@/assets/yellow-front.png";
import blueFrontView from "@/assets/blue-front.png";
import greenFrontView from "@/assets/green-front.png";
//
import yellowSideView from "@/assets/yellow-side.png";
import blueSideView from "@/assets/blue-side.png";
import greenSideView from "@/assets/green-side.png";
//
import yellowBackView from "@/assets/yellow-back.png";
import blueBackView from "@/assets/blue-back.png";
import greenBackView from "@/assets/green-back.png";
//
import yellowAllProductsView from "@/assets/yellow-products.png";
import blueAllProductsView from "@/assets/blue-products.png";
import greenAllProductsView from "@/assets/green-products.png";

type Color = "Yellow" | "Blue" | "Green";
type ImageCategory = "front" | "side" | "back" | "products";

const imageMap: Record<Color, Record<ImageCategory, string>> = {
  Yellow: {
    front: yellowFrontView,
    side: yellowSideView,
    back: yellowBackView,
    products: yellowAllProductsView,
  },
  Blue: {
    front: blueFrontView,
    side: blueSideView,
    back: blueBackView,
    products: blueAllProductsView,
  },
  Green: {
    front: greenFrontView,
    side: greenSideView,
    back: greenBackView,
    products: greenAllProductsView,
  },
};

const imageCategories: ImageCategory[] = ["front", "side", "back", "products"];

export default function IntroHeader() {
  const colors: Color[] = ["Yellow", "Blue", "Green"];
  const [currentColor, setCurrentColor] = useState<Color>("Yellow");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImageCategory = imageCategories[currentImageIndex] ?? "front";
  const currentImage = imageMap[currentColor][currentImageCategory];

  const handleColorChange = (color: Color) => {
    setCurrentColor(color);
  };

  const handleImageIndexChange = (int: number) => {
    console.log(int);
    if (int < 0) {
      setCurrentImageIndex(imageCategories.length - 1);
    } else if (int > imageCategories.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(int);
    }
  };

  return (
    <div className="intro-header bg-product">
      <div className="copy-area">
        <div className="description">
          <h2 className="display-text">Now you're playing with power.</h2>
          <div>
            <p className="price">From $599</p>
            <p className="financing">
              or $49.91/month with 12-month financing*
            </p>
          </div>
          <div>
            <button type="button">Buy</button>
          </div>
        </div>

        <div className="color-toolbar">
          <div className="colorway-selector">
            {colors.map((color) => {
              return (
                <div
                  key={color}
                  className={`colorway color-${color} ${currentColor === color ? "active-ring" : ""}`}
                  onClick={() => {
                    handleColorChange(color);
                  }}
                  onKeyUp={() => {
                    handleColorChange(color);
                  }}
                />
              );
            })}
          </div>
          <p className="color-text">Color: {currentColor}</p>
        </div>
      </div>
      <div className="product-image">
        <img
          src={currentImage}
          alt={`${currentColor} ${currentImageCategory}`}
        />

        <div className="preview-toolbar">
          <div className="image-selector-toolbar">
            <button
              type="button"
              onClick={() => {
                handleImageIndexChange(currentImageIndex - 1);
              }}
              onKeyUp={() => {
                handleImageIndexChange(currentImageIndex - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#000000"
              >
                <title>Previous</title>
                <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
              </svg>
            </button>
            <div className="indicator">
              {currentImageIndex + 1} / {imageCategories.length}
            </div>
            <button
              type="button"
              onClick={() => {
                handleImageIndexChange(currentImageIndex + 1);
              }}
              onKeyUp={() => {
                handleImageIndexChange(currentImageIndex + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#000000"
              >
                <title>Next</title>
                <path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
              </svg>
            </button>
          </div>

          {/* <button type="button" className="preview-3d-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#000000"
            >
              <title>Preview in 3D</title>
              <path d="M620-360H520q-8 0-14-6t-6-14v-200q0-8 6-14t14-6h100q17 0 28.5 11.5T660-560v160q0 17-11.5 28.5T620-360Zm-200 0h-90q-13 0-21.5-8.5T300-390q0-13 8.5-21.5T330-420h70v-40h-40q-8 0-14-6t-6-14q0-8 6-14t14-6h40v-40h-70q-13 0-21.5-8.5T300-570q0-13 8.5-21.5T330-600h90q17 0 28.5 11.5T460-560v160q0 17-11.5 28.5T420-360Zm140-60h40v-120h-40v120Zm280-20q-17 0-28.5-11.5T800-480q0-115-72.5-203T542-794l30 30q11 11 11 28t-11 28q-11 11-28 11t-28-11L387-837q-8-8-4.5-20t14.5-15q20-5 41-6.5t42-1.5q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 17-11.5 28.5T840-440ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480q0 115 72.5 203T418-166l-30-30q-11-11-11-28t11-28q11-11 28-11t28 11l129 129q8 8 4.5 20T563-88q-20 5-41 6.5T480-80Z" />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}
