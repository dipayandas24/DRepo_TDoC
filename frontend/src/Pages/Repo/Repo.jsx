import React, { useCallback } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Repo.scss';
import { useDropzone } from 'react-dropzone';
import { useStorageUpload } from '@thirdweb-dev/react';
import { useParams } from 'react-router-dom';

const Repo = () => {

  const {profileName, repoName} = useParams();
  console.log(profileName, repoName);
  const { mutateAsync: upload } = useStorageUpload();

  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        const uris = await upload({ data: acceptedFiles });
        console.log(uris);
      } catch (error) {
        console.error('Error uploading to IPFS:', error);
      }
    },
    [upload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  
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
            <select>
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
              <p>This project is an implementation of a basic blockchain in JavaScript.</p>
            </div>
          </div>
          <div {...getRootProps()} className="drag-drop-container">
            <input {...getInputProps()} />
            <button>Upload Files</button>
          </div>
        </div>
        <div className="repo-sidebar">
          <div className="about">
            <h3>About</h3>
            <p>This project is an implementation of a basic blockchain in JavaScript.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;