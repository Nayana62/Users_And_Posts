import { Route, Routes, Navigate } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import Post from "./pages/Post/Post";

function App() {
  return <div className="app">
   <Routes>
    <Route path="/" element={<Navigate to="users"/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/users/:id" element={<User/>}/>
    <Route path="/posts/:id" element={<Post/>}/>
   </Routes>
  </div>;
}

export default App;
