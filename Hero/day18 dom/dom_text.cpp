DOM--> document object model  for linking using script tag in last position of body tag and it is allow intrenal and external use  
        <script src="dom.js"></script>
        <script>
            console.log(20);
            alert('It is time to okk');
        </script>




js akta lode kore next step a jai. js li kore html a js a poriborton kore object akare read korte thake which is dom.




DOM importent tag 

        document
        document.getElementsByTagName('p');  
        document.getElementById('first');              // id give only one element
        document.getElementsByClassName('author');     // class give more



     
    in Above we can use querySelectorAll()  use( inner no fap allow oky )  for getElementsByTagName() , getElementById(),getElementsByClassName() , if class than use . if id than use # or others normal

                <h2>Finding HTML Elements by Query Selector</h2>

                <p>Hello World!</p>

                <p class="intro">The DOM is very useful.</p>
                <p class="intro">This example demonstrates the <b>querySelectorAll</b> method.</p>

                <p id="demo"></p>

                <script>
                var x = document.querySelectorAll("p.intro");
                var y = document.getElementById("demo").innerHTML = "I am faisal" + x[0].innerHTML;
                </script>

                 document.quearySelector('first').setAttribute('title','I am faisal');






    if we want to change anything than we can use .innerHTML  .. it is html propertice 
        document.getElementById("author").innerHTML = " I am Faisal" ;




    and also we can change style also .. it is css propertics 
        document.getElementById('first').style.color = 'blue';



    For edit same element  
    <h1 onclick="this.innerHTML='Ooops!'">Click on this text!</h1>

    For creating element use document.createElement();
                <p id="f">I am Faisal Ahmed</p>
                var x = document.getElementById("f");
                var y = document.createElement('p');
                y.innerHTML = "Hello";
                x.appendChild(y);
            





