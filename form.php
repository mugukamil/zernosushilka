<link rel="stylesheet" href="form.css">
<title>Отправка заявки</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

<?php
 @$item = $_POST['popup'];
 $url = 'http://агропрограмма.рф/zernosushilka/#thanks';
 $title = "$item";
 $subject = "$item";
 $admail = 'mugukamil@gmail.com';
 $back = '<p><a href="javascript: history.back()">Назад</a></p>';

if (@$_POST['phone']) {
    @$email = $_POST['email'];
    @$phone = $_POST['phone'];

    $content = "\n Телефон: $phone
    \n email: $email";

    if (!@mail($admail, $subject, $content, 'Content-type: text/plain; charset=utf-8')) {
        echo "Извините, произошла ошибка $back";
        exit;
    } else {
        echo 'Отправка...';
        echo "<meta http-equiv=\"refresh\" content=\"1;URL=$url\">";
    }
} else {
     die(" Пожалуйста, заполните все поля $back");
 }
