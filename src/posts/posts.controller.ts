import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    //constructorは、PostsControllerクラスのインスタンスが作成されるときに自動的に呼ばれる特殊なメソッド
    //PostsController内でPostsServiceを利用するために、依存性注入によってインスタンスを自動的に提供する仕組み 
    //private readonlyで定義することにより、外部からのアクセスや再代入が制限
    constructor(private readonly postsService: PostsService){}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
