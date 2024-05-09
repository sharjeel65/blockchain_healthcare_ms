// migrations/2_deploy_user_authentication.js
const UserAuthentication = artifacts.require("UserAuthentication");

module.exports = function(deployer) {
  deployer.deploy(UserAuthentication);
};
