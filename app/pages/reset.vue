<template>
    <section>
        <h1>
            Recuperar <span>senha</span>
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate
        </p>
        <ClientOnly>
            <template #fallback>
                <FallbackForm />
            </template>

            <Vueform :endpoint="false" :loading="loading" @submit="submit">
                <TextElement name="email" placeholder="seu melhor email" rules="required|email" />

                <Button type="submit" withFull :loading="loading">
                    Recuperar agora
                </Button>
            </Vueform>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "auth"
    });

    useSeoMeta({
        title: "Recuperar senha"
    });

    const loading = ref(false);

    const submit = ({ data }: { data: Record<string, any> }) => {
        loading.value = true;
        console.log(data);
    };
</script>