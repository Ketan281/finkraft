// src/App.js
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

function App() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="App">
      <h1>File Upload App</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <FileList files={files} onFileDelete={handleFileDelete} />
    </div>
  );
}

export default App;
