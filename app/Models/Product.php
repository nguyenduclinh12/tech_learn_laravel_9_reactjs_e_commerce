<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'status',
        'description',
        'summary',
        'price',
        'discounted_price',
        'images',
        'category_id',
        'brand_id',
        'stock',
    ];
    // Master table ko lagi
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    // Master table ko lagi
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    // Child table review ko lagi
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
