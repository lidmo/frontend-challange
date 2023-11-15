import type { FetchContext, FetchResponse } from "ofetch";
import type { Get, Task } from "~/types/apiTasks";

export const useTaskStore = defineStore("tasks", () => {
    const user = useUser();

    const { data, refresh } = useAsyncData("tasks", async () => {
        const apiFetch = useChallengeApi();
        const response = await apiFetch<Get>("/tasks");

        return response.data.reverse();
    }, {
        immediate: !!user.value,
        watch: [user]
    });

    const loading = ref(false);
    const error = ref("");

    const onResponse = ({ response }: FetchContext & {response: FetchResponse<any>}) => {
        if (response.ok) {
            refresh();
            error.value = "";
        }
        else {
            error.value = response._data?.message;
        }

        loading.value = false;
    };

    const upsert = async (task: Task) => {
        error.value = "";
        loading.value = true;

        const apiFetch = useChallengeApi();
        let apiFetch2 = apiFetch.create({
            method: "POST",

            body: {
                ...task
            },

            onResponse
        });

        let request = "/tasks";

        if (task.id) {
            request = `${request}/${task.id}`;
            apiFetch2 = apiFetch2.create({
                method: "PUT"
            });
        }

        await apiFetch2(request);
    };

    const remove = async (id: Task["id"]) => {
        error.value = "";
        loading.value = true;

        const apiFetch = useChallengeApi();
        await apiFetch(`/tasks/${id}`, {
            method: "DELETE",
            onResponse
        });
    };

    return {
        data,
        loading,
        error,
        upsert,
        remove
    };
});