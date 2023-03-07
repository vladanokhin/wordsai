<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $word
 * @property string $sentence
 * @property Carbon $create_at
 * @property Carbon $updated_at
 */
class ListWord extends Model
{
    use HasFactory;

    protected $fillable = [
      'word',
      'sentence'
    ];

    public function list()
    {
        return $this->belongsTo(ListModel::class);
    }
}
