import React from "react";
import Dropdown from "./Dropdown";
import Logo from "../assets/icon/Logo";
function Navbar() {
	return (
		<div className="bg-[#18181a] pt-6 pr-4 pb-6 pl-4 flex flex-row gap-4 items-center justify-center relative ">
			<Logo />
			<div className="bg-[#2a2a2a] rounded-3xl pt-3 pr-6 pb-3 pl-6 ml-80 flex flex-row gap-3 items-center justify-center grow  relative ">
				<svg
					className="shrink-0 w-4 h-4 relative overflow-visible"
					style={{ objectFit: "cover" }}
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.8833 9.93267L14.47 13.5193C14.5961 13.6455 14.6668 13.8166 14.6668 13.9949C14.6667 14.1732 14.5958 14.3443 14.4697 14.4703C14.3435 14.5964 14.1724 14.6672 13.9941 14.6671C13.8157 14.6671 13.6447 14.5962 13.5187 14.47L9.93199 10.8833C8.8598 11.7138 7.51151 12.1046 6.16141 11.9762C4.8113 11.8479 3.56081 11.21 2.66431 10.1924C1.76781 9.1748 1.29265 7.85388 1.33549 6.49836C1.37833 5.14285 1.93595 3.85457 2.89492 2.8956C3.85389 1.93663 5.14217 1.37901 6.49768 1.33617C7.8532 1.29333 9.17412 1.76849 10.1917 2.66499C11.2093 3.56149 11.8472 4.81198 11.9756 6.16208C12.1039 7.51219 11.7131 8.86047 10.8827 9.93267H10.8833ZM6.66665 10.6667C7.72752 10.6667 8.74494 10.2452 9.49508 9.49509C10.2452 8.74495 10.6667 7.72753 10.6667 6.66667C10.6667 5.6058 10.2452 4.58839 9.49508 3.83824C8.74494 3.08809 7.72752 2.66667 6.66665 2.66667C5.60579 2.66667 4.58837 3.08809 3.83823 3.83824C3.08808 4.58839 2.66665 5.6058 2.66665 6.66667C2.66665 7.72753 3.08808 8.74495 3.83823 9.49509C4.58837 10.2452 5.60579 10.6667 6.66665 10.6667Z"
						fill="#6B6B6B"
					/>
				</svg>
				<input
					type="text"
					placeholder="Search"
					className="bg-[#2a2a2a] text-slate-50 outline-none text-left font-text-base-catamaran-reguler-font-family text-text-base-catamaran-reguler-font-size leading-text-base-catamaran-reguler-line-height font-text-base-catamaran-reguler-font-weight relative flex-1 flex items-center justify-start"
				/>
			</div>
			<Dropdown />
		</div>
	);
}

export default Navbar;
