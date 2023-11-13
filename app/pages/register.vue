<template>
    <section>
        <h1>
            <span>fazer</span> registro
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate
        </p>
        <form>
            <input placeholder="seu melhor nome">
            <input placeholder="seu melhor email">
            <div class="buttons">
                <Button type="submit">
                    Enviar agora
                </Button>
                <div>
                    <NuxtLink href="/login" class="link">
                        Já tem conta?
                    </NuxtLink>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "auth"
    });

    useSeoMeta({
        title: "Login"
    });
</script>