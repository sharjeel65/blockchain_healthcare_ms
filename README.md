# Tech

- Python
- Ganach, Truffel
- Solidity
- Docker
- Google Coud services
- Cryptodome
- MySQL

# Questions

## Basic

1. Start by setting up a private blockchain (such as Ganache1), which can run locally #DONE

2. Set up block chain on VM in docker container

3. Decide on the database technology(such as PostgreSQL, MongoDB) you want to use => Mysql #DONE

## The data stora and authemtication system

1. Decide on how you want to store user data. The database should store the details of users,including their names, addresses, and hospital designations. Each user should have an ID,which should be distinct from the system-wide identifier

2. he user data should be encrypted in transit. You can make use of frameworks like Py-Cryptodome2to achieve this

3. Decide how to implement user roles and perform access control based on them

4. Make about schema (Look up in description)

5. In docker container and deployed on cloude

6. Think about how you can return the yes/no values from the smart contract to the off-chainfunction invoking that smart contract

7. Play around with Block chain id and see how to link them => hard code them in?

8. Think about how you can return the yes/no values from the smart contract to the off-chainfunction invoking that smart contract

9. The smart contract should emit an event for every access to user database records => smart contract event emit in selinium. Needs to wait for DB schema for final implementation

10. An event should also be emitted for logging every access request => Research

A secure and auditable heathcare records management system using blockchain smart contracts. Part of the Project Based Learning module of the Advanced Internet Computing course at the TUHH, SoSe, 2024.
