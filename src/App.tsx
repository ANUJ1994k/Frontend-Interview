import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* Optional nav */}
        <nav className="p-4 border-b flex justify-between gap-8">
  <Link to="/" className="text-blue-500 hover:underline">Home</Link>
  <Link to="/create" className="text-blue-500 hover:underline">Create Blog</Link>
</nav>


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
