<template>
    <nav class="sidebar vertical-scroll  ps-container ps-theme-default ps-active-y">
        <div class="logo d-flex justify-content-between">
            <router-link :to="{name:'dashboard'}" class="d-flex align-items-center justify-content-between">
                <img style="width: 37px; padding: 4px" :src="$root.image_url+'menu-icon/9.svg'" alt>
                <h4 class="mb-0">Sokrio Inventory</h4>
            </router-link>
            <div class="sidebar_close_icon d-lg-none">
                <i class="ti-close"></i>
            </div>
        </div>
        <ul id="sidebar_menu">
            <li class="mm-active">
                <router-link :to="{name:'dashboard'}">
                    <div class="icon_menu">
                        <img :src="$root.image_url+'menu-icon/dashboard.svg'" alt>
                    </div>
                    <span>Dashboard</span>
                </router-link>
            </li>
            <li class="">
                <router-link :to="{name:'product.index'}">
                    <div class="icon_menu">
                        <img :src="$root.image_url+'menu-icon/8.svg'" alt>
                    </div>
                    <span>Products</span>
                </router-link>
            </li>
            <li class>
                <a href="#">
                    <div class="icon_menu">
                        <img :src="$root.image_url+'menu-icon/6.svg'" alt>
                    </div>
                    <span>Purchase</span>
                </a>
            </li>
        </ul>
    </nav>

</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
