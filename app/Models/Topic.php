<?php

namespace App\Models;



use App\Http\Controllers\Followable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Topic extends Model
{
    use HasFactory, Followable;

    protected $fillable = [
        'name',
    ];

   
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
