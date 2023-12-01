import { useEffect, useState } from "react";

export const Fetch = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(json => setPosts(json.posts))
            .catch(err => console.error('Error fetching posts:', err));
    }, []); 

    return (
        <div>
            {posts.length > 0 ? (
                <Show posts={posts} />
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    );
};

const Show = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};
