import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import MenuProvider from "./providers/MenuProvider.jsx";
import router from "./routes/Router.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MenuProvider>
          <RouterProvider router={router} />
        </MenuProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
