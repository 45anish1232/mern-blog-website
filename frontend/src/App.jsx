import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        MERN Blog Website
      </h1>
      <BlogForm />
      <BlogList />
    </div>
  );
}

export default App;
