<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property User $user
 * @property Carbon $create_at
 * @property Carbon $updated_at
 */
class ListModel extends Model
{
    use HasFactory;

    protected $table = 'lists';

    protected $fillable = [
        'name',
    ];

    public function words()
    {
        return $this->hasMany(ListWord::class, 'list_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
