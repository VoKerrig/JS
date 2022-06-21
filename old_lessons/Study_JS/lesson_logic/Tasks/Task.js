//if (age >= 14 && age <=90 );

//if (!(age >= 14 && age <=90 ));

let auth = prompt("Кто там?");

if (auth == "Админ"){
    let pass = prompt("Пароль?");
    if (pass == "Я главный") alert ("Здравствуйте!");
    else if (pass == null) alert ("Отменено");
    else alert ("Неверный пароль");
}
else if (auth == null) alert ("Отменено");
else alert ("Я вас не знаю");


