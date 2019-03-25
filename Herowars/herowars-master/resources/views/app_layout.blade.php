<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- CSS -->
        @include('partials.css')

    </head>
    <body>

     @include('partials.navbar')

     <br />

     <div class="container">

          @yield('content')

     </div>

      <!-- JS -->
      @include('partials.js')

    </body>
</html>
