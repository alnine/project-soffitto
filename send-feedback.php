<?
if((isset($_POST['feedback-name'])&&$_POST['feedback-name']!="")
  && (isset($_POST['feedback-message'])&&$_POST['feedback-message']!="")) { //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'aleksandr.nine@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Отзыв или предложение'; //Загаловок сообщения

        $empty_field = 'не указано';
        $fb_phone = $_POST["feedback-phone"];
        $fb_email = $_POST["feedback-email"];

        if ($fb_phone == "") {
          $fb_phone = $empty_field;
        }

        if ($fb_email == "") {
          $fb_email = $empty_field;
        }

        $name = htmlspecialchars($_POST["feedback-name"]);
        $fb_message = htmlspecialchars($_POST["feedback-message"]);
        $fb_email = htmlspecialchars($fb_email);

        $name = urldecode($name);
        $fb_message = urldecode($fb_message);

        $name = trim($name);
        $fb_message = trim($fb_message);

        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$fb_phone.'</p>
                        <p>E-mail: '.$fb_email.'</p>
                        <p>Сообщение: '.$fb_message.'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <soffitto@example.com>\r\n"; //Наименование и почта отправителя
        $result = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        if($result) {
          echo '<span>Спасибо, сообщение отправлено!<br/>Если вы&nbsp;указали контактные данные, мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время';
        }
}
else {
  echo '<span>Ошибка!<br>Убедитесь, что как минимум вы указали имя и написали сообщение</span>';
}
?>
