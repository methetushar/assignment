<template>
    <div class="container-fluid g-0">
        <div class="row">
            <div class="col-lg-12 p-0">
                <div class="header_iner d-flex justify-content-between align-items-center py-3">
                    <div class="sidebar_icon d-lg-none">
                        <i class="ti-menu"></i>
                    </div>
                    <div class="serach_field-area d-flex align-items-center">

                    </div>
                    <div class="header_right d-flex justify-content-between align-items-center">
                        <div class="header_notification_warp d-flex align-items-center">
                            <li>
                                <a class="bell_notification_clicker nav-link-notify" href="#"> <img :src="$root.baseurl+'/assets/img/icon/bell.svg'" alt>
                                </a>
                                <div class="Menu_NOtification_Wrap">
                                    <div class="notification_Header">
                                        <h4>Notifications</h4>
                                    </div>
                                    <div class="Notification_body">

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                <a href="#"><img :src="$root.baseurl+'/assets/img/staf/2.png'" alt></a>
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>Cool Marketing </h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nofity_footer">
                                        <div class="submit_button text-center pt_20">
                                            <a href="#" class="btn_1">See More</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="CHATBOX_open nav-link-notify" href="#"> <img :src="$root.baseurl+'/assets/img/icon/msg.svg'" alt> </a>
                            </li>
                        </div>
                        <div class="profile_info">
                            <img :src="$root.baseurl+'/assets/img/client_img.png'" alt="#">
                            <div class="profile_info_iner">
                                <div class="profile_author_name">
                                    <p>{{ user.email }} </p>
                                    <h5>{{ user.name }}</h5>
                                </div>
                                <div class="profile_info_details">
                                    <a href="#">My Profile </a>
                                    <a href="#">Settings</a>
                                    <a href="javacript:" @click="logout">Log Out </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { user } from './../helpers/authentication';
    export default {
        name: "Header",
        data(){
            return {
                user : user()
            }
        },
        methods:{
            logout(){
                axios.post('/logout').then(res =>{
                    if (res){
                        window.location.reload();
                    }
                }).catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>
