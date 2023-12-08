
export const Post = ({ post, isUserAuthor }) => {
    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {isUserAuthor && <p>Ви автор цього посту</p>}
        </div>
    );
};
