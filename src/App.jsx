import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ImpactPage from "./pages/ImpactPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import "./App2.css";
import "./mobile.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/blogs" element={<BlogsPage />}></Route>
        <Route path="/blogs/:id" element={<BlogPage />}></Route>
        <Route path="/about-us" element={<AboutPage />}></Route>
        <Route path="/impact" element={<ImpactPage />}></Route>
        <Route path="/contact-us" element={<ContactPage />}></Route>
        <Route path="/donate" element={<DonatePage />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
