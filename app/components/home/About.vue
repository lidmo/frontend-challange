<template>
    <section id="about">
        <div class="container">
            <article class="grid">
                <div>
                    <NuxtIcon name="team" />
                    <NuxtIcon name="team" class="opacity" />
                    <h5>
                        Lorem icon
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod tempor.
                    </p>
                </div>
                <div />
                <div />
                <div>
                    <NuxtIcon name="calender" />
                    <h5>
                        Lorem icon
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod tempor.
                    </p>
                </div>
                <div />
            </article>
            <article class="content">
                <Titration
                    subtitle="Sobre nós"
                    title="Lorem ipsum dolor sit amet"
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt blanditiis ullam possimus quaerat soluta eligendi quia eaque ducimus laborum non vitae tempore, labore, nostrum atque voluptatem praesentium aperiam sed fugiat!
                </p>
                <Button>
                    adquira agora
                </Button>
            </article>
        </div>
    </section>
</template>

<style scoped lang="scss">
    section {
        overflow: hidden;
        text-align: center;
        padding: $spacing-20 0;

        @include screen-lg {
            text-align: start;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $spacing-20;

        @include screen-lg {
            flex-direction: row;
            gap: $spacing-10;
        }

        @include screen-xl {
            gap: $spacing-20;
        }
    }

    .grid {
        display: grid;
        width: 100%;
        max-width: $screen-lg;
        gap: $spacing-6;
        text-align: center;

        div {
            padding: $spacing-12 $spacing-6;
            display: flex;
            position: relative;
            flex-direction: column;
            gap: $spacing-4;
            background-size: cover;
            background-position: 70%;
            min-height: 15rem;

            .nuxt-icon {
                color: $color-primary;
                font-size: 4rem;

                &.opacity {
                    position: absolute;
                    right: 0;
                    z-index: 0;
                    color: currentColor;
                    font-size: 7rem;
                    opacity: 0.03;
                }
            }
        }

        div:nth-child(1) {
            background-color: $color-background-primary;
        }

        div:nth-child(2) {
            background-image: url("/images/about/1.jpg");
        }

        div:nth-child(3) {
            display: none;
        }

        div:nth-child(3), div:nth-child(5) {
            background-image: url("/images/about/2.jpg");
        }

        div:nth-child(4) {
            background-color: $color-secondary;
            color: $color-font-invert;
        }

        div:nth-child(3n+1) {
            border-radius: $spacing-2;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)
        }

        h5 {
            font-size: 1.7rem;
        }

        @include screen-sm {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            div:nth-child(3) {
                display: block;
            }

            div:nth-child(5) {
                display: none;
            }

            div:nth-child(2n) {
                transform: translateY($spacing-6);
            }
        }
    }

    .content {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        gap: $spacing-6;

        @include screen-lg {
            position: relative;
            padding: $spacing-10 0;
            padding-left: $spacing-10;
            align-items: baseline;

            &::before {
                content: "";
                position: absolute;
                background: $color-background-secondary;
                width: 100vw;
                inset: 0;
                z-index: -10;
            }
        }

        @include screen-xl {
            padding-left: $spacing-19;
        }
    }
</style>