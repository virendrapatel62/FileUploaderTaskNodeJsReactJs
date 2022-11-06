import React from "react";
import FileUploader from "../components/filesUI/FileUploader";
import FileList from "../components/filesUI/FileList";

const Row = ({ children }) => <div className="row">{children}</div>;
const Column = ({ children, ...props }) => {
  return (
    <div className={`col ${Object.keys(props)} shadow m-2`}>{children}</div>
  );
};

export default function FilesPage() {
  return (
    <Row>
      <Column col-8>
        <FileList></FileList>
      </Column>
      <Column>
        <FileUploader></FileUploader>
      </Column>
    </Row>
  );
}
