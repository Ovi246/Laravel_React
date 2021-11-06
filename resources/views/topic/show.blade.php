@extends('layouts.app')

@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 bg-white p-6 rounded-lg">
            <div class="flexbox flex-auto">
                
            </div>
            <form action="{{ route('followTopic', $topicName->name) }}" method="post">
                @csrf
                <div>
                    <h1 style="display:inline;">{{$topicName->name}}</h1>
                    <button type="submit" class="bg-blue-500 text-white px-1 py-1 rounded font-medium w-small">
                        {{ auth()->user()->isTopicfollowing(auth()->user(), $topicName) ? 'Unfollow' : 'Follow' }}
                    </button>
                    
                </div>
            </form>
               @foreach ($topicName->posts as $post)
                  <h1>{{$post->title}}</h1>
                  <p>{{$post->body}}</p> 
               @endforeach
               
        </div>
    </div>
@endsection