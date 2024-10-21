import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export type TuseCommentsDataProps = {
    postId?: string;
};

export function useCommentsData({ postId }: TuseCommentsDataProps) {
  const [comments, setComments] = useState([]);
  const token = useSelector<RootState, string>((state) => state.token);
  

  useEffect(() => {
    if (token && postId) {
    axios
      .get(`https://oauth.reddit.com/comments/${postId}`,
       {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp: AxiosResponse<any>) => {
        const data = resp.data[1].data.children;
        const commentsArray = data.map((data: {data: any }) => data.data);
        setComments(commentsArray);

      })
      .catch(console.log);
    }
  }, [postId, token]);

  return [comments];
}