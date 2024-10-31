import { Injectable } from '@nestjs/common';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
    //このクラス内だけでしかpostsプロパティがクラスの外部からアクセスできないようにする修飾子
    private readonly posts: PostType[] = [];
    //this.postsがPostsServiceクラスのインスタンスに属するpostsプロパティを指しています。つまり、findAll()メソッド内でthis.postsを使うことで、そのクラスインスタンスに含まれるposts配列にアクセスできます。
    findAll(): PostType[]{
        return this.posts;
    };
}
