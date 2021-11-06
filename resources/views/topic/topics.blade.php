@extends('layouts.app')

@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 bg-white p-6 rounded-lg">
            @foreach ($topics as $topic)
               <h3> <a href="/topic/{{$topic->name}}">{{$topic->name}} </a> </h3>
            @endforeach
        </div>
    </div>
@endsection