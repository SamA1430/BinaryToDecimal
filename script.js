$(document).ready(function(){
    $("form").submit(function(){
        var value = $("#binary").val();
        var regex = /[2-9]/
        if(regex.test(value)){
            var result = toDecimal(value);
            $("#result").html("<p>The binary number is not in the right format")
        }
        else{
            var result = toDecimal(value);
            $("#result").html("<p>The decimal value of "+value+" is "+result)
        }
        return false;
    })

    function toDecimal(binary){
        string = binary.toString();
        var number = 0;
        for(let i=string.length;i>0;i--){
            if (string[i-1]=="0"){
            }
            else if(string[i-1]=="1"){
                var exponent = string.length-i;
                number += 2**exponent;
            }
        }
        return number;
    }
})