export interface InitialStateProps {
    loading: boolean;
    userData: Array<any>;
    error: null;
    fetchUser: Object;
    addUser: Object
}

interface PostProps {
    id: any;
    title: string;
    body: string;
}

export interface InitialStatePostsProps {
    posts: PostProps
}
