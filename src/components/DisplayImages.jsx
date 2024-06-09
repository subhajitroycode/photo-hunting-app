import React from "react";

const DisplayImages = ({ images }) => {
  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 m-6">
        {images.map((image) => (
          <div className="w-full mb-4" key={image.id}>
            <img src={image.urls.regular} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayImages;
