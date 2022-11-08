import { api } from ".";

export const getAllFiles = () => {};

export const uploadFiles = (files = []) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  return api.post("/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getFileDownloadUrl = (id) => {
  return api
    .get(`/file/download/${id}`, {
      responseType: "blob",
    })
    .then((response) => response.data)
    .then((blob) => {
      return window.URL.createObjectURL(new Blob([blob]));
    });
};
