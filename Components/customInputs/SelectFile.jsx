// import  { useState } from 'react';

const SelectFile = ({ name, icon, setFiles, otherFiles }) => {
 // const [selectedFile, setSelectedFile] = useState(null);

    const Icon = icon
  const handleFileChange = (e) => {
   
      otherFiles = [...e.target.files, ...otherFiles]
      console.log(otherFiles)
      return setFiles(otherFiles);
    };
    
  return (
    <div className="flex items-center">
      <label className="cursor-pointer flex items-center gap-2 p-2 px-4 border border-green-500 text-green-500 rounded-full whitespace-nowrap">
      <Icon/>
        <span className="whitespace-nowrap">{name}</span>
        <input
          type="file"
          className="hidden"
                  onChange={handleFileChange}
                  multiple
        />
      </label>
     
    </div>
  );
};

export default SelectFile;
