// src/components/FileUpload.js
import React, { useRef } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const inputRef = useRef();

  const handleFileChange = () => {
    const files = inputRef.current.files;
    onFileUpload(Array.from(files));
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        accept="image/*" // You can customize the accepted file types
        multiple
        ref={inputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
