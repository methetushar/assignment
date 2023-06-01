<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
                <div class="white_card_header">
                    <div class="box_header m-0">
                        <div class="main-title">
                            <h2 class="m-0">New Purchase</h2>
                        </div>
                        <div class="add_button ms-2">
                            <router-link :to="{name:'purchase.index'}" class="btn_1">Back</router-link>
                        </div>
                    </div>
                </div>
                <div class="white_card_body">
                    <form @submit.prevent="submit" method="post">
                        <div class="row">
                            <div class="col-lg-4">
                                <label for="">Date</label>
                                <input type="date" class="form-control" name="purchase_date" v-model="data.purchase_date">
                                <span class="text-danger">
                                    {{ validation.firstError("data.purchase_date")}}
                                </span>
                            </div>
                            <div class="col-lg-4">
                                <label for="">Invoice Id</label>
                                <input type="text" class="form-control" name="invoice_id" v-model="data.invoice_id">
                                <span class="text-danger">
                                    {{ validation.firstError("data.invoice_id")}}
                                </span>
                            </div>
                            <div class="col-lg-4">
                                <label for="supplier">Supplier</label>
                                <select name="supplier_id" id="supplier" class="form-select" v-model="data.supplier_id">
                                    <option value="">Select One</option>
                                    <option v-for="(supplier, index) in suppliers" :key="index" :value="supplier.id">{{
                                        supplier.name }}
                                    </option>
                                </select>
                                <span class="text-danger">
                                    {{ validation.firstError("data.supplier_id")}}
                                </span>
                            </div>
                            <div class="col-lg-12 my-3">
                                <div class="product-search-box">
                                    <form @submit.prevent="search" class="search-form">
                                        <label for="supplier">Product</label>
                                        <input v-model="keywords" @keyup="search" type="search"
                                               placeholder="Search by name"
                                               class="form-control" name="product_name" autocomplete="off">
                                        <button type="submit"><i class="ti-search"></i></button>
                                        <a href="javascript:" class="loading" v-if="loading">
                                        <span class="spinner-border spinner-border-sm" role="status"
                                              aria-hidden="true"></span>
                                            <span class="visually-hidden">Loading...</span>
                                        </a>
                                        <a v-if="!loading && showSuggestion && Object.keys(suggestProduct).length > 0"
                                           @click="showSuggestion = false" href="javascript:" class="loading">
                                            <i class="ti-close"></i>
                                        </a>
                                    </form>
                                    <div class="suggestion-list" v-if="showSuggestion">
                                        <template v-if="suggestProduct && Object.keys(suggestProduct).length > 0">
                                            <div class="suggested-item" v-for="(product, key) in suggestProduct"
                                                 :key="key">
                                                <a href="javascript:" @click="addToCart(product,key)">
                                                    <img height="35" width="35" :src="product.image" alt="">
                                                    <div class="d-flex flex-column">
                                                        <strong>{{ product.name }}</strong>
                                                        <small class="text-muted">{{ product.sku }}</small>
                                                    </div>
                                                </a>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <h4 v-if="keywords" class="not-found">Product Not Found!</h4>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="QA_section">
                            <div class="QA_table mb_30">
                                <table class="table purchase-product-table table-striped">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Tax</th>
                                        <th>Discount</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody
                                        v-if="data.purchase_details && Object.keys(data.purchase_details).length > 0">
                                    <tr v-for="(item,ikey) in data.purchase_details" :key="ikey">
                                        <td>{{ ikey + 1}}</td>
                                        <td class="d-flex gap-1 align-items-center">
                                            <img :src="item.product ? item.product.image :''" height="35" width="35" alt="">
                                            <div class="d-flex flex-column">
                                                <strong>{{ item.product ? item.product.name : '' }}</strong>
                                            </div>
                                        </td>
                                        <td>
                                            <input
                                                step="any"
                                                name="price"
                                                type="number"
                                                autocomplete="off"
                                                v-model="item.price"
                                                @input="() => calculateItemTotalAmount(item)"
                                            >
                                        </td>
                                        <td>
                                            <input
                                                step="any"
                                                type="number"
                                                name="quantity"
                                                autocomplete="off"
                                                v-model="item.quantity"
                                                @input="() => calculateItemTotalAmount(item)"
                                            >
                                        </td>
                                        <td>
                                            {{ Number(item.subtotal).toFixed(2) }}
                                        </td>
                                        <td>
                                            <input
                                                step="any"
                                                type="number"
                                                v-model="item.tax"
                                                autocomplete="off"
                                                @input="() => calculateItemTotalAmount(item)"
                                            >
                                            <select v-model="item.discount_value_type"
                                                    @change="() => calculateItemTotalAmount(item)">
                                                <option value="percent">%</option>
                                                <option value="fixed">Fixed</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                autocomplete="off"
                                                v-model="item.discount"
                                                @input="() => calculateItemTotalAmount(item)"
                                            >
                                            <select v-model="item.discount_value_type"
                                                    @change="() => calculateItemTotalAmount(item)">
                                                <option value="percent">%</option>
                                                <option value="fixed">Fixed</option>
                                            </select>
                                        </td>
                                        <td>
                                            {{ Number(item.total).toFixed(2) }}
                                        </td>
                                        <td>
                                            <a @click="removeFromCart(ikey)" href="javascript:" class="text-danger">
                                                <i class="ti-close"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="mb-3">
                                    <label for="">Note:</label>
                                    <textarea v-model="data.note" class="form-control" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="">Status:</label>
                                    <div class="form-check form-check-inline">
                                        <input v-model="data.status" class="form-check-input" name="status" type="radio"
                                               id="pending"
                                               value="pending">
                                        <label class="form-check-label" for="pending">Pending</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input v-model="data.status" class="form-check-input" name="status" type="radio"
                                               id="received"
                                               value="received">
                                        <label class="form-check-label" for="received">Received</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="float-end">
                                    <table class="table estimate-acount-table">
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>:</td>
                                            <td>{{ Number(data.subtotal).toFixed(2) }}</td>
                                        </tr>
                                        <tr>
                                            <th>Tax</th>
                                            <td>:</td>
                                            <td>
                                                <input
                                                    step="any"
                                                    type="number"
                                                    v-model="data.tax"
                                                    autocomplete="off"
                                                    @input="() => calculateTotalAmount()"
                                                >
                                                <select v-model="data.discount_value_type"
                                                        @change="() => calculateTotalAmount()">
                                                    <option value="percent">%</option>
                                                    <option value="fixed">Fixed</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Discount</th>
                                            <td>:</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    autocomplete="off"
                                                    v-model="data.discount"
                                                    @input="() => calculateTotalAmount()"
                                                >
                                                <select v-model="data.discount_value_type"
                                                        @change="() => calculateTotalAmount()">
                                                    <option value="percent">%</option>
                                                    <option value="fixed">Fixed</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td>:</td>
                                            <td>{{ Number(data.total).toFixed(2) }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-lg-3">
                                <button v-if="!btnLoader" type="submit" class="btn btn-primary px-5 d-block w-100">
                                    Submit
                                </button>
                                <button v-else class="btn btn-success px-5 d-block w-100" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm " role="status"
                                          aria-hidden="true"></span>
                                    Loading...
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Create",
        data() {
            return {
                data: {
                    supplier_id: '',
                    purchase_date: '',
                    subtotal: 0,
                    tax: 0,
                    tax_value_type: 'percent',
                    discount: 0,
                    discount_value_type: 'percent',
                    total: 0,
                    note: '',
                    status: 'received',
                    purchase_details: []
                },
                keywords: '',
                suppliers: [],
                suggestProduct: [],
                loading: false,
                btnLoader: false,
                showSuggestion: false,
            }
        },
        methods: {
            submit() {
                this.$validate().then(async (res) => {
                    if (res) {
                        const data = this.data;
                        data.purchase_details.map(item => {
                            delete item.product;
                            return item;
                        });
                        this.btnLoader = true;
                        await axios.post('/purchase', data).then(({ data: {message}}) => {
                            this.$toast.success(message);
                            this.$router.push({ name: "purchase.index" });
                        }).catch(error => {
                            console.log(error)
                        }).finally(() => {
                            this.btnLoader = false;
                        })
                    }
                });
            },
            async getSuppliers() {
                await axios.get('/get-suppliers').then(res => {
                    this.suppliers = res.data;
                }).catch(error => {
                    console.log(error)
                })
            },
            async search() {
                if (this.keywords) {
                    this.loading = true;
                    await axios.get('/get-product', {params: {keywords: this.keywords}}).then(res => {
                        this.suggestProduct = res.data;
                        this.showSuggestion = true
                    }).catch(error => {
                        console.log(error)
                    }).finally(() => {
                        this.loading = false;
                    })
                } else {
                    this.showSuggestion = false
                }
            },
            addToCart(product, productKey) {
                const found = this.data.purchase_details.find(item => {
                    return product.id == item.id;
                });
                if (found) {
                    this.$toast.warning('Product already added.');
                    return false;
                }
                this.data.purchase_details.push({
                    product_id: product.id,
                    quantity: 1,
                    price: product.price,
                    subtotal: product.price,
                    tax: 0,
                    tax_value_type: 'percent',
                    discount: 0,
                    discount_value_type: 'percent',
                    total: product.price,
                    product: {
                        name: product.name,
                        image: product.image
                    },
                });
                this.suggestProduct.splice(productKey, 1)
                this.calculateTotalAmount();
            },

            removeFromCart(productKey) {
                this.data.purchase_details.splice(productKey, 1);
                this.calculateTotalAmount();
            },
            calculateItemTotalAmount(item) {
                let price = isNaN(item.price) ? 0 : Number(item.price);
                let qty = isNaN(item.quantity) ? 0 : Number(item.quantity);
                let tax = isNaN(item.tax) ? 0 : Number(item.tax);
                let discount = isNaN(item.discount) ? 0 : Number(item.discount);
                let total = price * qty;

                item.subtotal = total;

                total += this.calculateCharge(tax, total, item.tax_value_type);
                total -= this.calculateCharge(discount, total, item.discount_value_type);

                item.total = total;

                this.calculateTotalAmount();
            },

            calculateTotalAmount() {
                let total = 0;
                let tax = isNaN(this.data.tax) ? 0 : Number(this.data.tax);
                let discount = isNaN(this.data.discount) ? 0 : Number(this.data.discount);

                for (let i = 0; i < this.data.purchase_details.length; i++) {
                    const item = this.data.purchase_details[i];
                    total += isNaN(item.total) ? 0 : Number(item.total);
                }

                this.data.subtotal = total;

                total += this.calculateCharge(tax, total, this.data.tax_value_type);
                total -= this.calculateCharge(discount, total, this.data.discount_value_type);

                this.data.total = total;
            },

            calculateCharge(value, total, type) {
                if (value && type == 'percent') {
                    return (value / 100) * total;
                }

                if (value && type == 'fixed') {
                    return value;
                }
                return 0;
            }
        },
        mounted() {
            this.getSuppliers();
        },

        validators: {
            "data.supplier_id": function (value = null) {
                return Validator.value(value).required("Supplier is required");
            },
            "data.purchase_date": function (value = null) {
                return Validator.value(value).required("Purchase date is required");
            },
            "data.invoice_id": function (value = null) {
                return Validator.value(value).required("Invoice id is required");
            },
        },
    }
</script>

<style scoped lang="scss">
    .product-search-box {
        position: relative;

        .search-form {
            input {
                padding: 10px 24px;
                border-radius: 10px;
            }

            button {
                position: absolute;
                top: 25px;
                right: 4px;
                border: 0;
                height: 37px;
                width: 72px;
                padding: 10px;
                background: #64c5b1;
                color: #fff;
                border-radius: 8px;
            }

            a.loading {
                position: absolute;
                top: 36px;
                right: 100px;
                color: #36c5c2;
            }
        }

        .suggestion-list {
            width: 100%;
            height: auto;
            max-height: 250px;
            box-shadow: 0 4px 6px #4444;
            border-radius: 10px;
            overflow: hidden;
            overflow-y: auto;
            padding: 10px;
            position: absolute;
            top: 70px;
            left: 0;
            background: #fff;

            .suggested-item {
                width: 100%;
                margin-bottom: 15px;

                a {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            }

            .not-found {
                color: #415094;
                text-align: center;
                padding: 50px;
            }
        }
    }

    table.table.purchase-product-table {
        tr {
            td {
                padding: 5px;

                input {
                    width: 80px;
                    border: 1px solid #bfbdbd;
                    outline: none;
                    height: 27px;
                    float: left;
                    padding: 5px;
                }

                select {
                    width: 60px;
                    border: 1px solid #bfbdbd;
                    outline: none;
                    height: 27px;
                    padding: 5px;
                }
            }

            th {
                padding: 5px !important;
                color: #000;
                font-weight: 600;
                font-size: 14px;
            }
        }
    }

    .estimate-acount-table {
        tr {
            td {
                padding: 5px;

                input {
                    width: 80px;
                    border: 1px solid #bfbdbd;
                    outline: none;
                    height: 27px;
                    float: left;
                    padding: 5px;
                }

                select {
                    width: 60px;
                    border: 1px solid #bfbdbd;
                    outline: none;
                    height: 27px;
                    padding: 5px;
                }
            }

            th {
                padding: 5px !important;
                color: #000;
                font-weight: 600;
                font-size: 14px;
            }
        }
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {

        opacity: 1;

    }
</style>
