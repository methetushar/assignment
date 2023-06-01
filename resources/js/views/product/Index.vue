<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
                <div class="white_card_header">
                    <div class="box_header m-0">
                        <div class="main-title">
                            <h2 class="m-0">Products</h2>
                        </div>
                        <div class="add_button ms-2">
                            <router-link :to="{name:'product.create'}" class="btn_1">Add New</router-link>
                        </div>
                    </div>
                </div>
                <div class="white_card_body">
                    <div class="QA_section">
                        <SearchConpnent></SearchConpnent>
                        <div class="QA_table mb_30">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Supplier</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <template v-if="!dataLoader">
                                    <tbody v-if="table.data && Object.keys(table.data).length > 0">
                                    <tr v-for="(product,index) in table.data" :key="index">
                                        <td>{{ index + 1}}</td>
                                        <td class="d-flex gap-3 align-items-center">
                                            <img :src="product.image" class="rounded" height="40" width="40" alt="">
                                            <div class="d-flex flex-column">
                                                <strong>{{ product.name }}</strong>
                                                <small class="text-muted">{{ product.sku }}</small>
                                            </div>
                                        </td>
                                        <td>{{ product.supplier? product.supplier.name  : '' }}</td>
                                        <td>{{ product.created_at }}</td>
                                        <td>
                                            <span v-if="product.status == 'active'" class="status_btn">{{ product.status }}</span>
                                            <span v-else class="status_btn bg-danger">{{ product.status }}</span>
                                        </td>
                                        <td>{{ product.price }}</td>
                                        <td>
                                            <a href="#" class="btn btn-success btn-sm text-white rounded"><i class="ti-eye"></i></a>
                                            <router-link :to="{name:'product.edit',params:{id:product.id}}" class="btn btn-info btn-sm text-white">
                                                <i class="ti-pencil-alt"></i>
                                            </router-link>
                                            <a href="javascript:" @click="remove(product.id)" class="btn btn-danger btn-sm text-white">
                                                <i class="ti-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <Nodatafound v-else colspan="7"></Nodatafound>
                                </template>
                                <template v-else>
                                    <DataLoader colspan="7"></DataLoader>
                                </template>
                            </table>
                        </div>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pagination from "../../components/Pagination";
    import SearchConpnent from "../../components/SearchConpnent";
    export default {
        name: "Index",
        components: {SearchConpnent, Pagination},
        data() {
            return {
                dataLoader:false,
                paginate_route:'product.index',
                pagination: 10,
                keyword: '',
                table: {},
            }
        },
        methods: {
            get() {
                this.paginate_data('/product')
            },
            remove(id) {
                if (confirm('Are you sure you want to delete this item?')) {
                    axios.delete('/product/' + id).then(res => {
                        if (res) {
                            this.$toast.success(res.data.message);
                            this.get();
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        },
        mounted() {
            this.get();
        }
    }
</script>

<style scoped>

</style>
