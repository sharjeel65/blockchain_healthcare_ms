- - Table to store user data
CREATE TABLE Users (
UserID INT AUTO_INCREMENT PRIMARY KEY,
UserName VARCHAR(255) NOT NULL,
Address VARCHAR(255) NOT NULL,
Designation VARCHAR(255) NOT NULL,
UserIdentifier VARCHAR(50) UNIQUE NOT NULL,
RoleID INT,
FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);
- - Table to store user roles
CREATE TABLE Roles (
RoleID INT AUTO_INCREMENT PRIMARY KEY,
RoleName VARCHAR(50) NOT NULL
);
- - Table to store access permissions
CREATE TABLE Permissions (
PermissionID INT AUTO_INCREMENT PRIMARY KEY,
PermissionName VARCHAR(50) NOT NULL
);
- - Table to store mappings between roles and permissions
CREATE TABLE RolePermissions (
RoleID INT,
PermissionID INT,
PRIMARY KEY (RoleID, PermissionID),
FOREIGN KEY (RoleID) REFERENCES Roles(RoleID),
FOREIGN KEY (PermissionID) REFERENCES Permissions(PermissionID)
);
- - Table to store mappings between user IDs and roles
CREATE TABLE UserRoleMappings (
UserID INT,
RoleID INT,
PRIMARY KEY (UserID, RoleID),
FOREIGN KEY (UserID) REFERENCES Users(UserID),
FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);
- - Table to store healthcare records
CREATE TABLE HealthcareRecords (
RecordID INT AUTO_INCREMENT PRIMARY KEY,
PatientID INT NOT NULL,
RecordData TEXT NOT NULL,
Version INT DEFAULT 1,
LastModified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
CONSTRAINT fk_patient FOREIGN KEY (PatientID) REFERENCES Users(UserID)
);
- - Table to store access logs for healthcare records
CREATE TABLE HealthcareAccessLogs (
LogID INT AUTO_INCREMENT PRIMARY KEY,
Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ActorID INT NOT NULL,
ActionRequested VARCHAR(100) NOT NULL,
AffectedUserID INT NOT NULL,
IsApproved BOOLEAN NOT NULL,
FOREIGN KEY (ActorID) REFERENCES Users(UserID),
FOREIGN KEY (AffectedUserID) REFERENCES Users(UserID)
);