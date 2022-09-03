import React from "react";
import ListTile from "../../components/shared/ListTile";
import Layout from "../../layout/Layout";
import filePreview from "../../utils/filePreview";
import deleteFile from "../../utils/deleteFIle";
import Server from "../../utils/Server";
const DocumentsScreen = ({ files }) => {
  const [showDialogue, setShowDialogue] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  // FILTER DOCUMENT FILES
  const docs = [...files]
    .filter(
      (ft) => ft.type !== "audio" && ft.type !== "video" && ft.type !== "image"
    )
    .reverse();

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

  //  DELETE FILE
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
      {docs.map((doc, index) => {
        return (
          <ListTile
            name={doc.filename}
            key={index}
            onPreview={() => preview(doc.path)}
            onDelete={() => del(doc.path)}
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

export default DocumentsScreen;
