interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_TWITTER_API_KEY: string;
	readonly VITE_TWITTER_TWEETS_ENDPOINT: string;
	readonly VITE_TWITTER_SEARCH_URL: string;
	readonly VITE_GITHUB_API_URL: string;
	// safe to share
	readonly VITE_FIREBASE_PROJECT_ID: string
	readonly VITE_FIREBASE_AUTH_DOMAIN: string
	readonly VITE_FIREBASE_API_KEY: string
	// NEVER EXPOSE
	readonly VITE_FIREBASE_ADMIN_CLIENT_EMAIL: string
	readonly VITE_FIREBASE_ADMIN_PRIVATE_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}