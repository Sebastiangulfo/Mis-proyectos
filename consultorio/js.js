const mainContent = document.getElementById('app');
function cambiarContenido(seccion) {
    switch(seccion) {
        case 'inicio':
            mainContent.innerHTML = `
                 <div class="hero">
                    <div class="hero-text">
                        <h1>Your Health <br> is Our Priority</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</p>

                        <button class="btn">Learn More</button>
                    </div>

                    <div class="hero-img">
                        <img src="https://media.istockphoto.com/id/1484684254/es/vector/joven-m%C3%A9dico-personaje-masculino-sentado-en-el-escritorio-con-una-computadora-port%C3%A1til-que.jpg?s=612x612&w=0&k=20&c=FD4Q4bByrpSabOG3KMzvVA6kGAbAYGbRY5FLsGokekk="alt="imginicio" style="height: 400px; width: 500px;">
                    </div>
                </div>

                <div class="services">

                    <div class="card">
                        <div class="card-icon">✚</div>
                        <h3>Emergency Care</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div class="card">
                        <div class="card-icon">🔒</div>
                        <h3>Medical Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temoор</p>
                    </div>

                    <div class="card">
                        <div class="card-icon">🧪</div>
                        <h3>Medical Research</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                </div>
            `;
            break;
        case 'agenda':
            mainContent.innerHTML = `
                <div class="agenda-container">
                    <div class="agenda-header">
                    <h2>Citas del día</h2>
                    <input type="date" value="2025-11-03">
                    </div>

                    <table class="agenda-table">
                    <thead>
                        <tr>
                        <th>Hora</th>
                        <th>Paciente</th>
                        <th>Doctor</th>
                        <th>Motivo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td>08:00 AM</td>
                        <td>Juan Pérez</td>
                        <td>Dr. Ramírez</td>
                        <td>Consulta general</td>
                        <td><span class="estado confirmada">Confirmada</span></td>
                        <td><button class="edit">✏️</button> <button class="delete">🗑️</button></td>
                        </tr>
                        <tr>
                        <td>09:30 AM</td>
                        <td>María Gómez</td>
                        <td>Dra. Torres</td>
                        <td>Control mensual</td>
                        <td><span class="estado pendiente">Pendiente</span></td>
                        <td><button class="edit">✏️</button> <button class="delete">🗑️</button></td>
                        </tr>
                        <tr>
                        <td>11:00 AM</td>
                        <td>Carlos Ruiz</td>
                        <td>Dr. Herrera</td>
                        <td>Exámenes</td>
                        <td><span class="estado cancelada">Cancelada</span></td>
                        <td><button class="edit">✏️</button> <button class="delete">🗑️</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            `;
            break;
        case 'paciente':
            mainContent.innerHTML = `
                <div class="container">

                    <!-- Barra superior -->
                    <div class="top-bar">
                        <input type="text" placeholder="Buscar paciente...">
                        <button class="add-btn">+ Agregar Paciente</button>
                    </div>

                    <!-- Lista de pacientes -->
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Documento</th>
                                <th>Teléfono</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>Juan Pérez</td>
                                <td>45</td>
                                <td>1023456789</td>
                                <td>300 456 7890</td>
                                <td><span class="estado activo">Activo</span></td>
                                <td><button class="ver">Ver</button></td>
                            </tr>

                            <tr>
                                <td>María López</td>
                                <td>29</td>
                                <td>1002345678</td>
                                <td>302 555 1280</td>
                                <td><span class="estado pendiente">Pendiente</span></td>
                                <td><button class="ver">Ver</button></td>
                            </tr>

                            <tr>
                                <td>Carlos Díaz</td>
                                <td>8</td>
                                <td>1009876543</td>
                                <td>310 778 9090</td>
                                <td><span class="estado inactivo">Inactivo</span></td>
                                <td><button class="ver">Ver</button></td>
                            </tr>

                            <tr>
                                <td>Ana Torres</td>
                                <td>61</td>
                                <td>1034567890</td>
                                <td>315 909 4450</td>
                                <td><span class="estado activo">Activo</span></td>
                                <td><button class="ver">Ver</button></td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            `;
            break;
        case 'facturacion':
            mainContent.innerHTML = `
                <div class="factura-container" style="border: 1px solid black;">

                    <h1 class="titulo">FACTURA</h1>

                    <div class="info-right">
                        <p>N° 0037</p>
                        <p>20 agosto 2022</p>
                    </div>
                    <hr class="divider">
                    <!-- ✅ INFO DEL CLIENTE A LA IZQUIERDA -->
                    <div class="cliente-info">
                        <p><strong>Cliente:</strong> Juan Pérez Gómez</p>
                        <p><strong>Cédula:</strong> 123456789</p>
                        <p><strong>Tel:</strong> +57 300 000 0000</p>
                        <p><strong>Email:</strong> cliente@gmail.com</p>
                    </div>

                    

                    <!-- ✅ Tabla Servicios -->
                    <table class="factura-table">
                        <tr class="thead">
                            <th>Servicio</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                        </tr>
                        
                        <tr>
                            <td>Consulta médica 1hra.</td>
                            <td>1</td>
                            <td>50€</td>
                            <td>50€</td>
                        </tr>
                    </table>

                    <!-- ✅ Tabla Impuestos -->
                    <table class="factura-table">
                        <tr class="thead">
                            <th>Impuestos</th>
                            <th>Base</th>
                            <th>Tipo</th>
                            <th>Total IVA</th>
                        </tr>

                        <tr>
                            <td>IVA Exento</td>
                            <td>50€</td>
                            <td>---</td>
                            <td>0€</td>
                        </tr>
                    </table>
                    <hr class="divider">
                    <!-- ✅ SUBTOTAL Y TOTAL -->
                    <div class="totales">
                        <p><strong>Subtotal:</strong> 50€</p>
                        <p><strong>Total:</strong> 50€</p>
                    </div>

                    <!-- ✅ NOMBRE DEL DOCTOR -->
                    <div class="doctor">
                        <p><strong>Doctor:</strong> Dr. Alejandro Martínez Rivera</p>
                    </div>

    
                </div>
            `;
            break;
        case 'ajustes':
            mainContent.innerHTML = `
                        <div class="container">

    <!-- SECCIÓN: INFORMACIÓN DEL CONSULTORIO -->
    <div class="setting-card">
        <h3>Información del Consultorio</h3>

        <label>Nombre del Consultorio</label>
        <input type="text" placeholder="Consultorio Médico Salud Total">

        <label>Dirección</label>
        <input type="text" placeholder="Calle 123 #45-67">

        <label>Teléfono</label>
        <input type="text" placeholder="310 456 7890">

        <button class="btn-save">Guardar Cambios</button>
    </div>

    <!-- SECCIÓN: CUENTA DEL DOCTOR -->
    <div class="setting-card">
        <h3>Cuenta del Doctor</h3>

        <label>Nombre del Doctor</label>
        <input type="text" placeholder="Dr. Juan Martínez">

        <label>Correo Electrónico</label>
        <input type="email" placeholder="doctor@gmail.com">

        <label>Especialidad</label>
        <input type="text" placeholder="Medicina General">

        <button class="btn-save">Actualizar Datos</button>
    </div>

    <!-- SECCIÓN: NOTIFICACIONES -->
    <div class="setting-card">
        <h3>Notificaciones</h3>

        <div class="switch-row">
            <span>Recordatorios de citas</span>
            <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch-row">
            <span>Alertas de pacientes nuevos</span>
            <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch-row">
            <span>Notificaciones por correo</span>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

    </div>

    <!-- SECCIÓN: SEGURIDAD -->
    <div class="setting-card">
        <h3>Seguridad</h3>

        <label>Contraseña Actual</label>
        <input type="password" placeholder="••••••••">

        <label>Nueva Contraseña</label>
        <input type="password" placeholder="••••••••">

        <label>Confirmar Nueva Contraseña</label>
        <input type="password" placeholder="••••••••">

        <button class="btn-save">Cambiar Contraseña</button>
    </div>

</div>
            `;
            break;
        default:
            mainContent.innerHTML = `
                <div class="form-box">
                    <h1>Página no encontrada</h1>
                    <p>La sección que busca no existe.</p>
                </div>
            `;
    }
}

// Agregar event listeners a los enlaces del menú
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu a');
    
    // Agregar event listener a cada enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir la navegación por defecto
            const seccion = this.id; // Obtener el ID del enlace
            cambiarContenido(seccion); // Cambiar el contenido
        });
    });

    // Mostrar la página de inicio por defecto
    cambiarContenido('inicio');
});
