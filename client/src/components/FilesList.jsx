import React, { useId } from "react";

function FilesList({ downloadFile, files }) {
  const id = useId();
  return (
    <div className="p-3">
      <h1>FilesList</h1>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>File Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={`${id}-${index}`}>
              <td>{index + 1}</td>
              <td>{file.filename}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => downloadFile(file)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { FilesList };
