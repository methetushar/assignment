<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
                <div class="white_card_header">
                    <div class="box_header m-0">
                        <div class="main-title">
                            <h2 class="m-0">Product  Create</h2>
                        </div>
                        <div class="add_button ms-2">
                            <router-link :to="{name:'product.index'}"  class="btn_1">Back </router-link>
                        </div>
                    </div>
                </div>
                <div class="white_card_body">
                    <div class="QA_section">
                        <form id="productForm" @submit.prevent="submit" class="row align-items-center" enctype="multipart/form-data">
                            <div class="col-lg-4 mb-3">
                                <label for="name">Name</label>
                                <input type="text" id="name" class="form-control" v-model="data.name" name="name" placeholder="Enter Name">
                                <span class="text-danger">
                                    {{ validation.firstError("data.name")}}
                                </span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <label for="sku">SKU</label>
                                <input type="text" id="sku" class="form-control" v-model="data.sku" name="sku" placeholder="Enter SKU">
                                <span class="text-danger">
                                    {{ validation.firstError("data.sku")}}
                                </span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <label for="">Image</label>
                                <input type="file" @change="handleFileUpload" id="image" class="d-none" accept="image/*"  name="image">
                                <div class="d-flex gap-4">
                                    <label for="image">
                                        <img :src="previewImage ? previewImage : data.image" height="30" width="30" style="border-radius: 10px" alt="">
                                        <span class="btn btn-light btn-sm px-5">Choose File</span>
                                    </label>
                                </div>
                            </div>

                            <div class="col-lg-4 mb-3">
                                <label for="price">Product Price</label>
                                <input type="text" class="form-control" id="price" v-model="data.price" name="price" placeholder="Enter Price">
                                <span class="text-danger">
                                    {{ validation.firstError("data.price")}}
                                </span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <label for="unit">Product Unit</label>
                                <select name="unit" id="unit" class="form-select" v-model="data.unit">
                                    <option value="">Select One</option>
                                    <option value="pc">PC</option>
                                    <option value="box">Box</option>
                                </select>
                                <span class="text-danger">
                                    {{ validation.firstError("data.unit")}}
                                </span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <label for="supplier">Supplier</label>
                                <select name="supplier_id" id="supplier" class="form-select" v-model="data.supplier_id">
                                    <option value="">Select One</option>
                                    <option v-for="(supplier, index) in suppliers" :key="index" :value="supplier.id">{{ supplier.name }}</option>
                                </select>
                                <span class="text-danger">
                                    {{ validation.firstError("data.supplier_id")}}
                                </span>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label for="description">Description</label>
                                <textarea name="description" id="description" class="form-control" v-model="data.description"></textarea>
                            </div>
                            <div class="col-lg-4">
                                <label for="" class="d-block w-100">Status</label>
                                <div class="mt-2">
                                    <div class="form-check form-check-inline ">
                                        <input v-model="data.status" class="form-check-input" name="status" type="radio" id="inactive" value="inactive">
                                        <label class="form-check-label" for="inactive">Inactive</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input v-model="data.status" name="status" class="form-check-input" type="radio" id="active" value="active">
                                        <label class="form-check-label" for="active">Active</label>
                                    </div>
                                </div>
                                <span class="text-danger">
                                    {{ validation.firstError("data.status")}}
                                </span>
                            </div>

                            <div class="my-4">
                                <div class="col-lg-4">
                                    <button v-if="!loading" type="submit" class="btn btn-success px-4">Submit</button>
                                    <button v-else class="btn btn-success" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Create",
        data(){
            return{
                loading: false,
                data:{
                    status:'active',
                    unit:'',
                    supplier_id:'',
                },
                previewImage:null,
                suppliers:[]
            }
        },

        methods: {
            submit() {
                this.$validate().then(async (res) => {
                    if (res) {
                        let form  = document.getElementById('productForm');
                        let formData = new FormData(form);
                        const url = this.$route.params.id ? "/product/" + this.data.id : "/product";
                        this.loading = true;
                        if (this.$route.params.id){
                            formData.append("_method", "put");
                        }
                        await axios.post(url, formData).then(res => {
                            if (res) {
                                this.$toast.success(res.data.message);
                                this.$router.push({name: 'product.index'})
                            }
                        }).catch(error => {
                            console.log(error)
                        }).finally(() => this.loading = false)
                    }
                });
            },
            handleFileUpload(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.previewImage = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            },
           async getSuppliers(){
              await axios.get('/get-suppliers').then(res => {
                    this.suppliers = res.data;
                }).catch(error =>  {
                    console.log(error)
              })
            }
        },
        mounted() {
            this.getSuppliers();
            const id = this.$route.params.id;
            if (id) {
                axios.get('/product/' + id).then(res => {
                    this.data = res.data;
                }).catch(error => {
                    console.log(error)
                })
            }
        },

        validators: {
            "data.name": function (value = null) {
                return Validator.value(value).required("Name is required");
            },
            "data.sku": function (value = null) {
                return Validator.value(value).required("SKU is required");
            },
            "data.price": function (value = null) {
                return Validator.value(value).required("Price is required");
            },
            "data.unit": function (value = null) {
                return Validator.value(value).required("Unit is required");
            },
            "data.supplier_id": function (value = null) {
                return Validator.value(value).required("Supplier is required");
            },
        },
    }
</script>

<style scoped>

</style>
