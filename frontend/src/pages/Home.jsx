import PostCard from "../components/PostCard"
import { usePosts } from "../hooks/usePosts";
function Home(){

    const {posts} = usePosts();
    return(
    
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    posts ? posts.map(post => <PostCard key={post._id} post={post}/> ) : <h2>Posts Not Found</h2>
                }
                     
            </div>
       </main>
    
    );
}

export default Home;