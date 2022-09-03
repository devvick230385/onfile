import React from "react";
import ListTile from "../../components/shared/ListTile";
import Layout from "../../layout/Layout";
import filePreview from "../../utils/filePreview";
import deleteFile from "../../utils/deleteFIle";
import Server from "../../utils/Server";
const AudiosScreen = ({ files }) => {
  const [showDialogue, setShowDialogue] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  /// FILTER AUDIO FILES
  const audios = [...files].filter((ft) => ft.type === "audio").reverse();

  ///DISMISS ALERT IN 4 SECS
  React.useEffect(() => {
    setTimeout(() => {
      setShowDialogue(false);
      setMsg("");
    }, 4000);
  }, [showDialogue]);

  // PREVIEW FILE
  const preview = (uri) => {
    filePreview(`${Server}/${uri}`);
  };

  /// DELETE FILE
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
      {audios.map((audio, index) => {
        return (
          <ListTile
            name={audio.filename}
            key={index}
            onPreview={() => preview(audio.path)}
            onDelete={() => del(audio.path)}
          />
        );
      })}
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

export default AudiosScreen;
