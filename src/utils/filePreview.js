const filePreview = (url) => {
  let fileFormate = url.split(".").pop();
  fileFormate = fileFormate.toLowerCase();
  if (
    fileFormate == "txt" ||
    fileFormate == "mp4" ||
    fileFormate == "webm" ||
    fileFormate == "webp" ||
    fileFormate == "mp3" ||
    fileFormate == "wav" ||
    fileFormate == "png" ||
    fileFormate == "jpeg" ||
    fileFormate == "jpg" ||
    fileFormate == "wav" ||
    fileFormate == "pdf"
  ) {
    const fileViewURI = url;
    window.location.href = fileViewURI;
  } else if (
    fileFormate == "odt" ||
    fileFormate == "ods" ||
    fileFormate == "odp" ||
    fileFormate == "rtf" ||
    fileFormate == "docx" ||
    fileFormate == "doc" ||
    fileFormate == "ppt" ||
    fileFormate == "pptx" ||
    fileFormate == "xls" ||
    fileFormate == "xlsx"
  )
    window.location.href = `https://view.officeapps.live.com/op/view.aspx?src=${url}`;
  else {
    var fileViewURI = `http://docs.google.com/gview?embedded=true&url=${url}`;
    window.location.href = fileViewURI;
  }
};

export default filePreview;
