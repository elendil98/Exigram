import { User } from '../user/user';

export class Post {
    id: number;
    user: User;
    postImage: string;
    description: string;
    votes: number;
}