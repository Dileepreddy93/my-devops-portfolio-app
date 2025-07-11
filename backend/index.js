const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const items = [
    { id: 1, name: 'Product A', description: 'Description for A' },
    { id: 2, name: 'Product B', description: 'Description for B' }
];

app.get('/api/products', (req, res) => {
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
