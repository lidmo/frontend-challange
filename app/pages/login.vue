<template>
    <section>
        <h1>
            <span>Olá,</span> <br> faça login
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate
        </p>
        <ClientOnly>
            <template #fallback>
                <FallbackForm />
            </template>

            <Vueform :endpoint="false" :loading="loading" @submit="submit">
                <Error :description="error" />

                <TextElement
                    name="email"
                    input-type="email"
                    autocomplete="email"
                    placeholder="seu melhor email"
                    rules="required|email"
                />
                <TextElement
                    input-type="password"
                    autocomplete="password"
                    name="password"
                    placeholder="sua melhor senha"
                    rules="required|min:6"
                />

                <div class="buttons">
                    <Button type="submit" withFull :loading="loading">
                        Enviar agora
                    </Button>
                    <div>
                        <NuxtLink href="/register" class="link">
                            Ainda não tem conta?
                        </NuxtLink>
                        <NuxtLink href="/reset" class="link">
                            Esqueceu a senha?
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

        const login = await useLoginUser(data);

        if (login) {
            error.value = login;
        }

        loading.value = false;
    };
</script>