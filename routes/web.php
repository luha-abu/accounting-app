<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PaymentTypeController;
use App\Http\Controllers\SaleController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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
    Route::get('/auth/password/change', function () {
        return Inertia::render('Auth/UpdatePassword');
    })->name('auth.password.change');
    Route::put('/auth/password/change/{user}', function (Request $request, User $user) {
        $request->validate([
            'password' => 'required|confirmed'
        ]);
        $user->update([
            'password' => bcrypt($request->password)
        ]);
        return redirect()->route('dashboard')->with('message', 'Password has been updated.');
    })->name('auth.password.store');
});
