<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }
}
