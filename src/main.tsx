import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./Products.tsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./About.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Admin } from "./Admin.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Oops! An error occurred.</h1>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" Component={Products} />
            <Route path="/about" Component={About} />
            <Route path="/admin" Component={Admin} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
