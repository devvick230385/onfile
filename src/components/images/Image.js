import React from "react";
import image from "../../assets/img.jpeg";

const Image = ({ onClick, isLoading }) => {
  return (
    <div
      onClick={onClick}
      className="aspect-w-1  group cursor-pointer aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        alt=""
        src={image}
        style={{ width: "100%", height: "40vh", objectFit: "cover" }}
        className={`
            "duration-700  ease-in-out group-hover:opacity-75 object-cover",
            ${
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            }
          `}
        //   onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default Image;
