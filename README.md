# About
This is a simple example on how to use [SerpApi](https://serpapi.com/) in Node.js using the [SerpApi Javascript Library](https://github.com/serpapi/serpapi-javascript)

Full blog post: https://serpapi.com/blog/using-serpapi-in-web-frontend-solve-cors-issue/

## Run this repo locally
- Clone this repository
- Run `npm install`
- Create a new `.env` file
- Add this in the `.env` file 
```
SERPAPI_API_KEY="YOUR_API_KEY"
```
- Replace YOUR_API_KEY with your actual SERPAPI API key.
- Run the server with `node server`
- Open your browser at http://localhost:3000?query=anything-you-want

## Using it in Frontend (Optional)
This is an additional guide, on how to access the endpoint from frontend (HTML).

You can find a simple `index.html` file example in this repository, that fetch a request from the server above. 