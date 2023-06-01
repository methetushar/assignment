<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use App\Services\StockService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
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

        $purchases = Purchase::with('supplier:id,name')
            ->when($request->keyword, function ($query, $keyword) {
                $query->where('invoice_id', 'like', "%$keyword%");
            })
            ->latest()
            ->paginate($limit);

        return response()->json($purchases);

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
     * @param  \App\Services\StockService  $stockService
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, StockService $stockService)
    {
        $this->validateInputs($request);

        try {
            DB::beginTransaction();

            $data = $request->except('purchase_details');
            $purchase = Purchase::create($data);

            $items = $request->purchase_details;
            $purchase->purchase_details()->createMany($items);

            if ($data['status'] == 'received') {
                $stockService->updateOnPurchase($items);
            }
            DB::commit();
            return response()->json(['message' => 'Successfully created.'], 201);
        }catch (\Exception $exception){
            DB::rollBack();
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @param  Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Purchase $purchase)
    {
        if ($request->format() == 'html'){
            return  view('layouts.app');
        }
        $purchase->load([
            'supplier:id,name',
            'purchase_details.product:id,name,image',
        ]);

        return response()->json($purchase);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        return  view('layouts.app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Purchase  $purchase
     * @param  \App\Services\StockService  $stockService
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Purchase $purchase, StockService $stockService)
    {
        $this->validateInputs($request, $purchase->id);

        try {
            DB::beginTransaction();

            $prev_status = $purchase->status;
            $data = $request->except('purchase_details');

            if ($prev_status == 'received' && $data['status'] == 'pending') {
                throw new \Exception("It's already received.", 422);
            }

            $purchase->update($data);

            if ($prev_status == 'received') {
                $prev_items = $purchase->purchase_details()
                    ->select('product_id', 'quantity')
                    ->get();
            }

            $items = $request->input('purchase_details');
            $purchase->syncHasMany('purchase_details', $items);

            if ($prev_status == 'received') {
                $stockService->updateOnPurchase($items, $prev_items);
            }

            if ($prev_status == 'pending' && $data['status'] == 'received') {
                $stockService->updateOnPurchase($items);
            }

            DB::commit();
            return response()->json(['message' => 'Successfully updated.']);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        //
    }

    public function validateInputs($request)
    {
        $request->validate([
            'supplier_id' => 'nullable|numeric',
            'purchase_date' => 'required|date',
            'purchase_details' => 'required|array',
        ]);
    }
}
