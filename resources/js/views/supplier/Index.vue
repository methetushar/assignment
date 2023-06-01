<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
                <div class="white_card_header">
                    <div class="box_header m-0">
                        <div class="main-title">
                            <h2 class="m-0">Suppliers</h2>
                        </div>
                        <div class="add_button ms-2">
                            <router-link :to="{name:'supplier.create'}" class="btn_1">Add New</router-link>
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th width="15%">Action</th>
                                </tr>
                                </thead>
                                <template v-if="!dataLoader">
                                    <tbody v-if="table.data && Object.keys(table.data).length > 0">
                                    <tr v-for="(supplier,index) in table.data" :key="index">
                                        <td>{{ index + 1}}</td>
                                        <td>{{ supplier.name }}</td>
                                        <td>{{ supplier.email }}</td>
                                        <td>{{ supplier.phone }}</td>
                                        <td>{{ supplier.country }}</td>
                                        <td>
                                            <a href="#" class="btn btn-success btn-sm text-white rounded"><i
                                                class="ti-eye"></i></a>
                                            <router-link :to="{name:'supplier.edit',params:{id:supplier.id}}"
                                                         class="btn btn-info btn-sm text-white">
                                                <i class="ti-pencil-alt"></i>
                                            </router-link>
                                            <a href="javascript:" @click="remove(supplier.id)"
                                               class="btn btn-danger btn-sm text-white">
                                                <i class="ti-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <Nodatafound v-else colspan="6"></Nodatafound>
                                </template>
                                <template v-else>
                                    <DataLoader colspan="6"></DataLoader>
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
                dataLoader: false,
                paginate_route: 'supplier.index',
                pagination: 10,
                keyword: '',
                table: {},
            }
        },
        methods: {
            get() {
                this.paginate_data('/supplier')
            },
            remove(id) {
                if (confirm('Are you sure you want to delete this item?')) {
                    axios.delete('/supplier/' + id).then(res => {
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
