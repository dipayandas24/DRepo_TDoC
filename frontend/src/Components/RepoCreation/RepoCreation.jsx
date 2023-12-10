import React,{useState} from "react";
import "./RepoCreation.scss";
// import Web3 from 'web3';
// import { contractABI, contractAddress } from '../../contractConfig.js';

const RepoCreation = ({profilename,onClose}) => {
//     const [repoName, setRepoName] = useState("");

//     console.log(contractAddress)

//     const handleCreateRepo = async() => {

//         if(window.ethereum){
//             const web3 = new Web3(window.ethereum);
//             const contract = new web3.eth.Contract(contractABI,contractAddress);

//             try{
//                 await window.eth_requestAccounts;
//                 const accounts = await web3.eth.getAccounts();
//                 await contract.methods.CreateProject(repoName).send({from: accounts[0]});
//                 onClose();
//             }catch(error){
//                 console.error('Error creating project:', error);
//             }
//         }
        
// };


return (
    <div className="modal-overlay">
    <div className="repo-creation-modal">
        <h2>Create a new Repository</h2>
      <div className="input-container">
        <label>Owner</label>
        <input type="text" value={profilename} readOnly />
      </div>
      <div className="input-container">
        <label>Repository Name</label>
        <input
          type="text"
          placeholder="Enter repository name"
          // value={repoName}
          // onChange={(e) => setRepoName(e.target.value)}
        />
      </div>
      <div className="button-container">
        {/* <button onClick={handleCreateRepo}>Create Repository</button> */}
        <button className="cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
    </div>
)
};
export default RepoCreation;