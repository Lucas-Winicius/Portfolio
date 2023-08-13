import CreatePost from "@/components/CreatePost";
import Loading from "@/components/Loading";
import Post from "@/components/Post";
import axios from "axios";
import { useEffect, useState } from "react";

interface PostType {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

function ViewPosts() {
  const [posts, setPosts] = useState<PostType[]>();

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((r) => r.data)
      .then((data) => setPosts(data));
  }, []);

  if (posts === undefined) return <Loading />;

  return (
    <>
      {posts.map((post, id) => (
        <Post data={post} key={id} />
      ))}
      <CreatePost />
    </>
  );
}

export default ViewPosts;
