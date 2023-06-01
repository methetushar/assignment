<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_id')->constrained();
            $table->foreignId('product_id')->constrained();
            $table->decimal('price', 10);
            $table->float('quantity');
            $table->decimal('subtotal', 10);
            $table->decimal('tax', 10)->default(0);
            $table->string('tax_value_type', 10)->default('percent')->comment('percent/fixed');
            $table->decimal('discount', 10)->default(0);
            $table->string('discount_value_type', 10)->default('percent')->comment('percent/fixed');
            $table->decimal('total', 10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchase_details');
    }
}
