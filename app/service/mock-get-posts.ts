import { Service } from "egg";

class MockGetPosts extends Service {
  public async getPosts() {
    const data = [
      {
        title: "Test title",
        tags: "tag1 tag2",
        contentPreview: "preview preview",
        dateTime: 1212300124,
      },
      {
        title: "Test title",
        tags: "tag1 tag2",
        contentPreview: "preview preview",
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
