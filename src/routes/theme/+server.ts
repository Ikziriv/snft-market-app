throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import type {RequestHandler} from '@sveltejs/kit'
import { isTheme } from '$lib/types'

// PUT /theme
export const put: RequestHandler = async ({request}) => {
	const theme = await request.text()

	if (!isTheme(theme)) {
		return {
			status: 400,
			body: `not a valid theme value: ${theme}`,
		}
	}

	return {
		headers: {
			'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`,
		},
	}
}

// DELETE /theme
export const del: RequestHandler = async () => ({
	status: 204,
	headers: {
		'Set-Cookie': `theme= ; Max-Age=0; SameSite=Strict; HttpOnly; Path=/`,
	},
})