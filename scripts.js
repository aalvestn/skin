
$(document).ready(function() {  
  
  
  
  // set an element
  $(".date").html( moment().format('DD/MM/YYYY') );
  var itt = 337;
  var its = 494;
  var itr = 150; //327
  var itt_var = 13;
  var its_var = 22;
  var itr_var = 16;
  var hora = moment().format('h');
  itt = itt - (hora*itt_var);
  its = its - (hora*its_var);
  itr = itr - (hora*itr_var);
  $(".pacotes_disponiveis_9").html(itt);
  $(".pacotes_disponiveis_5").html(itt);
  $(".pacotes_disponiveis_3").html(its);
  $(".pacotes_disponiveis_1").html(itr);
  (function(){
  var counter = itt;
  var itti =  setInterval(function() {
                    valor = Math.floor((Math.random() * 3) + 1);
                counter = counter-valor;
                if (counter >= 0) {
                  $(".pacotes_disponiveis_5").html(counter).hide().show('slow');
                }
                // Display 'counter' wherever you want to display it.
                    if (counter <= 50 && counter>5) {
                        $(".pacotes_disponiveis_5_msg").html('Últimos '+ counter +' disponíveis!');
                    }
                if (counter <= 5) {
                    $(".pacotes_disponiveis_5").html(5);
                        $(".pacotes_disponiveis_5_msg").html('Últimos 5 disponíveis!');
                    clearInterval(itti);
                }
              }, 8000);
    })();




    (function(){
    var counter = its;
    var itsi =  setInterval(function() {
                    valor = Math.floor((Math.random() * 3) + 1);
                    counter = counter-valor;
                    if (counter >= 0) {
                      $(".pacotes_disponiveis_3").html(counter).hide().show('slow');
                    }
                    // Display 'counter' wherever you want to display it.
                    if (counter <= 50 && counter > 3) {
                        $(".pacotes_disponiveis_3_msg").html('Últimos '+ counter +' disponíveis!');
                    }
                    if (counter <= 3) {
                        $(".pacotes_disponiveis_3").html(3);
                        $(".pacotes_disponiveis_3_msg").html('Últimos 3 disponíveis!');
                        clearInterval(itsi);
                    }
                }, 10000);
    })();


    (function(){
    var counter = its;
    var itsi =  setInterval(function() {
                    valor = Math.floor((Math.random() * 9) + 1);
                    counter = counter-valor;
                    if (counter >= 0) {
                      $(".pacotes_disponiveis_9").html(counter).hide().show('slow');
                    }
                    // Display 'counter' wherever you want to display it.
                    if (counter <= 50 && counter > 9) {
                        $(".pacotes_disponiveis_9_msg").html('Últimos '+ counter +' disponíveis!');
                    }
                    if (counter <= 3) {
                        $(".pacotes_disponiveis_9").html(3);
                        $(".pacotes_disponiveis_9_msg").html('Últimos 3 disponíveis!');
                        clearInterval(itsi);
                    }
                }, 10000);
    })();



    (function(){
        var counter = itr;
        var itri =  setInterval(function() {
                    valor = Math.floor((Math.random() * 5) + 1);
                    counter = counter-valor;
                    if (counter >= 1) {
                      $(".pacotes_disponiveis_1").html(counter).hide().show('slow');
                    }
                    // Display 'counter' wherever you want to display it.
                    if (counter <= 50 && counter>1) {
                        $(".pacotes_disponiveis_1_msg").html('Últimos '+ counter +' disponíveis!');
                    }
                     if (counter <= 1) {
                        $(".pacotes_disponiveis_1").html(1);
                        $(".pacotes_disponiveis_1_msg").html('ÚLTIMO DISPONÍVEL!');
                        clearInterval(itri);
                    }
                    /*if (counter <= 1) {
                        clearInterval(0);
                        $(".pacotes_disponiveis_1").html('1');
                        $(".pacote_1 .utm span").html('ESGOTADO');
                        $(".pacote_1 .utm").attr('href','#').attr('disabled',"disabled").addClass('btn-red');
                        $(".pacote_1 .pacotes-disponiveis").removeAttr('href').attr('disabled',"disabled").addClass('btn-red');
                        $(".pacotes_disponiveis_1_msg").html('ESGOTADO');
                        clearInterval(itri);
                    }*/
                }, 9000);
      })();
});
/*Script com recursos anti copia, se eu fosse você não copiava!--*/
  document.onkeypress = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
           //alert('No F-12');
            return false;
        }
    }
    document.onmousedown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }
    document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }
    $(function() {
      $(this).bind("contextmenu", function(e) {
      e.preventDefault();
        });
      $(this).bind("cut copy paste",function(e) {
          e.preventDefault();
      });
    });