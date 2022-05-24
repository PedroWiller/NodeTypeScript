import { Router } from 'express';

const routes = Router();

routes.get("/", (request, response) => {
    return response.json({message: "dev"});
});

export default routes;