import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(postIdentifier) {
    const slug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug,
        ...data,
        content,
    };

    return postData;
}

export async function getPostFiles() {
    return await fs.readdir(postsDirectory);
}

export async function getAllPosts() {
    const postFiles = await getPostFiles();

    let posts = postFiles.map(
        file =>
            new Promise(async res => {
                const data = await getPostData(file);
                res(data);
            })
    );

    posts = await Promise.all(posts);
    posts = posts.sort((a, b) => new Date(a.date) > new Date(b.date));
    return posts;
}

export async function getFeaturedPosts() {
    const allPosts = await getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}
