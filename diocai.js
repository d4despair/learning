       
        
        var num1="";
        var number2="";
        var displayInput ="";
        var isPlus=false;
        var isFirst=true;
        var Operated = false;

        function displayScreen()
        {
            if (Operated==true) {
                displayInput+=num1;
            } else{
                displayInput=num1;
            }

            document.getElementById('field1').value=num1;
            document.getElementById('field3').value=num2;
            document.getElementById('field2').value=displayInput;
        }

        function strPlus(b) {

            alert(isFirst);           //isFirst初始声明为true;
            //isFirst=false;


            if (isFirst == true) {
                if (b == ".") {
                    num1 = "0" + ".";
                    alert("1");
                } else if (!isNaN(b)) {
                    num1 += b;
                    alert("2");
                } else {
                    alert("error");
                    return 1;
                }
                alert("good");
            }

            alert("next");

            var existDot = /\./;
            if (existDot.test(num1) && (b == '.')) {
                return 1;
            }                                          //判断是否已经存在小数点，已存在的话再次点击小数点无效
            num1 += b;
            isFirst = false;
            displayScreen();
            alert("final");
        }



        function setZero()
        {
            num1="";
            displayScreen();

            isFirst=true;
        }

 /*       function functionPlus()
        {
            //getResult();
            Operated=true;
            isPlus=true;
            displayInput+="+";
            number2=num1;
            num1="";
*/

        }
        function getResult()
        {
            num1=Number(num1);
            number2=Number(number2);

            if (isPlus==true){
                num1+=number2;      
                isPlus=false;
            }

            document.getElementById('field1').value=num1;


        }

        