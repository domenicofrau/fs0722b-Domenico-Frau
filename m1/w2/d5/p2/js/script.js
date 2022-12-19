function t(dato){ 
    document.getElementById("operazioni").value += dato;
 }
 
 function operazione() { 
 document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value);
 }
 
 function cancella() { 
  document.getElementById("operazioni").value = ""; 
 }

 /*
            ddddddd                                                            
            d:::::d                                                             
            d:::::d                                                             
            d:::::d                                                             
            d:::::d                                                              
    ddddddddd:::::d    ooooooooooo      mmmmmmm    mmmmmmm        eeeeeeeeeeee    
  dd::::::::::::::d  oo:::::::::::oo  mm:::::::m  m:::::::mm    ee::::::::::::ee  
 d::::::::::::::::d o:::::::::::::::o m::::::::::mm::::::::::m e::::::eeeee:::::ee
d:::::::ddddd:::::d o:::::ooooo:::::o m::::::::::::::::::::::m e::::::e     e:::::e
d::::::d    d:::::d o::::o     o::::o m:::::mmm::::::mmm:::::m e:::::::eeeee::::::e
d:::::d     d:::::d o::::o     o::::o m::::m   m::::m   m::::m e:::::::::::::::::e 
d:::::d     d:::::d o::::o     o::::o m::::m   m::::m   m::::m e::::::eeeeeeeeeee  
d:::::d     d:::::d o::::o     o::::o m::::m   m::::m   m::::m e:::::::e           
d::::::ddddd::::::d o:::::ooooo:::::o m::::m   m::::m   m::::m e::::::::e          
 d::::::::::::::::d  o:::::::::::::o  m::::m   m::::m   m::::m e::::::::eeeeeeee  
  d:::::::::ddd:::d  oo:::::::::::oo  m::::m   m::::m   m::::m  ee:::::::::::::e  
   ddddddddd   dddd    ooooooooooo    mmmmmm   mmmmmm   mmmmmm    eeeeeeeeeeeeee  
               
*/
 