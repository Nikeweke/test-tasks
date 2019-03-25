<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

<script type="text/javascript">

   function sendVote(id) {

     let options = {
       method: 'POST',
     };

     fetch('/api/vote/' + id, options)
      .then((response) => {
          console.log(response);
          if(response.ok){
            location.reload();
          } else {
            alert('Somethign go wrong')
          }
      })
      .catch((err) => {alert(err)} );

   }

</script>
