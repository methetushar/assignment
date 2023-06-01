<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="base-url" content="{{ URL::to('/') }}" />
  <script>
  window.laravel = {
    csrfToken: '{{ csrf_token() }}',
    baseurl: '{{ URL::to(' / ') }}'
  }
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Sokrio | Inventory Management System</title>

  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>

  <link rel="icon" href="{{ asset('assets/img/menu-icon/9.svg') }}" type="image/png">
  <link rel="stylesheet" href="{{ asset('assets/css/bootstrap1.min.css') }}" />
  <link rel="stylesheet" href="{{ asset('assets/vendors/themefy_icon/themify-icons.css') }}" />
  <link rel="stylesheet" href="{{ asset('assets/vendors/material_icon/material-icons.css') }}" />
  <link rel="stylesheet" href="{{ asset('assets/css/metisMenu.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/css/style1.css') }}" />
  <link rel="stylesheet" href="{{ asset('assets/css/colors/default.css') }}" id="colorSkinCSS">
  <style>
  body {
    background: url('{{ asset('assets/img/frontend-app-bg.png')}}');
  }

  .frontend-app {
    height: 100vh;
    width: 100%;
    background: #7c7c7c73;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    backdrop-filter: blur(5px);
  }

  .content {
    background: #9ec2e03b;
    padding: 100px 50px;
    border-radius: 20px;
    backdrop-filter: blur(28px);
  }

  a.login-button {
    padding: 10px 22px;
    background: #00BCD4;
    font-weight: 700;
    color: #fff;
    border-radius: 50px;
    display: block;
  }

  .content h2,
  h4,
  h5 {
    color: #000;
  }
  </style>
</head>

<body class="crm_body_bg">
  <div class="frontend-app">
    <div class="content">
      <h2>MD. Tushar Ahmed</h2>
      <h4>Sokrio assignment</h4>
      <h5>Invetory Managemnet System</h5>
      <a class="login-button" href="{{ route('login') }}">Login into system</a>
    </div>
  </div>

  <script src="{{ asset('assets/js/jquery1-3.4.1.min.js') }}"></script>
  <script src="{{ asset('assets/js/popper1.min.js') }}"></script>
  <script src="{{ asset('assets/js/metisMenu.js') }}"></script>
  <script src="{{ asset('assets/js/custom.js') }}"></script>
</body>

</html>