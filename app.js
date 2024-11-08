const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./Routes/bookRoutes');
// Use CORS middleware
const cors = require('cors');





const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
