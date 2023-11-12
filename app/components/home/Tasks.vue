<template>
    <section id="tasks">
        <div class="container">
            <Titration
                subtitle="implemente uma lista de tarefas"
                title="list of tasks"
            />
            <nav>
                <ul>
                    <li v-for="(value, index) in filters" :key="index">
                        <Button size="sm" color="transparent">
                            {{ capitalize(value) }}
                        </Button>
                    </li>
                </ul>
                <Button size="md">
                    Adicionar task
                </Button>
            </nav>
            <ul class="grid">
                <li v-for="(value, index) in 6" :key="index">
                    <div class="icon">
                        <Icon name="material-symbols:graphic-eq-rounded" />
                    </div>
                    <h4>
                        Projetar uma lista
                    </h4>
                    <p>
                        implemente uma lista de tarefas
                    </p>
                    <div>
                        <Button size="md">
                            Remover task
                        </Button>
                        <Button color="secondary" size="md">
                            Editar task
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { capitalize } from "vue";

    const filters = [
        "todas as listas",
        "editadas",
        "para fazer",
        "removidas"
    ];
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
            padding: $spacing-6;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

            div.icon {
                margin: 0 auto;
                width: fit-content;
                padding: $spacing-2;
                color: $color-font-primary;
                font-size: 3.5rem;
                border-radius: 9999px;
                background-color: $color-primary;
                margin-bottom: $spacing-4;
            }

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

            @include screen-sm {
                text-align: start;
                padding: $spacing-8;

                div.icon {
                    margin-left: 0;
                }
            }
        }
    }
</style>