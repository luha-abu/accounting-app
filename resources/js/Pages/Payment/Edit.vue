<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from 'moment';
import { showToast } from '@/Helper/luha';
import { Axios } from 'axios';

const props = defineProps({
    paymentTypes: Array,
    sale: Object,
    balance: Number
})

const form = useForm({
    id: props.sale.id,
    sale_id: props.sale.sale_id,
    invoice_no: props.sale.invoice_no,
    invoice_date: moment(props.sale.invoice_date).format('DD-M-y'),
    contact_id: props.sale.contact_id,
    contact_name: props.sale.contact_name,
    payment_id: props.sale.payment_type_id,
    payment_date: props.sale.payment_date,
    amount: props.sale.amount
});

const submit = () => {

    if (form.amount > Number(props.balance)) {
        showToast('Paid amount is exceed.');
        return;
    }

    form.post(route('payments.store'), {
        onError: (errors) => {
            for(let key in errors) {
                showToast(errors[key]);
            }
        }
    })

}

const deleteEntry = (id) => {
    if (!confirm('Do you want to delete?')) return;
    form.delete(route('payments.destroy', id));
}

</script>
<template>
    <AppLayout title="Create Payment">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <div class="left-bar">
                    <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('payments.index')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Modify Payment</span>
                </div>
            </div>
        </nav>
        <div class="container py-3">
            <form @submit.prevent="submit">
                <div class="row g-3 mb-3">
                    <div class="form-group col-6">
                        <label for="invoice_no" class="form-label">Invoice No</label>
                        <input id="invoice_no" type="text" class="form-control" v-model="form.invoice_no" readonly>
                    </div>
                    <div class="form-group col-6">
                        <label for="invoice_date" class="form-label">Invoice Date</label>
                        <input id="invoice_date" type="text" class="form-control" v-model="form.invoice_date" readonly>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="contact" class="form-label">Contact</label>
                    <input id="contact" type="text" class="form-control" v-model="form.contact_name" readonly>
                </div>
                <div class="form-group mb-3">
                    <label for="payment" class="form-label">Payment Types</label>
                    <select name="payment" id="payment" class="form-select" v-model="form.payment_id" required>
                        <option :value="paymentType.id" v-for="paymentType in paymentTypes">{{ paymentType.name }}</option>
                    </select>
                </div>
                <div class="row g-3 mb-3">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="payment_date" class="form-label">Payment Date</label>
                            <input type="date" class="form-control" v-model="form.payment_date" required>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group mb-2">
                            <label for="amount" class="form-label">Amount</label>
                            <input type="number" class="form-control" v-model="form.amount" required>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary w-100">Submit</button>
                <button class="btn btn-danger w-100 mt-3" @click="deleteEntry(form.id)" type="button">Delete</button>
            </form>
            <div class="alert alert-success mt-3 text-center">
                Balance Amount: <span class="fw-bold">&#8377;{{ props.balance }}</span>
            </div>
        </div>
    </AppLayout>
</template>
