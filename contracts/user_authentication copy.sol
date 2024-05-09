// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract UserAuthentication {
    // Struct to represent user information
    struct User {
        address userAddress; // Change username to address
        bytes32 passwordHash;
        Role role;
    }

    // Enum to represent user roles
    enum Role { Patient, Doctor, Nurse, Admin }

    // Mapping to store user credentials
    mapping(address => User) private users;

    // Event to log user registration
    event UserRegistered(address indexed userAddress, Role role);

    // Function to register a new user
    function registerUser(bytes32 _passwordHash, Role _role) public {
        require(users[msg.sender].userAddress == address(0), "User already registered");
        users[msg.sender] = User(msg.sender, _passwordHash, _role);
        emit UserRegistered(msg.sender, _role);
    }

    // Function to authenticate a user
    function authenticate(bytes32 _passwordHash) public view returns (bool) {
        return users[msg.sender].passwordHash == _passwordHash;
    }

    // Function to assign a role to a user
    function assignRole(address _userAddress, Role _role) public {
        require(users[_userAddress].userAddress != address(0), "User does not exist");
        users[_userAddress].role = _role;
    }

    // Modifier to restrict access to admin-only functions
    modifier onlyAdmin() {
        require(users[msg.sender].role == Role.Admin, "Unauthorized access");
        _;
    }

    // Modifier to restrict access to certain functions based on user role
    modifier onlyRole(Role _role) {
        require(users[msg.sender].role == _role, "Unauthorized access");
        _;
    }
}
