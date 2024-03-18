<?php

use App\Http\Controllers\ContactController;
use App\Models\CoveredAreas;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Main/Index');
});
Route::get('/mobile-tyre-fitting', function () {
    return Inertia::render('Main/MobileTyreFitting');
});
Route::get('/tyres', function () {
    return Inertia::render('Main/Tyres');
});
Route::get('/mobile-tyre-repair', function () {
    return Inertia::render('Main/MobileTyreRepair');
});
Route::get('/commercial-tyres', function () {
    return Inertia::render('Main/CommercialTyres');
});
Route::get('/breakdown-recovery', function () {
    return Inertia::render('Main/BreakdownRecovery');
});
Route::get('/our-terms-and-conditions', function () {
    return Inertia::render('Main/TermsAndConditions');
});
Route::get('/privacy-policy', function () {
    return Inertia::render('Main/PrivacyPolicy');
});
Route::get('/sitemap', function () {
    $areas = CoveredAreas::orderBy('slug', 'asc')->get()->toArray();

    return Inertia::render('Main/Sitemap', [
        'areas' => $areas
    ]);
});
Route::get('/search-tyres', function () {
    return Inertia::render('Main/SearchTyres');
});
Route::get('/locations/{area:slug}', function (CoveredAreas $area) {
    return Inertia::render('Main/Location', [
        'location' => ucwords($area->area),
        'slug' => $area->slug
    ]);
});

Route::get('/contact-us', [ContactController::class, 'index']);
Route::post('/contact-us', [ContactController::class, 'store']);
