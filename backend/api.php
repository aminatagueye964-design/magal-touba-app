<?php
// API Laravel pour le Magal de Touba
// Routes pour les horaires et inscriptions

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/horaires', function () {
    return response()->json([
        ['prayer' => 'Subah', 'time' => '05:30'],
        ['prayer' => 'Tisbar', 'time' => '14:00'], 
        ['prayer' => 'Tall', 'time' => '17:30']
    ]);
});

Route::post('/inscription', function (Request $request) {
    return response()->json([
        'success' => true,
        'message' => 'Pèlerin inscrit avec succès',
        'data' => $request->all()
    ]);
});