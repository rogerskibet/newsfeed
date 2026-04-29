import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import AdminDashboard from "./pages/AdminDashboard";
import PostForm from "./components/PostForm";
import EditPage from "./pages/EditPage";

 function App() {
 
  return (
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/posts/:_id" element={<PostDetails />}/>
      <Route path="/admin" element={<AdminDashboard />}/>
      <Route path="/create-post" element={<PostForm />}/>
      <Route path="/edit-post/:id" element={<EditPage />}/>
     </Routes>
  )
}

export default App
