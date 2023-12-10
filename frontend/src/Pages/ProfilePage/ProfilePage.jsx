import React,{useEffect, useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './User2.scss';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import RepoCard2 from '../../Components/RepoCard2/RepoCard2';
import RepoCreation from '../../Components/RepoCreation/RepoCreation';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
import { contractABI, contractAddress } from '../../contractConfig.js';

const ProfilePage = () => {

  const {profileName} = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [repositories, setRepositories] = useState([]);

  

  
  const fetchRepositories = async () => {
    if (window.ethereum){
      const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(contractABI, contractAddress)

    try{
      await window.eth_requestAccounts;
      const accounts = await web3.eth.getAccounts();
      
      const result = await contract.methods.getAllRepositories(profileName).call({from: accounts[0]})
      console.log(result)
      setRepositories(result);
    } 
    catch (error) {
      console.error('Error fetching repositories:', error);
    }
  }
}

useEffect(() => { 
  fetchRepositories();
},[profileName])

return (
  <div>
      <Navbar />
      <div className="box">
      <ProfileCard profilename={profileName}/>
        <div className="user-content">
            <div className="repo-area">
                <div className="search-and-button-container">
                    <div className="reposearch-container">
                    <input type="text" placeholder="Find a Repository" className="reposearch-bar" />
                    </div>
                    <div>
                    <button className="button" onClick={() => setModalOpen(true) }>New</button>
                    </div>
                </div>
                <div className="repo-card-container">
                  {
                    repositories.map((repoName,index) => (
                      <RepoCard2 key={index} repoName ={repoName} profileName={profileName}/>
                    ))
                  }  
                </div>
                </div>
            </div>


        </div>
        {isModalOpen && (
          <RepoCreation 
            profilename = {profileName}
            onClose = {() => setModalOpen(false)} 
            setRepositories={setRepositories}
            
          />
        )
        }

    </div>
  );
};

export default ProfilePage;