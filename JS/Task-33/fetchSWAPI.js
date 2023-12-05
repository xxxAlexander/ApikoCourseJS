export async function fetchSWAPI(resource, throwError = false) {
    const rootUrl = 'https://swapi.py4e.com/api/'

    const apiUrl = resource.startsWith('http') ? resource : rootUrl + resource

    try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error(`${resource}  fetchSWAPI error `, error)

        if (throwError) {
            throw error
        }

        return undefined
    }
}
