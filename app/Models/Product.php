<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function getImageAttribute( $value ) {
        if ( !empty( $value ) ) {
            return url( '/' ) . "/storage/" . $value;
        }
        return null;
    }

    public function getCreatedAtAttribute( $value ) {
        if ( !empty( $value ) ) {
            return date('F m, Y', strtotime($value));
        }
        return null;
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}
