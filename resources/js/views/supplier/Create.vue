<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
                <div class="white_card_header">
                    <div class="box_header m-0">
                        <div class="main-title">
                            <h2 class="m-0">Supplier Create</h2>
                        </div>
                        <div class="add_button ms-2">
                            <router-link :to="{name:'supplier.index'}" class="btn_1">Back</router-link>
                        </div>
                    </div>
                </div>
                <div class="white_card_body">
                    <div class="QA_section">
                        <form id="productForm" @submit.prevent="submit" class="row align-items-center"
                              enctype="multipart/form-data">
                            <div class="col-lg-4 mb-3">
                                <label for="name">Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="data.name" id="name" name="name"
                                       placeholder="Enter Name">
                                <span class="text-danger">
                                    {{ validation.firstError("data.name")}}
                                </span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <label for="email">Email</label>
                                <input type="email" id="email" class="form-control" v-model="data.email" name="email"
                                       placeholder="Enter Email">
                                <span class="text-danger">
                                    {{ validation.firstError("data.email")}}
                                </span>
                            </div>

                            <div class="col-lg-4 mb-3">
                                <label for="phone">Phone Number</label>
                                <input type="text" class="form-control" id="phone" v-model="data.phone" name="phone"
                                       placeholder="Enter Phone">
                                <span class="text-danger">
                                    {{ validation.firstError("data.phone")}}
                                </span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <label for="country">Country</label>
                                <input type="text" id="country" class="form-control" v-model="data.country"
                                       name="country" placeholder="Enter Country">
                                <span class="text-danger">
                                    {{ validation.firstError("data.country")}}
                                </span>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <label for="city">City</label>
                                <input type="text" id="city" class="form-control" v-model="data.city" name="city"
                                       placeholder="Enter City">
                                <span class="text-danger">
                                    {{ validation.firstError("data.city")}}
                                </span>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label for="address">Address</label>
                                <textarea class="form-control" id="address" v-model="data.address" name="address"
                                          placeholder="Enter Address"></textarea>
                                <span class="text-danger">
                                    {{ validation.firstError("data.address")}}
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
        data() {
            return {
                loading: false,
                data: {}
            }
        },

        methods: {
            submit() {
                this.$validate().then(async (res) => {
                    if (res) {
                        const method = this.$route.params.id ? "put" : "post";
                        const url = this.$route.params.id ? "/supplier/" + this.data.id : "/supplier";
                        this.loading = true;
                        await axios[method](url, this.data).then(res => {
                            if (res) {
                                this.$toast.success(res.data.message);
                                this.$router.push({name: 'supplier.index'})
                            }
                        }).catch(error => {
                            console.log(error)
                        }).finally(() => this.loading = false)
                    }
                });
            }
        },
        mounted() {
            const id = this.$route.params.id;
            if (id) {
                axios.get('/supplier/' + id).then(res => {
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
            "data.email": function (value = null) {
                return Validator.value(value).email().required("Email is required");
            },
            "data.phone": function (value = null) {
                return Validator.value(value).required("Phone is required");
            },
            "data.country": function (value = null) {
                return Validator.value(value).required("Country is required");
            },
            "data.city": function (value = null) {
                return Validator.value(value).required("City is required");
            },
            "data.address": function (value = null) {
                return Validator.value(value).required("Address is required");
            },
        },
    }
</script>

<style scoped>

</style>
