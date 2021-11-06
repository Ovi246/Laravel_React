@extends('layouts.app')

@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 bg-white p-6 rounded-lg">
            @foreach ($posts as $post)
                <h1> <a href="/{{$post->title}}">{{$post->title}} </a> </h1>
                <p>{{ $post->body }}</p>
            @endforeach
        </div>
    </div>
@endsection