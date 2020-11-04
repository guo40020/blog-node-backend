import { Service } from "egg";

class MockGetPosts extends Service {
  public async getPosts() {
    const ids = ["asdfasdfadsf", "sdfsdfffgdgd"];

    const data = [
      {
        postId: ids[0],
        title: "Test title",
        tags: "tag1 tag2",
        description: "preview preview",
        dateTime: 1212300124,
      },
      {
        postId: ids[1],
        title: "Test title",
        tags: "tag1 tag2",
        description: "preview preview",
        dateTime: 1212300124,
      },
    ];
    data;
    return {
      posts: data,
    };
  }
}

module.exports = MockGetPosts;
