import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './posts.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogService } from '../login/log.service';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';



@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SidebarComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: any[] = [];
  newPost: any = { user: '', content: '', image: '' };
  newComment: string = '';

  constructor(

    private postsService: PostsService, private logService: LogService

    , private logservice: LogService, private router: Router
  ) {
    this.newPost.user = this.logService.getUsername()
    this.posts = this.postsService.getposts();
  }

  // إضافة منشور جديد
  addPost() {
    this.newPost.user = this.logService.getUsername(); // تعيين اسم المستخدم الحالي
    this.postsService.addPost(this.newPost);
    this.newPost = { user: '', content: '', image: '' };// إعادة تعيين المدخلات
    this.posts = this.postsService.getposts();
  }

  // حذف منشور
  deletePost(postId: number) {
    this.postsService.deletePost(postId);
    this.posts = this.postsService.getposts();
  }

  // إضافة إعجاب لمنشور

  // دالة لتبديل حالة الإعجاب
  toggleLike(post: any) {
    post.liked = !post.liked;  // تبديل حالة liked
    if (post.liked) {
      post.likes++;  // زيادة عدد الإعجابات
    } else {
      post.likes--;  // تقليل عدد الإعجابات
    }
  }

  // إضافة تعليق
  addComment(postId: number) {
    const username = this.logService.getUsername(); // استرجاع اسم المستخدم المسجل
    if (username && this.newComment.trim() !== '') {
      const comment = {
        user: username,
        text: this.newComment
      };
      this.postsService.addComment(postId, comment);
      this.newComment = ''; // مسح الحقل بعد إضافة التعليق
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // الحصول على الملف الأول المرفوع
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newPost.image = e.target.result; // تخزين الصورة بعد تحويلها إلى Base64 أو URL
      };
      reader.readAsDataURL(file); // قراءة الملف كـ Data URL
    }
  }
}
