import React from "react";
const Playlist = () => {
	return (
		<div
			className="flex flex-col gap-6 items-start justify-start w-80 relative "
			style={{
				boxShadow:
					"var(--_04-shadows-shadow-03-box-shadow, 0px 2px 10px 0px rgba(0, 0, 0, 0.1))",
			}}
		>
			<div
				className="border-double border-inherit border-t border-r-0 border-b-0 border-l-0 w-80 h-0 absolute left-4 top-338 p-10"
				style={{ opacity: 0.1 }}
			></div>
			<div className="text-[#ffffff] text-left font-text-lg-catamaran-medium-font-family text-text-lg-catamaran-medium-font-size leading-text-lg-catamaran-medium-line-height font-text-lg-catamaran-medium-font-weight relative self-stretch flex items-center justify-center">
				Playlist
			</div>
			<div className="flex flex-col  gap-2 items-start justify-start self-stretch shrink-0 relative">
				{/* Repeat this block for each person */}
				<div className="bg-[rgba(255,255,255,0.10)] rounded-[40px] p-3 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
					<img
						className="rounded-[50%] shrink-0 w-10 h-10 relative"
						style={{ objectFit: "cover" }}
						src="profile-picture0.png"
						alt="Profile"
					/>
					<div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
						<div className="text-color-white text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative self-stretch flex items-center justify-start">
							Miracle Bergson
						</div>
						<div className="flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative">
							<svg
								className="shrink-0 w-4 h-4 relative overflow-visible"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.6667 8.66667C13.0203 8.66667 13.3594 8.80714 13.6095 9.05719C13.8595 9.30724 14 9.64638 14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14C12.313 14 11.9739 13.8595 11.7239 13.6095C11.4738 13.3594 11.3333 13.0203 11.3333 12.6667V6.66667C11.3333 5.78261 10.9821 4.93477 10.357 4.30964C9.7319 3.68452 8.88406 3.33333 8 3.33333C7.11595 3.33333 6.2681 3.68452 5.64298 4.30964C5.01786 4.93477 4.66667 5.78261 4.66667 6.66667V12.6667C4.66667 13.0203 4.52619 13.3594 4.27614 13.6095C4.02609 13.8595 3.68696 14 3.33333 14C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10C2 9.64638 2.14048 9.30724 2.39052 9.05719C2.64057 8.80714 2.97971 8.66667 3.33333 8.66667V6.66667C3.33333 6.05383 3.45404 5.447 3.68856 4.88081C3.92308 4.31462 4.26683 3.80018 4.70017 3.36683C5.13351 2.93349 5.64796 2.58975 6.21414 2.35523C6.78033 2.12071 7.38716 2 8 2C8.61284 2 9.21967 2.12071 9.78586 2.35523C10.352 2.58975 10.8665 2.93349 11.2998 3.36683C11.7332 3.80018 12.0769 4.31462 12.3114 4.88081C12.546 5.447 12.6667 6.05383 12.6667 6.66667V8.66667Z"
									fill="#1BF869"
								/>
							</svg>
							<div className="text-color-white text-left font-text-sm-catamaran-reguler-font-family text-text-sm-catamaran-reguler-font-size leading-text-sm-catamaran-reguler-line-height font-text-sm-catamaran-reguler-font-weight relative flex-1 flex items-center justify-start">
								Adele - Easy On Me
							</div>
						</div>
					</div>
				</div>
				{/* End of repeat */}
				<div className="bg-[rgba(255,255,255,0.10)] rounded-[40px] p-3 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
					<img
						className="rounded-[50%] shrink-0 w-10 h-10 relative"
						style={{ objectFit: "cover" }}
						src="profile-picture0.png"
						alt="Profile"
					/>
					<div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
						<div className="text-color-white text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative self-stretch flex items-center justify-start">
							Miracle Bergson
						</div>
						<div className="flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative">
							<svg
								className="shrink-0 w-4 h-4 relative overflow-visible"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.6667 8.66667C13.0203 8.66667 13.3594 8.80714 13.6095 9.05719C13.8595 9.30724 14 9.64638 14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14C12.313 14 11.9739 13.8595 11.7239 13.6095C11.4738 13.3594 11.3333 13.0203 11.3333 12.6667V6.66667C11.3333 5.78261 10.9821 4.93477 10.357 4.30964C9.7319 3.68452 8.88406 3.33333 8 3.33333C7.11595 3.33333 6.2681 3.68452 5.64298 4.30964C5.01786 4.93477 4.66667 5.78261 4.66667 6.66667V12.6667C4.66667 13.0203 4.52619 13.3594 4.27614 13.6095C4.02609 13.8595 3.68696 14 3.33333 14C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10C2 9.64638 2.14048 9.30724 2.39052 9.05719C2.64057 8.80714 2.97971 8.66667 3.33333 8.66667V6.66667C3.33333 6.05383 3.45404 5.447 3.68856 4.88081C3.92308 4.31462 4.26683 3.80018 4.70017 3.36683C5.13351 2.93349 5.64796 2.58975 6.21414 2.35523C6.78033 2.12071 7.38716 2 8 2C8.61284 2 9.21967 2.12071 9.78586 2.35523C10.352 2.58975 10.8665 2.93349 11.2998 3.36683C11.7332 3.80018 12.0769 4.31462 12.3114 4.88081C12.546 5.447 12.6667 6.05383 12.6667 6.66667V8.66667Z"
									fill="#1BF869"
								/>
							</svg>
							<div className="text-color-white text-left font-text-sm-catamaran-reguler-font-family text-text-sm-catamaran-reguler-font-size leading-text-sm-catamaran-reguler-line-height font-text-sm-catamaran-reguler-font-weight relative flex-1 flex items-center justify-start">
								Adele - Easy On Me
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[rgba(255,255,255,0.10)] rounded-[40px] p-3 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
					<img
						className="rounded-[50%] shrink-0 w-10 h-10 relative"
						style={{ objectFit: "cover" }}
						src="profile-picture0.png"
						alt="Profile"
					/>
					<div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
						<div className="text-color-white text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative self-stretch flex items-center justify-start">
							Miracle Bergson
						</div>
						<div className="flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative">
							<svg
								className="shrink-0 w-4 h-4 relative overflow-visible"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.6667 8.66667C13.0203 8.66667 13.3594 8.80714 13.6095 9.05719C13.8595 9.30724 14 9.64638 14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14C12.313 14 11.9739 13.8595 11.7239 13.6095C11.4738 13.3594 11.3333 13.0203 11.3333 12.6667V6.66667C11.3333 5.78261 10.9821 4.93477 10.357 4.30964C9.7319 3.68452 8.88406 3.33333 8 3.33333C7.11595 3.33333 6.2681 3.68452 5.64298 4.30964C5.01786 4.93477 4.66667 5.78261 4.66667 6.66667V12.6667C4.66667 13.0203 4.52619 13.3594 4.27614 13.6095C4.02609 13.8595 3.68696 14 3.33333 14C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10C2 9.64638 2.14048 9.30724 2.39052 9.05719C2.64057 8.80714 2.97971 8.66667 3.33333 8.66667V6.66667C3.33333 6.05383 3.45404 5.447 3.68856 4.88081C3.92308 4.31462 4.26683 3.80018 4.70017 3.36683C5.13351 2.93349 5.64796 2.58975 6.21414 2.35523C6.78033 2.12071 7.38716 2 8 2C8.61284 2 9.21967 2.12071 9.78586 2.35523C10.352 2.58975 10.8665 2.93349 11.2998 3.36683C11.7332 3.80018 12.0769 4.31462 12.3114 4.88081C12.546 5.447 12.6667 6.05383 12.6667 6.66667V8.66667Z"
									fill="#1BF869"
								/>
							</svg>
							<div className="text-color-white text-left font-text-sm-catamaran-reguler-font-family text-text-sm-catamaran-reguler-font-size leading-text-sm-catamaran-reguler-line-height font-text-sm-catamaran-reguler-font-weight relative flex-1 flex items-center justify-start">
								Adele - Easy On Me
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[rgba(255,255,255,0.10)] rounded-[40px] p-3 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
					<img
						className="rounded-[50%] shrink-0 w-10 h-10 relative"
						style={{ objectFit: "cover" }}
						src="profile-picture0.png"
						alt="Profile"
					/>
					<div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
						<div className="text-color-white text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative self-stretch flex items-center justify-start">
							Miracle Bergson
						</div>
						<div className="flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative">
							<svg
								className="shrink-0 w-4 h-4 relative overflow-visible"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.6667 8.66667C13.0203 8.66667 13.3594 8.80714 13.6095 9.05719C13.8595 9.30724 14 9.64638 14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14C12.313 14 11.9739 13.8595 11.7239 13.6095C11.4738 13.3594 11.3333 13.0203 11.3333 12.6667V6.66667C11.3333 5.78261 10.9821 4.93477 10.357 4.30964C9.7319 3.68452 8.88406 3.33333 8 3.33333C7.11595 3.33333 6.2681 3.68452 5.64298 4.30964C5.01786 4.93477 4.66667 5.78261 4.66667 6.66667V12.6667C4.66667 13.0203 4.52619 13.3594 4.27614 13.6095C4.02609 13.8595 3.68696 14 3.33333 14C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10C2 9.64638 2.14048 9.30724 2.39052 9.05719C2.64057 8.80714 2.97971 8.66667 3.33333 8.66667V6.66667C3.33333 6.05383 3.45404 5.447 3.68856 4.88081C3.92308 4.31462 4.26683 3.80018 4.70017 3.36683C5.13351 2.93349 5.64796 2.58975 6.21414 2.35523C6.78033 2.12071 7.38716 2 8 2C8.61284 2 9.21967 2.12071 9.78586 2.35523C10.352 2.58975 10.8665 2.93349 11.2998 3.36683C11.7332 3.80018 12.0769 4.31462 12.3114 4.88081C12.546 5.447 12.6667 6.05383 12.6667 6.66667V8.66667Z"
									fill="#1BF869"
								/>
							</svg>
							<div className="text-color-white text-left font-text-sm-catamaran-reguler-font-family text-text-sm-catamaran-reguler-font-size leading-text-sm-catamaran-reguler-line-height font-text-sm-catamaran-reguler-font-weight relative flex-1 flex items-center justify-start">
								Adele - Easy On Me
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playlist;
