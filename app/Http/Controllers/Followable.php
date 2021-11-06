<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Topic;
use Illuminate\Support\Facades\Auth;

trait Followable{

    public function follow(User $user)
    {
        return $this->followers()->save($user);
    }

    public function unfollow(User $user)
    {
        return $this->followers()->detach($user);
    }

    public function toggleFollow($user, $tid)
    {
        if($user->isTopicfollowing($user, $tid))
        {
            return $this->unfollow($user);
        }

        return $this->follow($user);
    }

    public function followings()
    {
        return $this->belongsToMany(Topic::class, 'topic_followers', 'follower_id', 'topic_id');
    }

    public function isTopicfollowing($user, $tid)
    {
        return $user->followings->contains($tid);   
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'topic_followers', 'topic_id', 'follower_id');
    }

}