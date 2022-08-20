console.clear();
var abierto_flecha = 0;
var abierto_1 = 0;
var abierto_2 = 0;
var abierto_3 = 0;
var abierto_q = 0;
function ocultar(id) { 
    if (id == 1) {
        elimina1 = document.getElementById('qpi1');
        elimina1.firstElementChild.remove();
    } else if (id == 2) {
        elimina2 = document.getElementById('qpi2');
        elimina2.firstElementChild.remove();
    } else if (id == 3) { 
        elimina3 = document.getElementById('terms');
        elimina3.innerHTML = '';
    }
}
function mostar(id) {
    if (id == 1) {
        if (abierto_1 == 1) {
            ocultar(1);
            abierto_1 -= 1;
            return;
        }
        aqui = document.getElementById('qpi1');
        let coloca1 = `<img width="95%" style="margin-left:50px;margin-top:10px" src="Recursos/panel_abajo/panel_bajo1.webp"/>`;
        aqui.insertAdjacentHTML('beforeend', coloca1);
        abierto_1 += 1;
        ocultar(2);
    } else if (id == 2) {
        if (abierto_2 == 1) {
            ocultar(2);
            abierto_2 -= 1;
            return;
        }
        aqui2 = document.getElementById('qpi2');
        let coloca2 = `<img width="95%" style="margin-left:50px;margin-top:10px" src="Recursos/panel_abajo/panel_bajo2.webp"/>`;
        aqui2.insertAdjacentHTML('beforeend', coloca2);
        abierto_2 += 1;
        ocultar(1);
    }
}
function btn_banca_inter() { 
    mostar(1);
}
function btn_banca_app() { 
    mostar(2);
}
function btn_terms() {
    if (abierto_3 == 1) {
        ocultar(3);
        abierto_3 -= 1;
        return;
    }
    aqui3 = document.getElementById('terms');
    let coloca3 = `<img src="Recursos/panel_abajo/terms.webp" width="102%">
    <p>Vigencia de la campaña:&nbsp;Del 01.09.2020 al 31.10.2020.</p>
    <p>Campaña exclusiva para personas naturales que abran o incrementen una Cuenta de Ahorros BBVA desde S/500 durante la vigencia de la campaña y mantengan dicho monto hasta el 02.11.2020. Es requisito indispensable inscribirse en el formulario web de la campaña. De cumplir con las condiciones mencionadas, el cliente contará con 01 opción para el sorteo. Las aperturas por canales digitales (Banca por Internet o App Banca Móvil) multiplican las opciones x5. Los incrementos deben ser depósitos en efectivo o transferencias interbancarias no provenientes de otras cuentas del BBVA.&nbsp;</p>
    <p>Para participar en la campaña, el cliente deberá mostrar una variación positiva de al menos S/500 entre el 31.08.2020 al 02.11.2020. Se tomará como referencia la variación entre la sumatoria de todas las Cuentas de Ahorro BBVA que posea el cliente al 31.08.2020 versus la sumatoria de todas las Cuentas de Ahorro BBVA que posea el cliente al 02.11.2020. Aquellos clientes que cumplan con las condiciones mencionadas obtendrán 01 opción para el sorteo. Los clientes que cumplan con las condiciones mencionadas y hayan abierto una Cuenta de Ahorros por canales digitales, tendrán 05 opciones para el sorteo.&nbsp;</p>
    <p>¿Cuál es el premio?&nbsp;</p>
    <p>Se realizará 01 sorteo y habrá&nbsp;500 ganadores. Se sortearán aleatoriamente los siguientes premios:</p>
    <ul>
        <li>3 premios de S/5,000.<br></li>
        <li>20 premios de S/1,000.<br></li>
        <li>30 premios de S/500.<br></li>
        <li>447 giftcards de S/100.<br></li>
    </ul>
    <p>El abono de los premios se hará en la Cuenta de Ahorros BBVA que presente la mayor parte del incremento solicitado por la campaña, máximo el último día útil del mes en el que se realizó el sorteo. En el caso de los giftcards virtuales, cada participante ganador se hará acreedor de 01 giftcard virtual del Grupo Falabella con un saldo de S/100.00. Los giftcards del Grupo Falabella serán códigos virtuales enviados en PDF para realizar compras exclusivamente por internet. Válido solo para compras en tiendas virtuales del Grupo Falabella: <a href="http://www.linio.com.pe">www.linio.com.pe</a>, <a href="http://www.falabella.com.pe">www.falabella.com.pe</a> y <a href="http://www.sodimac.com.pe">www.sodimac.com.pe</a>. La entrega de códigos se realizará mediante el correo electrónico registrado en el formulario web, en archivo adjunto encriptado y con clave. Vencimiento: enero de 2021.</p>
    <p>El sorteo se realizará el 16 de noviembre de 2020 de manera virtual por el Banco BBVA Perú y con intervención de un Notario de Lima. Los ganadores serán notificados vía correo electrónico del 17 al 24 de noviembre de 2020 a través de los datos dispuestos en el formulario web de la campaña con la finalidad de brindar las especificaciones sobre la entrega del premio correspondiente. Si algún dato de la inscripción es erróneo o en caso de no contactar a los ganadores durante los días mencionados, éstos perderán de manera automática el premio sin opción a reclamo y los giftcards volverán al dominio del Banco para poder disponer de los mismos. Para ser ganador, es requisito indispensable que la Cuenta de Ahorros que participe en la campaña se encuentre activa a la fecha del sorteo. El premio es personal e intransferible. Es máximo 01 premio por cliente. Los ganadores serán publicados en la web <a href="http://bbva.pe">bbva.pe</a>. Para ello, los participantes en esta campaña, de resultar ganadores, autorizan desde ya al Banco a publicar su DNI en la página web de ganadores del <a href="http://bbva.pe">bbva.pe</a>.&nbsp;</p>
    <p>BBVA solo actúa como intermediario, por lo que no tiene responsabilidad alguna en la idoneidad de los productos y servicios que corresponden a la presente campaña. En ese sentido, el BBVA no será responsable por cualquier eventualidad que impida la realización de la presenta campaña o que ocurra durante su ejecución, o por cualquier reclamo derivado del mismo, ni tendrá responsabilidad legal por daños o perjuicios derivados de la idoneidad de los productos o servicios ofrecidos por las empresas proveedoras que participan en la presente campaña.</p>
    <p>Para mayor información estamos a tu disposición en nuestra Banca por Teléfono al (01) 595-0000 o puedes ingresar a nuestra página web. Las tasas y tarifas de todos nuestros productos se encuentran publicadas en las oficinas del banco y en <a href="http://bbva.pe">bbva.pe</a>.</p>`;
    aqui3.insertAdjacentHTML('beforeend', coloca3);
    abierto_3 += 1;
}
function abrir_sub(name, info) { 
    div_padre = document.getElementById(name);
    div_padre.insertAdjacentHTML('beforeend', info);
    
};
function cerrar_sub(name) { 
    div_padre = document.getElementById(name);
    div_padre.firstElementChild.remove();
    
}
function flecha() {
    var name='sub_menu_flecha'
    let info = `<ul id="mini_pnl_btn"><li><a href="actualizar.html">Actualizar datos</a></li><li><a>Seguridad</a></li><li><a>Monto máximo de operaciones</a></li><li><a>Contactos</a></li><li><a>Alertas</a></li><li><a>Buzón/Informail</a></li></ul>`;
    if (abierto_flecha == 0) {
        abrir_sub(name, info);
        abierto_flecha = 1;
    } else if (abierto_flecha == 1) {
        cerrar_sub(name);
        abierto_flecha = 0;
    }
};
function quiero() {
    location.href='Transferencia.html';
};