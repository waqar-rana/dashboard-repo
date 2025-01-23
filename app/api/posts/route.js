import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

const getPosts = async (categoryId) => {
    let fetchedPosts = [];
    let page = 1;
    let totalPages = 1;

    do {
        const response = await fetch(`${process.env.DOMAIN_1}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&page=${page}&_fields=title,link`);
        const data = await response.json();
        
        // Map the fetched posts from the current page
        const postsFromPage = data.map(post => ({
            title: post.title.rendered,
            link: post.link
        }));

        // Add the current page posts to the fetchedPosts array
        fetchedPosts = fetchedPosts.concat(postsFromPage);

        // Get the total number of pages from the headers
        totalPages = response.headers.get('X-WP-TotalPages');
        page++;
    } while (page <= totalPages);

    return fetchedPosts;
}

export async function POST(req) {
    try {
        const { categoryId } = await req.json();
        await dbConnect();
        const posts = await getPosts(categoryId);
        // Check if the category already exists in the database
        const selectedCategory = await Category.findOne({ categoryId: categoryId });
        selectedCategory.posts = posts;
        await selectedCategory.save();
        return NextResponse.json({ message: `All links are Updated for ${categoryId}` });
    } catch (error) {
        return NextResponse.json({ message: `Error while Updating Links: ${error.message}` });
    }
}