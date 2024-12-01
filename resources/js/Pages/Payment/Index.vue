<script setup>
import { Link } from '@inertiajs/vue3';
import moment from 'moment';
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps({
    payments: Array
});

</script>
<template>
    <AppLayout title="Contacts">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('dashboard')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Payments</span>
                <!-- <Link :href="route('payments.create')" as="button" class="btn btn-sm btn-outline-success"><i class="bi bi-plus-lg me-2"></i>Add Payment</Link> -->
            </div>
        </nav>
        <div class="container py-3">
            <ul class="list-group">
                <a class="list-group-item list-group-item-action" v-for="payment in payments" :href="route('payments.edit', payment.id)">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <strong>{{ payment.contact_name }}</strong>
                        <strong>&#8377<span>{{ payment.amount }}</span></strong>
                    </div>
                    <div class="d-flex align-items-center justify-content-between" style="font-size: 80%;">
                        <span>#{{ payment.invoice_no }}</span>
                        <span>{{ moment(payment.payment_date).format('DD-MMM-y') }}</span>
                        <span class="badge text-bg-warning">{{ payment.payment_name }}</span>
                    </div>
                </a>
            </ul>
        </div>
    </AppLayout>
</template>
