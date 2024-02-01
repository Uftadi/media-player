import React from "react";

function Sidebar() {
	return (
		<div
			className="w-60 relative"
			style={{
				boxShadow:
					"var(--_04-shadows-shadow-03-box-shadow, 0px 2px 10px 0px rgba(0, 0, 0, 0.1))",
			}}
		>
			<div
				className="bg-[rgba(38,38,38,0.50)] absolute right-0 left-0 bottom-0 top-0"
				style={{
					backdropFilter:
						"var(--_03-blur-background-02-backdrop-filter, blur(40.77px))",
				}}
			></div>
			<div
				className="border-solid border-color-white border-t border-r-0 border-b-0 border-l-0 w-52 h-0 absolute left-4 top-338"
				style={{ opacity: 0.1 }}
			></div>

			<div className="flex flex-col gap-6 items-start justify-start absolute left-4 top-[110px]">
				<div className="flex flex-row gap-3 items-end justify-start shrink-0 relative">
					<svg
						className="shrink-0 w-6 h-6 relative overflow-visible"
						style={{ objectFit: "cover" }}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 5.561L5 11.161V19H10V15H14V19H19V11.642C19.0001 11.492 18.9664 11.344 18.9015 11.2088C18.8366 11.0736 18.7421 10.9547 18.625 10.861L12 5.561ZM12 3L19.874 9.3C20.2251 9.58088 20.5086 9.93709 20.7035 10.3423C20.8984 10.7475 20.9997 11.1914 21 11.641V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V11.161C3.00004 10.8612 3.06746 10.5653 3.19728 10.2951C3.3271 10.0249 3.51599 9.78735 3.75 9.6L12 3Z"
							fill="white"
						/>
						<path
							d="M12 5.561L5 11.161V19H10V15H14V19H19V11.642C19.0001 11.492 18.9664 11.344 18.9015 11.2088C18.8366 11.0736 18.7421 10.9547 18.625 10.861L12 5.561ZM12 3L19.874 9.3C20.2251 9.58088 20.5086 9.93709 20.7035 10.3423C20.8984 10.7475 20.9998 11.1914 21 11.641V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V11.161C3.00004 10.8612 3.06746 10.5653 3.19728 10.2951C3.3271 10.0249 3.51599 9.78735 3.75 9.6L12 3Z"
							fill="white"
						/>
						<path
							d="M12 5.561L5 11.161V19H10V15H14V19H19V11.642C19.0001 11.492 18.9664 11.344 18.9015 11.2088C18.8366 11.0736 18.7421 10.9547 18.625 10.861L12 5.561Z"
							fill="white"
						/>
						<rect
							x="9.98386"
							y="15.0002"
							width="4.01274"
							height="3.9983"
							fill="#1ED760"
						/>
					</svg>
					<div className="text-[#ffffff] text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative flex-1 flex items-end justify-start">
						Home
					</div>
				</div>
				<div className="flex flex-row gap-3 items-end justify-start shrink-0 relative">
					<div className="shrink-0 w-6 h-6 relative overflow-hidden">
						<svg
							className="h-[auto] absolute right-[10.42%] left-[10.42%] w-[79.17%] bottom-[12.5%] top-[12.5%] h-[75%] overflow-visible"
							style={{ objectFit: "cover" }}
							width="20"
							height="18"
							viewBox="0 0 20 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19.5 8.5V4C19.5 3.73478 19.3946 3.48043 19.2071 3.29289C19.0196 3.10536 18.7652 3 18.5 3H10L7.5 0H1.5C1.23478 0 0.98043 0.105357 0.792893 0.292893C0.605357 0.48043 0.5 0.734784 0.5 1V17C0.5 17.2652 0.605357 17.5196 0.792893 17.7071C0.98043 17.8946 1.23478 18 1.5 18H9"
								stroke="#ACACAC"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M18 11L16 11.4845V16.25"
								stroke="#ACACAC"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14 18C15.1046 18 16 17.1046 16 16C16 14.8954 15.1046 14 14 14C12.8954 14 12 14.8954 12 16C12 17.1046 12.8954 18 14 18Z"
								stroke="#ACACAC"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className="text-[#acacac] text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative flex-1 flex items-end justify-start">
						Your Library
					</div>
				</div>
				<div className="flex flex-row gap-3 items-end justify-start shrink-0 relative">
					<div className="shrink-0 w-6 h-6 relative overflow-hidden">
						<svg
							className="h-[auto] absolute right-[12.5%] left-[12.5%] w-[75%] bottom-[12.5%] top-[12.5%] h-[75%] overflow-visible"
							style={{ objectFit: "cover" }}
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 15V9C3.55683e-08 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9V15"
								stroke="#ACACAC"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H15C14.4696 18 13.9609 17.7893 13.5858 17.4142C13.2107 17.0391 13 16.5304 13 16V13C13 12.4696 13.2107 11.9609 13.5858 11.5858C13.9609 11.2107 14.4696 11 15 11H18V16ZM0 16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H3C3.53043 18 4.03914 17.7893 4.41421 17.4142C4.78929 17.0391 5 16.5304 5 16V13C5 12.4696 4.78929 11.9609 4.41421 11.5858C4.03914 11.2107 3.53043 11 3 11H0V16Z"
								stroke="#ACACAC"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className="text-[#acacac] text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative flex-1 flex items-end justify-start">
						Liked Songs
					</div>
				</div>
			</div>
			<div
				className="rounded-3xl p-2 flex flex-row gap-3 items-center justify-center w-52 absolute left-4 top-[270px]"
				style={{
					background:
						"linear-gradient(180deg, rgba(30, 215, 96, 1) 0%, rgba(20, 97, 47, 1) 100%)",
				}}
			>
				<div className="shrink-0 w-7 h-7 relative overflow-hidden">
					<svg
						className="h-[auto] absolute right-[8.33%] left-[8.33%] w-[83.33%] bottom-[8.33%] top-[8.33%] h-[83.33%] overflow-visible"
						style={{ objectFit: "cover" }}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 23.6667C5.5565 23.6667 0.333332 18.4435 0.333332 12C0.333332 5.55651 5.5565 0.333344 12 0.333344C18.4435 0.333344 23.6667 5.55651 23.6667 12"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.66666 12V7.95868L13.1667 9.97935L16.6667 12L13.1667 14.0207L9.66666 16.0413V12Z"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M19.6125 16.6667V22.5"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M22.5 19.5542H16.6667"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className="text-[#ffffff] text-left font-text-base-catamaran-medium-font-family text-text-base-catamaran-medium-font-size leading-text-base-catamaran-medium-line-height font-text-base-catamaran-medium-font-weight relative flex items-center justify-start">
					Create Playlist
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
