import { Service } from "egg";

class MockGetPost extends Service {
  public async getPost({ id }) {
    id;
    return {
      content: "asdfasdfasdf\n```javascript\nconst a = 'sb';\n```",
      title: "猜猜这是啥",
      description: "Test description",
    };
  }
}

module.exports = MockGetPost;
