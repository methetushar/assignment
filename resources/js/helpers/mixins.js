Vue.mixin({
    methods: {
        async paginate_data(url) {
            if (this.$route.query.page) {
                url = url + '?page=' + this.$route.query.page;
            }
            this.dataLoader = true;
            await axios.get(url, {params: {pagination: this.pagination, keyword: this.keyword}})
                .then(res => {
                    this.table = res.data
                })
                .catch(error => console.log(error)
                ).finally(() => this.dataLoader = false)
        }
    }
})
