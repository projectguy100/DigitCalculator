//Number insertion
function insert(num){
                document.form.textview.value = document.form.textview.value + num;
           }
//Equal
function equal(){
                var exp = document.form.textview.value;
                if (exp){
                    document.form.textview.value = eval(exp);
                }
            }
 //Clear
function clean(){
              document.form.textview.value = " ";
            }
 //Backspace
function back(){
                var exp = document.form.textview.value;
                document.form.textview.value = exp.substring(0,exp.length-1);
            }
//Sin,cos,tan
function sin(x){
              equal();
              document.form.textview.value = Math.sin(x * Math.PI / 180);
}
function cos(x){
              equal();
              document.form.textview.value = Math.cos(x * Math.PI / 180);
}
function tan(x){
              equal();
              document.form.textview.value = Math.tan(x * Math.PI / 180);
}
//Factorials
function fact(num) {
  if (num === 0 || num === 1)
    document.form.textview.value = 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  document.form.textview.value = num;
}
//Complex mode
function complex() {
    //Checkbox
    var checkBox = document.getElementById("complexcheck");
    //Text
    var text = document.getElementById("complex");
    //If statement
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}


