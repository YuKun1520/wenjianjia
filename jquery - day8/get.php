<?php
  if(isset($_GET['user']) && $_GET['user']!=""){
      echo $_GET['user'];
  }else{
      echo '参数不正确';
  }
?>