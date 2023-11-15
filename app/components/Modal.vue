<template>
    <Transition
        name="backdrop"
        appear
    >
        <div
            v-show="props.open"
            ref="backdrop"
            class="backdrop modal"
            @click="closed"
        >
            <Transition
                name="content"
                appear
            >
                <div v-show="props.open" class="content">
                    <Button color="danger" size="sm" rounded="full" @click="emit('close')">
                        <Icon name="tabler:x" size="1.3rem" />
                    </Button>
                    <slot />
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const props = defineProps<{
        open: boolean
    }>();

    const emit = defineEmits([
        "close"
    ]);

    watch(() => props.open, () => {
        useBodyOverflow(props.open);
    });

    const backdrop = ref<HTMLSelectElement>();

    const closed = (event: Event) => {
        if (backdrop.value === event.target) {
            emit("close");
        }
    };
</script>

<style scoped lang="scss">
    .backdrop {
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        padding-top: $spacing-10;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        transition: all .3s ease-in-out;

        &.backdrop-enter-from,
        &.backdrop-leave-to {
            background-color: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0);
        }

        @include screen-sm {
            padding-bottom: $spacing-10;
        }
    }

    .content {
        width: 100%;
        max-width: $screen-sm;
        position: relative;
        background-color: $color-secondary;
        color: $color-font-invert;
        padding: $spacing-6 $spacing-4 $spacing-4 $spacing-4;
        border-top-left-radius: $spacing-2;
        border-top-right-radius: $spacing-2;
        margin: auto 0 0 0;
        transition: all .3s ease-in-out;

        &.content-enter-from,
        &.content-leave-to {
            transform: translateY(50%);
            opacity: 0;
        }

        @include screen-sm {
            padding: $spacing-6;
            border-radius: $spacing-2;
            margin: auto;
        }

        button {
            position: absolute;
            top: 0;
            right: $spacing-4;
            transform: translateY(-50%);

            @include screen-md {
                right: 0;
                transform: translate(50%, -50%);
            }
        }
    }
</style>