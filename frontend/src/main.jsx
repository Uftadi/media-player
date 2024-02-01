import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/UserContexProvider.jsx";
// import { MediaContextProvider } from "./context/mediaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <MediaContextProvider>
	<UserContextProvider>
		<App />
	</UserContextProvider>
	// </MediaContextProvider>
);
