document.write(`

    <!-- Contenedor Header -->
    <header>

        <!-- Bienvenida -->
        <div class="bienvenida">

            <!-- Titulo MyStuff -->
            <a href="./index.html" class="bienvenida__titulo">🎲MyStuff</a>

            <!-- Botones Menu lateral -->
            <div class="bienvenida__btns-menu">
                <ion-icon name="menu-outline" class="btn-menu-abrir"></ion-icon>
                <ion-icon name="close-outline" class="btn-menu-cerrar"></ion-icon>
            </div>

        </div>

        <!-- Menu Navegacion -->
        <nav id="nav">

            <!-- Menu 1 -->
            <ul class="menu-1">

                <!-- Seccion Noticias -->
                <li><a href="./index.html">Noticias</a></li>

                <!-- Seccion Proyectos -->
                <li><a href="#">Proyectos <ion-icon name="chevron-forward-outline" class="menu__icono"></ion-icon></a>

                    <!-- Menu 2 -->
                    <ul class="menu-2">
                        <li><a href="#juegoDados">Juego de Dados</a></li>
                        <li><a href="#virtualFishing">Virtual Fishing</a></li>
                        <li><a href="#pEnfermeria">Proyecto Enfermeria</a></li>
                        <li><a href="#ganMan">Gan-Man</a></li>
                    </ul>

                </li>

                <!-- Seccion Minecraft -->
                <li><a href="#">Minecraft <ion-icon name="chevron-forward-outline" class="menu__icono"></ion-icon></a>

                    <!-- Menu 2 -->
                    <ul class="menu-2">
                        <li><a href="#mundos">Mundos</a></li>
                        <li><a href="texturas.html">Texturas</a></li>
                    </ul>
                    
                </li>

                <!-- Seccion 3DS -->
                <li><a href="#">3DS <ion-icon name="chevron-forward-outline" class="menu__icono"></ion-icon></a>

                    <!-- Menu 2 -->
                    <ul class="menu-2">
                        <li><a href="#cias">Cias</a></li>
                        <li><a href="#">Firmware R4<ion-icon name="chevron-forward-outline" class="menu__icono"></ion-icon></a>

                            <!-- Menu 3 -->
                            <ul class="menu-3">
                                <li><a href="firmwareR4Original.html">Original</a></li>
                                <li><a href="firmwareR4Clon.html">Clon</a></li>
                            </ul>
                            
                        </li>
                        <li><a href="#">Personalizar <ion-icon name="chevron-forward-outline" class="menu__icono"></ion-icon></a>
                            
                            <!-- Menu 3 -->
                            <ul class="menu-3">
                                <li><a href="#insignias">Insignias</a></li>
                                <li><a href="homeMenu3ds.html">Home Menu</a></li>
                            </ul>

                        </li>
    
                    </ul>
    
                </li>

                <!-- Seccion Etcetera -->
                <li><a href="#">Etc <ion-icon name="chevron-forward-outline" class="menu__icono"></ion-icon></a>

                    <!-- Menu 2 -->
                    <ul class="menu-2">
                        <li><a href="activarWindows.html">Activar Windows</a></li>
                        <li><a href="activarOffice.html">Activar Office</a></li>
                        <li><a href="desbloquearMc.html">Desbloquear Minecraft</a></li>
                        <li><a href="materialCursor.html">Material Cursor Dark</a></li>
                    </ul>
    
                </li>

            </ul>

        </nav>

    </header>
`);