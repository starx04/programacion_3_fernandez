import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts: any[] = [];

  create(body: any) {
    const newPost = { id: Date.now().toString(), createdAt: new Date(), ...body };
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    return this.posts.find(post => post.id === id);
  }

  update(id: string, body: any) {
    const post = this.posts.find(p => p.id === id);
    if (post) {
      Object.assign(post, body, { updatedAt: new Date() });
      return post;
    }
    return null;
  }

  remove(id: string) {
    const index = this.posts.findIndex(p => p.id === id);
    if (index > -1) {
      return this.posts.splice(index, 1);
    }
    return null;
  }
}