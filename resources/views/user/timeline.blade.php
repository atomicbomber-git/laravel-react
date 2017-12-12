@extends("layouts.app")

@section("content")
    <section class="hero is-dark">
        <div class="hero-body">
            <div class="container">
                <h1 class="title"> Social Media </h1>
                <h2 class="subtitle"> An Experimental Project </h2>
            </div>
        </div>
    </section>

    <div class="container">
        <div id="navigation"></div>
        <script>
            window.csrfToken = "{{ csrf_token() }}";
            window.logoutUrl = "{{ route('logout') }}";
        </script>
    </div>

    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-three-fifths">
                    <div id="timeline"></div>
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
        window.dataUrl = "{{ route('user.feed', $user) }}";
        window.postUrl = "{{ route('user.post.create', $user) }}";
    </script>
@endsection