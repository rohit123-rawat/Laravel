<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOpportunityRequest;
use App\Http\Requests\UpdateOpportunityRequest;
use App\Models\Opportunity;
use Inertia\Inertia;

class OpportunityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * 
     */
    public function index()
    {
        
        return Inertia::render('Opportunity/Index', [
            'opportunities' => Opportunity::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * 
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOpportunityRequest  $request
     * 
     */
    public function store(StoreOpportunityRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Opportunity  $opportunity
     * 
     */
    public function show(Opportunity $opportunity)
    {
        return Inertia::render('Opportunity/Show', [
            'opportunity' => $opportunity,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Opportunity  $opportunity
     * 
     */
    public function edit(Opportunity $opportunity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOpportunityRequest  $request
     * @param  \App\Models\Opportunity  $opportunity
     * 
     */
    public function update(UpdateOpportunityRequest $request, Opportunity $opportunity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Opportunity  $opportunity
     * 
     */
    public function destroy(Opportunity $opportunity)
    {
        //
    }
}
