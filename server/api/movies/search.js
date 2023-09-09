export default defineEventHandler((event)=>{
    const {query,page} = getQuery(event)
    const config = useRuntimeConfig(event)
    return $fetch(`${ config.apiBaseUrl }/search/movie?query=${ query }&page=${page}&api_key=${ config.apiKey }`)

})