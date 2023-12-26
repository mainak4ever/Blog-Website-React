import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/configure";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await appwriteService.getPosts([]);
        if (posts) {
          setPosts(posts.documents);
        }
        // console.log(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Call the function to fetch posts
    fetchPosts();
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
