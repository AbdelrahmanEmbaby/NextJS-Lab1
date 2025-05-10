export const getAllPosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export const getPostsByUserId = async (userId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export const getPostById = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        if (!res.ok) {
            throw new Error('Failed to fetch post');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

export const getCommentsByPostId = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

        if (!res.ok) {
            throw new Error('Failed to fetch comments');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}