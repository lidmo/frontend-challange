<template>
    <Transition name="error">
        <div v-show="props.description">
            {{ props.description }}
            <slot />
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const props = defineProps<{
        description: string
    }>();
</script>

<style scoped lang="scss">
    $color: #ff0000;

    div {
        width: 100%;
        grid-column: span 12/span 12;
        color: $color;
        background: rgba($color, 0.3);
        padding: $spacing-4;
        border-radius: $spacing-2;
        border: 1px solid $color;
    }

    .error-enter-active,
    .error-leave-active {
        transition: all .5s ease-in-out
    }

    .error-enter-from {
        transform: scale(0.8);
        margin-bottom: -2rem;
        opacity: 0;
    }

    .error-leave-to {
        transform: scale(0);
        margin-bottom: -2rem;
        opacity: 0;
    }
</style>