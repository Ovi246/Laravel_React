@extends('layouts.app')

@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 bg-white p-6 rounded-lg">
                
               {{-- <form action="{{ route('showFollowers', $topic->name) }}" method="post">
                @csrf
                <div>
                    <button type="submit" class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full">Show</button>
                </div> --}}
                @foreach ($followers as $follower)
                <li>{{$follower->name}}</li> 
                @endforeach
            </form>
               
        </div>
    </div>
@endsection