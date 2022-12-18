USE bkplzvuymmp5cxirqiwq;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastNameF VARCHAR(100)NOT NULL,
    lastNameM VARCHAR(100)NOT NULL,
    password VARCHAR(20) NOT NULL,
    status VARCHAR(30) NOT NULL,
    about VARCHAR(500) NOT NULL
);