import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/get_posts", controller.getPosts.getPosts);
  router.get("/get_all_ids", controller.getAllIds.getIds);
  router.post("/get_post", controller.getPost.getPost);
  router.post("/login", controller.login.login);
  router.post("/add_post", controller.addPost.addPost);
  router.post("/delete_post", controller.deletePost.deletePost);
  router.post("/update_post", controller.updatePost.updatePost);
  router.post("/upload_image", controller.uploadImage.uploadImage);
};
