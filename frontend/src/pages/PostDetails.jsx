import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogDate from "../components/BlogDate";

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
      <time datetime="2026-04-27"><BlogDate date={post.createdAt} /></time>
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
   <div className="overflow-hidden bg-gray-100">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
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