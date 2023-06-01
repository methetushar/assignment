<template>
    <div class="pagination-section my-3 d-flex align-items-center justify-content-between">
        <div role="status" aria-live="polite">
            Showing {{ $parent.table.from }} to {{ $parent.table.to }} of
            {{ $parent.table.total }} entries
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li v-for="(link,key) in $parent.table.links" class="page-item" :class="link.active ? 'active' :''"  :key="key">
                    <a @click="changePaginate(link.url)" class="page-link" href="javascript:" tabindex="-1" aria-disabled="true">
                        <span v-html="link.label"></span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "Pagination",
        methods:{
            changePaginate(url){
                if (url){
                    const page  = url.split("=");
                    this.$router.push({name:this.$parent.paginate_route,query:{page:page[1]}});
                    this.$parent.get();
                }

            }
        }
    }
</script>

<style scoped>

</style>
