import { createServer } from 'http';
let host = 'localhost';
let port = 3000;
const server = createServer((request, response) => {
    response.end('Hello Galvanize!');
});
server.listen(port, host, () => {
    console.log(`Server running at ${host}:${port}`);
})