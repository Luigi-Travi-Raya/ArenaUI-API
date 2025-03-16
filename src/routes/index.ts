import express from "express";
import UserRoutes from "./user";

export default function ServerStart() {
    const app = express();
    const port = 3000;

    app.listen(port, () => {
        console.log("app listening on port: " + port)
    });

    app.use(
        UserRoutes
    )
}
