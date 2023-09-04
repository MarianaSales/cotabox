import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver {
    private data: User[] = []

    @Query(() => [User])
    async users() {
        return this.data
    }

    @Mutation(() => User)
    async createUser(@Arg('name') name: string,
        @Arg('lastname') lastname: string,
        @Arg('participation') participation: string) {
        
        const nextIndex = this.data.length;

        const user = { id: nextIndex.toString(), name, lastname, participation}

        this.data.push(user)

        return user
    }
}