<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PaymentTypeController;
use App\Http\Controllers\SaleController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        $query = "SELECT IFNULL(SUM(sold), 0) AS sold, IFNULL(SUM(paid), 0) paid, (IFNULL(SUM(sold), 0) - IFNULL(SUM(paid), 0)) balance FROM sale_payments";
        $items = DB::select($query);
        return Inertia::render('Dashboard', compact('items'));
    })->name('dashboard');
    Route::resource('contacts', ContactController::class)
        ->except('destroy');
    Route::get('paymentTypes', [PaymentTypeController::class, 'index'])
        ->name('paymentTypes.index');
    Route::post('paymentTypes', [PaymentTypeController::class, 'store'])
        ->name('paymentTypes.store');
    Route::put('paymentTypes/{paymentType}', [PaymentTypeController::class, 'update'])
        ->name('paymentTypes.update');
    Route::resource('sales', SaleController::class);
    Route::get('payments/summary', [PaymentController::class, 'summary'])
        ->name('payments.summary');
    Route::get('payments/details', [PaymentController::class, 'details'])
        ->name('payments.details');
    Route::resource('payments', PaymentController::class);
    Route::get('/sale/balance', [SaleController::class, 'getInvoiceBalance'])
        ->name('sale.getInvoiceBalance');
});
