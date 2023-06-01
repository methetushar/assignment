<template>
    <div class="white_box_tittle list_header">
        <div class="showing">
            <select @change="$parent.get" v-model="$parent.pagination" class="form-select">
                <option value="10">Showing</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
            </select>
        </div>
        <div class="box_right d-flex lms_block">
            <div class="serach_field_2">
                <div class="search_inner">
                    <form @submit.prevent="$parent.get">
                        <div class="search_field">
                            <input v-model="$parent.keyword" type="text" placeholder="Search content here...">
                        </div>
                        <button type="submit"><i class="ti-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchConpnent"
    }
</script>

<style scoped>

</style>
