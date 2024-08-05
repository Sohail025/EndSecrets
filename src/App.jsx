import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Trustees from "./pages/Trustees";
import Settings from "./pages/Settings";
import Feed from "./pages/Feed";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          { path: "", element: <Navigate to={"/trustees"} /> },
          { path: "/trustees", element: <Trustees /> },
          { path: "/feed", element: <Feed /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
