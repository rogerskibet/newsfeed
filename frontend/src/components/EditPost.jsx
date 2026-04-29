import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { deletePost } from "../services/posts";

export default function EditPost() {

    // 1. Destructure setPosts so you can use it in handleDelete
  const { posts, loading, error, setPosts } = usePosts(); 
  const { id } = useParams();

  const post = posts.find((p) => p._id === id);
  const navigate = useNavigate();

// -- UPDATE HANDLER --

async function handleUpdate(e) {
  e.preventDefault();
  
}


// -- DELETE HANDLER ---
  async function handleDelete(postId) {
    
    await deletePost(postId);
    setPosts(posts.filter((p) => p._id !== postId));
    
    navigate('/admin'); 
    
  }

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Failed to load posts</p>;
  
  // 2. Safety check: Handle case where ID is wrong or post doesn't exist
  if (!post) return <p>Post not found.</p>;

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Edit Post</h2>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
              Internal ID
            </label>

            <input
              type="text"
              defaultValue={post?.title}
              className="w-full text-xl font-bold border-b border-gray-100 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
              Content
            </label>

            <textarea
              rows="3"
              defaultValue={post?.content}
              className="w-full border border-gray-100 p-3 rounded-md outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-8 mt-8 border-t">

            <button
              onClick={() => handleDelete(post._id)}
              type="button"
              className="text-sm font-semibold text-red-500 hover:text-red-700"
            >
              Delete Post
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-black text-white text-sm font-bold rounded-md"
            >
              Update Post
            </button>

          </div>

        </form>
      </div>
    </section>
  );
}