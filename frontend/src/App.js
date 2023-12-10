// import { ConnectWallet } from "@thirdweb-dev/react";

import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Repo from './Pages/Repo/Repo';
import ProfilePage from './Pages/ProfilePage/ProfilePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user1" element={<User1 />} /> */}
        <Route path="/:profileName" element={<ProfilePage />} />
        <Route path="/:profileName/:repoName" element={<Repo />} />
      </Routes>
    </Router>
  );
}

export default App;
