import useUser from "./useUser";

export default async function ({ email, password }: Record<string, string>) {
    interface ResponseLogin {
        message: string
        token: string
    }

    const login = await $fetch<ResponseLogin>("/login", {
        ignoreResponseError: true,
        baseURL: useRuntimeConfig().public.challengeApi,
        method: "POST",

        body: {
            email,
            password
        }
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

    const user = await $fetch<ResponseUser>("/user", {
        baseURL: useRuntimeConfig().public.challengeApi,
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