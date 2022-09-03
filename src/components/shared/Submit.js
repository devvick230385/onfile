import React from "react";

const Submit = ({ remember, onChangeRemember, event, loading }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="Submit"
      >
        {loading ? "Authenticatin..." : event}
      </button>
      <label className="cursor-pointer">
        Remember me: &nbsp;
        <input
          className="cursor-pointer"
          onChange={onChangeRemember}
          type="checkbox"
          checked={remember}
        />
      </label>
    </div>
  );
};

export default Submit;
