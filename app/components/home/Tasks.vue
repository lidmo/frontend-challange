<template>
    <section id="tasks">
        <div class="container">
            <Titration
                subtitle="implemente uma lista de tarefas"
                title="list of tasks"
            />

            <template v-if="user">
                <nav>
                    <ul>
                        <li v-for="(value, index) in filters" :key="index">
                            <Button size="sm" color="transparent">
                                {{ capitalize(value) }}
                            </Button>
                        </li>
                    </ul>
                    <Button size="md" @click="modalUpsert()">
                        Adicionar task
                    </Button>
                </nav>

                <TransitionGroup
                    v-if="tasks?.length"
                    name="tasks"
                    class="grid"
                    tag="ul"
                >
                    <li v-for="(value) in tasks" :key="value.id">
                        <div class="icon">
                            <Icon name="carbon:task-star" />
                        </div>
                        <h4>
                            {{ value.title }}
                        </h4>
                        <p>
                            {{ value.description }}
                        </p>
                        {{ value.scheduled_at }}
                        <div>
                            <Button size="sm" @click="modalRemove(value)">
                                Remover task
                            </Button>
                            <Button color="secondary" size="sm" @click="modalUpsert(value)">
                                Editar task
                            </Button>
                        </div>
                    </li>
                </TransitionGroup>

                <div v-else class="no-tasks">
                    <Icon name="streamline:strategy-tasks" size="5rem" />
                    <h1>
                        Sem tasks no mameto
                    </h1>
                    <Button size="md" @click="modalUpsert()">
                        Adicionar task
                    </Button>
                </div>
            </template>
            <template v-else>
                <div class="no-user container">
                    <Icon name="tabler:user-question" size="5rem" />
                    <h1>
                        Ops, você não esta logado
                    </h1>
                    <Button href="/login" color="secondary">
                        Fazer login
                    </Button>
                </div>
            </template>
        </div>

        <LazyModal :open="modal.open" @close="modalToggle()">
            <Error :description="error" />

            <div v-if="modal.type === 'remove'" class="remove-card">
                <h1>
                    Deseja remover a tarefa {{ modal.task.title }}?
                </h1>

                <div>
                    <Button color="danger" :loading="loading" @click="remove">
                        Sim remover
                    </Button>
                    <Button :loading="loading" @click="modalToggle()">
                        manter tarefa
                    </Button>
                </div>
            </div>

            <ClientOnly v-else>
                <Vueform
                    :endpoint="false"
                    :loading="loading"
                    :modelValue="modal.task"
                    sync
                    @submit="upsert"
                >
                    <div class="header">
                        <div class="icon">
                            <Icon name="carbon:task-star" />
                        </div>
                        <div class="infos">
                            <h1>
                                {{ modal.task.id ? "Editar" : "Adicione uma" }} tarefa
                            </h1>
                            <SelectElement
                                name="type"
                                size="sm"
                                placeholder="Tipo de tarefa"
                                :items="['prioridade', 'para hoje']"
                                :native="false"
                            />
                        </div>
                    </div>

                    <TextElement name="title" placeholder="titulo da lista" rules="required" />
                    <TextElement name="description" placeholder="descrição da lista" rules="required" />

                    <Button type="submit" :loading="loading">
                        Enviar agora
                    </Button>
                </Vueform>
            </ClientOnly>
        </LazyModal>
    </section>
</template>

<script setup lang="ts">
    import { capitalize } from "vue";
    import type { Task } from "~/types/apiTasks";

    const user = useUser();
    const taskStore = useTaskStore();
    const { data: tasks, error, loading } = storeToRefs(taskStore);

    const filters = [
        "todas as listas",
        "editadas",
        "para fazer",
        "removidas"
    ];

    const modal = ref({
        open: false,
        type: "",
        task: {
            id: 0,
            title: "",
            description: "",
            scheduled_at: ""
        }
    });

    const modalToggle = (type?: "upsert" | "remove") => {
        modal.value.open = !modal.value.open;

        if (type) {
            modal.value.type = type;
        }
    };

    const modalTask = (task?: Task) => {
        // Truque para remover rastreamento de proxy
        modal.value.task = JSON.parse(JSON.stringify(task));
    };

    const modalUpsert = (task?: Task) => {
        if (task) {
            modalTask(task);
        }
        else {
            modal.value.task.id = 0;
            modal.value.task.title = "";
            modal.value.task.description = "";
            modal.value.task.scheduled_at = "";
        }

        modalToggle("upsert");
    };

    const upsert = async () => {
        await taskStore.upsert(modal.value.task);
        modalToggle();
    };

    const modalRemove = (task: Task) => {
        modalTask(task);
        modalToggle("remove");
    };

    const remove = async () => {
        await taskStore.remove(modal.value.task.id);
        modalToggle();
    };
</script>

<style scoped lang="scss">
    section {
        background: $color-background-secondary;
        padding: $spacing-20 0;
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: $spacing-6;
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: $spacing-4;
        width: 100%;
        background: $color-background-primary;
        padding: $spacing-4;

        @include screen-md {
            flex-direction: row;
            padding: $spacing-3 $spacing-8;
        }

        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: $spacing-2;

            button {
                letter-spacing: normal;
                font-size: 1rem !important;
            }
        }
    }

    .grid {
        display: grid;
        gap: $spacing-8;

        @include screen-sm {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @include screen-lg {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        @include screen-xl {
            gap: $spacing-8 $spacing-14;
        }

        li {
            background: $color-background-primary;
            border-radius: $spacing-2;
            padding: $spacing-4;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

            h4 {
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: $spacing-1;
            }

            p {
                margin-bottom: $spacing-6;
            }

            div {
                display: flex;
                flex-direction: row;
                gap: $spacing-4;

                button {
                    width: 100%;
                }
            }

            div.icon {
                margin: 0 auto;
                margin-bottom: $spacing-4;
            }

            @include screen-sm {
                text-align: start;
                padding: $spacing-8;

                div.icon {
                    margin-left: 0;
                }
            }
        }
    }

    .tasks-move,
    .tasks-enter-active,
    .tasks-leave-active {
        transition: all .5s ease;
    }

    .tasks-enter-from,
    .tasks-leave-to {
        opacity: 0;
        transform: translateX(-$spacing-10);
    }

    .tasks-leave-active {
        position: absolute;
    }

    div.icon {
        display: flex;
        width: fit-content;
        padding: $spacing-2;
        color: $color-font-primary;
        font-size: 3.5rem;
        border-radius: 9999px;
        background-color: $color-primary;
    }

    .no-user {
        max-width: $screen-xs;
        background: $color-primary;
        color: $color-font-invert;
        padding: $spacing-4;
        border-radius: $spacing-2;
        align-items: center;
    }

    .no-tasks {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $spacing-6;
        color: $color-font-secondary;
    }

    .modal {
        @include screen-sm {
                text-align: start;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: $spacing-4;

            @include screen-sm {
                margin-bottom: $spacing-1;
            }
        }

        button {
            grid-column: span 12/span 12;
            width: 100%;

            @include screen-sm {
                width: fit-content;
            }
        }

        :deep(.vf-input-group),
        :deep(.vf-input-field) {
            --vf-bg-input: rgba(0, 0, 0, 0.5);
            --vf-color-input: #{$color-font-invert};
            --vf-color-input-focus: #{$color-font-invert};
            color: currentColor;
        }
    }

    .header {
        width: 100%;
        grid-column: span 12/span 12;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $spacing-4;

        @include screen-sm {
            flex-direction: row;
            gap: $spacing-3;
        }

        .infos {
            width: 100%;
        }

        .vf-element-layout {
            width: 100%;

            @include screen-sm {
                max-width: 12rem;
            }
        }
    }

    .remove-card {
        div {
            display: flex;
            flex-direction: column;
            gap: $spacing-6;
            margin-top: $spacing-6;

            @include screen-xs {
                flex-direction: row;
            }

            button {
                width: 100%;

                @include screen-sm {
                    width: fit-content;
                }
            }
        }
    }
</style>