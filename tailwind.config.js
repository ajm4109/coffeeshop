module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				bgMain: 'url("/mesh-gradient.png")',
			},
		},
	},
	plugins: [],
};
