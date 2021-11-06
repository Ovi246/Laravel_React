<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;
use App\Http\Resources\Topic as TopicResource;

class TopicController extends Controller
{
    public function index()
    {
        $topics = Topic::all();
        // return view('topic.topics')->with('topics', $topics);
        return TopicResource::collection(Topic::all());
    }

    public function showTopic($topicName)
    {
        $topicName = Topic::where('name', $topicName)->first();
        return view('topic.show')->with('topicName', $topicName);
    }

    public function create()
    {
        return view('topic.create');
    }

    public function store(Request $request)
    {
        Topic::create([
            'name' => $request->name,
        ]);

        return redirect()->route('topics');
    }

    public function followTopic($topicName)
    {
        $topic = Topic::where('name', $topicName)->first();

        if (!$topic) {
            return redirect()->back()->with('error', 'User does not exist.');
        }

        $topic->toggleFollow(auth()->user(), $topic);
        return response(201);;
    }

    public function showFollowers($topicName)
    {
        $topic = Topic::where('name', $topicName)->first();
        $followers = $topic->followers;
        return view('topic.showf')->with('followers', $followers);
    }
}
