//该JS用于计算器学习使用
//心好累 by diocai


var num1 = '0';               //初始输入值;
var num2 = '0';               //点击运算操作后用于储存num1的参数;
var isFirst = true;          //判断是不是第一次输入;
var displayInput = '';       //用于显示表达式;
var Operated = false;        //判断是否执行了运算;
var whichOpt = -1;
var whichOptbak = -1;



function displayScreen(newInput) {

    if (Operated == true) {
        displayInput += newInput;
    } else {
        displayInput = num1;
    }


    document.getElementById('field1').value = num1;
    document.getElementById('field2').value = num2;
    document.getElementById('field3').value = displayInput;
}

function reset() {

    num1 = '0';               //初始输入值;          num1 = ''; 
    num2 = '0';               //点击运算操作后用于储存num1的参数;
    isFirst = true;          //判断是不是第一次输入;
    displayInput = '';       //用于显示表达式;
    Operated = false;        //判断是否执行了运算;
    whichOpt = -1;

    document.getElementById('field1').value = 0;
    document.getElementById('field2').value = 0;
    document.getElementById('field3').value = 0;

}



function strPlus(newInput) {

    //isFirst初始声明为true;

    if (isFirst == true) {

        if (newInput == '0') {
            return 1;
        }                                         //防止连续输入好几个0;

        if (newInput == ".") {
            num1 = num1 + ".";
        } else if (!isNaN(newInput)) {
            num1 = newInput;
        } else {
            alert("error");
            return 1;
        }                                         //判断首个输入的如果是"."就会变成"0.",如果
        /*  代码备份
            if (isFirst == true) {
        
                if (newInput == '0') {
                    return 1;
                }                                         //防止连续输入好几个0;
        
                if (newInput == ".") {
                    num1 = "0" + ".";
                } else if (!isNaN(newInput)) {
                    num1 += newInput;
                } else {
                    alert("error");
                    return 1;
                } */

        //alert(num1);

    } else {

        var existDot = /\./;
        if (existDot.test(num1) && (newInput == '.')) {
            return 1;
        }                                          //判断是否已经存在小数点，已存在的话再次点击小数点无效

        num1 += newInput;

    }

    isFirst = false;
    displayScreen(newInput);
}

//小数点
function dot() {

    var existDot = /\./;
    if (existDot.test(num1) && (newInput == '.')) {
        return 1;
    }//判断输入的数值是否已经带有小数点，是则中断函数

    num1 += '.';

    isFirst = false;
    displayScreen('.');

}

//防止连续输入运算符号，以及添加新字符
function isOpt(newInput) {

    var lastString = displayInput.charAt(displayInput.length - 1);//获取字符串的最后一个字符
    var isLastOpt = (isNaN(lastString)) && (lastString != '.');//判断最后一个字符是否为运算符
    //    var isInputOpt = (isNaN(newInput)) && (newInput != '.');//判断新输入的符号是否为运算符，多余代码留着参考

    if (isLastOpt) {
        alert("please key in a number.");
        return 1;
    } else {
        displayInput += newInput;//添加新的字符
    }

    document.getElementById('field3').value = displayInput;
}

function optPlus(newInput) {

    calculate();

    Operated = true;
    num2 = num1;
    num1 = '0';
    isFirst = true;

    whichOpt = 1;
    isOpt(newInput);


}

function opttest(newInput) {

    calculate2();
    Operated = true;
    isFirst = true;
    whichOpt = 1;
    isOpt(newInput);


}

function calculate2() {
    

    num1 = Number(num1);
    num2 = Number(num2);

    whichOptbak = whichOpt;

    if (Operated == true) {              //判断是否按了运算符
        switch (whichOpt) {
            case 1:
                num1 = num2 + num1;
                break;
            case 2:
                num1 = num2 - num1;
                break;
            case 3:
                num1 = num2 * num1;
                break;
            case 4:
                num1 = num2 / num1;
                break;
            default:
                break;
        }
    }

    num1 = num1.toString();


    Operated = false;                 //运算过一遍后视为没有键入运算符

    document.getElementById('field1').value = num1;

    num2 = num1;
    num1 = '0';

}

function optMinus(newInput) {

    calculate();

    Operated = true;
    num2 = num1;
    num1 = '0';
    isFirst = true;

    whichOpt = 2;
    isOpt(newInput);

}

function optMultiply(newInput) {

    calculate();

    Operated = true;
    num2 = num1;
    num1 = '0';
    isFirst = true;

    whichOpt = 3;
    isOpt(newInput);

}

function optDivide(newInput) {

    calculate();

    Operated = true;
    num2 = num1;
    num1 = '0';
    isFirst = true;

    whichOpt = 4;
    isOpt(newInput);

}

function calculate() {

    num1 = Number(num1);
    num2 = Number(num2);

    whichOptbak = whichOpt;

    if (Operated == true) {              //判断是否按了运算符
        switch (whichOpt) {
            case 1:
                num1 = num2 + num1;
                break;
            case 2:
                num1 = num2 - num1;
                break;
            case 3:
                num1 = num2 * num1;
                break;
            case 4:
                num1 = num2 / num1;
                break;
            default:
                break;
        }
    }

    num1 = num1.toString();


    Operated = false;                 //运算过一遍后视为没有键入运算符

    document.getElementById('field1').value = num1;

}

function getResult() {

    calculate();

}

function deleteLast() {

    displayInput = displayInput.substring(0, displayInput.length - 1);
    num1 = num1.substring(0, num1.length - 1);

    if (whichOptbak > 0) {
        whichOpt = whichOptbak;
        Operated = true;
    }

    if (displayInput.length == 0) {
        displayInput = "0";
        num1 = "0";
    }
    if (num1.length == 0) {
        num1 = "0";
    }

    document.getElementById('field1').value = num1;
    document.getElementById('field2').value = num2;
    document.getElementById('field3').value = displayInput;
}