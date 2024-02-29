<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'regex:/^[а-яА-ЯЁёa-zA-Z]+$/'],
            'surname' => ['required', 'regex:/^[а-яА-ЯЁёa-zA-Z]+$/'],
            'patronymic' => ['nullable', 'regex:/^[а-яА-ЯЁёa-zA-Z]+$/'],
            'address' => ['required'],
            'phoneNumber' => ['required', 'min:17'],
            'comment' => ['nullable'],
            'orders' => ['required'],
        ]);

        Order::create($validatedData);

        return ["message" => "form sent"];
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
