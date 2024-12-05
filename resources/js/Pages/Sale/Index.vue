<script setup>
import { onMounted } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { showToast } from '@/Helper/luha';
import moment from 'moment';
import AppLayout from '@/Layouts/AppLayout.vue';

const page = usePage();

defineProps({
    sales: Array
});

onMounted(() => {
    let message = page.props.flash.message;
    if (message) {
        showToast(message);
    }
});
</script>
<template>
    <AppLayout title="Contacts">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('dashboard')" class="btn btn-link"><i class="bi bi-chevron-left"></i></Link>Sales</span>
                <Link :href="route('sales.create')" as="button" class="btn btn-sm btn-outline-success"><i class="bi bi-plus-lg me-2"></i>Add Sales</Link>
            </div>
        </nav>
        <div class="container py-3">
            <ul class="list-group">
                <Link class="list-group-item list-group-item-action" v-for="sale in sales" :href="route('sales.edit', sale.id)">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <strong>{{ sale.contact.name }}</strong>
                        <strong>&#8377<span>{{ sale.amount }}</span></strong>
                    </div>
                    <div class="d-flex align-items-center justify-content-between" style="font-size: 80%;">
                        <span>Invoice #{{ sale.invoice_no }}</span>
                        <span>{{ moment(sale.invoice_date).format('DD-MMM-y') }}</span>
                    </div>
                </Link>
            </ul>
        </div>
    </AppLayout>
</template>
