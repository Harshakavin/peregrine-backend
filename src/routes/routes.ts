import * as express from "express";
import UserCtrl from "../controllers/UserCtrl";
import ArtclesCtrl from "../controllers/ArtclesCtrl";



export default function setRoutes(app: any) {

    const router = express.Router();

    const userCtrl = new UserCtrl();
    const articleCtrl = new ArtclesCtrl();

    app.use("/api", router);

    router.route("/login").post(userCtrl.login);
    router.route("/login").post(userCtrl.login);
    router.route("/articles").get(userCtrl.getAllArticles);
    router.route("/test").post(articleCtrl.predictCategory);

    }
