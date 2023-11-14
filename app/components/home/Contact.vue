<template>
    <section id="contact">
        <div class="container">
            <article class="content">
                <Titration
                    subtitle="entre em contato agora"
                    title="Lorem ipsum dolor sit amet consectetur."
                    classSubtitle="subtitle"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex consectetur, blanditiis nihil labore laboriosam eum, magni ducimus deleniti et explicabo harum obcaecati eius, voluptate eaque quo iusto sequi placeat?
                </p>
                <Button>
                    whatsapp
                </Button>
            </article>
            <article class="form">
                <h1>
                    Email contact
                </h1>

                <ClientOnly>
                    <template #fallback>
                        <FallbackForm />
                    </template>

                    <Vueform :endpoint="false" :loading="loading" @submit="submit">
                        <TextElement name="nome" placeholder="seu melhor nome" rules="required" />
                        <TextElement name="email" placeholder="seu melhor email" rules="required|email" />

                        <Button type="submit" :loading="loading">
                            Enviar agora
                        </Button>
                    </Vueform>
                </ClientOnly>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
    const loading = ref(false);

    const submit = ({ data }: { data: Record<string, any> }) => {
        loading.value = true;
        console.log(data);
    };
</script>

<style scoped lang="scss">
    .detail {
        content: "";
        position: absolute;
        top: auto;
        left: 0;
        bottom: 0;
        right: 0;
        height: 30%;

        @include screen-lg {
            top: 0;
            left: auto;
            right: 0;
            width: 30%;
            height: 100%;
        }
    }

    section {
        background: $color-secondary;
        padding: $spacing-20 0 !important;
        color: $color-font-invert;
        text-align: center;
        position: relative;

        @include screen-lg {
            text-align: start;
        }

        &::before {
            @extend .detail;
            background: $color-primary;
        }

        &::after {
            @extend .detail;
            background-image: url("/images/lines.png");
            background-position: bottom left;
            background-size: 140%;
            opacity: 0.3;
        }
    }

    .container {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: $spacing-12;

        @include screen-lg {
            flex-direction: row;
        gap: $spacing-10;
        }
    }

    .content {
        div {
            margin-bottom: $spacing-4;
        }

        p {
            color: $color-background-secondary;
            margin-bottom: $spacing-12;
            font-size: 0.875rem;
            opacity: 0.7;
        }

        :deep(.subtitle) {
            color: $color-primary !important;
            font-weight: 500;
        }
    }

    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: $spacing-4;
        padding: $spacing-4;
        border-radius: $spacing-3;
        background: $color-background-primary;
        color: $color-font-primary;
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

        h1 {
            font-size: 2.5rem;
            font-weight: 800;
        }

        button {
            margin: 0 auto;
            width: 100%;
            grid-column: span 12/span 12;
        }

        @include screen-xs {
            max-width: $screen-xs;
            padding: $spacing-8;
            margin: 0 auto;

            button {
                width: fit-content;
            }
        }

        @include screen-lg {
            min-width: $screen-xs;

            button {
                margin: 0;
            }
        }
    }
</style>