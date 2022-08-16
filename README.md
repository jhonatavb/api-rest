# Project API REST

A simple but very fun project, it involves a lot of knowledge of the express framework.
In it I use express to create an API where you can create a product by sending its name and price, the ID is created dynamically. This is all saved in cache and you can consult both the product by ID and allregistered products. The POST, PUT DELETE me and thods are secured by authentication.

## Installation

Use the package mananger [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

In order for your API to run you will need to install nodemon
```bash
npm install --save-dev nodemon
```

You will also need an API platform such as postman or insomnia.
* [postman](https://www.postman.com/)
* [insomnia](https://insomnia.rest/download)

## Usage
As stated above you can use any API platform, here I will use postman as an example.

An important piece of information is that you need to create a `.env` file and put a username, password and port as follows:

`PORT=PORT_NUMBER`
`DB_USERNAME=YOUR_USERNAME`
`DB_PASSWORD=YOUR_PASSWORD`

After performing all the above procedures, just make sure you are inside the API folder and run the following command:

```bash
npm run dev
```

After that your API should be running.

Inside postman, enter the URL:

`localhost:PORT_NUMBER/products`

You can either GET `/products` or get products by ID with `/products/ID`. For other methods like POST, PUT and DELETE, you should go to the `Headers` tab and add the `username` and `password` keys, in the values you should put the same ones you assigned in your `.env` file, for example example:

`username: your_username`
`password: your_password`

## Future
I will be adding the automated tests and also adding a real database. In addition to other improvements.

## License
[MIT](https://choosealicense.com/licenses/mit/)
