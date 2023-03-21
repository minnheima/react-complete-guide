import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route
//       path="/"
//       element={<HomePage />}
//     />
//     <Route
//       path="/products"
//       element={<ProductPage />}
//     />
//   </Route>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/products", element: <ProductPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
