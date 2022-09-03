import React from "react";

const ListTile = () => {
  return (
    <div>
      <div className="shadow p-3  my-2 rounded">
        <p className="text-blue-500 cursor-pointer">
          Burna boy asdfljaksd fasdlfj asdjhf askdjfhasdkjfah dfkajhsdf aksdjfh
          asdfkjahsd faksdjhfa sdfkjhasd faskdjhf asdkfjhas d asdkfhaskd
          faksdjfh asdkjfha sdfjahds fjahdf ajdhfakldjhfa sdk{" "}
        </p>
        <button className="text-red-500 ">
          <small>Delete</small>
        </button>
      </div>
      <div className="shadow p-3 my-2 cursor-pointer">
        <p className="text-blue-500">Burna boy</p>
      </div>
    </div>
  );
};

export default ListTile;
