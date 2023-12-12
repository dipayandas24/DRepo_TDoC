import React, { useCallback, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Repo.scss';
import { useDropzone } from 'react-dropzone';
import { useStorage } from "@thirdweb-dev/react"
import { useStorageUpload } from '@thirdweb-dev/react';
import { useParams } from 'react-router-dom';
import JSZip from 'jszip';



const Repo = () => {

  const storage = useStorage();
  const [url,setUrl] = React.useState('');
  const {profileName, repoName} = useParams();
  
  const { mutateAsync: upload } = useStorageUpload();
  
    

  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        const files = [];
        const zip = new JSZip();
        
        // for (const fileOrDirectory of acceptedFiles) {
        //   console.log('directory check', fileOrDirectory);
        //   if (fileOrDirectory.path.includes("/")) {
            
            

            
        //     const directoryName = fileOrDirectory.name;

        //     // const addFilesInDirectory = async (dirPath, prefix = '') => {
        //     //   const entries = await dirPath.getAllEntries();

        //     //   for await (const entry of entries) {
        //     //     if (entry.isFile) {
        //     //       const file = await entry.getFile();
        //     //       zip.file(`${prefix}${entry.name}`, file);
        //     //     } else if (entry.isDirectory) {
        //     //       await addFilesInDirectory(entry.createReader(), `${prefix}${entry.name}/`);
        //     //     }
        //     //   }
        //     // };

        //     await addFilesInDirectory(fileOrDirectory.createReader());

        //     const zippedBlob = await zip.generateAsync({ type: 'blob' });

            
        //     console.log('Zipped Blob Content:', zippedBlob);

            
        //     files.push({ content: zippedBlob, path: `${directoryName}.zip` });
        //   } else {
        //     const file = await fileOrDirectory.getFile();
        //     files.push({ content: file, path: file.name });
        //   }
        // }
        
        for (const fileOrDirectory of acceptedFiles) {
            console.log('directory check', fileOrDirectory);
          zip.file(fileOrDirectory.path, "string")
        }  

        const RequiredZip = await zip.generateAsync({type: "blob"})
        const FileToBeUploaded = new File([RequiredZip], "NewFile")
        
        
        console.log('Zipped here', FileToBeUploaded);

        
        const uris = await storage.upload(FileToBeUploaded);
        console.log('IPFS Upload Result:', uris);
      } catch (error) {
        console.error('Error uploading to IPFS:', error);
      }
    },
    [upload]
  );

  

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  
  
  console.log(profileName, repoName);
  const [fileUrl, setFileUrl] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Perform actions for file upload
    console.log("Your commit:", inputValue);
  };

  const handleFileDrop = async (e) => {
    e.preventDefault();
    const fileHandle = await window.showOpenFilePicker();
    const file = await fileHandle[0].getFile();
    setFileUrl(URL.createObjectURL(file));
  };

  // const onDrop = useCallback(
  //   async (acceptedFiles) => {
  //     try {
  //       const files = [];

  //       const addFilesInDirectory = async (dirPath, prefix = '') => {
  //         const entries = await dirPath.getAllEntries();
  //         const files = [];

  //         for await (const entry of entries) {
  //           if (entry.isFile) {
  //             const file = await entry.getFile();
  //             files.push({ content: file, path: `${prefix}${entry.name}` });
  //           } else if (entry.isDirectory) {
  //             files.push(...await addFilesInDirectory(entry.createReader(), `${prefix}${entry.name}/`));
  //           }
  //         }

  //         return files;
  //       };

  //       for (const fileOrDirectory of acceptedFiles) {
  //         if (fileOrDirectory instanceof File) {
  //           files.push({ content: fileOrDirectory, path: fileOrDirectory.name });
  //         } else if (fileOrDirectory instanceof Blob) {
  //           files.push(...await addFilesInDirectory(fileOrDirectory));
  //         } else {
  //           throw new Error("Unsupported upload type");
  //         }
  //       }

  //       const uris = await upload({ data: files });
  //       console.log(uris);
  //     } catch (error) {
  //       console.error('Error uploading to IPFS:', error);
  //     }
  //   },
  //   [upload]
  // );

  return (
    <div>
      <Navbar />
      <div className="repo-container">
        <div className="repo-main">
          <div className="repo-header">
            <h2>{repoName}</h2>
            <div className="public-badge">Public</div>
          </div>
          <div className="branch-dropdown">
            <select className="dropdown">
              <option value="main">Main</option>
              <option value="master">Master</option>
            </select>
          </div>
          <div className="files-list">
            <table>
              <thead>
                <tr>
                  <th>{profileName}</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dhub.sol</td>
                  <td>initial commit</td>
                  <td>2 days ago</td>
                </tr>
                <tr>
                  <td>main.js</td>
                  <td>initial commit</td>
                  <td>2 days ago</td>
                </tr>
                <tr>
                  <td>README.md</td>
                  <td>initial commit</td>
                  <td>2 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="readme-container">
            <div className="readme-header">
              <h3>README.md</h3>
            </div>
            <div className="readme-body">
              <p>
                This project is an implementation of a basic blockchain in
                JavaScript.
              </p>
            </div>
          </div>
          <div>
            <input
              id="commit"
              value={inputValue}
              onChange={handleInputChange}
              className="commit-massege"
              type="text"
              placeholder="Type your commit message"
            />
          </div>
          <div {...getRootProps()} className="drag-drop-container">
            <input {...getInputProps()} />
            <button
              onClick={handleSubmit}
              style={{ opacity: inputValue.trim() ? 1 : 0.5 }}
              disabled={!inputValue.trim()}
            >
              Select Files
            </button>
          </div>
        </div>
        <div className="repo-sidebar">
          <div className="about">
            <h3>About</h3>
            <p>
              This project is an implementation of a basic blockchain in
              JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;




// const onDrop = useCallback(
  //   async (acceptedFiles) => {
  //     try {
  //       const files = [];

  //       const addFilesInDirectory = async (dirPath, prefix = '') => {
  //         const entries = await dirPath.getAllEntries();
  //         const files = [];

  //         for await (const entry of entries) {
  //           if (entry.isFile) {
  //             const file = await entry.getFile();
  //             files.push({ content: file, path: `${prefix}${entry.name}` });
  //           } else if (entry.isDirectory) {
  //             files.push(...await addFilesInDirectory(entry.createReader(), `${prefix}${entry.name}/`));
  //           }
  //         }

  //         return files;
  //       };

  //       for (const fileOrDirectory of acceptedFiles) {
  //         if (fileOrDirectory instanceof File) {
  //           files.push({ content: fileOrDirectory, path: fileOrDirectory.name });
  //         } else if (fileOrDirectory instanceof Blob) {
  //           files.push(...await addFilesInDirectory(fileOrDirectory));
  //         } else {
  //           throw new Error("Unsupported upload type");
  //         }
  //       }

  //       const uris = await upload({ data: files });
  //       console.log(uris);
  //     } catch (error) {
  //       console.error('Error uploading to IPFS:', error);
  //     }
  //   },
  //   [upload]
  // );
