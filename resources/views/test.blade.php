<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="{{ asset("css/app.css") }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    
    <body>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title"> Laravel + React Social Media </h1>
                    <h2 class="subtitle"> An Experimental Project </h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h3 class="title is-3"> Posts </h3>
                        <div id="posts">
                        </div>
                    </div>
                    <div class="column">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, perferendis! Molestiae aperiam, eveniet porro ipsum incidunt saepe eum distinctio at non, aliquam facilis. Eveniet rem ipsam, ipsa beatae qui repudiandae?
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <script>
            window.dataUrl = "{{ route('api', 10) }}";
        </script>
        <script src="{{ asset("js/app.js") }}"></script>
    </body>
</html>