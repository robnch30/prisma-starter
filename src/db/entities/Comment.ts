import { ObjectType, Field, ID } from 'type-graphql';
import { Post } from './Post';
import { User } from './User';

@ObjectType()
export class Comment{
    @Field((type) => ID)
    id: string

    @Field()
    content: string

    @Field((type) => User)
    author: User

    @Field()
    authorId: number 
    
    @Field((type) => Post)
    post: Post

    @Field()
    postId: number

    @Field((type) => Date)
    createAt: string

    @Field((type) => Date)
    updateAt: string

    @Field()
    publicshed: boolean

    @Field()
    viewCount: number  
}