import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "../src/sass/_index.scss";
import "./App.scss";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Root from "./pages/Root";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Status from "./pages/Status";

interface RouteInterface {
  element: JSX.Element;
  path: string;
}

const routes: Array<RouteInterface> = [
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/status" element={<Status />} />
      <Route element={<Root />}>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
