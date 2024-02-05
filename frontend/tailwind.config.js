/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"text-base-catamaran-medium-font-family":
					"Catamaran-SemiBold, sans-serif",
				"text-base-catamaran-reguler-font-family":
					"Catamaran-Regular, sans-serif",
				"text-lg-catamaran-medium-font-family":
					"Catamaran-SemiBold, sans-serif",
				"text-xs-catamaran-reguler-font-family":
					"Catamaran-Regular, sans-serif",
			},
			fontSize: {
				"text-base-catamaran-medium-font-size": "16px",
				"text-base-catamaran-reguler-font-size": "16px",
				"text-lg-catamaran-medium-font-size": "20px",
				"text-xs-catamaran-reguler-font-size": "12px",
			},
			fontWeight: {
				"text-base-catamaran-medium-font-weight": "600",
				"text-base-catamaran-reguler-font-weight": "400",
				"text-lg-catamaran-medium-font-weight": "600",
				"text-xs-catamaran-reguler-font-weight": "400",
			},
			lineHeight: {
				"text-base-catamaran-medium-line-height": "140%",
				"text-base-catamaran-reguler-line-height": "140%",
				"text-lg-catamaran-medium-line-height": "140%",
				"text-xs-catamaran-reguler-line-height": "normal",
			},
			borderRadius: {},
			colors: {
				"color-primary": "#1bf869",
				"color-black": "#1a1a1a",
				"color-white": "#ffffff",
			},
			spacing: {},
			width: {},
			minWidth: {},
			maxWidth: {},
			height: {},
			minHeight: {},
			maxHeight: {},
		},
	},
	plugins: [],
};
