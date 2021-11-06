@extends('layouts.app')

@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 bg-white p-6 rounded-lg">
            @if(count($posts)>0)
                @foreach ($posts as $post)
                    <h1>{{$post->title}}</h1>
                    <p>{{$post->body}}</p>
                @endforeach
            @endif
        </div>
    </div>
@endsection