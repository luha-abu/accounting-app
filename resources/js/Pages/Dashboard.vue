<script setup>
import { Link } from '@inertiajs/vue3';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import AppLayout from '@/Layouts/AppLayout.vue';
import { ref } from 'vue';

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
    items: Array
});

const data = ref({
  labels: ['Sold', 'Received', 'Balance'],
  datasets: [
    {
      backgroundColor: ['#0d6efd', '#188754', '#dc3546'],
      data: [props.items[0].sold, props.items[0].paid, props.items[0].balance]
    }
  ]
})

const options = ref({
  responsive: true,
  maintainAspectRatio: true
})


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
            <Doughnut
                id="my-chart-id"
                :options="options"
                :data="data"
            />
            <div class="row mt-3">
                <div class="col-12">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="sold text-center">
                                    <small class="text-secondary fw-bold">SOLD</small>
                                    <p class="mb-0 text-primary h6 mt-1">&#8377;{{ props.items[0].sold }}</p>
                                </div>
                                <div class="received text-center">
                                    <small class="text-secondary fw-bold">RECEIVED</small>
                                    <p class="mb-0 text-success h6 mt-1">&#8377;{{ props.items[0].paid }}</p>
                                </div>
                                <div class="balance text-center">
                                    <small class="text-secondary fw-bold">BALANCE</small>
                                    <p class="mb-0 text-danger h6 mt-1">&#8377;{{ props.items[0].balance }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
