<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->format() == 'html') {
            return view('layouts.app');
        }
        $limit = $request->input('pagination', 10);
        $products = Product::with('supplier')
            ->when($request->keyword, function ($query, $keyword) {
                $query->where('name', 'like', "%$keyword%");
            })
            ->latest()
            ->paginate($limit);
        return response()->json($products->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('layouts.app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateInputs($request);
        try {
            $data = $request->only('name', 'sku', 'price', 'status', 'unit', 'supplier_id', 'description');
            $image = $request->file('image');
            if (!empty($image)) {
                $data['image'] = $this->upload($image, 'product');
            }
            Product::create($data);
            return response()->json(['message' => 'Successfully created!'], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json($product ?? []);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Product $product)
    {
        if ($request->format() == 'html') {
            return view('layouts.app');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $this->validateInputs($request, $product->id);
        try {
            $data = $request->only('name', 'sku', 'price', 'status', 'unit', 'supplier_id', 'description');
            $image = $request->file('image');
            if (!empty($image)) {
                $data['image'] = $this->upload($image, 'product', $product->image);
            } else {
                $data['image'] = $this->oldFile($product->image);
            }
            $product->update($data);
            return response()->json(['message' => 'Successfully updated!'], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product) {
            $product->delete();
            return response(['message' => 'Deleted successfully'], 201);
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
            'sku' => 'required',
            'price' => 'required',
            'unit' => 'required',
            'supplier_id' => 'required',
        ]);
    }


    public function getProduct(Request $request)
    {
        $query = Product::select('id', 'name', 'image', 'sku','price')->where('status', 'active');
        if ($request->filled('keywords')) {
            $keywords = '%' . strtolower($request->keywords) . '%';
            $query->where('name', 'LIKE', $keywords);
            $products = $query->get()->toArray();
            return response()->json($products);
        }
        return response()->json([]);
    }
}
