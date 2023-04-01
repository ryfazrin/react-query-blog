import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

function usePosts() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return data;
  });
}

function Posts({ setPostId }) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (<div>
    <h1>Posts</h1>
    <div>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            {data.map((post) => (
              <p key={post.id}>
                <a onClick={() => setPostId(post.id)} href="#">{post.title}</a>
              </p>
            ))}
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  </div>);
}

export default Posts;