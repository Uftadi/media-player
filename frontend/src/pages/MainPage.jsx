import cookie from "js-cookie"; // cookie parser
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import MediaPlayer from "../components/MediaPlayer";
import Playlist from "../components/Playlist";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useContext, useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
	const { backendApiUrl } = useContext(UserContext);
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleIfUserHasToken = () => {
		let JWTinfocookie = cookie.get("JWTinfo");

		if (!JWTinfocookie) return;

		JWTinfocookie = JWTinfocookie.replace("j:", "");
		const cookieValueObj = JSON.parse(JWTinfocookie);

		const expirationInMs = new Date(cookieValueObj.expires) - new Date();

		if (expirationInMs <= 0) return;
		return JWTinfocookie;
	};

	useEffect(() => {
		const token = handleIfUserHasToken();

		if (token) {
			axios
				.post(`${backendApiUrl}/isAuth`, { token }, { withCredentials: true })
				.then((res) => {
					if (res.data.isAuth) {
						setIsAuthenticated(true);
					} else {
						navigate("/");
					}
				})
				.catch((error) => console.error("Error in /isAuth:", error));
		} else {
			navigate("/");
		}
	}, [isAuthenticated]);

	const logoutHandler = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post(
				`${backendApiUrl}/logout`,
				{},
				{ withCredentials: true }
			);
			console.log(res.data.msg);
			if (res.data.msg === "successfully logged out") {
				navigate("/");
			}
			console.log("successfully logged out", res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		isAuthenticated && (
			<>
				<Navbar />
				<div className="flex justify-around bg-[#232326] h-[700px] relative pt-8">
					<div className="">
						<MediaPlayer />
					</div>
					<div className="">
						<Playlist />
					</div>
				</div>
				<Footer />
			</>
		)
	);
};

export default MainPage;
