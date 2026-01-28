import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BlogList from './pages/BlogList'; 
import CreateBlog from './pages/CreateBlog';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        {/* Navbar */}
        <header className="border-b">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link to="/" className="text-xl font-bold">
              My Blog
            </Link>

            <Button asChild>
              <Link to="/create">Create Blog</Link>
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
