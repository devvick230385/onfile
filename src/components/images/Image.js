import React from "react";
import Server from "../../utils/Server";

const Image = ({ onPreview, onDelete, uri }) => {
  const isAdmin = localStorage.getItem("admin");

  return (
    <div className="aspect-w-1   aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img
        alt=""
        onClick={onPreview}
        src={`${Server}/${uri}`}
        style={{ width: "100%", height: "40vh", objectFit: "cover" }}
        className="duration-700  cursor-pointer ease-in-out hover:opacity-75 object-cover"
      />
      {isAdmin === "true" && (
        <small
          onClick={onDelete}
          className="p-3 cursor-pointer text-red-500"
          title="delete"
        >
          Delete
        </small>
      )}
    </div>
  );
};

export default Image;
