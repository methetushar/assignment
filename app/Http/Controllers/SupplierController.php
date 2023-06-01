<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->format() == 'html'){
            return  view('layouts.app');
        }
        $limit = $request->input('pagination', 10);
        $suppliers = Supplier::query()
            ->when($request->keyword, function ($query, $keyword){
                $query->where('name', 'like', "%$keyword%");
            })
            ->latest()
            ->paginate($limit);
        return response()->json($suppliers);

    }

    public function suppliers()
    {
        $suppliers = Supplier::select('id','name')->get()->toArray();
        return response()->json($suppliers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return  view('layouts.app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateInputs($request);
        try {
            $data = $request->only('name','email','phone','country','city','address');
            Supplier::create($data);
            return  response()->json(['message' => 'Successfully created!'] , 200);
        }catch (\Exception $exception){
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function show(Supplier $supplier)
    {
        return response()->json($supplier ?? []);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,Supplier $supplier)
    {
        if ($request->format() == 'html'){
            return  view('layouts.app');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Supplier $supplier)
    {
        $this->validateInputs($request,$supplier->id);
        try {
            $data = $request->only('name','email','phone','country','city','address');
            $supplier->update($data);
            return  response()->json(['message' => 'Successfully updated!'] , 200);
        }catch (\Exception $exception){
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        if ($supplier){
            $supplier->delete();
            return  response(['message' => 'Deleted successfully'],201);
        }
    }

    /**
     * Validate incoming request inputs
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function validateInputs($request, $id = null)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'nullable|email|unique:suppliers,email,' . $id . ',id',
            'phone' => 'required',
            'country' => 'required',
            'city' => 'required',
            'address' => 'required',
        ]);
    }
}
