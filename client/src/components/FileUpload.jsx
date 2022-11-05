import React, { useState } from "react";
import { useRef } from "react";
import { uploadFiles } from "../services/files";

function FileUpload({ upload }) {
  const selectedFilesRef = useRef([]);
  const fileInputRef = useRef();
  const handleFileSelect = ({ target }) => {
    selectedFilesRef.current = target.files;
  };

  const _upload = () => {
    upload(Array.from(selectedFilesRef.current));
    fileInputRef.current.value = null;
  };

  return (
    <div className="p-4">
      <h1>Upload Files </h1>
      <hr />

      <div>
        <div className="mt-3">
          <input
            ref={fileInputRef}
            multiple
            type="file"
            onChange={handleFileSelect}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-success" onClick={_upload}>
            Upload The File
          </button>
        </div>
      </div>
    </div>
  );
}

export { FileUpload };
