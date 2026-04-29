import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { deletePost, updatePost } from "../services/posts";
import { useState } from "react";

export default function EditPost() {
  const { posts, loading, error, setPosts } = usePosts();
  const [updating, setUpdating] = useState(false);
  const [success, setSuccess] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p._id === id);

  // -- UPDATE HANDLER --
  async function handleUpdate(e) {
    e.preventDefault();
    setUpdating(true);

    const formData = new FormData(e.target);

    const updatedData = {
      title: formData.get("title"),
      content: formData.get("content"),
    };

    try {
      const updatedPost = await updatePost(id, updatedData);

      setPosts((prevPosts) =>
        prevPosts.map((p) =>
          p._id === id ? updatedPost : p
        )
      );

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

    } catch (err) {
      console.error("Failed to update:", err);
      alert("Error updating Post");
    } finally {
      setUpdating(false);
    }
  }

  // -- DELETE HANDLER --
  async function handleDelete(postId) {
    try {
      await deletePost(postId);

      setPosts((prev) =>
        prev.filter((p) => p._id !== postId)
      );

      navigate("/admin");

    } catch (err) {
      console.error("Failed to delete:", err);
      alert("Error deleting Post");
    }
  }

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Failed to load posts</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">

      {success && (
        <p className="text-green-600 text-sm mb-4">
          Post updated successfully ✓
        </p>
      )}

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Edit Post
        </h2>

        <form onSubmit={handleUpdate} className="space-y-6">

          {/* TITLE */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
              Title
            </label>

            <input
              type="text"
              name="title"
              defaultValue={post?.title}
              className="w-full text-xl font-bold border-b border-gray-100 py-2 outline-none"
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
              Content
            </label>

            <textarea
              rows="3"
              name="content"
              defaultValue={post?.content}
              className="w-full border border-gray-100 p-3 rounded-md outline-none resize-none"
            />
          </div>

          {/* ACTIONS */}
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
              disabled={updating}
              className="px-6 py-2 bg-black text-white text-sm font-bold rounded-md"
            >
              {updating ? "Updating..." : "Update Post"}
            </button>

          </div>

        </form>
      </div>
    </section>
  );
}