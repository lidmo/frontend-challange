<template>
    <header :class="{'open': open, 'top': isTop && !open}">
        <nav class="container">
            <div>
                <div class="fixed">
                    <NuxtLink href="/">
                        <VSvg name="logo" preRender currentcolor />
                    </NuxtLink>
                    <button
                        @click="toggle()"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
                <ul class="links scrollbar">
                    <li v-for="(value, index) in links" :key="index">
                        <NuxtLink :href="value.link" class="link" :class="{'active': value.link === linkActive}">
                            {{ capitalize(value.name) }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { capitalize } from "vue";

    const open = ref(false);
    const isTop = ref(true);

    const toggle = (action?: boolean) => {
        open.value = action ?? !open.value;

        useBodyOverflow(open.value);
    };

    const links = [
        { name: "home", link: "#home" },
        { name: "about", link: "#about" },
        { name: "portfolio", link: "#portfolio" },
        { name: "tasks", link: "#tasks" },
        { name: "contact", link: "#contact" }
    ];

    const linkActive = ref("");

    onMounted(() => {
        useRouter().afterEach(() => {
            toggle(false);
        });

        const checkTop = () => {
            if (!open.value) {
                isTop.value = window.scrollY === 0;
            }
        };

        checkTop();

        window.addEventListener("scroll", useDebounce(checkTop, 100));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    linkActive.value = `#${entry.target.id}`;
                }
            });
        }, {
            threshold: 0.5
        });

        links.forEach(({ link }) => {
            observer.observe(document.querySelector(link)!);
        });
    });
</script>

<style scoped lang="scss">
    header {
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 5rem;
        transition-property: margin, height;
        transition-duration: .5s;
        transition-timing-function: ease-in-out;

        &.open {
            height: 100dvh;
        }

        &.top {
            margin-top: $spacing-5;
        }

        @include screen-md {
            &.top {
                height: 5.5rem;
            }
        }
    }

    nav {
        height: 100%;
        width: 100%;
        padding-top: $spacing-4;
        transition: padding .5s ease-in-out;

        .open & {
            padding: 0;
            max-width: none;
            margin: 0;
        }

        > div {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: $spacing-3;
            border-radius: $spacing-3;
            background: $color-background-primary;
            border: 1px solid rgba($color-font-primary, 0.1);
            transition: padding .5s ease-in-out;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

            @include screen-md {
                padding-left: $spacing-12;
                padding-right: $spacing-12;
                flex-direction: row;
                justify-content: space-between;
            }

            .open & {
                border-radius: 0;
                padding: $spacing-4;
            }
        }
    }

    .fixed {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        transition-property: padding, margin, border;
        transition-duration: .5s;
        border-color: rgba($color-font-primary, 0);
        transition-timing-function: ease-in-out;

        .open & {
            padding-bottom: $spacing-4;
            margin-bottom: $spacing-4;
            border-bottom: 1px solid;
            border-color: rgba($color-font-primary, 0.2);
        }

        @include screen-md {
            width: fit-content;
        }

        > a {
            color: $color-font-secondary;
            max-width: 11rem;

            ._SVG {
                display: flex;
            }
        }

        > button {
            display: flex;
            height: 2rem;
            width: 2rem;
            flex-direction: column;
            justify-content: space-between;
            background: transparent;
            border: none;

            @include screen-md {
                display: none;
            }

            .open & {
                color: #dc2626;
            }

            span {
                display: block;
                height: 2px;
                width: 100%;
                background-color: currentColor;
                transition: all 0.3s ease-out;

                &:first-child {
                    .open & {
                        transform: translateY(1rem) rotate(45deg);
                    }
                }

                &:nth-child(2) {
                    .open & {
                        opacity: 0;
                    }
                }

                &:last-child {
                    .open & {
                        transform: translateY(-1rem) rotate(-45deg);
                    }
                }
            }
        }
    }

    .links {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: auto;
        gap: $spacing-6;

        @include screen-md {
            flex-grow: 0;
            flex-direction: row;
            overflow: visible;
        }
    }
</style>