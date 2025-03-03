import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{ path: "/", element: <Home></Home> },
			{ path: "/about", element: <h1>About</h1> },
			{ path: "/contact", element: <h1>Contact</h1> },
			// Add more routes as needed...
		],
	},
]);

export default router;
