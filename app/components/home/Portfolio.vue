<template>
    <section id="portfolio">
        <article class="container">
            <Titration
                subtitle="Portfolio"
                title="Lorem ipsum dolor"
            />
        </article>

        <Splide :options="splideOptions" :hasTrack="false">
            <SplideTrack>
                <SplideSlide v-for="id in 3" :key="id">
                    <img :src="`/images/carrousel/${id}.jpg`" :alt="`Portfolio imagem ${id}`" loading="lazy">
                </SplideSlide>
            </SplideTrack>

            <div class="splide__arrows container">
                <Button rounded="none" class="splide__arrow--prev">
                    <Icon name="tabler:arrow-right" />
                </Button>
                <Button rounded="none" class="splide__arrow--next">
                    <Icon name="tabler:arrow-right" />
                </Button>
            </div>

            <Button color="secondary" size="sm" class="splide__toggle">
                <span class="splide__toggle__play">
                    <Icon name="ion:play" />
                </span>
                <span class="splide__toggle__pause">
                    <Icon name="ph:pause-fill" />
                </span>
            </Button>
        </Splide>

        <article class="container">
            <div class="card">
                <div>
                    <h2>
                        Lorem ipsum dolor
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cum sint sunt at nostrum labore
                    </p>
                </div>
                <div class="pricing">
                    <strong>
                        R$345
                    </strong>
                    <span>
                        /hora
                    </span>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup lang="ts">
    import { Splide, SplideSlide, SplideTrack, type Options } from "@splidejs/vue-splide";
    import "@splidejs/vue-splide/css";

    const splideOptions = {
        rewind: true,
        type: "loop",
        fixedWidth: "70%",
        focus: "center",
        gap: "2rem",
        pagination: false,
        mediaQuery: "min",
        autoplay: true,
        interval: 2000,

        breakpoints: {
            640: {
                fixedWidth: "50%"
            }
        }
    } satisfies Options;
</script>

<style scoped lang="scss">
    section {
        padding-bottom: $spacing-20;
        text-align: center;

        @include screen-lg {
            padding-top: $spacing-20;
        }
    }

    .splide__slide {
        margin: $spacing-12 0;
        overflow: hidden;
        aspect-ratio: 1 / 1;
        transition: all .4s ease-in-out;

        @include screen-lg {
            aspect-ratio: 2 / 1;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all .4s ease-in-out;
        }

        &.is-active {
            transform: translateY(-$spacing-4);
        }

        &.is-active img {
            transform: scale(1.1);
        }
    }

    .splide__arrows {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;

        button {
            padding: $spacing-4;
            font-size: 1.5rem;
            color: $color-secondary;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            pointer-events: all;
        }
    }

    .splide__toggle {
        position: absolute;
        right: $spacing-4;
        top: 0;
        padding: $spacing-2;

        @include screen-lg {
            top: auto;
            bottom: 0;
        }
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $spacing-6;
        text-align: start;
        padding: $spacing-6;
        margin: auto;
        margin-top: -7rem;
        max-width: $screen-sm;
        background-color: $color-background-primary;
        text-align: center;
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

        @include screen-sm {
            padding: $spacing-9;
        }

        @include screen-lg {
            flex-direction: row;
            text-align: start;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: $spacing-4;
        }

        p {
            font-size: 0.875rem;
        }

        .pricing {
            color: $color-primary;
            display: flex;
            flex-direction: row;
            align-items: flex-end;

            strong {
                font-size: 2rem;
                line-height: 1;
            }
        }
    }
</style>