<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Sokrio | Inventory Management System</title>

    <link rel="icon" href="{{ asset('assets/img/menu-icon/9.svg') }}" type="image/png">
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap1.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendors/themefy_icon/themify-icons.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendors/material_icon/material-icons.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/metisMenu.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style1.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/colors/default.css') }}" id="colorSkinCSS">
    <style>
        body{
            background: #667989;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        body{
            background: url({{ asset('assets/img/frontend-app-bg.png') }});
        }
        .card {
            background: #88b6de03;
            backdrop-filter: blur(20px);
            border-radius: 20px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-md-4 mt-0">
            <div class="card rounded-4 shadow-lg border-0 p-4">
                <div class="card-header bg-transparent border-0 text-center pt-5">
                    <h3>Admin Login</h3>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="mb-3">
                            <label for="">Email</label>
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email" autofocus>
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="password" class="">Password</label>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" autocomplete="current-password">
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                <label class="form-check-label" for="remember">
                                    {{ __('Remember Me') }}
                                </label>
                            </div>
                        </div>
                        <div class="mb-5 text-center">
                            <button type="submit" class="btn btn-primary px-5">
                                {{ __('Login') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="{{ asset('assets/js/jquery1-3.4.1.min.js') }}"></script>
<script src="{{ asset('assets/js/popper1.min.js') }}"></script>
<script src="{{ asset('assets/js/bootstrap.min.html') }}"></script>
<script src="{{ asset('assets/js/metisMenu.js') }}"></script>
{{--    <script src="{{ asset('assets/js/dashboard_init.js') }}"></script>--}}
<script src="{{ asset('assets/js/custom.js') }}"></script>
</body>
</html>
