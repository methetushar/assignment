<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;
    protected $guarded = [];

    /**
     * Modify purchase date
     *
     * @param string $value
     * @return void
     */
    public function setPurchaseDateAttribute($value)
    {
        $this->attributes['purchase_date'] = date('Y-m-d', strtotime($value));
    }

    public function getCreatedAtAttribute($value)
    {
        return date('Y-m-d', strtotime($value));
    }

    /**
     * Get the supplier that owns the Purchase
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    /**
     * Get all of the purchase_details for the Purchase
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function purchase_details()
    {
        return $this->hasMany(PurchaseDetails::class);
    }
}
