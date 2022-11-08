import React, { useRef } from "react";
import FileUploader from "../components/filesUI/FileUploader";
import FileList from "../components/filesUI/FileList";
import { useState } from "react";
import { getFile, getFiles, uploadFiles } from "../services/file-service";
import { useEffect } from "react";

const Row = ({ children }) => <div className="row">{children}</div>;
const Column = ({ children, ...props }) => {
  return (
    <div className={`col ${Object.keys(props)} shadow m-2`}>{children}</div>
  );
};

export default function FilesPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileToDownload = useRef();
  const [files, setFiles] = useState([]);
  const downloadLinkRef = useRef();

  useEffect(() => {
    console.group("FilePage Component");

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

  const handleDownload = (file) => {
    fileToDownload.current = file;
    getFile(file._id).then((url) => {
      const link = downloadLinkRef.current;
      link.href = url;
      link.download = file.originalname;
      link.click();
    });
  };

  return (
    <Row>
      <a ref={downloadLinkRef} href="" download={"file.txt"}></a>
      <Column col-7>
        <FileList onDownload={handleDownload} files={files}></FileList>
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
