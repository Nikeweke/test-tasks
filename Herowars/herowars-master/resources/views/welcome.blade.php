@extends('app_layout')

@section('content')
  <div class="row">

      @foreach ($heroes as $key => $value)

        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ $value['name'] }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ $value['universe_name'] }}</h6>
              <label href="#" class="hw-text-primary">Votes {{ $value['votes'] }}</label>
            </div>
            <div class="progress" style="height: 3px;">
              <div class="progress-bar hw-bg-primary"  role="progressbar" style="width: {{$value['procent']}}%;" aria-valuenow="{{$value['procent']}}" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
          </div>
        </div>

      @endforeach

   </div>
@stop
