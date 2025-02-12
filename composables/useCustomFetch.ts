import { defu } from 'defu'
import type { UseFetchOptions } from '#app'

type UseFetchParams = Parameters<typeof useFetch>;
type UrlType = UseFetchParams[0];

export function useCustomFetch<T>(
	url: UrlType,
	opts: UseFetchOptions<T> = {},
) {
	const config = useAppConfig()

	const defaults: UseFetchOptions<T> = {
		baseURL: config.api.baseURL ?? 'https://dummyjson.com',
	}

	const params = defu(opts, defaults)

	return useFetch(url, params)
}
