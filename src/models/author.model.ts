
import { InputType,Field, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class NewAuthor{
  @Field()
  id:string
  @Field()
  firstName:string

  @Field()
  lastname:String
}

@ObjectType()
export class Author {
  @Field({nullable:true})
  id: string;

  @Field({nullable:true})
  firstName: string;

  @Field({nullable:true})
  lastName: string;
}


@ObjectType()
export class Pagi{
  // @Field()
  // uid:number
  @Field(type=>[Author])
  post:Author[]
}
