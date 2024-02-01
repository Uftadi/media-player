import { RouterProvider } from "react-router-dom";
import router from "./utils/router";
import MediaPlayer from "./components/MediaPlayer";
import Playlist from "./components/Playlist";
import { MainPage } from "./pages";
function App() {
	return (
		// <div>
		// 	<RouterProvider router={router} />
		// </div>
		<>
			<MainPage />
		</>
	);
}

export default App;
