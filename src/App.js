import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <p>piyush</p>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
