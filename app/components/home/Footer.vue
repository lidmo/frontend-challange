<template>
    <footer>
        <div class="container">
            <article class="about">
                <VSvg name="logo" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi reiciendis adipisci, quam eveniet porro accusamus nisi. Iste, consequuntur mollitia. Nesciunt quas eius
                </p>
                <ul>
                    <li v-for="(value, index) in socialMedia" :key="index">
                        <Button :href="value.link" rounded="full" size="sm">
                            <Icon :name="value.icon" />
                        </Button>
                    </li>
                </ul>
            </article>
            <article class="links">
                <h3>
                    Links úteis
                </h3>
                <ul>
                    <li v-for="(value, index) in UsefulLinks" :key="index">
                        <NuxtLink :href="value.link" class="link">
                            + {{ capitalize(value.name) }}
                        </NuxtLink>
                    </li>
                </ul>
            </article>
            <article class="contacts">
                <h3>
                    Contact
                </h3>
                <ul>
                    <li v-for="(value, index) in contacts" :key="index">
                        <NuxtLink :href="value.link">
                            <NuxtIcon :name="value.icon" />
                            <div>
                                <h4>
                                    {{ capitalize(value.name) }}
                                </h4>
                                <span>
                                    {{ value.contact }}
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </article>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { capitalize } from "vue";

    const socialMedia = [
        { icon: "bi:youtube", link: "/" },
        { icon: "bi:instagram", link: "/" },
        { icon: "ri:facebook-fill", link: "/" },
        { icon: "ri:linkedin-fill", link: "/" }
    ];

    const UsefulLinks = [
        { name: "home", link: "/" },
        { name: "about", link: "/" },
        { name: "dashboard", link: "/" },
        { name: "contact", link: "/" }
    ];

    const contacts = [
        {
            icon: "phone-call",
            name: "Phone Number",
            contact: "+55 86 0000-0000",
            link: "/"
        },
        {
            icon: "mail",
            name: "email",
            contact: "example@gmail.com",
            link: "/"
        },
        {
            icon: "maps-and-flags",
            name: "location",
            contact: "location, 123, center of Brasil",
            link: "/"
        }
    ];
</script>

<style scoped lang="scss">
    footer {
        background: $color-background-secondary;
        padding: $spacing-20 0;
        text-align: center;

        @include screen-lg {
            text-align: left;
        }
    }

    .container {
        max-width: $screen-lg;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: $spacing-20;

        @include screen-lg {
            flex-direction: row;
            align-items: start;
        }
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: $spacing-4;
    }

    .about {
        max-width: $screen-xs;

        ._SVG {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: $spacing-4;
            max-width: 12rem;

            @include screen-lg {
                margin-left: 0;
                margin-right: 0;
            }
        }

        p {
            margin-bottom: $spacing-8;
        }

        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: $spacing-4;

            @include screen-lg {
                justify-content: flex-start;
            }
        }

        a {
            font-size: 1.3rem;
        }
    }

    .links {
        ul {
            display: flex;
            flex-direction: column;
            gap: $spacing-4;
        }

        a {
            color: $color-font-secondary;
        }
    }

    .contacts {
        ul {
            display: flex;
            flex-direction: column;
            gap: $spacing-4;
            text-align: left;
        }

        li:not(:last-child) {
            border-bottom: 1px solid rgba($color-primary, .2);
            padding-bottom: $spacing-4;
        }

        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: $spacing-4;
            border-radius: $spacing-4;
            transition: all .3s ease-in-out;

            .nuxt-icon {
                font-size: 2rem;
                color: $color-primary;
            }

            h4 {
                font-size: 1.1rem;
            }

            span {
                color: $color-font-secondary;
                font-size: 0.875rem;
                transition: all .3s ease-in-out;
            }

            &:hover {
                color: $color-primary;

                span {
                    color: $color-primary;
                }
            }
        }
    }
</style>