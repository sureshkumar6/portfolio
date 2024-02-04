import React from "react";
import "./Aicontent.css";

function importAll(r) {
    return r.keys().map((key) => ({ path: key, image: r(key).default }));
  }
  
  const images = importAll(require.context("../../public/AI", false, /\.(png)$/));

const Aicontent = () => {


  return (
    <div>
      <div className="image-container">
        {images.map((image, index) => {
          // Extracting the filename without path
          const filename = image.path.split("/").pop().trim();

          const src = `/AI/${filename}`;

          console.log(src); // Log the src value

          return (
            <div className="image-content">
                <img key={index} src={src} alt={`image${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aicontent;
