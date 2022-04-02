import { useCallback, useState } from "react"

export const useHttp = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<boolean | null>(false)
	const request = useCallback(async (url, method = "get", body = null, mode = 'no-cors', headers = {}) => {

		setLoading(true)
		try {
			if (body) {
				body = JSON.stringify(body)
			}

			const responce = await fetch(url, { method, body, headers, mode: 'no-cors' });
			let data = await responce.json();
			data = JSON.parse(data)

			if (!responce.ok) {
				throw new Error(data.message || 'Что-то пошло не так')
			}

			setLoading(false)

			return data
		} catch (e: any) {
			setLoading(false)
			setError(e.message)
			throw e
		}
	}, [])

	const clearError = useCallback(() => setError(null), [])
	return { loading, request, error, clearError }
}