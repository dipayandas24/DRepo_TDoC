import React, {  useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { contractABI, contractAddress } from '../../contractConfig.js';
// import { contract } from 'web3/lib/commonjs/eth.exports';

// console.log(contractAddress);
const Home = () => {

  const navigate = useNavigate()


  const [profileName, setProfileName] = useState('');
  
  // const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = () => {
  //   // Perform actions for file upload
  //   console.log("Your commit:", inputValue);
  // };

  const handleSignIn = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        await window.eth_requestAccounts;
        const accounts = await web3.eth.getAccounts();
        

        const result = await contract.methods.authenticateUser().call({ from: accounts[0] });
        

        if(result){
          const profileName = await contract.methods.getProfileName().call({ from: accounts[0] });
          navigate(`/${profileName}`);
        }
        else{
          console.log('User not registered');
        }
      }
      catch (error) {
        console.error('Error registering user', error);
  }
}
}


  const registerUser = async () => {

   
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        await window.eth_requestAccounts;
        const accounts = await web3.eth.getAccounts();

        const result =  await contract.methods.registerUser(profileName).send({ from: accounts[0] });
        if(result){
          navigate(`/${profileName}`);
        }
        console.log('User registered successfully', result);
      } catch (error) {
        console.error('Error registering user', error);
      }
    }
  };


  


  return (
    <div>
      <Navbar />
      <div className="home-content">
        <div className="left-content">
          <h1 className='maintext'>Your code is in <span className="subtext">Blockchain</span></h1>
          <p className="description">Start your journey towards the <br />Decentralized World</p>
          <div className="btn-container">
            <input type="text" placeholder="Profile Name is mandatory!!" className="input-field"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)} />
          </div>
          <button className="btn" onClick={registerUser}>Register</button>
          <div className="signin-text">Already Have an Account, 
           <button className='sign-in' onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
        <div className="right-content">
          <img className='img' src="hero.jpg" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;

