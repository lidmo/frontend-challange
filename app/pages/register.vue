<template>
    <section>
        <h1>
            <span>fazer</span> registro
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate
        </p>
        <ClientOnly>
            <template #fallback>
                <FallbackForm />
            </template>

            <Vueform :endpoint="false" :disabled="loading" :loading="loading" @submit="submit">
                <Error :description="error" />

                <TextElement
                    name="name"
                    placeholder="seu melhor nome"
                    rules="required"
                />
                <TextElement
                    name="email"
                    input-type="email"
                    autocomplete="email"
                    placeholder="seu melhor email"
                    rules="required|email"
                />
                <TextElement
                    input-type="password"
                    autocomplete="new-password"
                    name="password"
                    placeholder="sua melhor senha"
                    rules="required|confirmed|min:6"
                />
                <TextElement
                    input-type="password"
                    autocomplete="new-password"
                    name="password_confirmation"
                    placeholder="confirme sua senha"
                    rules="required"
                />

                <div class="buttons">
                    <Button type="submit" withFull :loading="loading">
                        Criar agora
                    </Button>
                    <div>
                        <NuxtLink href="/login" class="link">
                            Já tem conta?
                        </NuxtLink>
                    </div>
                </div>
            </Vueform>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "auth"
    });

    useSeoMeta({
        title: "Login"
    });

    const loading = ref(false);
    const error = ref("");

    const submit = async ({ data }: { data: Record<string, any> }) => {
        error.value = "";
        loading.value = true;

        interface ResponseRegister {
            message: string
        }

        await $fetch<ResponseRegister>("/register", {
            baseURL: useRuntimeConfig().public.challengeApi,
            method: "POST",

            body: {
                ...data
            },

            async onResponse ({ response }) {
                if (response.status === 201) {
                    await useLoginUser(data);
                }

                error.value = response._data?.message;
                loading.value = false;
            }
        });
    };
</script>