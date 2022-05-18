import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);


    router.get('/ab', homeController.postCRUD);
//them
    router.post('/post-crud', homeController.postCRUD);

    router.post('/post-crud2', homeController.postCRUD2);
    router.get('/get-crud', homeController.getEditCRUD);
    
//sua
    router.put('/put-crud', homeController.putCRUD);



    return app.use("/", router);
}

module.exports = initWebRoutes;