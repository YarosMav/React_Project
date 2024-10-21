import React from "react";
import { usePostsData } from "../../hooks/usePostsData"

export interface IPostsContextData {
    id?: string;
    author?: string;
    title?: string;
    thumbnail?: string;
    score?: number;
    num_comments?: number | string | any;
    created?: number;
    sr_detail?: {
        icon_img: string;
    }
}

interface IPostsContext {
    posts: IPostsContextData[];
    loading: boolean;
    errorLoading: string;
    token: string;
    nextAfter: string;
    load: () => Promise<void>;
}

export const postsContext = React.createContext<IPostsContext>({
    posts: [],
    loading: false,
    errorLoading: "",
    token: "",
    nextAfter: "",
    load: async () => {},
})

export function PostsContextProvider({ children }: {children: React.ReactNode}) {
    const { posts, loading, errorLoading, token, nextAfter, load} = usePostsData();


    return (
        <postsContext.Provider value={{posts, loading, errorLoading, token, nextAfter, load}}>
            {children}
        </postsContext.Provider>
    );
}