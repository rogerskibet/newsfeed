import { useState } from "react";
import {createPost} from "../services/posts";

export default function PostForm(){

   const[form,setForm] = useState({
    title: "",
    content: ""
   });


   function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
   }
// -- SUBMIT HANDLER --
  async function handleSubmit(e) {

    e.preventDefault();

    await createPost(form);

    alert("Post Created");

    setForm({
      title:"",
      content:""
    });
    
  }






    return(
        <main className="max-w-3xl mx-auto px-4 py-12">
  <div className="mb-10">
    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create New Post</h1>
    <p className="text-gray-500 mt-2">Draft your latest story for the global audience.</p>
  </div>

  <form action="#" method="POST" className="space-y-8" onSubmit={handleSubmit}>
    <div>
      <label for="title" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Article Title</label>
      <input type="text" name="title" id="title" placeholder="e.g. The Future of Renewable Energy in Kenya" onChange={handleChange} value={form.title}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="category" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Category</label>
        <select id="category" name="category" 
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black outline-none appearance-none transition-all text-gray-700">
          <option>Politics</option>
          <option>Technology</option>
          <option>Logistics</option>
          <option>Environment</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Cover Image</label>
        <label className="flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-200 border-dashed rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
          <span className="text-sm text-gray-500 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload Photo
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>

    <div>
      <label for="content" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Article Body</label>
      <textarea id="content" name="content" rows="12" placeholder="Write your story here..."  value={form.content} onChange={handleChange}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400"></textarea>
    </div>

    <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
      <button type="button" className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-black transition-colors">
        Save Draft
      </button>
      <button type="submit" className="px-8 py-2.5 text-sm font-bold text-white bg-black rounded-md hover:bg-gray-800 transition-shadow shadow-sm active:scale-95">
        Publish Post
      </button>
    </div>
  </form>
</main>
    );
}