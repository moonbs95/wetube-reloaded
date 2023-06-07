import express from "express";

const PORT = 4000;

const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Welcome");
    next();
};

const handleHome = (req, res) => {
    return res.send("This is HP");
};

const handleProtect = (req, res) => {
    return res.send("Private Lounge for VIP");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtect);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);