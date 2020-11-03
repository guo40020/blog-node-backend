import { Service } from "egg";
import { nanoid } from 'nanoid';

class MockGetPosts extends Service {
  public async getPosts() {
    const data = [
      {
        postId: nanoid(15), 
        title: "Test title",
        tags: "tag1 tag2",
        contentPreview: "preview preview",
        dateTime: 1212300124,
      },
      {
        postId: nanoid(15), 
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
