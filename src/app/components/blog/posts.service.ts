import { Injectable } from '@angular/core';
import { LogService } from '../login/log.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private logService: LogService) { }

  posts: any[] = [
    {
      id: 1,
      user: 'Eslam',
      content: 'A wonderful trip to the pyramids!',
      image: 'giza.jpeg',
      likes: 5,
      comments: [
        { user: 'Ahmed', text: 'Amazing experience!' },
        { user: 'Sara', text: 'I want to visit the pyramids soon!' }
      ]
    },
    {
      id: 2,
      user: 'Mohammed',
      content: 'Having a great time on the Nile River!',
      image: 'nile2.jpg',
      likes: 3,
      comments: []
    }

  ]
  getAllPosts() {
    return this.posts;
  }
  getposts() {
    const username = this.logService.getUsername();
    return this.posts.filter(post => post.user === username); // عرض منشورات المستخدم الحالي فقط
  }

  addPost(post: any) {
    post.id = this.posts.length + 1;
    post.likes = 0;
    post.comments = [];
    this.posts.push(post);
  }

  // حذف منشور
  deletePost(postId: number) {
    const index = this.posts.findIndex(post => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
  // إضافة إعجاب لمنشور
  likePost(postId: number) {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      post.likes++;
    }
  }

  // إضافة تعليق لمنشور
  addComment(postId: number, comment: any) {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      post.comments.push(comment);
    }
  }
}