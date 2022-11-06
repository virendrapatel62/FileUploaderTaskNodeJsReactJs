import React from "react";
import FileUploader from "../components/filesUI/FileUploader";
import FileList from "../components/filesUI/FileList";
import { useState } from "react";
import { uploadFiles } from "../services/file-service";

const Row = ({ children }) => <div className="row">{children}</div>;
const Column = ({ children, ...props }) => {
  return (
    <div className={`col ${Object.keys(props)} shadow m-2`}>{children}</div>
  );
};

export default function FilesPage() {
  const [files, setFiles] = useState([]);
  const onFilesSelect = (files) => {
    setFiles(files);
  };

  const onUpload = () => {
    uploadFiles(files)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <Row>
      <Column col-7>
        <FileList></FileList>
      </Column>
      <Column col>
        <FileUploader
          files={files}
          onFilesSelect={onFilesSelect}
          onUpload={onUpload}
        ></FileUploader>
      </Column>
    </Row>
  );
}
