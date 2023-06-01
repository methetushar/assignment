<template>
    <div class="app-layout">
        <Sidebar></Sidebar>
        <section class="main_content dashboard_part large_header_bg">

            <Header></Header>

            <div class="main_content_iner ">
                <div class="container-fluid p-0">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Sidebar from "../components/Sidebar";
    import Header from "../components/Header";
    export default {
        name: "Layout",
        components: {Header, Sidebar}
    }
</script>

<style>
    a.router-link-exact-active.router-link-active {
        color: #23bd75 !important;
    }
    .v-toast__text{
        color: #fff !important;
    }
</style>
