<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
                <div class="white_card_header">
                    <div class="box_header m-0">
                        <div class="main-title">
                            <h2 class="m-0">Purchases</h2>
                        </div>
                        <div class="add_button ms-2">
                            <router-link :to="{name:'purchase.create'}" class="btn_1">Add New</router-link>
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
                                    <th>Invoice Id</th>
                                    <th>Supplier</th>
                                    <th>Date</th>
                                    <th>Subtotal</th>
                                    <th>Tax</th>
                                    <th>Discount</th>
                                    <th>Total</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <template v-if="!dataLoader">

                                    <tbody v-if="table.data && Object.keys(table.data).length > 0">
                                    <tr v-for="(item,key) in table.data" :key="key">
                                        <td>{{ key + 1}}</td>
                                        <td>{{ item.invoice_id }}</td>
                                        <td>{{ item.supplier ? item.supplier.name : '-' }}</td>
                                        <td>{{ item.purchase_date}}</td>
                                        <td>{{ item.subtotal }}</td>
                                        <td>{{ item.tax }}</td>
                                        <td>{{ item.discount }}</td>
                                        <td>{{ item.total }}</td>
                                        <td>{{ item.created_at }}</td>
                                        <td>
                                            <a href="#" class="btn btn-success btn-sm text-white rounded"><i
                                                class="ti-eye"></i></a>
                                            <router-link :to="{name:'purchase.edit',params:{id:item.id}}"
                                                         class="btn btn-info btn-sm text-white">
                                                <i class="ti-pencil-alt"></i>
                                            </router-link>
                                            <a href="javascript:" @click="remove(item.id)"
                                               class="btn btn-danger btn-sm text-white">
                                                <i class="ti-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <Nodatafound v-else colspan="10"></Nodatafound>
                                </template>
                                <template v-else>
                                    <DataLoader colspan="10"></DataLoader>
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
    import SearchConpnent from "../../components/SearchConpnent";
    import Pagination from "../../components/Pagination";

    export default {
        name: "Index",
        components: {Pagination, SearchConpnent},
        data() {
            return {
                dataLoader:false,
                paginate_route:'purchase.index',
                pagination: 10,
                keyword: '',
                table: {},
            }
        },

        methods: {
            get() {
                this.paginate_data('/purchase')
            },
        },
        mounted() {
            this.get();
        }
    }
</script>

<style scoped>

</style>
