import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "../app/Home";
import { AppLayout } from "../app/_layouts/app";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);
