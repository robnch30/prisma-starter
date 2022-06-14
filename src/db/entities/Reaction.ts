import { type } from 'os';
import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';
import { Post } from './Post';
import { User } from './User';

@ObjectType()
export class Reaction{
    @Field((type)=>ID)
    id: string

    @Field((type) => Post)
    user: User
    
    @Field()
    typeReaction: string

    @Field()
    puclicate: boolean

    @Field((type) => Date)
    date: string

    @Field((type) => Post)
    post: Post []
}