/**
 * Get cookie map. Return object of cookies
 * @return {{[p: string]: any}}
 */
export const getCookieMap = () => {
    const cookieList = document.cookie.split('; '),
        cookieToObjEntry = cookie => cookie.split('='),
        cookieEntries = cookieList.map(cookieToObjEntry)

    return Object.fromEntries(cookieEntries)
}
