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
                <TextElement name="nome" placeholder="seu melhor nome" rules="required" />
                <TextElement name="email" placeholder="seu melhor email" rules="required|email" />

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

    const submit = ({ data }: { data: Record<string, any> }) => {
        loading.value = true;
        console.log(data);
    };
</script>