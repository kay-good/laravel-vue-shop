<template>
    <div class="text-2xl font-bold p-2 text-center">Оформление заказа</div>
    <div class="container mx-auto">
        <div v-if="cartStore.totalCount > 0">
            <form @submit.prevent="submit" class="flex flex-wrap">
                <div class="w-1/3 p-4">
                    <input id="surname" type="text" v-model="surname" :class="errors.surname && 'border-rose-600'"
                        class="border p-2 w-full h-11" placeholder="Фамилия">
                    <p v-if="errors.surname" class="text-sm text-rose-600">{{ errors.surname }}</p>
                </div>
                <div class="w-1/3 p-4">
                    <input id="name" type="text" v-model="name" :class="errors.name && 'border-rose-600'"
                        class="border p-2 w-full h-11" placeholder="Имя">
                    <p v-if="errors.name" class="text-sm text-rose-600">{{ errors.name }}</p>
                </div>
                <div class="w-1/3 p-4">
                    <input id="patronymic" type="text" v-model="patronymic" :class="errors.patronymic && 'border-rose-600'"
                        class="border p-2 w-full h-11" placeholder="Отчество">
                    <p v-if="errors.patronymic" class="text-sm text-rose-600">{{ errors.patronymic }}</p>
                </div>
                <div class="w-1/3 p-4">
                    <input type="text" v-model="phoneNumber" @input="formatPhoneInput"
                        :class="errors.phoneNumber && 'border-rose-600'" class="border p-2 w-full h-11"
                        placeholder="+7 (___) ___-____">
                    <p v-if="errors.phoneNumber" class="text-sm text-rose-600">{{ errors.phoneNumber }}</p>
                </div>
                <div class="w-1/3 p-4">
                    <input id="address" type="text" v-model="address" :class="errors.address && 'border-rose-600'"
                        class="border p-2 w-full h-11" placeholder="Адрес доставки">
                    <p v-if="errors.address" class="text-sm text-rose-600">{{ errors.address }}</p>
                </div>
                <div class="w-1/3 p-4">
                    <textarea id="comment" type="text" v-model="comment" :class="errors.comment && 'border-rose-600'"
                        class="border p-2 w-full h-11" placeholder="Комментарий к заказу" rows="1"></textarea>
                    <p v-if="errors.comment" class="text-sm text-rose-600">{{ errors.comment }}</p>
                </div>
                <button type="submit"
                    class="bg-amber-100 hover:bg-amber-200 rounded-md p-4 w-1/3 mt-4 mx-auto">Submit</button>
                <div v-if="messageSent" class="p-4 font-bold text-center w-full mt-4">Заказ принят</div>
            </form>
        </div>
        <div v-else>
            <div class="text-xl font-bold p-2 text-center">Your cart is empty</div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../Stores/CartStore'
import axios from 'axios';

const cartStore = useCartStore()

const name = ref('')
const surname = ref('')
const patronymic = ref('')
const address = ref('')
const phoneNumber = ref('')
const comment = ref('')
const messageSent = ref(false)
const errors = ref({})

function submit() {
    validateForm()
    if (Object.keys(errors.value).length === 0) {
        axios.post("/orders", {
            name : name.value,
            surname : surname.value,
            patronymic : patronymic.value,
            address : address.value,
            phoneNumber : phoneNumber.value,
            comment : comment.value,
            orders : JSON.stringify(cartStore.cart),
        }).then(res => {
            messageSent.value = true
        }).catch((error) => {
            const errorsObject = Object.entries(error.response.data.errors).reduce((acc, rec) => {
                return {...acc, [rec[0]]: rec[1][0]}
            }, {})
            errors.value = errorsObject;
        })
    }
}

function validateForm() {
    errors.value = {}

    if (!surname.value) {
        errors.value.surname = 'Фамилию обязательно'
    } else if (!validateString(surname.value)) {
        errors.value.surname = 'Фамилия должна содержать только буквы'
    }

    if (!name.value) {
        errors.value.name = 'Имя обязательно'
    } else if (!validateString(name.value)) {
        errors.value.name = 'Имя должно содержать только буквы'
    }

    if (patronymic.value && !validateString(patronymic.value)) {
        errors.value.patronymic = 'Отчество должно содержать только буквы'
    }

    if (!address.value) {
        errors.value.address = 'Заполните адрес, пожалуйста'
    }

    if (!phoneNumber.value) {
        errors.value.phoneNumber = 'Нужен телефон'
    } else if (phoneNumber.value.length < 17) {
        errors.value.phoneNumber = 'Введите полный номер телефона'
    }
}

function validateString(input) {
    const regex = /^[а-яА-ЯЁёa-zA-Z]+$/
    console.log(regex.test(input))
    return regex.test(input)
}

function formatPhoneInput(e) {
    const countryNumber = "+7"
    const x = e.target.value.replace(/\D/g, '').match(/(\d)(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (!x) {
        phoneNumber.value = ""
    } else {
        phoneNumber.value = (x[2] ? `${countryNumber} (${x[2]}` : `${countryNumber}`) + (x[3] ? `) ${x[3]}` : '') + (x[4] ? `-${x[4]}` : '')
    }
}


</script>
