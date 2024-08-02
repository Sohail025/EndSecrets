import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      { path: "", element: <Navigate to="/login" /> },
      { path: "/login", element: <SignInForm /> },
      { path: "/signup", element: <SignUpForm /> },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
