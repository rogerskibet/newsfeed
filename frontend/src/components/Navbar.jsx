import { Link } from "react-router-dom";
export default function Navbar(){
    return(
    <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
            
            <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold tracking-tight text-gray-900 uppercase">The Dispatch</span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Home</Link>
                <Link to="/admin" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">Admin</Link>
            </div>

            <div className="md:hidden flex items-center">
                <button type="button" className="text-gray-500 hover:text-black focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                </button>
            </div>
            </div>
        </div>

        <div className="md:hidden bg-gray-50 border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Home</Link>
            <Link to="/post" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Post</Link>
            <Link to="/admin" className="block px-3 py-2 text-base font-medium text-black font-semibold">Admin</Link>
            </div>
        </div>
        </nav>
    );
}