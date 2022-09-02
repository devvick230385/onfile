import React from "react";
import { Routes, Route } from "react-router-dom";
import AudiosScreen from "./screens/audios/AudiosScreen";
import DocumentsScreen from "./screens/documents/DocumentsScreen";
import ImagesScreen from "./screens/images/ImagesScreen";
import VideosScreen from "./screens/videos/VideoScreen";
const App = () => {
  return (
    <Routes>
      <Route path="/images" element={<ImagesScreen />} />
      <Route path="/videos" element={<VideosScreen />} />
      <Route path="/audios" element={<AudiosScreen />} />
      <Route path="/documents" element={<DocumentsScreen />} />
    </Routes>
  );
};

export default App;
