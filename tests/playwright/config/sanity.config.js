// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	timeout: 90000,
	globalTimeout: 900000,
	reporter: 'list',
	testDir: '../sanity',
	globalSetup: require.resolve( './global-setup' ),
	retries: 1,
	use: {
		headless: true,
		storageState: './tests/playwright/config/storageState.json',
		baseURL: process.env.URL || 'http://localhost:8888/',
		viewport: { width: 1920, height: 1080 },
		video: 'on',
		trace: 'on-first-retry',
	},
};

module.exports = config;
