import React from "react";
import Layout from "../../layout/Layout";
import Video from "../../components/video/Video";
import filePreview from "../../utils/filePreview";
import deleteFile from "../../utils/deleteFIle";
import Server from "../../utils/Server";
const VideosScreen = ({ files }) => {
  const [showDialogue, setShowDialogue] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  //FILTER VIDEO FILES
  const videos = [...files].filter((ft) => ft.type === "video").reverse();

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

  //DELETE FILE
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
          {videos.map((video, index) => {
            return (
              <Video
                name={video.filename}
                key={index}
                onPreview={() => preview(video.path)}
                onDelete={() => del(video.path)}
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

export default VideosScreen;
