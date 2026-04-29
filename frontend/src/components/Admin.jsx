// import { useEffect } from "react";
// import { getPosts } from "../services/posts";
import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

export default function Admin(){

   const {posts}= usePosts()
    

 
  
    return(
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
    <div>
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Content Manager</h1>
      <p className="text-gray-500 mt-1">Review, edit, and publish your latest news entries.</p>
    </div>
    
    <a href="/create-post" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white text-sm font-bold rounded-md hover:bg-gray-800 transition-all shadow-sm active:scale-95">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      Create New Post
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    <div className="p-6 bg-white border border-gray-100 rounded-lg">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Posts</p>
      <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
    </div>
    <div className="p-6 bg-white border border-gray-100 rounded-lg">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Published</p>
      <p className="text-2xl font-bold text-green-600">{posts.length}</p>
    </div>
    <div className="p-6 bg-white border border-gray-100 rounded-lg">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Drafts</p>
      <p className="text-2xl font-bold text-gray-900">0</p>
    </div>
  </div>

  <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Article Details</th>
            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {
            posts.map( post => (
          <tr className="hover:bg-gray-50/50 transition-colors group" key={post._id}>
            <td className="px-6 py-4">
              <p className="text-sm font-bold text-gray-900 group-hover:text-black">{post.title}</p>
              <p className="text-xs text-gray-500 mt-0.5"> Updated at {post.updatedAt}</p>
            </td>
            <td className="px-6 py-4">
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded">Infrastructure</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-green-600 uppercase tracking-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Published
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <Link to={`/edit-post/${post._id}`} className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 hover:underline">
                Manage
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </Link>
            </td>
          </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  </div>
</main>
    );
}