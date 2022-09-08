<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>Jamar</title>

        <!-- Scripts -->
        <script>
            @auth
                window.Permissions = {!! json_encode(Auth::user()->getPermissions(), true) !!};
            @else
                window.Permissions = [];
            @endauth
        </script>

        @routes
        @vite(['resources/js/app.js', 'resources/css/app.css'])
    </head>
    <body class="font-sans antialiased text-cool-grey-700">
        @inertia
    </body>
</html>
