$(function () {
    var page = 1
    var banner = 1;

    var contentPage1 = `<div class="row  align-items-center">
    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    1</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Nunca contener la respiración.</h3>

                <p class="text-white one-em "> No hay problema para respirar lenta y suavemente, sólo
                    asegúrese de
                    que
                    mantengan un ritmo regular y constante. </p>
            </div>

        </div>
    </div>


    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    2</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Planifique su inmersión e infórmese de las
                    condiciones actuales</h3>

                <p class="text-white one-em "> Para bucear de forma segura debido a las posibles
                    variaciones en tantos parámetros, por lo que siempre debe asegurarse de informarse
                    sobre las condiciones actuales la mañana del día en que se planea el buceo.</p>
            </div>

        </div>
    </div>


    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    3</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Verifique la seguridad de su equipo la noche
                    anterior.</h3>

                <p class="text-white one-em "> Los controles de seguridad del equipo antes del buceo son
                    otra necesidad absoluta si desea asegurarse de que está lo más absolutamente seguro
                    posible: el 15% de las muertes por buceo en 2016 fueron causadas por fallas en el
                    equipo que podrían haberse evitado si los buceadores hubieran revisado sus kit de
                    buceo con más rigor antes de entrar al agua. </p>
            </div>

        </div>
    </div>

</div>`
    var contentPage2 = `
    <div class="row  align-items-center">
                    <div class="col-12 ">
                        <div class="row pt-3 pb-3">
                            <div class="col-12 col-md-1">
                                <div
                                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                                    4</div>
                            </div>
                            <div class="col-9">
                                <h3 class="fw-bold text-green fs-4 mt-2">Asciende lenta y seguramente.</h3>

                                <p class="text-white one-em "> La prevención es simple: sólo asegúrese de ascender a una velocidad de no más de 18 metros / 60 pies por minuto y asegúrese de su parada de seguridad durante tres minutos, a menos que la falta de aire o las condiciones del océano nieguen la posibilidad de hacerlo.</p>
                            </div>

                        </div>
                    </div>


                    <div class="col-12 ">
                        <div class="row pt-3 pb-3">
                            <div class="col-12 col-md-1">
                                <div
                                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                                    5</div>
                            </div>
                            <div class="col-9">
                                <h3 class="fw-bold text-green fs-4 mt-2">Sumérjase dentro de sus límites. </h3>
                                <p class="text-white one-em "> La vida podría estar en juego, así que asegúrese siempre de mantenerlos dentro de sus límites en cuanto a conocimientos y aptitud física.</p>
                            </div>

                        </div>
                    </div>


                    <div class="col-12 ">
                        <div class="row pt-3 pb-3">
                            <div class="col-12 col-md-1">
                                <div
                                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                                    6</div>
                            </div>
                            <div class="col-9">
                                <h3 class="fw-bold text-green fs-4 mt-2">Asegúrese de estar físicamente listo para bucear debe estar alerta y concentrado.</h3>

                                <p class="text-white one-em ">Antes de bucear, tomen su tiempo para considerar su bienestar físico y mental; si el turista se siente mal de alguna manera, no es una buena idea bucear. El encanto de la experiencia puede ser muy tentador, pero no tiene sentido correr el riesgo si no se siente en óptimas condiciones. Si tiene algún tipo de dolencia, si es portador de un insecto o incluso si bebió demasiado la noche anterior, realmente es recomendable esperar hasta otro día en el que pueda estar completamente seguro de que nada pondrá en peligro su vida. bienestar. </p>
                            </div>

                        </div>
                    </div>

                </div>

`

    var contentPage3 = `
    <div class="row  align-items-center">
    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    7</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Consulte sus medidores con regularidad.</h3>

                <p class="text-white one-em "> Esto puede parecer una obviedad, pero te sorprendería saber cuántas personas descuidan seguir revisando sus medidores con regularidad y, en consecuencia, terminan en problemas, debido a este hecho, deben realizar un ascenso sin una parada de seguridad que te acerque a la enfermedad por descompresión. Manténgase en comunicación constante con los turistas de buceo con respecto a esta regla de buceo y avíseles cuando su tanque está al nivel de su planificación.  </p>
            </div>

        </div>
    </div>


    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    8</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Regla de los tercios. </h3>

                <p class="text-white one-em "> La “regla de los tercios” significa que debe usar un tercio de su aire para descender, un tercio para regresar y luego tener un tercio en reserva para su ascenso. Si sobrepasa el uso de aire estimado, entonces uno puede terminar en todo tipo de molestias, así que, para reiterar, siempre vigile de cerca el medidor y cumpla con esta regla lo más estrictamente posible.</p>
            </div>

        </div>
    </div>


    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    9</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Nunca se debe de bucear solo, a menos que esté debidamente capacitado. </h3>

                <p class="text-white one-em "> La presencia de un compañero reduce drásticamente el riesgo, así que asegúrese de tener uno.</p>
            </div>

        </div>
    </div>

</div>

`


    var contentPage4 = `
    <div class="row  align-items-center">
    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    10</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Establezca una flotabilidad positiva en la superficie para conservar energía. </h3>

                <p class="text-white one-em "> Lograr una flotabilidad positiva en la superficie evita el ahogamiento debido al agotamiento al preservar la energía; si uno intenta permanecer en la superficie cuando está sobrecargado, es probable que se canse y, en consecuencia, no pueda lidiar con los problemas que puedan surgir después de la inmersión. El uso correcto de su compensador de flotabilidad y cinturón de lastre es clave aquí.</p>
            </div>

        </div>
    </div>


    <div class="col-12 ">
        <div class="row pt-3 pb-3">
            <div class="col-12 col-md-1">
                <div
                    class="rule-number d-flex justify-content-center align-items-center text-white fs-5 arial-bold-italic">
                    11</div>
            </div>
            <div class="col-9">
                <h3 class="fw-bold text-green fs-4 mt-2">Bono</h3>

                <p class="text-white one-em "> Nunca pierda la oportunidad de tomar un curso de actualización, ¡practique y actualice sus habilidades con frecuencia!</p>
            </div>

        </div>
    </div>


</div>

`
    $("#page-before").click(function () {
        switch (page) {
            case 1:
                break;
            case 2:
                $("#contain-rules").hide();

                $("#contain-rules").empty();
                $("#contain-rules").html(contentPage1);
                $("#contain-rules").fadeIn();

                page = 1;
                break;
            case 3: $("#contain-rules").hide();

                $("#contain-rules").empty();
                $("#contain-rules").html(contentPage2);
                $("#contain-rules").fadeIn();

                page = 2;
                break;
            case 4:
                $("#contain-rules").hide();

                $("#contain-rules").empty();
                $("#contain-rules").html(contentPage3);
                $("#contain-rules").fadeIn();

                page = 3;
                break;
        }
    })

    $("#page-after").click(function () {
        switch (page) {
            case 1:
                $("#contain-rules").hide();
                $("#contain-rules").empty();
                $("#contain-rules").html(contentPage2);
                $("#contain-rules").fadeIn();
                page = 2;
                break;
            case 2:
                $("#contain-rules").hide();

                $("#contain-rules").empty();
                $("#contain-rules").html(contentPage3);
                $("#contain-rules").fadeIn();

                page = 3;
                break;
            case 3:
                $("#contain-rules").hide();

                $("#contain-rules").empty();
                $("#contain-rules").html(contentPage4);
                $("#contain-rules").fadeIn();

                page = 4;
                break;
            case 4:
                break;
        }
    })


    $("#page-after-banner").click(function () {
        switch (banner) {
            case 1:
                $('#header').css('background-image', 'url(../assets/images/banner-2.png)').animate({ opacity: 1 }, 200);
                banner = 2;
                break;
            case 2:
                $('#header').css('background-image', 'url(../assets/images/banner-3.png)').animate({ opacity: 1 }, 200);
                banner = 3;

                break;
            case 3:
                $('#header').css('background-image', 'url(../assets/images/banner-4.png)').animate({ opacity: 1 }, 200);
                banner = 1;

                break;
        }
    })



    $("#page-before-banner").click(function () {
        switch (banner) {
            case 1:
                $('#header').css('background-image', 'url(../assets/images/banner-3.png)').animate({ opacity: 1 }, 200);
                banner = 3;
                break;
            case 2:
                $('#header').css('background-image', 'url(../assets/images/banner-4.png)').animate({ opacity: 1 }, 200);
                banner = 1;

                break;
            case 3:
                $('#header').css('background-image', 'url(../assets/images/banner-2.png)').animate({ opacity: 1 }, 200);
                banner = 2;

                break;
        }
    })

    $('h1').hide()
    $('h1').fadeIn(2000)

    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        $('h2').each(function () {
            var offset = $(this).offset().top;
            if (offset < scrollPos + windowHeight) {
                $(this).addClass('show');
            }
        });
        
    });



})