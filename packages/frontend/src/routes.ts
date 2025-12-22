import {createBrowserRouter} from "react-router";
import App from "./App";
import Transactions from "./pages/Transactions";
import Portfolio from "./pages/Portfolio";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true, Component: Transactions},
            {path: "portfolio", Component: Portfolio}
        ]
    }
])