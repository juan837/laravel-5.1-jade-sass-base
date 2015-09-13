<!DOCTYPE html>
<html lang="en">
  <head>@include('partials.style')
    <title>@yield('title')</title>
  </head>
  <body>
    @section('sidebar') This is the master sidebar 1.
    @show
    <div class="container">@yield('content')</div>@include('partials.footer')
  </body>
</html>