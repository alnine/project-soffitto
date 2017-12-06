<?
if((isset($_POST['order-name'])&&$_POST['order-name']!="")
  && (isset($_POST['order-phone'])&&$_POST['order-phone']!="")
  && (isset($_POST['order-date'])&&$_POST['order-date']!="")
  && (isset($_POST['order-time'])&&$_POST['order-time']!="")) { //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'aleksandr.nine@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заказ замера'; //Загаловок сообщения
        $name = htmlspecialchars($_POST["order-name"]);
        $name = urldecode($name);
        $name = trim($name);
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$_POST['order-phone'].'</p>
                        <p>Дата: '.$_POST['order-date'].'</p>
                        <p>Время: '.$_POST['order-time'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <soffitto@example.com>\r\n"; //Наименование и почта отправителя
        $result = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        if($result) {
          echo '<span>Спасибо!<br/>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время для подтверждения замера</span>';
        }
}
else {
  echo '<span>Ошибка!<br>Необходимо заполнить все поля</span>';
}
?>
