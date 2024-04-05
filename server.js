const http = require('http');
const { getJson } = require("serpapi");
require('dotenv').config();


const server = http.createServer(async (req, res) => {
    // Set CORS headers
    const allowed_domain = '*' // Adjust with your domain or localhost port
    res.setHeader('Access-Control-Allow-Origin', allowed_domain);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // read query parameters
    const url = new URL(req.url, `http://${req.headers.host}`);
    const searchParams = url.searchParams;
    const query = searchParams.get('query');

    try {
        const response = await getJson({
            engine: "google",
            api_key: process.env.SERPAPI_API_KEY,
            q: query, 
            location: "Austin, Texas",
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message }));
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
