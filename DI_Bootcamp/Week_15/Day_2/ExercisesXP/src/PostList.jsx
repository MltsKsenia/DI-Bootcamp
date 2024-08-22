import React from 'react';
import posts from './posts.json';

function PostList() {
    return (
        <div>
            <h1>Hi This is the title</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
