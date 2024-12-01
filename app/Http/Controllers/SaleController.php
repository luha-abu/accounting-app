<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sales = Sale::with('contact:id,name')->orderby('created_at')->get();
        return Inertia::render('Sale/Index', compact('sales'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $contacts = Contact::select('id', 'name')->orderby('name')->get();
        return Inertia::render('Sale/Create', compact('contacts'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'invoice_no' => 'required',
            'invoice_date' => 'required',
            'contact' => 'required',
            'amount' => 'required|numeric|gt:0'
        ]);

        Sale::create([
            'invoice_no' => $request->invoice_no,
            'invoice_date' => $request->invoice_date,
            'contact_id' => $request->contact,
            'amount' => $request->amount,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('sales.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sale $sale)
    {
        $contacts = Contact::select('id', 'name')->orderby('name')->get();
        return Inertia::render('Sale/Edit', compact('contacts', 'sale'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sale $sale)
    {
        $request->validate([
            'invoice_no' => 'required',
            'invoice_date' => 'required',
            'contact' => 'required',
            'amount' => 'required|numeric|gt:0'
        ]);

        $sale->update([
            'invoice_no' => $request->invoice_no,
            'invoice_date' => $request->invoice_date,
            'contact_id' => $request->contact,
            'amount' => $request->amount,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('sales.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sale $sale)
    {
        $sale->delete();
        return redirect()->route('sales.index')->with('message', 'Sale has been deleted.');
    }

    public function getInvoiceBalance(Request $request)
    {
        $id = $request->query('id');
        $query = "SELECT (sold - paid) AS balance FROM sale_payments WHERE sale_id = ?";
        $balance = DB::select($query, [$id])[0]->balance;
        $balance = (float)$balance;

        return $balance;
    }
}
