import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/about-page";
import TaskPage from "./pages/task-page";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex justify-center px-6 mt-30">
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;