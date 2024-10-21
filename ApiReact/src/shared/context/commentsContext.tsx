import React from "react";
import { TuseCommentsDataProps, useCommentsData } from "../../hooks/useCommentsData";
import { IReply } from "../Post/Comments/Replies/Reply";

export interface ICommentsContextData {
    id: string;
    author: string;
    body: string;
    created_utc: number;
    avatar: string;
    replies: {
        data: {
          children: [
            {
              data: {
                author: string;
                body: string;
                created_utc: number;
                avatar: string;
              },
            },
          ],
        },
      },
}

export const CommentsContext = React.createContext<ICommentsContextData[]>([]);

export function CommentsContextProvider(
    { children }: {children: React.ReactNode}, props: { postId: string }) {
    const [comments] = useCommentsData({ postId: props.postId });
        return (
        <CommentsContext.Provider value={comments}> 
            {children} 
        </CommentsContext.Provider>
    );
}