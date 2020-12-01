1. const same type again asbe na . 
        const a = "somthing";
        btw you can not again declear a ="anything";

        const array[21,22];
        in this array you can push pop insert anything can do 
        btw you can not again declear const array["faisal","youhana"];

        so we can change value but cannot again declear.

2. let can be different 
        
        let a = "faisal";
        a = "youhana";
        mainly we use let in loop


4. var can access everywhere in code section even for loop ar modder i kau bahir teke
   access korte pare var keyword

        ver sum = 0;
        for(var i=0;i<10;i++){
            sum +=i;
        }
        console.log(i);


5. function defult perameter ues to when we set some perameter then it work this perapeter
    but somehow if we donot set then it work defult perameter 
      
        function faisal(let x , let y = 5) {
            /// somthing doing 
        }
        faisal (10,30) /// output will be 10 and 30

        faisal(10)  /// output will be 10 and 5


6. string template in js we can use this using ` ` sign if we want to space than write

         console.log( `${faisal} ${ahmed} is a good boy `);
         /// then output will be faisal ahmed is a good boy 
        console.log( `i am happy 
        do not need this
        okk`)
        /// output will be i am happy
        /// do not need this
        /// okk.

        so ` ` ar modde je vabe likha hobe seivabe output dibe .


7. Arrow function 

        syntex 

        variable name = ( perameter) => return type 
        const numberReturn = (x, y) => x + y;
        const numberReturn1 = () => 5;
        const numberReturn2 = (x) => x * 5;

        console.log(numberReturn(3, 4)); /// 7
        console.log(numberReturn2(3));   /// 15
        console.log(numberReturn1());    /// 5


8. ... in js or spread operator  mainly it use to seperate element in the array .

        it is to concart array 
            const ages = [12, 13, 14];
            const ages1 = [10, 11, 15];
            const ages2 = [7, 8, 9];
            const allAges = [...ages, ...ages1, ...ages2];
            console.log(allAges);

        it use to find maximum or minimum number in array 
            const max = Math.max(...ages, ...ages1, ...ages2);
            console.log(max);



9. js is false if we get 

            ""
            NULL
            NuN
            false
            0
            undefined

10 . null vs undefined


11. difference between == and === 
 
        == just value check kore 
        === value and type 2 tai check kore

        let x = 1;
        let y = true;
        x==y ==> true;
        x===y ==> false;



