import React from "react";
import FileUploader from "../components/filesUI/FileUploader";
import FileList from "../components/filesUI/FileList";
import { useState } from "react";
import { getFiles, uploadFiles } from "../services/file-service";
import { useEffect } from "react";

const Row = ({ children }) => <div className="row">{children}</div>;
const Column = ({ children, ...props }) => {
  return (
    <div className={`col ${Object.keys(props)} shadow m-2`}>{children}</div>
  );
};

export default function FilesPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getFiles().then((response) => {
      setFiles(response.files);
    });
  }, []);

  const onFilesSelect = (files) => {
    setSelectedFiles(files);
  };

  const onUpload = () => {
    uploadFiles(selectedFiles)
      .then(({ files: newFiles }) => {
        setFiles([...files, ...newFiles]);
        setSelectedFiles([]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Row>
      <Column col-7>
        <FileList files={files}></FileList>
      </Column>
      <Column col>
        <FileUploader
          selectedFiles={selectedFiles}
          onFilesSelect={onFilesSelect}
          onUpload={onUpload}
        ></FileUploader>
      </Column>
    </Row>
  );
}
