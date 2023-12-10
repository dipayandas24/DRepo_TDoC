import React, { useCallback , useState } from 'react';
import { useStorageUpload } from '@thirdweb-dev/react';
import { useDropzone } from 'react-dropzone';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.scss';
// import Web3 from 'web3';
// import { contractABI, contractAddress } from '../../contractConfig.js';
// import { contract } from 'web3/lib/commonjs/eth.exports';

// console.log(contractAddress);
const Home = () => {



  const [profileName, setProfileName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const registerUser = async () => {


    // if (window.ethereum) {
    //   const web3 = new Web3(window.ethereum);
    //   const contract = new web3.eth.Contract(contractABI, contractAddress);

    //   // console.log(contract.methods);
    //   try {
    //     await window.eth_requestAccounts;
    //     const accounts = await web3.eth.getAccounts();

    //     await contract.methods.registerUser(profileName).send({ from: accounts[0] });
    //     console.log('User registered successfully');
    //   } catch (error) {
    //     console.error('Error registering user', error);
    //   }
    // }
  };


  // const getAddressForProfile = async (profileName) => {
  //   if (window.ethereum) {
  //     const web3 = new Web3(window.ethereum);
  //     const contract = new web3.eth.Contract(contractABI, contractAddress);

  //     console.log(contract.methods);


  //     try {
  //       await window.ethereum.enable();
  //       const address = await contract.methods.getAddressByProfileName(profileName).call();
  //       console.log(`Address for profile name ${profileName}: ${address}`);
  //     } catch (error) {
  //       console.error('Error getting address for profile name', error);
  //     }
  //   }
  // };

  // // Example usage:
  // getAddressForProfile('swastik supakar');


  return (
    <div>
      <Navbar />
      <div className="home-content">
        <div className="left-content">
          <h1 className='maintext'>Your code is in <span className="subtext">Blockchain</span></h1>
          <p className="description">Start your journey towards the <br />Decentralized World</p>
          <div className="btn-container">
            <input type="text" placeholder="Profile Name" className="input-field"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)} />
          </div>
          <button className="btn" onClick={registerUser}>Register</button>
          <div className="signin-text">Already Have an Account, <a href="#">Sign In</a></div>
        </div>
        <div className="right-content">
          <img className='w-800 h-auto' src="hero.jpg" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;

