const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  mode: 'jit',
  purge: [
		'../../Private/Fusion/**/*.fusion',
		'../Frontend/*.js',
	],
  darkMode: false, // or 'media' or 'class'
  theme: {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		black: colors.black,
		white: colors.white,
		'grey': {
			lightest: '#f9f9f9',
			light: '#eee',
		},
		// https://www.tailwindshades.com/#color=007478&step-up=16&step-down=5&name=primary
		'primary': {
			lightest: '#BFFDFF',
			light: '#00C3CA',
			DEFAULT: '#007478',
			dark: '#004345',
			darkest: '#001112'
		},
		// https://www.tailwindshades.com/#color=EF7121&step-up=9&step-down=13&name=second
		'secondary': {
			lightest: '#FBDFCC',
			light: '#F5A877',
			DEFAULT: '#EF7121',
			dark: '#823809',
			darkest: '#060300'
		}
	},
	// screens: {
	// 	"sm": "360px",
	// 	"md": "768px",
	// 	"lg": "1024px"
	// },
    extend: {
		spacing: {
			'header': '5rem',
			'wrap': '64rem',
			'wrap/2': '32rem'
		},
		screens: {
			'-2xl': {'max': '1535px'},
			// => @media (max-width: 1535px) { ... }
	  
			'-xl': {'max': '1279px'},
			// => @media (max-width: 1279px) { ... }
	  
			'-lg': {'max': '1023px'},
			// => @media (max-width: 1023px) { ... }
	  
			'-md': {'max': '767px'},
			// => @media (max-width: 767px) { ... }
	  
			'-sm': {'max': '639px'},
			// => @media (max-width: 639px) { ... }
		}
	},
  },
//   variants: {
//     extend: {},
//   },
  plugins: [],
}



/*
create Frontend/index.css

cd ~/ANeosMhs/DistributionPackages/MHS.Site/Resources/Public/Tailwind

npm run dev



or

npm run --prefix ~/ANeosMhs/DistributionPackages/MHS.Site/Resources/Public/Tailwind build
*/
