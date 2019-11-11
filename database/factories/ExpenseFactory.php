<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Laraspace\Expense;
use Laraspace\ExpenseCategory;
use Faker\Generator as Faker;
use Laraspace\User;

$factory->define(Expense::class, function (Faker $faker) {
    return [
        'expense_date' => $faker->date($format = 'd/m/Y', $max = 'now'),
        'expense_category_id' => function () {
            return factory(ExpenseCategory::class)->create()->id;
        },
        'company_id' => User::find(1)->company_id,
        'amount' => $faker->randomDigitNotNull,
        'notes' => $faker->text,
        'attachment_receipt' => null
    ];
});
