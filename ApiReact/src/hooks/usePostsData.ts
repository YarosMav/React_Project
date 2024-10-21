import axios from "axios";
import { useEffect, useState } from "react";
import { RootState } from "../store/reducer";
import { useSelector } from "react-redux";

export function usePostsData() {
    const [posts, setPosts] = useState([]);
    const token = useSelector<RootState, string>(state => state.token);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState("");
    const [nextAfter, setNextAfter] = useState("");


    const load = async () => {
            setLoading(true);
            setErrorLoading("");
            try {
                const { data: { data: { after, children }} } = await axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
                    headers: { 
                        Authorization: `bearer ${token}`
                    },
                    params: {
                        limit: 10,
                        after: nextAfter,
                    }
                });
                const postsArray = children.map((data: {data: any }) => data.data);
                setNextAfter(after);
                setPosts(prevChildren => prevChildren.concat(...postsArray));
                console.log("посты загружены");
            } catch (error) {
                setErrorLoading(String(error));
            }
            setLoading(false);
    };
    
    return { posts, loading, errorLoading, token, nextAfter, load };
}