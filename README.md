# E-Commerce Back End

## Description

This is a back end for an e-commerce site build with an configured Express.js API to use Sequelize to interact with a MySQL database.

The backend has CRUD functionality where users can:

- View all categories/products/tags
- View a single category/product/tag
- Create categories/products/tags
- Update categories/products/tags
- Delete categories/products/tags

## Table Of Content

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Questions](#questions)

## Installation

- Clone the repository from https://github.com/ptran77/e-commerce-back-end
- run 'npm i' to install all necessary packages
- create an '.env' with DB_NAME to 'ecommerce_db', DB_USER to your mySQL user, and BD_PW to your mySQL password
- use mysql and enter 'source db/schema.sql' to setup the database and tables
- to set up seeds, run 'npm run seed'
- open Insomnia, and set up GET, POST, PUT, and DELETE requests for catogory, product, and tag
- for the url, use 'http://localhost:3001/api/categories' for category, 'http://localhost:3001/api/products' for product, and 'http://localhost:3001/api/tags' for tag

## Usage

- in the terminal, go to the directory where all the files are store
- enter 'npm start' to run the application
- open Insomnia where all the requests should be set up like in the installaion instructions and test the requests

## Demo

<img src='./e-commerce-back-end-demo.gif' width=500 />

[Video Link](https://drive.google.com/file/d/1tRGX0NGGXI8P3nzUzeRMnxcY10K1DDLM/view?usp=sharing)

## Questions

Github: [ptran77](https://github.com/ptran77)

For any questions, contact me at pettran866@gmail.com
