# Node.js RESTful API Example

This Node.js application creates a simple RESTful API using Express and MongoDB. The API supports basic CRUD (Create, Read, Update, Delete) operations to manage products.

## Installation

1. **Clone the project:**
    ```
    git clone <repository-link>
    ```

2. **Navigate to the project directory:**
    ```
    cd <project-folder>
    ```

3. **Install the required packages:**
    ```
    npm install
    ```

4. **Create a `.env` file to establish MongoDB connection and add your MongoDB URI:**
    ```
    MONGO_DB=<your-mongodb-uri>
    ```

## Usage

To start the application, run the following command in your terminal:
npm start


Once the server is started, you can access the API at: [http://localhost:3000](http://localhost:3000)

## API Endpoints

- `GET /products`: Lists all products.
- `GET /products/:id`: Retrieves a specific product by ID.
- `POST /products`: Creates a new product.
- `PUT /products/:id`: Updates a specific product.
- `DELETE /products/:id`: Deletes a specific product.

## Database Model: Products

This file contains a Mongoose model and schema that represent how products are structured in the MongoDB database.

### Product Properties

- `name`: The name of the product. It's a required field and must be a string.
- `price`: The price of the product. It's a required field and must be a numerical value.
- `description`: The description of the product. It's a required field and must be a string.
- `createdAt`: The creation date of the product. By default, it uses the current date and time.
