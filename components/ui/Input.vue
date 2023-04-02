<template>
    <div class="flex flex-col relative mb-4 w-full">
        <label
            :for="name"
            class="text-xs pl-2 mb-1"
            :class="error?.length ? 'text-red-500' : 'text-blue-6'"
            >{{ label }}</label
        >
        <component
            :is="type === 'textarea' ? 'textarea' : 'input'"
            class="border rounded-lg pl-2 py-2 peer outline-none border-blue-6 placeholder:text-gray-400"
            :class="{
                'text-red-500 border-red-500 placeholder:text-red-500':
                    error?.length,
                'appearance-none': type === 'number',
            }"
            :type="type"
            :name="name"
            :id="name"
            :placeholder="placeholder"
            :value="modelValue"
            @input="watchValue" />

        <TransitionGroup>
            <div
                v-for="element of error"
                :key="element.$uid">
                <p class="text-red-500 text-xs pl-2 mb-1">{{
                    element.$message
                }}</p>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        modelValue?: string
        name: string
        type?: 'email' | 'password' | 'text' | 'number' | 'textarea' | 'date'
        placeholder: string
        label: string
        error?: Record<string, any>[]
    }>(),
    {
        type: 'text',
        placeholder: '',
    }
)

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const watchValue = (event: any) => {
    emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss"></style>
