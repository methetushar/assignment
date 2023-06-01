<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getCreatedAtAttribute($value)
    {
        return date('Y-m-d', strtotime($value));
    }
    public function getUpdatedAtAttribute($value)
    {
        return  $value?date('Y-m-d', strtotime($value)) : null;
    }
}
