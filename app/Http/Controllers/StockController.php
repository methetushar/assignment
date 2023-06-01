<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class StockController extends Controller
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

        $perPage = $request->input('pagination', 10);

        $stock = Stock::with('product:id,name')
            ->when($request->keyword, function ($query) use ($request) {
                $query->whereHas('product', function ($query) use ($request) {
                    $query->where('name', 'like', '%' . $request->keyword . '%');
                });
            })
            ->where('quantity', '>', 0)
            ->latest()
            ->paginate($perPage);

        return response()->json($stock);
    }
}
