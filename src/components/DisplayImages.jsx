import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { MdOutlineFileDownload } from "react-icons/md";

const DisplayImages = ({ images }) => {
  console.log(images);
  const breakpointColumnsObj = {
    default: 4,
    1540: 3,
    700: 2,
    500: 1,
  };

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

  useEffect(() => {
    document.body.style.backgroundSize = "auto";
  }, []);

  return (
    <section className="mx-6 my-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex ml-[-30px] w-auto"
        columnClassName="pl-[30px] bg-clip-padding"
      >
        {images.map((image) => (
          <div
            className="w-full relative inline-block overflow-hidden rounded-lg mb-[30px] image-container"
            key={image.id}
          >
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className="w-full block rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 flex justify-between items-end p-[10px] box-border overlay">
              <div className="flex justify-center items-center gap-2 p-2 text-white">
                <img
                  src={image.user.profile_image.small}
                  alt="profile image of creator"
                  className="border-2 border-orange-500 rounded-full"
                />
                <p>
                  {image.user.first_name} {image.user.last_name}
                </p>
              </div>
              <button
                className="download-btn"
                onClick={() =>
                  downloadImage(image.urls.raw, `${image.alt_description}.png`)
                }
              >
                <MdOutlineFileDownload size={24} />
              </button>
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default DisplayImages;
