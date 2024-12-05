<script setup>
import { onMounted } from 'vue';
import { useForm, Link, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import { showToast } from '@/Helper/luha';
import axios from 'axios';
import Swal from 'sweetalert2';

const page = usePage();

const props = defineProps({
    sale: Object,
    contacts: Array
})

const form = useForm({
    id: props.sale.id,
    invoice_no: props.sale.invoice_no,
    invoice_date: props.sale.invoice_date,
    contact: props.sale.contact_id,
    amount: props.sale.amount
});

const submit = async () => {

    const { data } = await axios.get(route('sale.getInvoiceBalance', {id: form.id}));

    if (form.amount != parseFloat(data)) {
        showToast('Invoice has been blocked.');
        return;
    }

    form.put(route('sales.update', form.id), {
        onError: (errors) => {
            for(let key in errors) {
                showToast(errors[key])
            }
        }
    });
}

const deleteEntry = async (id) => {

    const { data } = await axios.get(route('sale.getInvoiceBalance', {id: form.id}));

    if (form.amount != parseFloat(data)) {
        showToast('Invoice has been blocked.');
        return;
    }

    Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
        //   this.deleteItem(itemId);
        //   Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
          form.delete(route('sales.destroy', id));
        }
      });

    // if (!confirm('Do you want to delete?')) return;
    // form.delete(route('sales.destroy', id));
}

onMounted(() => {
    let message = page.props.flash.message;
    if (message) {
        showToast(message);
    }
});

</script>
<template>
    <AppLayout title="Create Sale">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <div class="left-bar">
                    <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('sales.index')" class="btn btn-link"><i class="bi bi-chevron-left"></i></Link>Edit Sale</span>
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
                <div class="row mb-4">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="amount" class="form-label">Amount</label>
                            <input type="number" class="form-control fw-bold" v-model="form.amount"  required>
                        </div>
                    </div>
                </div>
                <button class="btn btn-success w-100 fw-bold" @click="showAlert" :disabled="form.processing">UPDATE</button>
                <button class="btn btn-danger w-100 mt-3 fw-bold" @click="deleteEntry(form.id)" type="button">DELETE</button>
            </form>
        </div>
    </AppLayout>
</template>
