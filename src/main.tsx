import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./Products.tsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Oops! An error occurred.</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Products} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
