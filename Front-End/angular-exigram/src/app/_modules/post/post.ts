import { User } from '../user/user';

export class Post {
    user: User;
    postImage: string;
    description: string;
    votes: number;
}