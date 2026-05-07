import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {

  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { _id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`http://localhost:3000/posts/${_id}`);
        if (!res.ok) throw new Error("Post not found");
       
        const data = await res.json();
        console.log("API Response:", data);
        setPost(data);

        window.scrollTo(0, 0);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (_id) fetchPost();
  }, [_id]);


  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Post not found</p>;


    return(
        <article class="max-w-3xl mx-auto px-4 py-16">
  <header class="mb-12">
    <div class="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-6">
      <span>{post.category ? post.category: 'General'}</span>
      <span class="w-1 h-1 rounded-full bg-gray-300"></span>
      <time datetime="2026-04-27">{post.updatedAt}</time>
    </div>
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
      {post.title}
    </h1>
    
    <div class="flex items-center gap-4 pb-8 border-b border-gray-100">
      <img src="https://api.dicebear.com/8.x/initials/svg?seed=MS" alt="Author" class="w-12 h-12 rounded-full bg-gray-100" />
      <div>
        <p class="text-sm font-bold text-gray-900">Admin</p>
        <p class="text-xs text-gray-500 uppercase">Default Creator</p>
      </div>
    </div>
  </header>

  <figure class="mb-12">
    <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <div class="w-full h-full flex items-center justify-center text-gray-300">
            <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </div>
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-500 italic">Image Caption.</figcaption>
  </figure>

  <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
    <p>
      {post.content}
     </p>
    <p>
    </p>
   
  </div>
</article>
    );
}

export default PostDetails;