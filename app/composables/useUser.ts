export default function () {
    interface User {
        email: string
        id: number
        name: string
        token: string
    }

    return useCookie<User>("user", {
        maxAge: 7 * 24 * 60 * 60,
        secure: true
    });
}