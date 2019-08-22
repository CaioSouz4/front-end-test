function messageSend() {
    if( validateMyForm()== true){        
        document.getElementById('sendSucess').style.opacity =  1;
        setTimeout(function reload(){
            location.reload();    
        }, 2000); 
    }
}

/* Name: Should contain at least 2 words and 7+ characters
Email: Should contain the @ character preceded and followed by at least 1 character
Message: Should contain at least 4 words and 20+ characters
 */


function validateMyForm(){
    if(validateName()==true && validateEmail()==true && validateMessage() == true){        
        return true;
    }else{
       // alert('falta algo');        
        return false;
    }
}

function validateName(){  
    var name = document.getElementById('inputName').value;
    //var regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;    
    var words = countWords(name);
    
    if (name.length == 0){ 
        showTooltipName('Campo vazio', 140);
        document.getElementById("inputName").style.border = 'solid 2px red';
        return false;
    }else if(name.length < 7 || words < 2){  
        showTooltipName('Insira seu nome completo', 200);       
        document.getElementById("inputName").style.border = 'solid 2px red';
        return false;  
    }else{
        hideTooltipName();
        document.getElementById("inputName").style.border = 0;
        return true;  
    }   
}

function validateEmail(){
    var email = document.getElementById('inputEmail').value;
    let regexp = /^[a-z0-9.]+@[a-z0-9]/;    
   
    if(regexp.test(email) == false){
        showTooltipEmail('Insira um email válido', 200);       
        document.getElementById("inputEmail").style.border = 'solid 2px red'; 
        return false;   
    }else if(regexp.test(email) == true){
        hideTooltipEmail();
        document.getElementById('inputEmail').style.border = 0;
        return true;    
    }
}

function validateMessage(){    
    var message = document.getElementById('textarea').value;
    var words = countWords(message);   
    console.log(message)
    if(message.length < 20 || words < 4){  
        showTooltipMessage('A mensagem deve conter pelo menos 4 palavras e 20 caracteres', 200);       
        document.getElementById("textarea").style.border = 'solid 2px red';
        return false;
    } else {
        hideTooltipMessage();
        document.getElementById("textarea").style.border = 0;
        return true;
    }
}


function countWords(str){
    var total = 0;	
	str = str.replace(/(^\s*)|(\s*$)/gi,"");
	str = str.replace(/[ ]{2,}/gi," ");
	str = str.replace(/\n /,"\n");
    total = str.split(' ').length; 
    return total;
}



function showTooltipName(error, sizeTooltip) { 
    var tooltip = document.getElementById('tooltipNameError');       
    tooltip.style.opacity =  1;
    tooltip.style.width =  sizeTooltip +'px';
    tooltip.style.visibility = 'visible';
    tooltip.style.marginBottom = "-.5em";  
    tooltip.textContent = error;    
}

function hideTooltipName() {
    var tooltip = document.getElementById('tooltipNameError');    
    tooltip.style.opacity =  0;    
    tooltip.style.visibility = 'hidden';
    tooltip.style.marginBottom = "-.5em";     
}


function showTooltipEmail(error, sizeTooltip) { 
    var tooltip = document.getElementById('tooltipEmailError');       
    tooltip.style.opacity =  1;
    tooltip.style.width =  sizeTooltip +'px';
    tooltip.style.visibility = 'visible';
    tooltip.style.marginBottom = "-.5em";  
    tooltip.textContent = error;    
}

function hideTooltipEmail() {
    var tooltip = document.getElementById('tooltipEmailError');    
    tooltip.style.opacity =  0;    
    tooltip.style.visibility = 'hidden';
    tooltip.style.marginBottom = "-.5em";     
}

function showTooltipMessage(error, sizeTooltip) { 
    var tooltip = document.getElementById('tooltipMessageError');       
    tooltip.style.opacity =  1;
    tooltip.style.width =  sizeTooltip +'px';
    tooltip.style.height =  '70px';
    tooltip.style.visibility = 'visible';
    tooltip.style.marginBottom = "-.5em";  
    tooltip.textContent = error;
    tooltip.textAlign = 'left';
}

function hideTooltipMessage() {
    var tooltip = document.getElementById('tooltipMessageError');    
    tooltip.style.opacity =  0;    
    tooltip.style.visibility = 'hidden';
    tooltip.style.marginBottom = "-.5em";     
}
