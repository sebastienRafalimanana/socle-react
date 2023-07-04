/**
 * fake user api = https://dummyjson.com/
 */

const constants = {
    api: {
        baseURL:
            import.meta.env.VITE_API_BASE_URL ??
            'https://dummyjson.com/',
        locationBaseURL: import.meta.env.VITE_LOCATION_BASE_URL ?? '*',
    },
}

export default constants
