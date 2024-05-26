Product and Order Management APIs
Product Management
Add Products via POST Request
To add products to our system, utilize the POST request method. This allows for efficient and structured addition of new products.

Endpoint: /api/products

Instructions
Send a POST Request: Utilize the designated endpoint for adding products. Ensure that your request is formatted correctly according to the API documentation.

Provide Product Information: Include all necessary details about the product in the request body. This typically includes attributes such as name, description, price, and any additional metadata required by the system.

Handle Response: Upon successful submission of the POST request, the system will respond with a confirmation message or relevant status code. Ensure to handle any errors or exceptions gracefully.

Validate Product Data with Zod
We use Zod, a TypeScript schema validation library, to validate product data. This ensures data integrity and consistency within our system.

Retrieve Products via GET Request
To retrieve product information from our system, utilize the GET request method.

Endpoint: /api/products

Search Products by Email
To find orders associated with a specific email, you can use a search query parameter.

Endpoint: /api/orders?email={user_email}

Replace {user_email} with the email address you want to search for.

Order Management
Add Orders via POST Request
To add orders to our system, utilize the POST request method. This allows for efficient and structured addition of new orders.

Endpoint: /api/orders

Instructions
Send a POST Request: Utilize the designated endpoint for adding orders. Ensure that your request is formatted correctly according to the API documentation.

Provide Order Information: Include all necessary details about the order in the request body. This typically includes attributes such as customer information, product details, quantity, and any additional metadata required by the system.

Handle Response: Upon successful submission of the POST request, the system will respond with a confirmation message or relevant status code. Ensure to handle any errors or exceptions gracefully.

Validate Order Data with Zod
We use Zod to validate order data, ensuring that all orders submitted to our system meet specified criteria. This helps maintain data consistency and accuracy.

Retrieve Orders via GET Request
To retrieve order information from our system, utilize the GET request method.

Endpoint: /api/orders
