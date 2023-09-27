import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./pages/Home";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  // const [teste, setTeste] = useState([Object]);
  // function writeUserData(userId: number, name: string) {
  //   set(ref(db, "users/" + userId), {
  //     username: name,
  //   });
  // }
  // writeUserData(2, "teste33");
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
