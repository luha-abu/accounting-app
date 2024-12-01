<?php

namespace App\Http\Controllers;

use App\Models\PaymentType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paymentTypes = PaymentType::select('id', 'name')->orderby('name')->get();
        return Inertia::render('PaymentType/Index', compact('paymentTypes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:payment_types'
        ]);

        PaymentType::create([
            'name' => $request->name,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('paymentTypes.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PaymentType $paymentType)
    {
        $request->validate([
            'name' => 'required|unique:payment_types,name,' . $paymentType->id . ',id'
        ]);

        $paymentType->update([
            'name' => $request->name,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('paymentTypes.index');
    }
}
