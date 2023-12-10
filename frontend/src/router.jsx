import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products/>
            }
        ]
    }
]);

export default router;