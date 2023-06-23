import * as express from 'express';
import * as path from 'path';
import { Request, Response } from 'express';

const app = express();
const port = 3000; // or any port you want the server to run on

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/ad4mDownload', (req: Request, res: Response) => {
    res.download(path.join(__dirname, 'ad4m')); // for example, this file is in the same folder as your server.ts
});

app.get('/fluxDownload', (req: Request, res: Response) => {
    res.download(path.join(__dirname, 'flux')); // for example, this file is in the same folder as your server.ts
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});