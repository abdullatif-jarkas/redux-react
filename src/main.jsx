import "./index.css";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home/Home.jsx";
import store from "./redux/store/index.js";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
],
{
  basename: "/redux-react",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);