import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AudiosScreen from "./screens/audios/AudiosScreen";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import DocumentsScreen from "./screens/documents/DocumentsScreen";
import ImagesScreen from "./screens/images/ImagesScreen";
import VideosScreen from "./screens/videos/VideoScreen";
import ClientServer from "./utils/ClientServer";
const App = () => {
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [reload, setReload] = React.useState(true);
  //FETCH DATA FUNCTION
  const fetchData = async () => {
    const response = await ClientServer.get("/getData", {
      headers: {
        authorization: "bearer This_is_the_bearer_key_so_stay_clear",
      },
    });
    setReload(!reload);
    setLoading(false);
    setFiles(response.data.files);
  };

  // INVOKE FETCH DATA FUNCTION ON TIMEOUT
  useEffect(() => {
    if (loading) {
      fetchData();
    } else {
      setTimeout(() => {
        fetchData();
      }, 10000);
    }
  }, [reload]);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/images" element={<ImagesScreen files={files} />} />
      <Route path="/videos" element={<VideosScreen files={files} />} />
      <Route path="/audios" element={<AudiosScreen files={files} />} />
      <Route path="/documents" element={<DocumentsScreen files={files} />} />
    </Routes>
  );
};

export default App;
