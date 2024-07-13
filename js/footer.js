/* 
Este es un componente que se reutiliza en cada pagina del sitio web
el componente es un footer el cual tiene la información del sitio 
asi como la información de los desarrolladores.
*/
document.write(`

    <footer>
       
        <!-- Enlaces Redes Sociales -->
        <ul class="footer-encales">

            <!-- Facebook -->
            <li>
                <ion-icon name="logo-facebook" class="icono-footer"></ion-icon>
                <a href="https://www.facebook.com/profile.php?id=100082157757979" target="_blank">Facebook</a>
            </li>
            
            <!-- Twitter -->
            <li>
                <ion-icon name="logo-twitter"></ion-icon>
                <a href="https://twitter.com/_ryan_ag" target="_blank">Twitter (X)</a>
            </li>

        </ul>
			
        <!-- Creditos -->
		<div class="footer-creditos">
            <b>Hecho por RyanAg ©</b>
		</div>

        <!-- Iconos -->
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        <!-- Codigo JS -->
        <script src="./js/funciones.js"></script>

    </footer>

`);