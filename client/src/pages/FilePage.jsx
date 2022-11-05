import React from "react";
import { useState } from "react";
import { FilesList } from "../components/FilesList";
import { FileUpload } from "../components/FileUpload";

import { useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { api } from "../services";
import { uploadFiles } from "../services/files";

const Row = ({ children }) => <div className="row">{children}</div>;

const Column = ({ children, ...params }) => {
  return (
    <div className={`col ${Object.keys(params)} shadow rounded m-1`}>
      {children}
    </div>
  );
};

export default function FilePage() {
  const [files, setFiles] = useState([]);
  const { user } = useAuth();
  const [page, setPage] = useState(1);

  const getFiles = () => {
    api.get(`/files?page=${page}`).then((response) => {
      setFiles(response.data.files);
    });
  };

  useEffect(getFiles, [user, page]);

  const upload = (files) => {
    uploadFiles(files)
      .then(getFiles)
      .catch((error) => {
        console.log(error);
      });
  };

  const downloadFile = (file) => {
    window.open(file.url, "_blank");
  };

  const onPageChange = (changeBy) => {
    setPage(page + changeBy);
  };

  return (
    <Row>
      <Column col>
        <FilesList files={files} downloadFile={downloadFile}></FilesList>
        <hr />
        <div className="d-flex justify-content-between p-3">
          <button
            disabled={page == 1}
            className="btn btn-sm btn-dark"
            onClick={() => onPageChange(-1)}
          >
            Previous Page
          </button>
          <p>Page : {page}</p>
          <button
            onClick={() => onPageChange(1)}
            className="btn btn-sm btn-dark"
          >
            Next Page
          </button>
        </div>
      </Column>
      <Column col-5>
        <FileUpload upload={upload}></FileUpload>
      </Column>
    </Row>
  );
}
