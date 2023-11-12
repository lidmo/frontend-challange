<template>
    <section id="home">
        <div class="background" />
        <div class="container">
            <article class="content">
                <Titration subtitle="Lorem ipsum is simply dummy text" classSubtitle="subtitle" baseFontSize="3rem">
                    Olá, faça <br> esse desafio!
                </Titration>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi qui exercitationem assumenda repellendus voluptate quos quae dicta
                </p>
                <div class="buttons">
                    <Button>
                        contato
                    </Button>
                    <Button color="white">
                        veja mais
                    </Button>
                </div>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
    .subtitle {
        color: $color-font-invert !important;
        font-size: 12px;
    }
</style>

<style scoped lang="scss">
    $space-top: 5rem;

    section {
        background-color: $color-secondary;
        position: relative;
        min-height: 100svh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: $spacing-20 0;
        padding-top: calc($space-top + $spacing-20);
    }

    p {
        color: $color-font-invert;
    }

    .background {
        position: absolute;
        inset: 0;
        background-image: url("/images/bg-hero.jpg");
        background-size: cover;
        background-attachment: fixed;
        margin-top: $space-top;
        opacity: 0.3;
    }

    article {
        color: $color-font-invert;
        position: relative;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $spacing-6;

        @include screen-md {
            max-width: $screen-sm;
        }

        @include screen-md {
            align-items: start;
            padding-left: $spacing-10;
        }
    }

    .buttons {
        width: 100%;
        display: flex;
        gap: $spacing-4;

        @include screen-xs {
            max-width: 25rem;
        }

        @include screen-md {
            gap: $spacing-6;
        }

        button {
            width: 100%;
        }
    }
</style>