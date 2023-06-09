<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->integer('invoice_id');
            $table->foreignId('supplier_id')->nullable()->constrained();
            $table->date('purchase_date');
            $table->decimal('subtotal', 10)->default(0);
            $table->decimal('tax', 10)->default(0);
            $table->string('tax_value_type', 10)->default('percent')->comment('percent/fixed');
            $table->decimal('discount', 10)->default(0);
            $table->string('discount_value_type', 10)->default('percent')->comment('percent/fixed');
            $table->decimal('total', 10)->default(0);
            $table->text('note')->nullable();
            $table->string('status')->default('received')->comment('pending/received');
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
        Schema::dropIfExists('purchases');
    }
}
