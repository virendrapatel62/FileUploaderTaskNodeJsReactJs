import React from "react";

export default function FileList({ files, onDownload }) {
  return (
    <div>
      <h1>All Uploaded Files</h1>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>File Name</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => {
              return (
                <tr key={file._id}>
                  <td>{index + 1}</td>
                  <td>{file.originalname}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => onDownload(file)}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
