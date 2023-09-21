import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { db } from "../utils/db";
import { onValue, ref } from "firebase/database";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  const { isLoading, error, data } = useQuery("repoData", () => {
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    );
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div>sla</div>
    </QueryClientProvider>
  );
}

export default App;
