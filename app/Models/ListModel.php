<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property ListWord $words
 * @property User $user
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class ListModel extends Model
{
    use HasFactory;

    protected $table = 'lists';

    protected $fillable = [
        'id',
        'name',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function words()
    {
        return $this->hasMany(ListWord::class, 'list_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function toArray()
    {
        $attributes = $this->attributesToArray();
        $attributes['words'] = $this->words;
        $attributes['countWords'] = count($attributes['words']);

        return array_merge($attributes, $this->relationsToArray());
    }
}
