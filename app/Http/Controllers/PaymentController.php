<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\PaymentType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = "SELECT
                    p.id, c.name AS contact_name, p.amount, s.invoice_no, s.invoice_date,
                    p.payment_date, ps.name AS payment_name
                    FROM
                    payments p, contacts c, sales s, payment_types ps
                    WHERE
                    p.contact_id = c.id AND p.sale_id = s.id AND p.payment_type_id = ps.id";
        $payments = DB::select($query);
        return Inertia::render('Payment/Index', compact('payments'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $paymentTypes = PaymentType::select('id', 'name')->orderby('name')->get();

        $query = "SELECT
                    s.id AS sale_id, s.contact_id, s.invoice_no, s.invoice_date, c.name AS contact_name
                    FROM
                    sales s, contacts c
                    WHERE
                    s.contact_id = c.id AND s.id = ?";

        $sale = DB::select($query, [$request->query('id')])[0];

        $query = "SELECT (sold - paid) AS balance FROM sale_payments WHERE sale_id = ?";

        $balance = DB::select($query, [$sale->sale_id])[0]->balance;

        return Inertia::render('Payment/Create', compact('paymentTypes', 'sale', 'balance'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'sale_id' => 'required',
            'contact_id' => 'required',
            'amount' => 'required|numeric|gt:0'
        ]);

        Payment::create([
            'payment_date' => $request->payment_date,
            'contact_id' => $request->contact_id,
            'sale_id' => $request->sale_id,
            'payment_type_id' => $request->payment_id,
            'amount' => $request->amount,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('payments.details', ['id' => $request->contact_id])->with('message', 'payment has been created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        $paymentTypes = PaymentType::select('id', 'name')->orderby('name')->get();

        $query = "SELECT
                    p.id, p.sale_id, p.contact_id, s.invoice_no, s.invoice_date, c.name AS contact_name, p.amount, p.payment_date, p.payment_type_id
                    FROM
                    payments p, sales s, contacts c
                    WHERE
                    p.contact_id = c.id AND p.sale_id = s.id AND p.id = ?";

        $sale = DB::select($query, [$id])[0];

        $query = "SELECT (sold - paid) AS balance FROM sale_payments WHERE sale_id = ?";

        $balance = DB::select($query, [$sale->sale_id])[0]->balance;
        $balance = (float)$balance + $sale->amount;

        return Inertia::render('Payment/Edit', compact('paymentTypes', 'sale', 'balance'));


        // $contacts = Contact::select('id', 'name')->orderby('name')->get();
        // $paymentTypes = PaymentType::select('id', 'name')->orderby('name')->get();
        // $sales = Sale::select('id', 'invoice_no', 'invoice_date', 'contact_id')->orderby('created_at')->get();
        // return Inertia::render('Payment/Edit', compact('contacts', 'paymentTypes', 'sales', 'payment'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payment $payment)
    {
        $request->validate([
            'sale_id' => 'required',
            'contact' => 'required',
            'amount' => 'required|numeric|gt:0'
        ]);

        $payment->update([
            'payment_date' => $request->payment_date,
            'contact_id' => $request->contact,
            'sale_id' => $request->sale_id,
            'payment_type_id' => $request->payment,
            'amount' => $request->amount,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('payments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        $payment->delete();
        return redirect()->route('payments.index');
    }

    public function summary()
    {
        $query = "SELECT
                        s.contact_id, c.name as contact_name, SUM(s.sold) sold, SUM(s.paid) paid
                    FROM
                        sale_payments s, contacts c
                    WHERE
                        s.contact_id = c.id
                    GROUP BY
                        c.name, s.contact_id
                    HAVING
                        SUM(s.sold - s.paid) > 0
                    ORDER BY
                        c.name";

        $payments = DB::select($query);

        return Inertia::render('Payment/Summary', compact('payments'));
    }

    public function details(Request $request)
    {
        $contact_id = $request->query('id');

        $query = "SELECT
                        s.sale_id, s.invoice_no, s.invoice_date, s.sold, s.paid
                    FROM
                        sale_payments s
                    WHERE
                        s.contact_id = ? and (s.sold - s.paid) > 0
                    ORDER BY
                        s.invoice_no";

        $payments = DB::select($query, [$contact_id]);

        return Inertia::render('Payment/Details', compact('payments'));
    }
}
