import { Component } from '@angular/core';
import { PostsService } from '../blog/posts.service';
import { LogService } from '../login/log.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-plog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-plog.component.html',
  styleUrl: './all-plog.component.css',
})
export class AllPlogComponent {
  posts: any[] = [];
  newComment: string = '';
  constructor(
    private postsService: PostsService,
    private logService: LogService
  ) {
    this.posts = this.postsService.getAllPosts();
  }
  // إضافة إعجاب لمنشور

  // دالة لتبديل حالة الإعجاب
  toggleLike(post: any) {
    post.liked = !post.liked; // تبديل حالة liked
    if (post.liked) {
      post.likes++; // زيادة عدد الإعجابات
    } else {
      post.likes--; // تقليل عدد الإعجابات
    }
  }
  // إضافة تعليق
  addComment(postId: number) {
    const username = this.logService.getUsername(); // استرجاع اسم المستخدم المسجل
    if (username && this.newComment.trim() !== '') {
      const comment = {
        user: username,
        text: this.newComment,
      };
      this.postsService.addComment(postId, comment);
      this.newComment = ''; // مسح الحقل بعد إضافة التعليق
    }
  }
}
