import axios from "axios";
import { useQuery } from "react-query";

const getPostId = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return data;
}

function usePost(postId) {
  return useQuery(["post", postId], () => getPostId(postId), {
    enabled: !!postId
  });
}

function Post({ postId, setPostId }) {
  const { status, data, error, isFetching } = usePost(postId);

  return (
    <div>
      <div>
        <a onClick={() => setPostId(-1)} href="#">Back</a>
      </div>
      {!postId || status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}

export default Post;