/*Пользователь вводит значения a и b для формулы a x b
а программа считает и выводит значение x.*/
let a=parseInt(prompt("Введите первое a"));
let b=parseInt(prompt("Введите второе b"));
let x=a*b;
alert(x);


/* Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами. */
let num_6=parseInt(prompt("Введите первое число"));
let num_7=parseInt(prompt("Введите второе число"));
let rezult4=num_6+num_7;
alert("Сумма = " + rezult4)

num_6=parseInt(prompt("Введите первое число"));
num_7=parseInt(prompt("Введите второе число"));
let rezult5=num_6-num_7;
alert("Сумма = " + rezult5)

 num_6=parseInt(prompt("Введите первое число"));
 num_7=parseInt(prompt("Введите второе число"));
let rezult6=num_6*num_7;
alert("Сумма = " + rezult6)

 num_6=parseInt(prompt("Введите первое число"));
 num_7=parseInt(prompt("Введите второе число"));
let rezult7=num_6/num_7;
alert("Сумма = " + rezult7)




prompt();
/*str1 -строковая переменная будет в себе хранить то что введет пользователь. Р -функция ввода данных
Введите строку - параметры, который польователь увидеть перед вводом данныз*/
str1=prompt("Введите строку");
/*number6 -числовая переменная будет в себе хранить то что введет пользователь parseInt() -Ф-ция которая превращает введеную строку в число чтобы 1+1=2 а не 1+1=11*/
number6=parseInt(prompt("Введите число: "));

alert(); /*это функция которая создает диалоговое окно с кнрпкой ОК */
alert("Hello World");/*alert -название функции, в скобказ - параментры */
alert(5);// alert  выводит цифры текста нужен чтобы ввести текст
// А выводит и строки и цифры одновременно
alert("GitHub" + 1 + ".");// оператор сложения строк
number5=5;
alert(number5);//alert выводит значение  переменные

/*Запрашивать данные у пользователя необходимо с помощью
prompt(), а выводить результат с помощью alert().1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.*/
let num = prompt("Введите число");/*num - название переменной promt() - команда ввода */
    alert(num**2); /*alert() - команда вывода*/
/*Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.*/
/*команда promt() -сщхраняет в себе строку
числовой тип данных int 1+1=2 строковый тип данных str "1"+"1"="11"
Синтексис создания переменной
let имя_переменной = команда+ввода("Текст"*/
let num1 = parseInt(prompt("Введите первое число"));        
let num2 = parseInt(prompt("Введите второе число"));        
alert((num1+num2)/2);  
/*Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата S=a**2=a*a*/

let num3 = parseInt(prompt("Введите длину стороны квадрата"));
let result2 = num3**2;
alert(result2);

/*Реализуйте конвертор из километров в мили (пользователь вводит килллометры) . Это значение укажите в коде как константу. 
1km -0.62milly*/
/*Переменная -именная ячейка памяти, которая хранит в себе значение */
const m=0.62;/* создали переменную константу храним в ней количество миль */
let km = parseInt(prompt("Введите количество киллометров"));
result3 = km*m;
alert(result3);


                           
                        
