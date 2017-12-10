@extends('layouts.app')

@section('content')
<div class="container">
    <section class="section">
        <h1 class="title is-1"> Register Account </h1>
    </section>
    <section class="section">
        <div style="max-width: 250px">
            <form method="POST" action="{{ route('register') }}">
                <div class="field">
                    <label for="name"> Name: </label>
                    <div class="control">
                        <input class="input {{ !$errors->has('name') ?: "is-danger" }}" type="text" name="name">
                    </div>
                    @if($errors->has("name"))
                        <p class="help is-danger">
                            {{ $errors->first("name") }}
                        </p>
                    @endif
                </div>

                <div class="field">
                    <label for="email"> Email: </label>
                    <div class="control">
                        <input class="input {{ !$errors->has('email') ?: "is-danger" }}" id="email" type="email" name="email">
                    </div>
                    @if($errors->has("email"))
                        <p class="help is-danger">
                            {{ $errors->first("email") }}
                        </p>
                    @endif
                </div>

                <div class="field">
                    <label for="password"> Password: </label>
                    <div class="control">
                        <input class="input {{ !$errors->has('password') ?: "is-danger" }}" id="password" type="password" name="password">
                    </div>
                    @if($errors->has("password"))
                        <p class="help is-danger">
                            {{ $errors->first("password") }}
                        </p>
                    @endif
                </div>

                <div class="field">
                    <label for="name"> Password Confirmation: </label>
                    <div class="control">
                        <input class="input {{ !$errors->has('password_confirmation') ?: "is-danger" }}" id="password_confirmation" type="password" name="password_confirmation">
                    </div>
                    @if($errors->has("password_confirmation"))
                        <p class="help is-danger">
                            {{ $errors->first("password_confirmation") }}
                        </p>
                    @endif
                </div>

                <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <button class="button is-primary is-link" type="submit"> Register </button>
                    </div>
                </div>

                {{ csrf_field() }}
            </form>
        </div>
    </section>
</div>
@endsection
