// deno-lint-ignore-file ban-types
import { RouterContext, Status } from "../../deps.ts";

export default async (context: RouterContext, next: Function) => {
  const authHeader = context.request.headers.get("authorization");

  if (!authHeader) {
    context.throw(Status.Unauthorized, "Access Token Missing!");
  } else {
    const token = authHeader;
    try {
      if (Deno.env.get("TOKEN_SECRET") !== token) {
        context.throw(Status.Unauthorized);
      }

      await next();
    } catch (e) {
      console.log(e);
      context.throw(Status.Unauthorized);
    }
  }
};
