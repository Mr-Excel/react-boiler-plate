import {
    createBrowserRouter,
} from "react-router-dom";

// Layouts
import RootLayout from "@/layouts/root.jsx"
import AppLayout from "@/layouts/app.jsx";

// Pages
import HomePage from "@/pages/index.jsx"
import AboutPage from "@/pages/About.jsx";
import CounterPage from "@/pages/counter.jsx"
import ProfilePage from "@/pages/profile.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                Component: HomePage
            },
            {
                path: "about",
                Component: AboutPage
            },
        ],
    },
    {
        path: "/app",
        element: <AppLayout />,
        children: [
            {
                path: "counter",
                Component: CounterPage
            },
            {
                path: "profile",
                Component: ProfilePage
            },
        ]
    }
]);

export default router
