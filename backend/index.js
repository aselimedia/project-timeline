import exspress from "express";
import cors from "cors";

const app = exspress();
app.use(cors());
app.use(exspress.json());

app.listen('5000', () => console.log('Server up and Running...'));