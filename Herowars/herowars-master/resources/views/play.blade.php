@extends('app_layout')

@section('content')
  <div class="row">

     @if($endplay)
        <div class="card col">
          <div class="card-body text-center">
            <h3 class="card-title">FINISH</h3>
            <button onclick="location.href='{{route('index.play')}}'" class="btn btn-success" type="button" name="button">Try again</button>
            <button onclick="location.href='{{route('index.main')}}'" class="btn btn-primary" type="button" name="button">Go home</button>
          </div>
        </div>

     @else
         <div class="card col-md-5" style="width: 18rem; margin-right:20px;">
           <div class="card-body text-center">
             <h3 class="card-title">{{ $left['name'] }}</h3>
             <h6 class="card-subtitle mb-2 text-muted">{{ $left['universe_name'] }}</h6>
             <button onclick="sendVote({{$left['id']}})" class="btn btn-success" type="button" name="button">Choose</button>
           </div>
         </div>

         <div class="card col-md-5" style="width: 18rem;">
           <div class="card-body text-center">
             <h3 class="card-title">{{ $right['name'] }}</h3>
             <h6 class="card-subtitle mb-2 text-muted">{{ $right['universe_name'] }}</h6>
             <button onclick="sendVote({{$right['id']}})" class="btn btn-success" type="button" name="button">Choose</button>
           </div>
         </div>
     @endif

   </div>
@stop
