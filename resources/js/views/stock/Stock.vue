<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
                <div class="white_card_header">
                    <div class="box_header m-0">
                        <div class="main-title">
                            <h2 class="m-0">Stock Product</h2>
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
                                    <th>Quantity</th>
                                    <th>Created</th>
                                    <th>Updated</th>
                                </tr>
                                </thead>
                                <template v-if="!dataLoader">
                                    <tbody v-if="table.data && Object.keys(table.data).length > 0">
                                    <tr v-for="(stock,key) in table.data" :key="key">
                                        <td>{{ key + 1}}</td>
                                        <td>{{ stock.product ? stock.product.name : '-' }}</td>
                                        <td>{{ stock.quantity }}</td>
                                        <td>{{ stock.created_at | formatDate }}</td>
                                        <td>{{ stock.updated_at | formatDate }}</td>
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
    import SearchConpnent from "../../components/SearchConpnent";
    import Pagination from "../../components/Pagination";

    export default {
        name: "Stock",
        components: {Pagination, SearchConpnent},
        data() {
            return {
                dataLoader: false,
                paginate_route: 'product.index',
                pagination: 10,
                keyword: '',
                table: {},
            }
        },

        methods: {
            get() {
                this.paginate_data('/stock')
            },
        },
        mounted() {
            this.get();
        }
    }
</script>

<style scoped>

</style>
