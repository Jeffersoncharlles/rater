import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "../app/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
