import { Link } from "react-router-dom";
import BlogDate from "../components/BlogDate";
export default function PostCard({post}){
 
    return(
    
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden group hover:border-gray-200 hover:shadow-sm transition-all duration-300">
      <div className="overflow-hidden bg-gray-100">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

  <div className="p-5 lg:p-6">
    
    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <span className="px-2.5 py-0.5 rounded-full font-medium bg-gray-100 text-gray-800 tracking-wider uppercase">{post.category ? post.category : 'General'}</span>
         <BlogDate date={post.createdAt} /> 
    </div>

    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2.5 hover:text-black">     
       {post.title}  
    </h3>

    <p className="text-base text-gray-600 leading-relaxed line-clamp-3 mb-5">
      {post.content}
    </p>

    <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100 relative z-10">
      <div className="flex items-center gap-3">
        <img src="https://api.dicebear.com/8.x/initials/png?seed=JD" alt="Author Avatar" className="w-9 h-9 rounded-full bg-gray-100" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
      </Link>
    </div>
  </div>
</div>
    );
}