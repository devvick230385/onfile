import React from "react";
import Layout from "../../layout/Layout";
import Image from "../../components/images/Image";

const ImagesScreen = ({ files }) => {
  return (
    <Layout>
      <div className="mx-ato max-w-2xl  lg:max-w-7xl ">
        <div className="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3">
          <Image />
        </div>
      </div>
    </Layout>
  );
};

export default ImagesScreen;
