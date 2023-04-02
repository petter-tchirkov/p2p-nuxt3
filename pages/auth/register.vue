<template>
    <div class="min-h-screen flex justify-center items-center bg-blue-2">
        <form class="border-2 border-blue-6 rounded-md p-4 bg-white">
            <h1 class="text-3xl font-bold text-center mb-7 text-blue-8"
                >Регистрация</h1
            >
            <div class="flex gap-4">
                <ui-input
                    name="name"
                    label="Your name"
                    id="name"
                    v-model:model-value="v.firstNameField.$model as any"
                    :error="v.firstNameField.$errors as any"
                    placeholder="John" />
                <ui-input
                    name="name"
                    label="Your middle name"
                    id="middleName"
                    v-model:model-value="v.middleNameField.$model as any"
                    :error="v.middleNameField.$errors as any"
                    placeholder="Johnovich" />
                <ui-input
                    name="name"
                    label="Your last name"
                    id="lastName"
                    v-model:model-value="v.lastNameField.$model as any"
                    :error="v.lastNameField.$errors as any"
                    placeholder="Doe" />
            </div>
            <ui-input
                name="name"
                label="Your email"
                id="email"
                v-model:model-value="v.emailField.$model as any"
                :error="v.emailField.$errors as any"
                placeholder="john.doe@mail.com" />
            <ui-input
                name="name"
                label="Your password"
                id="password"
                type="password"
                v-model:model-value="v.passwordField.$model as any"
                :error="v.passwordField.$errors as any"
                placeholder="********" />
            <div class="flex gap-4">
                <ui-input
                    name="name"
                    label="Your country"
                    id="country"
                    type="text"
                    v-model:model-value="v.countryField.$model as any"
                    :error="v.countryField.$errors as any"
                    placeholder="e.g United Kingdom" />
                <ui-input
                    name="name"
                    label="Your address"
                    id="address"
                    type="text"
                    v-model:model-value="v.addressField.$model as any"
                    :error="v.addressField.$errors as any"
                    placeholder="e.g 10 Downing St, London, UK" />
            </div>
            <div class="flex gap-4">
                <ui-input
                    name="name"
                    label="Your phone number"
                    id="phone"
                    inputmode="tel"
                    type="text"
                    v-model:model-value="v.phoneField.$model as any"
                    :error="v.phoneField.$errors as any"
                    placeholder="XXX-XXX-XX-XX" />
                <ui-input
                    name="name"
                    label="Your passport"
                    id="passport"
                    type="text"
                    v-model:model-value="v.passportField.$model as any"
                    :error="v.passportField.$errors as any"
                    placeholder="Your passport" />
            </div>
            <div class="flex gap-4">
                <ui-dropdown
                    class="mb-4 grow"
                    label="Your timezone" />
                <ui-dropdown
                    class="mb-4 grow"
                    label="Your language" />
            </div>
            <ui-input
                name="name"
                label="Your info"
                id="info"
                type="textarea"
                v-model:model-value="v.infoField.$model as any"
                :error="v.infoField.$errors as any"
                placeholder="Proud to be here" />
        </form>
    </div>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { minLength, helpers, email, numeric } from '@vuelidate/validators'
import { IUser } from '~~/types/user'
definePageMeta({ layout: 'auth' })

const firstNameField = ref('') as Ref<string>
const lastNameField = ref('') as Ref<string>
const middleNameField = ref('') as Ref<string>
const emailField = ref('') as Ref<string>
const passwordField = ref('') as Ref<string>
const countryField = ref('') as Ref<string>
const addressField = ref('') as Ref<string>
const phoneField = ref('') as Ref<string>
const passportField = ref('') as Ref<string>
const timezone = ref('') as Ref<string>
const langField = ref('') as Ref<string>
const infoField = ref('') as Ref<string>

const rules = computed(() => ({
    firstNameField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 3 символа`,
            minLength(3)
        ),
    },
    middleNameField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 3 символа`,
            minLength(3)
        ),
    },
    lastNameField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 3 символа`,
            minLength(3)
        ),
    },
    emailField: {
        email: helpers.withMessage('Введите валидный email адресс', email),
    },
    passwordField: {
        minLength: helpers.withMessage(
            'Пароль должен состоять из минимум 8 символов',
            minLength(8)
        ),
    },
    countryField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 3 символа`,
            minLength(3)
        ),
    },
    addressField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 3 символа`,
            minLength(3)
        ),
    },
    phoneField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 12 символа`,
            minLength(12)
        ),
        numeric: helpers.withMessage(
            'Введите кооректный номер телефона',
            numeric
        ),
    },
    passportField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 8 символа`,
            minLength(8)
        ),
    },
    infoField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 8 символа`,
            minLength(8)
        ),
    },
}))

const v = useVuelidate(rules, {
    firstNameField,
    lastNameField,
    emailField,
    passwordField,
    middleNameField,
    countryField,
    addressField,
    phoneField,
    passportField,
    infoField,
})
</script>

<style scoped></style>
