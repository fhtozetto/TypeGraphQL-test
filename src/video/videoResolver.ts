import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Video } from "./video";
import { VideoSchema } from './videoSchema';

@InputType()
class VideoInput {
    @Field()
    description: String;

    @Field()
    title: String;

    @Field()
    category: String;
}

@Resolver()
class VideoResolver {

    @Mutation(() => Video)
    async addVideo(@Arg('videoInput') videoInput: VideoInput) {
        // retorna o comando para criar um video (registro)
        //const video = await VideoSchema.create(videoInput);
        //return video;
    }

    @Query(() => [Video])
    async Videos() {
        //Retorna os videos encontrados.
        //const videos = VideoSchema.find();
        //return videos
    }
}

export { VideoResolver }