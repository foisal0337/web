

basic syntex of function 

1.
            function functionName(parameters) {
            // code to be executed
            }


2. 
            function (a, b) {
                return a * b
            }
            document.getElementById("demo").innerHTML = x;


3.  

        function (a, b) {
             return a * b
        }
        var x = myFunction(4, 3) * 2;
        document.getElementById("demo").innerHTML = x;



4.  argument.length() and toString() --> it represent how many argument in function and another one represent that convert into string 
        function myFunction(a, b) {
        return arguments.length;
        }
        document.getElementById("demo").innerHTML = myFunction(4, 3);


5. we can use js function as 
        function findMax() {
        var i;
        var max = -Infinity;
        for(i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
            max = arguments[i];
            }
        }
        return max;
        } 
        document.getElementById("demo").innerHTML = findMax(4, 5, 6);

        another 

         function sumAll() {
        var i;
        var sum = 0;
        for(i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
        }
        document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88);















Event


1. onclick use for event add 
        <button onclick="clk()">click me </button>

            <script>
                function clk() {
                    alert("Fine oky");
                }
            </script>

2. add eventlistener 
       <button id="demo"> click me </button>
       <script>
            // function fun(){

            //  }

            document.getElementById("demo").addEventListener("click",function(){
                // statement . 
                // or we can also  document.getElementById("demo").addEventListener("click",fun);
            })

3. Event bubble 
    ami jodi kono action korte cai taile age jai id dhore koreci seta hobe than tar parent than tar parent and continue . 

4. stop propagation 
    ami jodi cai jai id te event use koreci just oi id action hobe than we need to use event.stopPropagation();
    
    <script>
            document.getElementById("demo").addEventListener("click",function(){
                // statement 
                event.stopPropagation();
            })
            document.getElementById("demo").addEventListener("click",function(){
                // statement 
            })
            document.getElementById("demo").addEventListener("click",function(){
                // statement 
            })
            
    </script>



