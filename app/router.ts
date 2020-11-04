import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/get_posts", controller.getPosts.getPosts);
  router.get("/get_all_ids", controller.getAllIds.getIds);
  router.post("/get_post", controller.getPost.getPost);
};
