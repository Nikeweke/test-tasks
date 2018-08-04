<?php
/*
*  Take 10 minutes
*
*/ 

// 1 max nested
function myMax($xs) {
    foreach ($xs as $value) {
        if (is_array($value)) {
            $value = myMax($value);
        }
        if (!(isset($max))) {
            $max = $value;
        } else {
            $max = $value > $max ? $value : $max;
        }
    }
    return $max;
}
   
echo myMax([1, 2, [3, 4]]); // 4
  

// 2 sort
$list = [20, 10, -5, 0, 5];
    
function mySort(&$array) {
    $done = false;
    while (!$done) {
      $done = true;
      for ($i = 1; $i < count($array); $i += 1) {
        if ($array[$i - 1] > $array[$i]) {
          $done = false;
          $tmp = $array[$i - 1];
          $array[$i - 1] = $array[$i];
          $array[$i] = $tmp;
        }
      }
    }
}

mySort($list);
print_r($list); // -5, 0, 5, 10, 20
