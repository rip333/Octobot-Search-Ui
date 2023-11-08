import express from 'express';
import path from 'path';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 3001; // Use a different port than React's default 3000
const corsOptions = {
    origin: 'http://localhost:3000', // or your React app's origin
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
