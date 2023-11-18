// src/components/FileList.js
import React from 'react';

const FileList = ({ files, onFileDelete }) => {
  return (
    <div className="file-list">
      {files.map((file) => (
        <div key={file.name} className="file-item">
          <img src={URL.createObjectURL(file)} alt={file.name} />
          <p>{file.name}</p>
          <button onClick={() => onFileDelete(file.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
