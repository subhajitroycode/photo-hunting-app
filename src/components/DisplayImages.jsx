import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const DisplayImages = ({ images }) => {
  const downloadImage = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const urlObject = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = urlObject;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(urlObject); // Clean up the object URL
    } catch (error) {
      console.error("Failed to download image", error);
    }
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 m-6">
        {images.map((image) => (
          <div
            className="w-full mb-4 relative inline-block overflow-hidden rounded-lg image-container"
            key={image.id}
          >
            <img
              src={image.urls.regular}
              alt=""
              className="block w-full h-auto image"
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 flex justify-between items-end p-[10px] box-border overlay">
              <p className="text-white text-lg font-roboto italic p-2 capitalize">
                {image.alt_description}
              </p>
              <button
                className="download-btn"
                onClick={() =>
                  downloadImage(
                    image.urls.regular,
                    `${image.alt_description}.png`
                  )
                }
              >
                <MdOutlineFileDownload size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayImages;
