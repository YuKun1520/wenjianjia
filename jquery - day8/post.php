<?php
  if(isset($_POST['user']) && $_POST['user']!=""){
       var_dump($_POST);
  }else{
      echo '参数不正确';
  }
?>