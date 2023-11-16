<template>
    <div>
        <span :class="props.classSubtitle">
            {{ props.subtitle }}
        </span>
        <h1>
            {{ props.title }}
            <slot />
        </h1>
    </div>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
        subtitle: string
        title?: string
        classSubtitle?: string
        baseFontSize?: "1rem" | "2rem" | "3rem"
    }>(), {
        title: undefined,
        classSubtitle: undefined,
        baseFontSize: "2rem"
    });
</script>

<style scoped lang="scss">
    span {
        text-transform: uppercase;
        letter-spacing: .2rem;
        display: block;
        margin-bottom: $spacing-3;
        color: $color-font-secondary;
    }

    h1 {
        line-height: 1.2;
        font-size: calc(v-bind(baseFontSize) + 2vw);
        font-weight: 700;
    }
</style>