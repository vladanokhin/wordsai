<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
{{--        <link rel="icon" href="assets/images/icon.png">--}}

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset(mix('assets/vendor/fonts/boxicons.css')) }}" />

        <!-- Core CSS -->
        <link rel="stylesheet" href="{{ asset(mix('assets/vendor/css/core.css')) }}" />
        <link rel="stylesheet" href="{{ asset(mix('assets/vendor/css/theme-default.css')) }}" />
        <link rel="stylesheet" href="{{ asset(mix('assets/css/demo.css')) }}" />

        <link rel="stylesheet" href="{{ asset(mix('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css')) }}" />
        <title></title>
        @vite('resources/scss/app.scss')
    </head>
    <body>
        <div id="app"></div>
    </body>
    <!-- laravel style -->
    <script src="{{ asset('assets/vendor/js/helpers.js') }}"></script>

    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{ asset('assets/js/config.js') }}"></script>

    <!-- beautify ignore:end -->
</html>
