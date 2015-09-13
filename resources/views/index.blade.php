
@extends('layouts.master')
@section('title', 'Page Title')
@section('sidebar')
@parent
<p>This is appended to the master sidebar 2.</p>@stop
@section('content')
<p>Contenido del index otro</p><img src="{{ asset('images/inicio/videos.jpg') }}"/>@stop