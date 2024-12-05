<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import { showToast } from '@/Helper/luha';
import moment from 'moment';
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps({
    contacts: Array
})

const form = useForm({
    invoice_no: '',
    invoice_date: moment().format('y-M-DD'),
    contact: props.contacts[0].id,
    amount: ''
});

const submit = () => {
    form.post(route('sales.store'),{
        onError: (errors) => {
            for(let key in errors) {
                showToast(errors[key])
            }
        }
    })
}

</script>
<template>
    <AppLayout title="Create Sale">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <div class="left-bar">
                    <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('sales.index')" class="btn btn-link"><i class="bi bi-chevron-left"></i></Link>Create Sale</span>
                </div>
            </div>
        </nav>
        <div class="container py-3">
            <form @submit.prevent="submit">
                <div class="row g-2 mb-3">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="invoice_no" class="form-label">Invoice No</label>
                            <input type="text" class="form-control fw-bold" v-model="form.invoice_no" required>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="invoice_no" class="form-label">Invoice Date</label>
                            <input type="date" class="form-control fw-bold" v-model="form.invoice_date" required>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="contact" class="form-label">Contact</label>
                    <select name="contact" id="contact" class="form-select fw-bold" v-model="form.contact" required>
                        <option :value="contact.id" v-for="contact in contacts">{{ contact.name }}</option>
                    </select>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <div class="form-group mb-3">
                            <label for="amount" class="form-label">Amount</label>
                            <input type="number" class="form-control fw-bold" v-model="form.amount"  required>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary fw-bold w-100" :disabled="form.processing">CREATE</button>
            </form>
        </div>
    </AppLayout>
</template>
