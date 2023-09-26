import { QueryClient, QueryClientProvider } from "react-query";
import { db } from "../utils/db";
import { ref, get, child } from "firebase/database";

import Home from "./pages/Home";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  // const [teste, setTeste] = useState([Object]);
  const dbRef = ref(db);
  get(child(dbRef, "users"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

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
