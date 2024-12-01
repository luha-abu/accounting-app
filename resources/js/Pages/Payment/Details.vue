<script setup>
import { onMounted } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from 'moment';
import { showToast } from '@/Helper/luha';

const page = usePage();

defineProps({
    payments: Array
})

onMounted(() => {
    let message = page.props.flash.message;
    if (message) {
        showToast(message);
    }
});
</script>
<template>
    <AppLayout title="Payment Details">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('payments.summary')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Payments</span>
            </div>
        </nav>
        <div class="container py-3">
            <table class="table table-bordered table-responsive" style="font-size: 80%;">
                <thead>
                    <tr>
                        <th>Inv No</th>
                        <th class="text-center">Date</th>
                        <th class="text-end">Amount</th>
                        <th class="text-end">Paid</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="align-middle">
                    <tr v-for="payment in payments">
                        <td>{{ payment.invoice_no }}</td>
                        <td class="text-center">{{ moment(payment.invoice_date).format('DD-MMM-y') }}</td>
                        <td class="text-end">{{ payment.sold }}</td>
                        <td class="text-end">{{ payment.paid }}</td>
                        <td>
                            <Link class="btn btn-sm btn-primary w-100" :href="route('payments.create',{id: payment.sale_id})">Pay</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
