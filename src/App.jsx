import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./index.scss";
import { useRoutes } from "react-router-dom";
import routes from "./routes/Routes";
import { CustomLoading } from "./components/customLoading/CustomLoading";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<CustomLoading/>}>
        {useRoutes(routes)}
        <Toaster position="top-center" />
      </Suspense>
    </QueryClientProvider>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});

export default App;
