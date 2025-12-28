import { createBrowserRouter } from "react-router";
import App from "./App";
import DashboardTabs from "./components/DashboardTabs";
import PortfolioGrid from "./components/PortfolioGrid";
import Transactions from "./pages/Transactions";
import AccountInfo from "./components/account_info/AccountInfo";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                Component: Transactions,
                children: [
                    { index: true, Component: DashboardTabs },
                    { path: "portfolio", Component: PortfolioGrid },
                    { path: "accountInfo", Component: AccountInfo }
                ]
            }
        ]
    }
])