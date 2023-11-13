<template>
    <section>
        <h1>
            Recuperar <span>senha</span>
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate
        </p>
        <form>
            <input placeholder="seu melhor email">
            <Button type="submit">
                Recuperar agora
            </Button>
        </form>
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "auth"
    });

    useSeoMeta({
        title: "Recuperar senha"
    });
</script>