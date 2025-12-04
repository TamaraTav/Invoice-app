import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Invoices from "./pages/Invoices";
import InvoiceProvider from "./contexts/InvoiceContext";
import Invoice from "./pages/Invoice";
import InvoiceEdit from "./pages/InvoiceEdit";
import ThemeProvider from "./contexts/ThemeContext";
import Container from "./components/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/invoices"} />,
  },
  {
    path: "/invoices",
    element: <Invoices />,
  },
  {
    path: "/invoices/:id",
    element: <Invoice />,
  },
  {
    path: "/invoices/:id/edit",
    element: <InvoiceEdit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <InvoiceProvider>
        <Container />
        <RouterProvider router={router} />
      </InvoiceProvider>
    </ThemeProvider>
  </React.StrictMode>
);
