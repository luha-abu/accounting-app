<script setup>
import { Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
</script>

<template>
    <AppLayout title="Dashboard">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Dashboard</span>
                <Link :href="route('logout')" method="POST" as="button" class="btn btn-sm btn-outline-success"><i class="bi bi-box-arrow-right me-2"></i>Log out</Link>
            </div>
        </nav>
        <div class="container py-3">
            <div class="row g-3">
                <div class="col-4">
                    <Link class="btn btn-outline-primary" :href="route('contacts.index')" style="height: 120px;">
                        <i class="bi bi-person-add" style="font-size: 36px;"></i>
                        Contacts
                    </Link>
                </div>
                <div class="col-4">
                    <Link class="btn btn-outline-primary" :href="route('paymentTypes.index')" style="height: 120px;">
                        <i class="bi bi-paypal" style="font-size: 36px;"></i>
                        Payment Types
                    </Link>
                </div>
                <div class="col-4">
                    <Link class="btn btn-outline-primary w-100" :href="route('sales.index')" style="height: 120px;">
                        <i class="bi bi-bag-check" style="font-size: 36px;"></i><br>
                        Sales
                    </Link>
                </div>
                <div class="col-4">
                    <Link class="btn btn-outline-primary w-100" :href="route('payments.index')" style="height: 120px;">
                        <i class="bi bi-coin" style="font-size: 36px;"></i><br>
                        Payments
                    </Link>
                </div>
                <div class="col-4">
                    <Link class="btn btn-outline-primary w-100" :href="route('payments.summary')" style="height: 120px;">
                        <i class="bi bi-stripe" style="font-size: 36px;"></i><br>
                        Payment Entry
                    </Link>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
