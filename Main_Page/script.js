function login() {
    header = document.getElementById('swiper');
    body = document.body;
    let fila = `<div id="login" class="login">
    <div>
        <button onClick="erase()" class="x_container">
            <img src="Content/x.svg" alt="" class="x">
        </button>
        <div class="login_page">
            <h2>¡Bienvenido!</h2>
            form class="form-login">
                <select class="form1_select" name="" placeholder="Tipo de Documento">
                    <option value="" disabled selected hidden>Tipo de Documento</option>
                    <option value="">DNI</option>
                    <option value="">RUC</option>
                    <option value="">Pasaporte</option>
                    <option value="">DNI</option>
                    <option value="">DNI</option>
                    <option value="">Carné de Extranjería</option>
                    <option value="">Carné Identidad Militar</option>
                    <option value="">Carné Diplomático</option>
                    <option value="">Partida de Nacimiento</option>
                    <option value="">Carné PTP</option>
                    <option value="">Doc. Identidad País Origen</option>
                </select>
                <input class="form1" id="dni" name="dni" type="text" placeholder="Numero de documento" />
                <input class="form1" id="clave" name="clave" type="password"
                    placeholder="Contraseña de Banca por Internet" />
            </form>
        </div>
        <div class="botones">
            <button id="btnacceder" class="btn" type="button">Ingresar</button>
            <button id="btnregistrar" class="btn" type="button">Afiliate</button>
        </div>
    </div>
</div>`;
    let scrip = `<script>
        var div = document.getElementById('login');
        function erase() {
            div.parentNode.removeChild(div);
        }
    </script>`
    header.lastElementChild.insertAdjacentHTML('beforebegin', fila);
    body.lastElementChild.insertAdjacentHTML('beforeend', scrip);
};

function erase() {
    var log = document.getElementById('login');
    log.parentNode.removeChild(log);
}

function asignar() {
    bank_button = document.getElementById('bank_button');
    bank_button.addEventListener("click", login);
}

window.addEventListener("load", asignar);
