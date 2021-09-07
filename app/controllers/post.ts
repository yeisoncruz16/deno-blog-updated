import PostsModel from "../models/posts.ts";
import { RouterContext, Status } from "../../deps.ts";
import manager from "../config/database.ts";

export default class PostController {
  static async index(context: RouterContext) {
    context.response.status = Status.OK;
    context.response.type = "json";
    context.response.body = await manager.query(PostsModel).all();
  }

  static async store(context: RouterContext) {
    const { title, description } = await context.request.body().value;

    const post = new PostsModel();
    post.title = title;
    post.description = description;
    post.created_at = new Date();

    await manager.save(post);

    context.response.status = Status.Created;
    context.response.type = "json";
    context.response.body = post;
  }

  static async remove(context: RouterContext) {
    const { id } = context.params;
    const post = await manager.query(PostsModel).where(
      "id",
      (parseInt(id || "0")),
    ).first();
    if (post) {
      await manager.remove(post);
      context.response.status = Status.Accepted;
    } else {
      context.response.status = Status.NotFound;
    }
  }

  static async update(context: RouterContext) {
    const { id } = context.params;
    const { title, description } = await context.request.body().value;

    const post = await manager.query(PostsModel).where(
      "id",
      (parseInt(id || "0")),
    ).first();
    if (post) {
      post.title = title;
      post.description = description;
      await manager.query(PostsModel).where("id", (parseInt(id || "0"))).update(
        { title, description },
      );
      context.response.body = post;
      context.response.status = Status.Accepted;
    } else {
      context.response.status = Status.NotFound;
    }
  }
}
