import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Clients from "./pages/Clients";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Clients/>
            }
        ]
    }
]);

export default router;