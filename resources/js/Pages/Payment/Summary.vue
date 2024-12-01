<script setup>
import { Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

defineProps({
    payments: Array
})
</script>
<template>
    <AppLayout title="Payment Summary">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('dashboard')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Payments</span>
            </div>
        </nav>
        <div class="container py-3">
            <ul class="list-group">
                <Link class="list-group-item list-group-item-action" v-for="payment in payments" :href="route('payments.details', {id: payment.contact_id})">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <strong>{{ payment.contact_name }}</strong>
                        <!-- <strong>&#8377<span>{{ payment.amount }}</span></strong> -->
                    </div>
                    <div class="d-flex align-items-center justify-content-between" style="font-size: 80%;">
                        <div class="left">
                            <div>Sold</div>
                            <div>{{ payment.sold }}</div>
                        </div>
                        <div class="middle">
                            <div>Paid</div>
                            <div>{{ payment.paid }}</div>
                        </div>
                        <div class="right">
                            <div>Balance</div>
                            <div>{{ parseFloat(payment.sold - payment.paid).toFixed(2) }}</div>
                        </div>
                        <!-- <span>#{{ payment.invoice_no }}</span> -->
                        <!-- <span>{{ moment(payment.payment_date).format('D-MMM-y') }}</span> -->
                        <!-- <span class="badge text-bg-warning">{{ payment.payment_name }}</span> -->
                    </div>
                </Link>
            </ul>
        </div>
    </AppLayout>
</template>
