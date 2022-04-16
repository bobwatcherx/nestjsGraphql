import { Resolver,Subscription,Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import {Author,Pagi,NewAuthor} from './models/author.model';
import {Userservices} from './services/user.service';
import {pubsub} from './pubsubfol/pubsub'
@Resolver()
export class AppResolver{
  constructor(private user:Userservices){}
  @Query(returns=>Pagi)
   hello(){
     return this.user.buat()
   }
   @Mutation(returns=> Author)
   async addnewpost(
     @Args('firstName') firstName:string,
     @Args('lastName') lastName:string
   ){
    let newpost =  this.user.kirim(firstName,lastName)
    console.log(newpost)


     return newpost
   }
   @Subscription(returns=>Pagi)
   subauthor(){
     return pubsub.asyncIterator('post');

   }
}
