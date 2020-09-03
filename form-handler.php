<?php

if (isset($_POST['user__name']) && empty($_POST['user__name'])) {
  echo '*Заполните поля: Имя';
} elseif (isset($_POST['user__tel']) && empty($_POST['user__tel'])) {
  echo '*Заполните поля: Телефон';
} elseif (isset($_POST['user__mail']) && empty($_POST['user__mail'])) {
  echo '*Заполните поля: Email';
} elseif (isset($_POST['user__question']) && empty($_POST['user__question'])) {
  echo '*Заполните поля: Вопрос';
} else {
  echo 'Заявка отправлена!';
}
