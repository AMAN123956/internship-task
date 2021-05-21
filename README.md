# login-signup
## How to Use:
### Run following Commands:
#### 1.git clone https://github.com/AMAN123956/internship-task.git
#### 2.cd internship-task
#### 3.npm install
#### 4.cd server
#### 5. node app.js

# =======================
## Models:
### 1. Users Model: (email,password)
### 2. Cloth Model: (pid,name,description,price,image)

## Routes:
### 1. Users Routes
### 2. Cloth Routes

## User Routes Apis
### 1. /api/users/ - register
### 2. /api/users/login - login

## Cloth Routes
### 1. /save - save cloth data
### 2. /api/cloth/ - get,update,delete cloth

##Approach 
## 1. For Sign in and Sign Up 
### Used JWT Token for sign in and sign up.(required fields:email,password)
### After successful sign in/sign up a token is returned which need to be present in order to make any changes

## 2. For Cloth Section
### /save route to store cloth data in cloth data I have used pid(product_id) field which need to be unique for every product. Also using multer Image Upload is done from system
### Created /api/cloth/ route to get all cloths stored in database


