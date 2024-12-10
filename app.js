// const express = require('express');
// const path = require('path');
// const app = express();

// app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known')));

// app.get('/path', (req, res) => {
//     // Handle the deep link action here
//     res.send('Deep link handled in Node.js');
// });
// app.get('/generate-deeplink', (req, res) => {
//     // const { path } = req.query;
//     // const deepLink = `myzamzamapp://example/${path}`;
//     const deepLink = `myzamzamapp://`;
//     res.send({ deepLink });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const path = require('path');

const app = express();

// Serve `assetlinks.json`
// app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known')));

app.use(express.static('public'))
// Root route
app.get('/', (req, res) => {
    // res.redirect(`myzamzamapp://`);
    res.send('Node.js Server for Deep Linking');
});

// Deep link test route
app.get('/deeplink', (req, res) => {
    res.send('Deep link test route!');
});

// Catch-all for undefined routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://192.168.1.37:${PORT}`);
});
