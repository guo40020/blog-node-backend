import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/get_posts", controller.mockGetPosts.getPosts);
};
