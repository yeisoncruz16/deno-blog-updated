import { Column, Model, Primary } from "../../deps.ts";

@Model("posts")
class PostsModel {
  @Primary()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ default: () => new Date(), name: "created_at" })
  created_at!: Date;
}

export default PostsModel;
