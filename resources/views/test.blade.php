<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="{{ asset("css/app.css") }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    
    <body>
        <div id="example">
        </div>

        <script>
            window.dataUrl = "{{ route('api') }}";
        </script>
        <script src="{{ asset("js/app.js") }}"></script>
    </body>
</html>