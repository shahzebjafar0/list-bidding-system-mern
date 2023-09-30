import { Toaster } from "react-hot-toast";
import UserRoutes from "@/routes";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <UserRoutes />
    </>
  );
}

export default App;
