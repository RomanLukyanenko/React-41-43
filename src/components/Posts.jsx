import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { Post } from './Post';

export const Posts = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (user) {
            fetch('https://dummyjson.com/posts')
                .then(res => res.json())
                .then(data => setPosts(data.posts));
        }
    }, [user]);

    if (!user) {
        return <p>Будь ласка, увійдіть у систему</p>;
    }

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} isUserAuthor={post.userId === user.id} />
            ))}
        </div>
    );
};
