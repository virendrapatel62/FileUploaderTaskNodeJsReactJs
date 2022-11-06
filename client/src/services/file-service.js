import { api } from ".";

export const uploadFiles = (files = []) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));

  console.log({ files, formData });
  return api
    .post("/api/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};
