import type { Handle } from '@sveltejs/kit'
import { isTheme } from '$lib/types'
import { getCookieValue } from '$lib/get-cookie-value'

const getThemeFromCookie = (cookie: string) => {
	const theme = getCookieValue(cookie, 'theme')
	return isTheme(theme) ? theme : null
}

export const handle: Handle = async ({event, resolve}) => {
	const cookie = event.request.headers.get('cookie')
	event.locals.theme = getThemeFromCookie(cookie)

	return resolve(event)
}

export const getSession = ({locals}) => {
	const theme = locals.theme
	const user = locals.idToken
		? {id: locals.idToken.sub, email: locals.idToken.email}
		: null

	return {theme, user}
}