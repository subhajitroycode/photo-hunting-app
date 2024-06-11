import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const DisplayImages = ({ images }) => {
  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 m-6">
        {images.map((image) => (
          <div className="w-full mb-4 image-container" key={image.id}>
            <img src={image.urls.regular} alt="" className="image" />
            {/* <a href="" className="download-button">
              ⬇️
            </a> */}
            <div class="overlay">
              <div class="title">Image Title</div>
              <a href="#" class="download-btn">
                <MdOutlineFileDownload size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayImages;
