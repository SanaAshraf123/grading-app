function getresult(){
    var a= parseInt(document.getElementById('Math').value);
    var b= parseInt(document.getElementById('Physics').value);
    var c= parseInt(document.getElementById('Chemistry').value);
    var d= parseInt(document.getElementById('Science').value);
    var e= parseInt(document.getElementById('Social Studie').value);

    if(a>100 || b>100 || c>100|| d>100 || e>100){
    alert('Enter the correct Numbers out of 100')
    }

    else {
        var Obtained = a + b + c + d + e;
        document.getElementById('obtained').innerHTML = Obtained;
        var perc = Obtained/500 * 100;
        document.getElementById('per').innerHTML = perc+'%';
        if(perc>50){
            document.getElementById('grade').innerHTML='A';
            document.getElementById('tea').innerHTML='Execllent UR Pass 😍 ';
           
        }
        else if( perc>80){
            document.getElementById('grade').innerHTML='A+';
            document.getElementById('tea').innerHTML='Execllent UR Pass 😍 ';
           
        
        }
        else if( perc<50){
            document.getElementById('grade').innerHTML='B+';
            document.getElementById('tea').innerHTML='Good UR Pass  👍🏻  ';
           
        }
        else if( perc<40){
            document.getElementById('grade').innerHTML='B';
            document.getElementById('tea').innerHTML='Good UR Pass  👍🏻  ';
           
        }
            
        else if( perc<45){
            document.getElementById('grade').innerHTML='C+';
            document.getElementById('tea').innerHTML=' Fail 😡  ';
           
        }
            
        else if( perc<30){
            document.getElementById('grade').innerHTML='C';
            document.getElementById('tea').innerHTML='  Fail 😡  ';
           
        }
            else{
                document.getElementById('grade').innerHTML='no';
           
            }
    }
    
}
