export default function (authorization: boolean = true) {
    let apiFetch = $fetch.create({
        baseURL: useRuntimeConfig().public.challengeApi
    });

    if (authorization) {
        const user = useUser();

        apiFetch = apiFetch.create({
            baseURL: useRuntimeConfig().public.challengeApi,

            headers: {
                Authorization: `Bearer ${user.value?.token}`
            }
        });
    }

    return apiFetch;
}