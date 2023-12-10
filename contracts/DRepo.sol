// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract DRepo {
    mapping(address => bool) public isRegistered;
    mapping(string => address) public profileNameMap;
    mapping(string => address) public projectNameToAddress;

    struct Commit {
        string CommitMsg;
        string ipfsCID;
    }

    function getAddressByProfileName(string memory profileName) public view returns (address) {
        return profileNameMap[profileName];
    }

    mapping(address => string[]) public userProjects;
    mapping(string => Commit[]) public projectCommits;

    function registerUser(string memory profileName) public {
        require(!isRegistered[msg.sender], "User already registered");
        require(
            bytes(profileName).length > 0,
            "Profile name must not be empty"
        );
        isRegistered[msg.sender] = true;

        profileNameMap[profileName] = msg.sender;

        
    }

    function authenticateUser() public view returns (bool) {
        return isRegistered[msg.sender];
    }

    function CreateProject(string memory project_name) public  {
        require(
            bytes(project_name).length > 0,
            "Project name must not be empty"
        );
        userProjects[msg.sender].push(project_name);
        projectNameToAddress[project_name] = msg.sender;
    }

    function getAllRepositories(string memory profilename)
        public
        view
        returns (string[] memory)
    {
        address userAddress = profileNameMap[profilename];
        require(userAddress != address(0), "User not found");
        // address(0) means not a etherium address,
        return userProjects[userAddress];
    }

    function commit(
        string memory project_name,
        string memory commitMsg,
        string memory ipfsCID
    ) public projectOwner(project_name) {
        projectCommits[project_name].push(Commit(commitMsg, ipfsCID));
    }

    function getAllCommits(string memory project_name)
        public
        view
        returns (Commit[] memory)
    {
        return projectCommits[project_name];
    }

    modifier projectOwner(string memory project_name) {
        address userAddress = projectNameToAddress[project_name];
        
        require(
            userAddress == msg.sender,
            "Only the project owner can perform this action"
        );
        _;
        
    }
}