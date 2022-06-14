import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';
import { User } from './User';
import { Reaction } from './Reaction';
import { Comment } from './Comment';

@ObjectType()
export class Post{
    @Field((type)=>ID)
    id: string
    
    @Field()
    title: string

    @Field((type) => String,{ nullable: true })
    content: string | null

    @Field()
    publicshed: boolean

    @Field((type) => User)
    author: User

    @Field()
    authorId: string

    @Field()
    viewCount: number

    @Field((type) => Date)
    createAt: string

    @Field((type) => Date)
    updateAt: string

    @Field((type) => Reaction)
    reactions: Reaction []

    @Field((type) => Comment)
    comment: Comment []
}