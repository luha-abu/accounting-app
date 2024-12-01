<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::select('id', 'name')->orderby('name')->get();
        return Inertia::render('Contact/Index', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        Contact::create([
            'name' => $request->name,
            'city' => $request->city,
            'state' => $request->state,
            'phone' => $request->phone,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('contacts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('Contact/Edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $contact->update([
            'name' => $request->name,
            'city' => $request->city,
            'state' => $request->state,
            'phone' => $request->phone,
            'user_id' => $request->user()->id
        ]);

        return redirect()->route('contacts.index');
    }
}
