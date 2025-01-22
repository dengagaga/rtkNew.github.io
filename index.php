<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6891867918:AAHZTeJd21YEEaLD9_9UlEh1zwr_y1mCQhU";

//Сюда вставляем chat_id
$chat_id = "-1002322594909";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $fam = ($_POST['fam']);
    $phone = ($_POST['phone']);
    $gmail = ($_POST['gmail']);
    $massage = ($_POST['massage']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Фамилия:' => $fam,
        'Телефон:' => $phone,
        'Почта:' => $gmail,
        'Сообщение:' => $massage,
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
          header("Location: index.html");
          exit();
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}


$error = true; $secret = '6LdxVH4qAAAAAOLawLqI6RFA14V_rJcKTIEuYmt0';
if (!empty($_POST['g-recaptcha-response'])) { $curl = curl_init('https://www.google.com/recaptcha/api/siteverify'); curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); curl_setopt($curl, CURLOPT_POST, true); curl_setopt($curl, CURLOPT_POSTFIELDS, 'secret=' . $secret . '&response=' . $_POST['g-recaptcha-response']); $out = curl_exec($curl); curl_close($curl); $out = json_decode($out); if ($out->success == true) { $error = false; } }
if ($error) { echo 'Ошибка заполнения капчи.'; }
?>