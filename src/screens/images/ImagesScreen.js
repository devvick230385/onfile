import React from "react";
import Layout from "../../layout/Layout";
import Image from "../../components/images/Image";
import filePreview from "../../utils/filePreview";
import deleteFile from "../../utils/deleteFIle";
import Server from "../../utils/Server";

const ImagesScreen = ({ files }) => {
  const [showDialogue, setShowDialogue] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  // FILTER IMAGE FILES
  const images = [...files].filter((ft) => ft.type === "image").reverse();

  //DISMISS ALERT IN 4 SECS
  React.useEffect(() => {
    setTimeout(() => {
      setShowDialogue(false);
      setMsg("");
    }, 4000);
  }, [showDialogue]);

  //PREVIEW FILE
  const preview = (uri) => {
    filePreview(`${Server}/${uri}`);
  };

  // DELETE FILE
  const del = async (path) => {
    setMsg("Deleting");
    setShowDialogue(true);
    const response = await deleteFile(path);
    if (response.success) {
      setMsg("Deleted");
    } else {
      setMsg(response.msg);
    }
    setShowDialogue(true);
  };
  return (
    <Layout>
      <div className="mx-ato max-w-2xl  lg:max-w-7xl ">
        <div className="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3">
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                onPreview={() => preview(image.path)}
                onDelete={() => del(image.path)}
                uri={image.path}
              />
            );
          })}
        </div>
      </div>
      {/* DIALOGUE */}
      {showDialogue && !!msg && (
        <div
          className="p-4 my-4 text-sm text-center bg-teal-100 rounded-lg text-teal-500"
          role="alert"
        >
          {msg}
        </div>
      )}
    </Layout>
  );
};

export default ImagesScreen;
