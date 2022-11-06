import React from "react";

export default function FileUploader(props) {
  const { onFilesSelect, onUpload, files } = props;
  const handleOnChangeFile = ({ target }) => {
    const files = Array.from(target.files);
    onFilesSelect(files);
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
        />

        <div className="mt-3">
          <ul class="list-group">
            {files.map((file, index) => {
              return (
                <li class="list-group-item" key={index}>
                  <b> {index + 1}</b> : {file.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-4">
          <button className="btn btn-success" onClick={onUpload}>
            Upload Files
          </button>
        </div>
      </div>
    </div>
  );
}
