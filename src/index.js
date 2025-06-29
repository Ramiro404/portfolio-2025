import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About } from "./About/About";
import { Portfolio } from "./Portfolio/Portfolio";
import { Resume } from "./Resume/Resume";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "portfolio-2025/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
