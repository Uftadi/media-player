import cookie from "js-cookie"; // cookie parser
import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContexProvider";
import { useNavigate } from "react-router-dom";
import MediaPlayer from "../components/MediaPlayer";
import Playlist from "../components/Playlist";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainPage = () => {
	// const { hasToken } = useContext(UserContext);
	// const navigate = useNavigate();

	// const handleIfUserHasToken = () => {
	// 	console.log("handleIfUserHasToken aufgerufen");
	// 	// folgendes würde undefines zurückgeben, da das JWT Cookie "httpOnly" ist
	// 	// const JWTcookie = cookie.get("JWT");

	// 	// 1. Wert von JWTinfo Cookie auslesen und den darin enthaltenen JSON-String parsen
	// 	let JWTinfocookie = cookie.get("JWTinfo");

	// 	console.log("JWTinfo cookie", JWTinfocookie); // => j:{"expires":"2024-01-25T09:26:05.444Z","email":"Anna@dci.org"}
	// 	if (!JWTinfocookie) return;

	// 	// ":j" aus dem String in JWTinfo cookie entfernen und String parsen
	// 	JWTinfocookie = JWTinfocookie.replace("j:", "");
	// 	const cookieValueObj = JSON.parse(JWTinfocookie);
	// 	console.log("cookieValueObj", cookieValueObj);

	// 	// 2. Ist das Token schon abgelaufen
	// 	// bzw. wie lange ist es noch gültig (zeitlich betrachtet)?
	// 	const expirationInMs = new Date(cookieValueObj.expires) - new Date();
	// 	console.log("JWT läuft ab in", expirationInMs / 1000, "Sekunden");

	// 	if (expirationInMs <= 0) return;
	// };

	return (
		<>
			<Navbar />
			<div className="flex justify-around bg-[#232326] h-[700px] relative pt-8">
				{/* <div className="">
					<Sidebar />
				</div> */}
				<div className="">
					<MediaPlayer />
				</div>
				<div className="">
					<Playlist />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MainPage;
