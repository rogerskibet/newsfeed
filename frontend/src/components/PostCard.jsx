import { Link } from "react-router-dom";
export default function PostCard({post}){
 
    return(
    
        <div className="bg-white border border-gray-100 rounded-lg overflow-hidden group hover:border-gray-200 hover:shadow-sm transition-all duration-300">
  <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100">
    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
    </div>
  </div>

  <div className="p-5 lg:p-6">
    
    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <span className="px-2.5 py-0.5 rounded-full font-medium bg-gray-100 text-gray-800 tracking-wider uppercase">{post.category ? post.category : 'General'}</span>
        <time datetime="2024-03-22">{post.createdAt}</time>
    </div>

    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2.5 hover:text-black">     
       {post.title}  
    </h3>

    <p className="text-base text-gray-600 leading-relaxed line-clamp-3 mb-5">
      {post.content}
    </p>

    <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100 relative z-10">
      <div className="flex items-center gap-3">
        <img src="https://api.dicebear.com/8.x/initials/svg?seed=JD" alt="Author Avatar" className="w-9 h-9 rounded-full bg-gray-100" />
        <div className="text-sm">
            <p className="font-medium text-gray-900">Jane Doe</p>
            <p className="text-gray-500">Senior Correspondent</p>
        </div>
      </div>
        <Link 
        to={`/posts/${post._id}`} >
      <span className="text-sm font-semibold text-gray-900 flex items-center gap-1.5 group-hover:gap-2 transition-all">
        Read Article
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
      </Link>
    </div>
  </div>
</div>
    );
}