import useUser from "./useUser";

export default async function ({ email, password }: Record<string, string>) {
    interface ResponseLogin {
        message: string
        token: string
    }

    const apiFetch = useChallengeApi(false);

    const login = await apiFetch<ResponseLogin>("/login", {
        method: "POST",

        body: {
            email,
            password
        },

        ignoreResponseError: true
    });

    if (!login?.token) {
        return login?.message;
    }

    interface ResponseUser {
        data: {
            email: string
            id: number
            name: string
        }
    }

    const user = await apiFetch<ResponseUser>("/user", {
        method: "GET",

        headers: {
            Authorization: `Bearer ${login.token}`
        }
    });

    if (user) {
        useUser().value = {
            ...user.data,
            token: login?.token
        };

        await navigateTo("/");
    }
}