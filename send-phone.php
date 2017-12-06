<?
if(isset($_POST['call-up-phone'])&&$_POST['call-up-phone']!="") { //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'aleksandr.nine@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Телефон: '.$_POST['call-up-phone'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <soffitto@example.com>\r\n"; //Наименование и почта отправителя
        $result = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        if($result) {
          echo '<span>Спасибо!<br>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время</span>';
        }
}
else {
  echo '<span>Ошибка!<br>Возможно, вы не указали номер</span>';
}
?>
