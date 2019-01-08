<?php
   header("Context-type:text/html;charset=utf-8");
   header('Access-Control-Allow-Origin:*');
   //指定允许其它域名访问
   header('Access-Control-Allow-Methods:GET');
   // 响应类型

   header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
   // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可。


   header('Access-Control-Allow-Credentials:true');


    //  声明文件的编码格式，采用utf8
    date_default_timezone_set('Asia/Shanghai');
    // 设置当前时区为中国上海时区

   
    ini_set('display_errors','On');
    error_reporting(E_ALL);
    // 报错机制

    //判断当前的php工作环境
    if(version_compare("5.5",PHP_VERSION,">")){
       die('<h1>您的PHP环境不符最低要求，请升级到PHP5.5以上 - 当前版本号："'.PHP_VERSION.'"</h1>');
    }

    define('DATETIME',date("Y-m-d H:i:s"));
    define('DATE',date("Y-m-d"));
    // 时间

    define('DBHOST','sqld-gz.bcehost.com');//数据库链接地址
    define('DBUSER','4d1f7e4b1d054ff7ba1557756a7a7df2');//数据库账号
    define('DBPASSWORD','61e8d5cdbc99480ca88a0554e1f30b34');//数据库密码
    define('DBNAME','efjfNlmJqrsqxEkGnXGs');//数据库名

    $conn = new mysqli(DBHOST,DBUSER,DBPASSWORD,DBNAME);//设置读写权限并赋予编码格式
    mysqli_query($conn,"set character set utf8");
    mysqli_query($conn,"set names utf8");
    
    if($conn->connect_error){
        die('数据库连接失败'.$conn->connect_error);
    }else{
        // echo json_encode(
        //     array('vaild'=>true,'success'=>'数据库连接成功'.DATE),JSON_UNESCAPED_UNICODE
        // );
    }





?>