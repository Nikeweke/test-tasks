<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $viewArgs['title'] ?></title>

    <!-- CSS -->
    <link rel="stylesheet" href="/public/booter/booter.css">

  </head>

  <body>
     <div class="container" style="margin-top:40px;">

         <h3>Hello</h3>

         <table class="table">
           <thead>
             <tr>
               <th>#</th>
               <th>Name</th>
               <th>Email</th>
             </tr>
           </thead>
           <tbody>

           <?php foreach ($viewArgs['users'] as $key => $value) { ?>

                 <tr>
                  <th scope="row"><?= $key ?></th>
                  <td><?= $value['name'] ?></td>
                  <td><?= $value['email'] ?></td>
                </tr>

            <?php }  ?>

           </tbody>
         </table>


    </div>


    <!--=========================================== JS  -->
    <script src="/public/booter/jq.js"></script>
    <script src="/public/booter/tether.js" ></script>
    <script src="/public/booter/booter.js"></script>

  </body>
</html>
