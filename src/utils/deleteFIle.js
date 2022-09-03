import PostRequest from "./PostRequest";

const deleteFile = async (path) => {
  const response = await PostRequest("deleteFile", { path });
  return response;
};

export default deleteFile;
