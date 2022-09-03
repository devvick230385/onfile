import React from "react";

const ListTile = ({ name, onDelete, onPreview }) => {
  const isAdmin = localStorage.getItem("admin");

  return (
    <div>
      <div className="shadow p-3  my-2 rounded">
        <p className="text-blue-500 cursor-pointer" onClick={onPreview}>
          {name}
        </p>
        {isAdmin === "true" && (
          <button onClick={onDelete} className="text-red-500 ">
            <small>Delete</small>
          </button>
        )}
      </div>
    </div>
  );
};

export default ListTile;
