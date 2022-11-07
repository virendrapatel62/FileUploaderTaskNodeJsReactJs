import React, { useRef } from "react";

export default function FileUploader(props) {
  const { onFilesSelect, onUpload, selectedFiles } = props;
  const fileRef = useRef();
  const handleOnChangeFile = ({ target }) => {
    const files = Array.from(target.files);
    onFilesSelect(files);
  };
  const handleUpload = () => {
    onUpload();
    fileRef.current.value = null;
  };

  return (
    <div className="p-4">
      <h1>Upload Files</h1>
      <hr />
      <div>
        <input
          type="file"
          name="files"
          multiple
          onChange={handleOnChangeFile}
          ref={fileRef}
        />

        <div className="mt-3">
          <ul className="list-group">
            {selectedFiles.map((file, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <b> {index + 1}</b> : {file.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-4">
          <button className="btn btn-success" onClick={handleUpload}>
            Upload Files
          </button>
        </div>
      </div>
    </div>
  );
}
