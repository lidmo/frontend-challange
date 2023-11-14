<template>
    <main>
        <section>
            <article>
                <slot />
                <Button color="secondary" size="sm" class="back" @click="back">
                    <Icon name="material-symbols:settings-backup-restore-rounded" size="1rem" />
                    Voltar página
                </Button>
            </article>
        </section>
    </main>
</template>

<script setup lang="ts">
    const back = () => {
        useRouter().back();
    };
</script>

<style scoped lang="scss">
    main {
        background: $color-background-secondary;
        background-image: url("/images/lines.png");
        background-size: 100%;
        background-position: bottom left;
        min-height: 100svh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        @include screen-lg {
            text-align: start;
        }
    }

    section {
        width: 100%;
        min-height: 100svh;
        max-width: $screen-xs;
        background: $color-background-primary;
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        display: flex;
        align-items: stretch;
        flex-direction: column;

        @include screen-xs {
            margin: $spacing-6 0;
            min-height: auto;
        }

        @include screen-lg {
            max-width: $screen-xl;
            margin: $spacing-12;
            flex-direction: row-reverse;
        }

        &::before {
            content: "";
            height: 15rem;
            width: 100%;
            background-image: url("/images/bg-login.jpg");
            background-size: cover;
            background-position: center;

            @include screen-lg {
                height: auto;
            }
        }
    }

    article {
        width: 100%;
        padding: $spacing-4;

        @include screen-xs {
            padding: $spacing-6;
        }

        @include screen-lg {
            max-width: $screen-xs;
            padding: $spacing-12;
            margin: auto 0;
        }

        :deep(h1) {
            line-height: 1.2;
            font-size: calc(2rem + 2vw);
            font-weight: 700;
            margin-bottom: $spacing-4;

            span {
                color: $color-primary;
            }
        }

        :deep(p) {
            margin-bottom: $spacing-4;
        }

        :deep(form) {
            display: flex;
            flex-direction: column;
            gap: $spacing-4;
        }

        :deep(.buttons),
        :deep(button) {
            grid-column: span 12/span 12;
        }

        :deep(.buttons) {
            grid-column: span 12/span 12;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: $spacing-4;

            @include screen-lg {
                flex-direction: row;
            }

            div {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: $spacing-4;
                color: rgb(56, 119, 255);

                @include screen-lg {
                    white-space: nowrap;
                    gap: $spacing-2;
                    text-align: end;
                }
            }
        }
    }

    .back {
        margin-top: $spacing-4;

        @include screen-lg {
            margin-top: 0;
            position: fixed;
            right: $spacing-6;
            bottom: $spacing-6;
        }
    }
</style>