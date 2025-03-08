import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],

	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@res': resolve(__dirname, './src/res'),
			'@components': resolve(__dirname, './src/components'),
			'@constants': resolve(__dirname, './src/constants'),
			'@types': resolve(__dirname, './src/types'),
		},
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},

	css: {
		modules: {
			localsConvention: 'camelCase',
			generateScopedName: '[name]_[local]_[hash:base64:5]',
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: `@import "@/mixins.less";`,
			},
		},
	},
})
