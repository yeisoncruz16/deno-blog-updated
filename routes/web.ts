import { Router, RouterContext } from "../deps.ts";
import authorize from "../app/middleware/authorize.ts";
import PostController from "../app/controllers/post.ts";

const router = new Router();
router
  .get("/", (context: RouterContext) => {
    context.response.body = "Hello world!";
  })
  .get("/api", (context) => (context.response.body = "API version 1.0"))
  .get("/api/post", authorize, PostController.index)
  .post("/api/post", authorize, PostController.store)
  .patch("/api/post/:id", authorize, PostController.update)
  .delete("/api/post/:id", authorize, PostController.remove);

export default router;
