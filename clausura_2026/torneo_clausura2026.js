document.addEventListener('DOMContentLoaded', () => {
    renderTablaGeneral();
    renderCalendario();
    renderEliminatorias();
    renderGoleo();
    renderPorteros();
    initInteracciones();
});

function mostrarEquipo(idEquipo) {
    document.getElementById('vista-principal-torneo').style.display = 'none';
    document.getElementById('vista-equipo').style.display = 'block';

    const vistaGoleo = document.getElementById('vista-goleo');
    if (vistaGoleo) vistaGoleo.style.display = 'none';

    const vistaPorteros = document.getElementById('vista-porteros');
    if (vistaPorteros) vistaPorteros.style.display = 'none';

    const btnInicio = document.querySelector('a[href="index.html"], a[href="../index.html"]');
    if (btnInicio) btnInicio.style.display = 'none';

    const btnInscripcion = document.getElementById('nav-inscripcion');
    if (btnInscripcion) btnInscripcion.style.display = 'none';

    const btnAgentes = document.getElementById('nav-agentes');
    if (btnAgentes) btnAgentes.style.display = 'none';

    const btnVolver = document.getElementById('nav-volver');
    if (btnVolver) btnVolver.style.display = 'inline-block';

    window.scrollTo(0, 0);

    
    const baseDatosEquipos = {
        'estelares': {
            nombreReal: 'Estelares FC', 
            logo: 'estelares.png',       
            plantilla: [
                { nombre: 'Tomas Estrada', rol: 'CAPITÁN', foto: 'te.png' },
                { nombre: 'Adrián Paxtián', rol: 'PORTERO', foto: 'ap.png' },
                { nombre: 'Moises Vieyra', rol: 'PORTERO', foto: 'mv.png' },
                { nombre: 'Karl Suárez', rol: 'JUGADOR', foto: 'ks.png' },
                { nombre: 'Abraham Castelán', rol: 'JUGADOR', foto: 'ac.png' },
                { nombre: 'Jared Ramírez', rol: 'JUGADOR', foto: 'jr.png' },
                { nombre: 'Jhoseph Sanches', rol: 'JUGADOR', foto: 'js.png' },
                { nombre: 'Derek', rol: 'JUGADOR', foto: 'd.png' },
                { nombre: 'Cris Aguilar', rol: 'JUGADOR', foto: 'ca.png' },
                { nombre: 'Kike Rodas', rol: 'JUGADOR', foto: 'kr.png' },
                { nombre: 'Rafael Huchin', rol: 'JUGADOR', foto: 'rh.png' },
                { nombre: 'Ramses Ponce', rol: 'JUGADOR', foto: 'rp.png' },
                { nombre: 'Zammer Rosas', rol: 'JUGADOR', foto: 'zr.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: '0 - 2', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 2', fecha: '04 Feb 2026', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: '2 - 0', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 9', fecha: '27 Mar 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }
                
            ]
        },
        'capuchas': {
            nombreReal: 'Capuchas FC',
            logo: 'capuchas_1.png',
            plantilla: [
                { nombre: 'Eugenio Palomares', rol: 'CAPITÁN', foto: 'ep.png' },
                { nombre: 'Emiliano Ortega', rol: 'PORTERO', foto: 'eo.png' },
                { nombre: 'Alexis Huerta', rol: 'JUGADOR', foto: 'ah.png' },
                { nombre: 'Angel Salvatierra', rol: 'JUGADOR', foto: 'as.png' },
                { nombre: 'Diego Trejo', rol: 'JUGADOR', foto: 'dt.png' },
                { nombre: 'Eduardo De La Cruz', rol: 'JUGADOR', foto: 'edc.png' },
                { nombre: 'Emmanuel Figueroa', rol: 'JUGADOR', foto: 'ef.png' },
                { nombre: 'Fernando Maya', rol: 'JUGADOR', foto: 'fm.png' },
                { nombre: 'Gilberto De La Cruz', rol: 'JUGADOR', foto: 'gdc.png' },
                { nombre: 'Obet Burgos', rol: 'JUGADOR', foto: 'ob.png' },
                { nombre: 'Omar Bautista', rol: 'JUGADOR', foto: 'oba.png' },
                { nombre: 'Emilio Rodriguez', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: '2 - 0', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 2', fecha: '6 Feb 2026', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 4', fecha: '26 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 10', fecha: '17 Abr 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }
            ]
        },
        'temozon': {
            nombreReal: 'Atlético Temozón', 
            logo: 'temozon_1.png',           
            plantilla: [
                { nombre: 'Javier Hernández', rol: 'CAPITÁN', foto: 'ju.png' },
                { nombre: 'Luis Guzmán', rol: 'PORTERO', foto: 'lg.png' },
                { nombre: 'Arturo Herrera', rol: 'JUGADOR', foto: 'ah.png' },
                { nombre: 'Carlos Zepeda', rol: 'JUGADOR', foto: 'cz.png' },
                { nombre: 'Mau Montero', rol: 'JUGADOR', foto: 'mm.png' },
                { nombre: 'Tomas Soberanis', rol: 'JUGADOR', foto: 'ts.png' },
                { nombre: 'Victor Cen', rol: 'JUGADOR', foto: 'vc.png' },
                { nombre: 'Wilberth Loeza', rol: 'JUGADOR', foto: 'wl.png' },
                { nombre: 'Antonio Prado', rol: 'JUGADOR', foto: 'ap.png' },
                { nombre: 'Luis Balam', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Kevin Hernandez', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Rodrigo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Emmanuel Solórzano', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Oswaldo Llanes', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: '2 - 6', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 2', fecha: '06 Feb 2026', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 3', fecha: '11 Feb 2026', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 6', fecha: '6 Mar 2026', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: '4 - 3', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }
            ]
        },
        'inges': {
            nombreReal: 'Inges FC', 
            logo: 'inges.png',       
            plantilla: [
                { nombre: 'Alexander Flores', rol: 'CAPITÁN', foto: 'af.png' },
                { nombre: 'Raymundo Lara', rol: 'PORTERO', foto: 'jugador.png' },
                { nombre: 'Gael Ménez', rol: 'JUGADOR', foto: 'gm.png' },
                { nombre: 'Eduardo Ake', rol: 'PORTERO', foto: 'ea.png' },
                { nombre: 'José Colorado', rol: 'JUGADOR', foto: 'jc.png' },
                { nombre: 'José Corona', rol: 'JUGADOR', foto: 'jco.png' },
                { nombre: 'Orlando Echeverría', rol: 'JUGADOR', foto: 'oe.png' },
                { nombre: 'Richard Bernal', rol: 'JUGADOR', foto: 'rb.png' },
                { nombre: 'Javier Montalvo', rol: 'JUGADOR', foto: 'jm.png' },
                { nombre: 'Roberto Hau', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Israel Corona', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Francisco Gamboa', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: '3 - 5', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 2', fecha: '06 Feb 2026', local: 'Inges FC', logoLocal: 'inges.png', marcador: '9 - 3', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 6', fecha: '6 Mar 2026', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: '4 - 3', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        },
        'corinthians': {
            nombreReal: 'Corinthians FC', 
            logo: 'corinthians.png',       
            plantilla: [
                { nombre: 'Gabriel Rivadeneira', rol: 'CAPITÁN', foto: 'gr.png' },
                { nombre: 'Oswald Grajales', rol: 'PORTERO', foto: 'og.png' },
                { nombre: 'Antuan De La Rosa', rol: 'JUGADOR', foto: 'adr.png' },
                { nombre: 'Brayan Lázaro', rol: 'JUGADOR', foto: 'bl.png' },
                { nombre: 'Cristobal Camelo', rol: 'JUGADOR', foto: 'cc.png' },
                { nombre: 'David Canul', rol: 'JUGADOR', foto: 'dc.png' },
                { nombre: 'Erick Osorio', rol: 'JUGADOR', foto: 'eo.png' },
                { nombre: 'Derek Soriano', rol: 'JUGADOR', foto: 'ds.png' },
                { nombre: 'Hector Adrian', rol: 'JUGADOR', foto: 'ha.png' },
                { nombre: 'Jorge Delgadillo', rol: 'JUGADOR', foto: 'jd.png' },
                { nombre: 'Kenneth Aguirre', rol: 'JUGADOR', foto: 'ka.png' },
                { nombre: 'Pancho Arillano', rol: 'JUGADOR', foto: 'pa.png' },
                { nombre: 'Diego Juárez', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: '4 - 0', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 2', fecha: '06 Feb 2026', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '1 - 2', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        },
        'turismologos': {
            nombreReal: 'Turismólogos FC', 
            logo: 'turismologos.png',       
            plantilla: [
                { nombre: 'Vicente Ramón', rol: 'CAPITÁN', foto: 'vr.png' },
                { nombre: 'Dr. Oswaldo Gallegos', rol: 'PORTERO', foto: 'og.png' },
                { nombre: 'Cristopher Estrella', rol: 'JUGADOR', foto: 'ce.png' },
                { nombre: 'Carlos Yam', rol: 'JUGADOR', foto: 'cy.png' },
                { nombre: 'Edilberto Izquierdo', rol: 'JUGADOR', foto: 'ei.png' },
                { nombre: 'Jesus Ackerman', rol: 'JUGADOR', foto: 'ja.png' },
                { nombre: 'Jonathan Bacab', rol: 'JUGADOR', foto: 'jb.png' },
                { nombre: 'Jacob Montaño', rol: 'JUGADOR', foto: 'jm.png' },
                { nombre: 'Octavio Ramirez', rol: 'JUGADOR', foto: 'or.png' },
                { nombre: 'Álvaro Madrazo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Guillermo Rivas', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Edgar Dzib', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: '2 - 0', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 2', fecha: '04 Feb 2026', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '2 - 0', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Turismólogos FC', logoLocal: 'turismologos.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 5', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'Turismólogos FC', logoLocal: 'turismologos.png', marcador: '9 - 1', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Turismólogos FC', logoLocal: 'turismologos.png', marcador: 'VS', visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        },
        'dragones': {
            nombreReal: 'Dragones FC', 
            logo: 'dragones_1.png',       
            plantilla: [
                { nombre: 'Aarón Martínez', rol: 'CAPITÁN', foto: 'am.png' },
                { nombre: 'Ian Cisneros', rol: 'PORTERO', foto: 'ic.png' },
                { nombre: 'Arturo Can', rol: 'JUGADOR', foto: 'ac.png' },
                { nombre: 'Antonio Duran', rol: 'JUGADOR', foto: 'ad.png' },
                { nombre: 'Antonio Sanchez', rol: 'JUGADOR', foto: 'as.png' },
                { nombre: 'Diego Couoh', rol: 'JUGADOR', foto: 'dc.png' },
                { nombre: 'Eduardo Canche', rol: 'JUGADOR', foto: 'ec.png' },
                { nombre: 'Edwin Sadrac', rol: 'JUGADOR', foto: 'es.png' },
                { nombre: 'Edgar Osalde', rol: 'JUGADOR', foto: 'eo.png' },
                { nombre: 'Victor Itzá', rol: 'JUGADOR', foto: 'vi.png' },
                { nombre: 'Williams Laines', rol: 'JUGADOR', foto: 'wl.png' },
                { nombre: 'Axel Ocampo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Brian Escamilla', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '7 - 2', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 2', fecha: '6 Feb 2026', local: 'Inges FC', logoLocal: 'inges.png', marcador: '9 - 3', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '2 - 0', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 4', fecha: '19 Feb 2026', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: '2 - 3', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '1 - 2', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 6', fecha: '06 Mar 2026', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: '4 - 3', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 7', fecha: '13 Mar 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '6 - 2', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 8', fecha: '20 Mar 2026', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: '2 - 6', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 9', fecha: '27 Mar 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 10', fecha: '17 Abr 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 11', fecha: '24 Abr 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '4 - 0', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }
            ]
        },
        'crystal': {
            nombreReal: 'FC Crystal', 
            logo: 'crystal.png',       
            plantilla: [
                { nombre: 'Rodrigo Almeyda', rol: 'CAPITÁN', foto: 'ra.png' },
                { nombre: 'Alan Soto', rol: 'PORTERO', foto: 'as.png' },
                { nombre: 'César Flores', rol: 'PORTERO', foto: 'cf.png' },
                { nombre: 'Andrés Navarreta', rol: 'JUGADOR', foto: 'an.png' },
                { nombre: 'Derek Narvaez', rol: 'JUGADOR', foto: 'dn.png' },
                { nombre: 'Gael Galdaméz', rol: 'JUGADOR', foto: 'gg.png' },
                { nombre: 'Juan José', rol: 'JUGADOR', foto: 'jj.png' },
                { nombre: 'Kevin Torres', rol: 'JUGADOR', foto: 'kt.png' },
                { nombre: 'Luis Cordova', rol: 'JUGADOR', foto: 'lc.png' },
                { nombre: 'Luis Pacheco', rol: 'JUGADOR', foto: 'lp.png' },
                { nombre: 'Luis Uuh', rol: 'JUGADOR', foto: 'lup.png' },
                { nombre: 'Ofir Pech', rol: 'JUGADOR', foto: 'op.png' },
                { nombre: 'Omar Torres', rol: 'JUGADOR', foto: 'ot.png' },
                { nombre: 'Ricardo Ortiz', rol: 'JUGADOR', foto: 'ro.png' },
                { nombre: 'Yordi González', rol: 'JUGADOR', foto: 'yg.png' },
                { nombre: 'Edwin Romo', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: '2 - 6', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 2', fecha: '6 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 3', fecha: '12 Feb 2026', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'EMPATE', claseRes: 'res-empate' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 8', fecha: '20 Mar 2026', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: '2 - 6', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: 'VS', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }
            ]
        },
        'sat': {
            nombreReal: 'SAT Football Club', 
            logo: 'sat.png',       
            plantilla: [
                { nombre: 'Angel Ordoñez', rol: 'CAPITÁN', foto: 'ao.png' },
                { nombre: 'Jorge Soberanes', rol: 'PORTERO', foto: 'js.png' },
                { nombre: 'Angel Zavala', rol: 'JUGADOR', foto: 'az.png' },
                { nombre: 'Diego Baudel', rol: 'JUGADOR', foto: 'db.png' },
                { nombre: 'Luis Menejes', rol: 'JUGADOR', foto: 'lm.png' },
                { nombre: 'Luis Pérez', rol: 'JUGADOR', foto: 'lp.png' },
                { nombre: 'Ricardo Monrreal', rol: 'JUGADOR', foto: 'rm.png' },
                { nombre: 'Braiam Hernandez', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Emiliano Meneses', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Angel Zavala', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Randy Chan', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Sin Información', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: '3 - 5', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 2', fecha: '6 Feb 2026', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Capuchas FC', logoLocal: 'capuchas_1.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Turismólogos FC', logoLocal: 'turismologos.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'EMPATE', claseRes: 'res-empate' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Estelares FC', logoLocal: 'estelares.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 11', fecha: '24 Abr 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '4 - 0', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        },
        'caguama': {
            nombreReal: 'Real Caguama', 
            logo: 'caguama.png',       
            plantilla: [
                { nombre: 'Cristian Valdés', rol: 'CAPITÁN', foto: 'cv.png' },
                { nombre: 'Emmanuel Murillo', rol: 'PORTERO', foto: 'em.png' },
                { nombre: 'Cesar Sanchez', rol: 'JUGADOR', foto: 'cs.png' },
                { nombre: 'Cristian Alexander', rol: 'JUGADOR', foto: 'ca.png' },
                { nombre: 'Eber Sanchez', rol: 'JUGADOR', foto: 'es.png' },
                { nombre: 'Jan Pool', rol: 'JUGADOR', foto: 'jp.png' },
                { nombre: 'Kevin Zavaleta', rol: 'JUGADOR', foto: 'kz.png' },
                { nombre: 'Leonel Uitzil', rol: 'JUGADOR', foto: 'lu.png' },
                { nombre: 'Luis Chan', rol: 'JUGADOR', foto: 'lc.png' },
                { nombre: 'Manuel Morales', rol: 'JUGADOR', foto: 'mm.png' },
                { nombre: 'Pedro Arenas', rol: 'JUGADOR', foto: 'pa.png' },
                { nombre: 'Victor Gutierrez', rol: 'JUGADOR', foto: 'vg.png' },
                { nombre: 'Isaac Dominguez', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Alejandro Yah', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Marlon López', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: '4 - 0', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 2', fecha: '06 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 3', fecha: '13 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: '2 - 0', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 4', fecha: '26 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'Capuchas', logoVisitante: 'capuchas_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'Turismólogos FC', logoLocal: 'turismologos.png', marcador: '9 - 1', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 7', fecha: '13 Mar 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '6 - 2', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'Real Caguama', logoLocal: 'caguama.png', marcador: 'VS', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }
            ]
        },
        'fosiles': {
            nombreReal: 'Fósiles FC', 
            logo: 'fosiles.png',       
            plantilla: [
                { nombre: 'Emmanuel García', rol: 'CAPITÁN', foto: 'eg.png' },
                { nombre: 'Manuel Álvarez', rol: 'PORTERO', foto: 'portero.png' },
                { nombre: 'Edwin Canche', rol: 'JUGADOR', foto: 'ec.png' },
                { nombre: 'Edwin Pech', rol: 'JUGADOR', foto: 'ep.png' },
                { nombre: 'Felix Lara', rol: 'JUGADOR', foto: 'fl.png' },
                { nombre: 'Fernando Contreras', rol: 'JUGADOR', foto: 'fc.png' },
                { nombre: 'Jeremy Giles', rol: 'JUGADOR', foto: 'jg.png' },
                { nombre: 'Kevin Hernandez', rol: 'JUGADOR', foto: 'kh.png' },
                { nombre: 'Miguel Rodriguez', rol: 'JUGADOR', foto: 'mr.png' },
                { nombre: 'Omar Muñoz', rol: 'JUGADOR', foto: 'om.png' },
                { nombre: 'Tadeo Gomez', rol: 'JUGADOR', foto: 'tg.png' },
                { nombre: 'Uziel Solis', rol: 'JUGADOR', foto: 'us.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: '0 - 2', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 2', fecha: '5 Feb 2026', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 3', fecha: '11 Feb 2026', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 4', fecha: '19 Feb 2026', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: '2 - 3', visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 5', fecha: '27 Feb 2026', local: 'Inges FC', logoLocal: 'inges.png', marcador: 'VS', visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 6', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'SAT Football Club', logoVisitante: 'sat.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'FC Crystal', logoVisitante: 'crystal.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Turismólogos FC', logoLocal: 'turismologos.png', marcador: 'VS', visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Fósiles FC', logoLocal: 'fosiles.png', marcador: 'VS', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        },
        'galacticos': {
            nombreReal: 'Galacticos', 
            logo: 'galacticos_1.png',       
            plantilla: [
                { nombre: 'José Lujan',  rol: 'CAPITÁN', foto: 'jl.png' },
                { nombre: 'Marco Hoil', rol: 'PORTERO', foto: 'portero.png' },
                { nombre: 'Ricardo Tamayo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Marco Castillo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Felipe Aguas', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Luis Cetina', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Leopoldo Castillo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Axel Castillo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Jonathan Poot', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Alexis Cauich', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Efren Pech', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Jesús Perera', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Misael Espinoza', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Omar Herrera', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '30 Ene 2026', local: 'Dragones FC', logoLocal: 'dragones_1.png', marcador: '7 - 2', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 2', fecha: '5 Feb 2026', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 3', fecha: '12 Feb 2026', local: 'FC Crystal', logoLocal: 'crystal.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 4', fecha: 'Sin Información', local: 'Corinthians FC', logoLocal: 'corinthians.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 5', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 6', fecha: '6 Mar 2026', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: '3 - 4', visitante: 'Inges FC', logoVisitante: 'inges.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 7', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Estelares FC', logoVisitante: 'estelares.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 8', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 9', fecha: 'Sin Información', local: 'SAT Football Club', logoLocal: 'sat.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 10', fecha: 'Sin Información', local: 'Galácticos', logoLocal: 'galacticos_1.png', marcador: 'VS', visitante: 'Real Caguama', logoVisitante: 'caguama.png', resultado: 'DERROTA', claseRes: 'res-derrota' },
                { jornada: 'Jornada 11', fecha: 'Sin Información', local: 'Atlético Temozón', logoLocal: 'temozon_1.png', marcador: 'VS', visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        }
    };

    
    let equipo = baseDatosEquipos[idEquipo];

    
    if (!equipo) {
        equipo = { 
            nombreReal: idEquipo, 
            logo: idEquipo + '.png', 
            plantilla: [], 
            historial: [] 
        };
    }

    
    document.getElementById('titulo-equipo-dinamico').innerText = equipo.nombreReal;
    
    
    document.getElementById('logo-equipo-dinamico').src = '../imagenes_ucaribe/logos_equipos/' + equipo.logo;

    
    let htmlPlantilla = '';
    if (equipo.plantilla.length === 0) {
        htmlPlantilla = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">No hay jugadores registrados aún.</p>';
    } 
    else {
        equipo.plantilla.forEach(jugador => {
            
            
            
            const rutaFotoReal = `../imagenes_ucaribe/plantillas/${idEquipo}/${jugador.foto}`;

            htmlPlantilla += `
                <div class="player-card-pro">
                    <div class="player-img-left">
                        <img src="${rutaFotoReal}" alt="${jugador.nombre}">
                    </div>
                    <div class="player-info-right">
                        <h3>${jugador.nombre}</h3>
                        <span class="badge-role">${jugador.rol}</span>
                    </div>
                </div>`;
        });
    }
    document.getElementById('contenedor-plantilla-dinamica').innerHTML = htmlPlantilla;

    
    let htmlHistorial = '';
    if (equipo.historial.length === 0) {
        htmlHistorial = '<tr><td colspan="6" style="color:var(--text-secondary); text-align:center; padding: 20px;">No hay partidos registrados en el historial.</td></tr>';
    } 
    else {
        equipo.historial.forEach(partido => {
            
            const htmlLocal = partido.local === equipo.nombreReal ? `<strong>${partido.local}</strong>` : partido.local;
            const htmlVisitante = partido.visitante === equipo.nombreReal ? `<strong>${partido.visitante}</strong>` : partido.visitante;
            const colorRojo = partido.claseRes === 'res-derrota' ? "style='color: #ef4444;'" : '';

            htmlHistorial += `
                <tr>
                    <td>${partido.jornada}</td>
                    <td class="text-muted">${partido.fecha}</td>
                    <td class="text-left team-cell"><img src="../imagenes_ucaribe/logos_equipos/${partido.logoLocal}" class="team-logo-img"> ${htmlLocal}</td>
                    <td class="pts-cell text-teal" ${colorRojo}>${partido.marcador}</td>
                    <td class="text-left team-cell"><img src="../imagenes_ucaribe/logos_equipos/${partido.logoVisitante}" class="team-logo-img"> ${htmlVisitante}</td>
                    <td><span class="badge-resultado ${partido.claseRes}">${partido.resultado}</span></td>
                </tr>`;
        });
    }
    document.getElementById('contenedor-historial-dinamico').innerHTML = htmlHistorial;
}

function renderTablaGeneral() {
    const container = document.getElementById('tabla-general-body');
    if (!container) return;

    const tablaPosiciones = [
        { pos: 1, equipo: 'Estelares FC', logo: 'estelares.png', pj: 11, g: 10, e: 0, p: 1, gf: 68, gc: 19, dif: '+49', pts: 30, clasifica: true },
        { pos: 2, equipo: 'Capuchas FC', logo: 'capuchas_1.png', pj: 11, g: 9, e: 0, p: 2, gf: 67, gc: 27, dif: '+40', pts: 27, clasifica: true },
        { pos: 3, equipo: 'Atlético Temozón', logo: 'temozon_1.png', pj: 11, g: 9, e: 0, p: 2, gf: 73, gc: 39, dif: '+34', pts: 27, clasifica: true },
        { pos: 4, equipo: 'Inges FC', logo: 'inges.png', pj: 11, g: 7, e: 0, p: 4, gf: 58, gc: 47, dif: '+11', pts: 21, clasifica: true },
        { pos: 5, equipo: 'Corinthians FC', logo: 'corinthians.png', pj: 11, g: 7, e: 0, p: 4, gf: 29, gc: 25, dif: '+4', pts: 21, clasifica: true },
        { pos: 6, equipo: 'Turismólogos FC', logo: 'turismologos.png', pj: 11, g: 6, e: 0, p: 5, gf: 41, gc: 26, dif: '+15', pts: 18, clasifica: true },
        { pos: 7, equipo: 'Dragones FC', logo: 'dragones_1.png', pj: 11, g: 6, e: 0, p: 5, gf: 39, gc: 34, dif: '+5', pts: 18, clasifica: true },
        { pos: 8, equipo: 'FC Crystal', logo: 'crystal.png', pj: 11, g: 4, e: 1, p: 6, gf: 19, gc: 43, dif: '-24', pts: 13, clasifica: true },
        { pos: 9, equipo: 'SAT Football Club', logo: 'sat.png', pj: 11, g: 3, e: 1, p: 7, gf: 28, gc: 52, dif: '-24', pts: 10, clasifica: false },
        { pos: 10, equipo: 'Real Caguama', logo: 'caguama.png', pj: 11, g: 3, e: 0, p: 8, gf: 23, gc: 62, dif: '-39', pts: 9, clasifica: false },
        { pos: 11, equipo: 'Fósiles FC', logo: 'fosiles.png', pj: 11, g: 1, e: 0, p: 10, gf: 15, gc: 20, dif: '-5', pts: 3, clasifica: false },
        { pos: 12, equipo: 'Galácticos', logo: 'galacticos_1.png', pj: 11, g: 0, e: 0, p: 11, gf: 18, gc: 84, dif: '-66', pts: 0, clasifica: false }
    ];

    container.innerHTML = tablaPosiciones.map(fila => {
        const filaClase = fila.clasifica ? 'class="zona-clasificacion"' : '';
        return `
            <tr ${filaClase}>
                <td>${fila.pos}</td>
                <td class="text-left team-cell">
                    <img src="../imagenes_ucaribe/logos_equipos/${fila.logo}" alt="${fila.equipo}" class="team-logo-img">
                    <strong>${fila.equipo}</strong>
                </td>
                <td>${fila.pj}</td>
                <td>${fila.g}</td>
                <td>${fila.e}</td>
                <td>${fila.p}</td>
                <td>${fila.gf}</td>
                <td>${fila.gc}</td>
                <td>${fila.dif}</td>
                <td class="pts-cell">${fila.pts}</td>
            </tr>`;
    }).join('');
}

function renderGoleo() {
    const container = document.getElementById('contenedor-goleo');
    if (!container) return;

    const goleadores = [
        { nombre: 'Tomas Soberanis', equipo: 'Atlético Temozón', goles: '34', carpetaEquipo: 'temozon', foto: 'ts.png' },
        { nombre: 'Tomas Estrada', equipo: 'Estelares FC', goles: '25', carpetaEquipo: 'estelares', foto: 'te.png' },
        { nombre: 'Diego Trejo', equipo: 'Capuchas FC', goles: '19', carpetaEquipo: 'capuchas', foto: 'dt.png' },
        { nombre: 'Jhoseph Sanches', equipo: 'Estelares FC', goles: '16', carpetaEquipo: 'estelares', foto: 'js.png' },
        { nombre: 'Angel Salvatierra', equipo: 'Capuchas FC', goles: '15', carpetaEquipo: 'capuchas', foto: 'as.png' },
        { nombre: 'Emilio Rodriguez', equipo: 'Capuchas FC', goles: '14', carpetaEquipo: 'capuchas', foto: '' },
        { nombre: 'José Corona', equipo: 'Inges FC', goles: '14', carpetaEquipo: 'inges', foto: 'jco.png' },
        { nombre: 'Álvaro Madrazo', equipo: 'Turismólogos FC', goles: '13', carpetaEquipo: 'turismologos', foto: '' },
        { nombre: 'Mauricio Montero', equipo: 'Atlético Temozón', goles: '13', carpetaEquipo: 'temozon', foto: 'mm.png' },
        { nombre: 'Jesus Ackerman', equipo: 'Turismólogos FC', goles: '11', carpetaEquipo: 'turismologos', foto: 'ja.png' },
        { nombre: 'Diego Baudel', equipo: 'SAT Football Club', goles: '10', carpetaEquipo: 'sat', foto: 'db.png' },
        { nombre: 'Luis Pérez', equipo: 'SAT Football Club', goles: '10', carpetaEquipo: 'sat', foto: 'lp.png' },
        { nombre: 'José Colorado', equipo: 'Inges FC', goles: '10', carpetaEquipo: 'inges', foto: 'jc.png' },
        { nombre: 'Erick Osorio', equipo: 'Corinthians FC', goles: '10', carpetaEquipo: 'corinthians', foto: 'eo.png' },
        { nombre: 'Aarón Martínez', equipo: 'Dragones FC', goles: '9', carpetaEquipo: 'dragones', foto: 'am.png' },
        { nombre: 'Cristopher Estrella', equipo: 'Turismólogos FC', goles: '9', carpetaEquipo: 'turismologos', foto: 'ce.png' },
        { nombre: 'Alexander Flores', equipo: 'Inges FC', goles: '9', carpetaEquipo: 'inges', foto: 'af.png' },
        { nombre: 'Marco Castillo', equipo: 'Galácticos', goles: '9', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Abraham Castelan', equipo: 'Estelares FC', goles: '8', carpetaEquipo: 'estelares', foto: 'ac.png' },
        { nombre: 'Roberto Hau', equipo: 'Inges FC', goles: '8', carpetaEquipo: 'inges', foto: '' },
        { nombre: 'Victor Itzá', equipo: 'Dragones FC', goles: '8', carpetaEquipo: 'dragones', foto: 'vi.png' },
        { nombre: 'Luis Balam', equipo: 'Atlético Temozón', goles: '8', carpetaEquipo: 'temozon', foto: '' },
        { nombre: 'Miguel Rodriguez', equipo: 'Fósiles FC', goles: '7', carpetaEquipo: 'fosiles', foto: 'mr.png' },
        { nombre: 'Israel Corona', equipo: 'Inges FC', goles: '6', carpetaEquipo: 'inges', foto: '' },
        { nombre: 'Obet Burgos', equipo: 'Capuchas FC', goles: '6', carpetaEquipo: 'capuchas', foto: 'ob.png' },
        { nombre: 'Jorge Delgadillo', equipo: 'Corinthians FC', goles: '6', carpetaEquipo: 'corinthians', foto: 'jd.png' },
        { nombre: 'Kevin Hernández', equipo: 'Atlético Temozón', goles: '6', carpetaEquipo: 'temozon', foto: '' },
        { nombre: 'Francisco Gamboa', equipo: 'Inges FC', goles: '6', carpetaEquipo: 'inges', foto: '' },
        { nombre: 'Alejandro Yah', equipo: 'Real Caguama', goles: '6', carpetaEquipo: 'caguama', foto: '' },
        { nombre: 'Arturo Can', equipo: 'Dragones FC', goles: '5', carpetaEquipo: 'dragones', foto: 'ac.png' },
        { nombre: 'Emmanuel Figueroa', equipo: 'Capuchas FC', goles: '5', carpetaEquipo: 'capuchas', foto: 'ef.png' },
        { nombre: 'Eduardo De La Cruz', equipo: 'Capuchas FC', goles: '4', carpetaEquipo: 'capuchas', foto: 'edc.png' },
        { nombre: 'Diego Couoh', equipo: 'Dragones FC', goles: '4', carpetaEquipo: 'dragones', foto: 'dc.png' },
        { nombre: 'Ramses Ponce', equipo: 'Estelares FC', goles: '4', carpetaEquipo: 'estelares', foto: 'rp.png' },
        { nombre: 'Pedro Arenas', equipo: 'Real Caguama', goles: '4', carpetaEquipo: 'caguama', foto: 'pa.png' },
        { nombre: 'Luis Cetina', equipo: 'Galácticos', goles: '4', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Rafael Huchin', equipo: 'Estelares FC', goles: '4', carpetaEquipo: 'estelares', foto: 'rh.png' },
        { nombre: 'Rodrigo Almeyda', equipo: 'FC Crystal', goles: '4', carpetaEquipo: 'crystal', foto: 'ra.png' },
        { nombre: 'Carlos Yam', equipo: 'Turismólogos FC', goles: '4', carpetaEquipo: 'turismologos', foto: 'cy.png' },
        { nombre: 'Brian Escamilla', equipo: 'Dragones FC', goles: '3', carpetaEquipo: 'dragones', foto: '' },
        { nombre: 'Ofir Pech', equipo: 'FC Crystal', goles: '3', carpetaEquipo: 'crystal', foto: 'op.png' },
        { nombre: 'Uziel Solis', equipo: 'Fósiles FC', goles: '3', carpetaEquipo: 'fosiles', foto: 'us.png' },
        { nombre: 'Omar Torres', equipo: 'FC Crystal', goles: '3', carpetaEquipo: 'crystal', foto: 'ot.png' },
        { nombre: 'Angel Ordoñez', equipo: 'SAT Football Club', goles: '3', carpetaEquipo: 'sat', foto: 'ao.png' },
        { nombre: 'Antuan De La Rosa', equipo: 'Corinthians FC', goles: '3', carpetaEquipo: 'corinthians', foto: 'adr.png' },
        { nombre: 'Isaac Domínguez', equipo: 'Real Caguama', goles: '3', carpetaEquipo: 'caguama', foto: '' },
        { nombre: 'Yordi González', equipo: 'FC Crystal', goles: '3', carpetaEquipo: 'crystal', foto: 'yg.png' },
        { nombre: 'Antonio Prado', equipo: 'Atlético Temozón', goles: '3', carpetaEquipo: 'temozon', foto: 'ap.png' },
        { nombre: 'Cris Aguilar', equipo: 'Estelares FC', goles: '3', carpetaEquipo: 'estelares', foto: 'ca.png' },
        { nombre: 'Luis Mejenes', equipo: 'SAT Football Club', goles: '3', carpetaEquipo: 'sat', foto: 'lm.png' },
        { nombre: 'Eduardo Ake', equipo: 'Inges FC', goles: '3', carpetaEquipo: 'inges', foto: 'ea.png' },
        { nombre: 'Derek', equipo: 'Estelares FC', goles: '3', carpetaEquipo: 'estelares', foto: 'd.png' },
        { nombre: 'Diego Juárez', equipo: 'Corinthians FC', goles: '3', carpetaEquipo: 'corinthians', foto: '' },
        { nombre: 'Antonio Sanchez', equipo: 'Dragones FC', goles: '3', carpetaEquipo: 'dragones', foto: 'as.png' },
        { nombre: 'Fernando Contreras', equipo: 'Fósiles FC', goles: '2', carpetaEquipo: 'fosiles', foto: 'fc.png' },
        { nombre: 'Pancho Arillano', equipo: 'Corinthians FC', goles: '2', carpetaEquipo: 'corinthians', foto: 'pa.png' },
        { nombre: 'Leonel Uitzil', equipo: 'Real Caguama', goles: '2', carpetaEquipo: 'caguama', foto: 'lu.png' },
        { nombre: 'Guillermo Rivas', equipo: 'Turismólogos FC', goles: '2', carpetaEquipo: 'turismologos', foto: '' },
        { nombre: 'Leopoldo Castillo', equipo: 'Galácticos', goles: '2', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Karl Suárez', equipo: 'Estelares FC', goles: '2', carpetaEquipo: 'estelares', foto: 'ks.png' },
        { nombre: 'Victor Gutierrez', equipo: 'Real Caguama', goles: '2', carpetaEquipo: 'caguama', foto: 'vg.png' },
        { nombre: 'Marlon López', equipo: 'Real Caguama', goles: '2', carpetaEquipo: 'caguama', foto: '' },
        { nombre: 'Eduardo Canché', equipo: 'Dragones FC', goles: '2', carpetaEquipo: 'dragones', foto: 'ec.png' },
        { nombre: 'Fernando Maya', equipo: 'Capuchas FC', goles: '2', carpetaEquipo: 'capuchas', foto: 'fm.png' },
        { nombre: 'Rodrigo', equipo: 'Atlético Temozón', goles: '2', carpetaEquipo: 'temozon', foto: '' },
        { nombre: 'Emmanuel Solórzano', equipo: 'Atlético Temozón', goles: '2', carpetaEquipo: 'temozon', foto: '' },
        { nombre: 'Marco Hoil', equipo: 'Galácticos', goles: '1', carpetaEquipo: 'galacticos', foto: 'portero.png' },
        { nombre: 'Cristobal Camelo', equipo: 'Corinthians FC', goles: '1', carpetaEquipo: 'corinthians', foto: 'cc.png' },
        { nombre: 'Emmanuel Garcia', equipo: 'Fósiles FC', goles: '1', carpetaEquipo: 'fosiles', foto: 'eg.png' },
        { nombre: 'Axel Castillo', equipo: 'Galácticos', goles: '1', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Kenneth Aguirre', equipo: 'Corinthians FC', goles: '1', carpetaEquipo: 'corinthians', foto: 'ka.png' },
        { nombre: 'Tadeo Gomez', equipo: 'Fósiles FC', goles: '1', carpetaEquipo: 'fosiles', foto: 'tg.png' },
        { nombre: 'Luis Uuh', equipo: 'FC Crystal', goles: '1', carpetaEquipo: 'crystal', foto: 'lup.png' },
        { nombre: 'Felix Lara', equipo: 'Fósiles FC', goles: '1', carpetaEquipo: 'fosiles', foto: 'fl.png' },
        { nombre: 'Gael Galdaméz', equipo: 'FC Crystal', goles: '1', carpetaEquipo: 'crystal', foto: 'gg.png' },
        { nombre: 'Jacob Montaño', equipo: 'Turismólogos FC', goles: '1', carpetaEquipo: 'turismologos', foto: 'jm.png' },
        { nombre: 'Gabriel Rivadeneira', equipo: 'Corinthians FC', goles: '1', carpetaEquipo: 'corinthians', foto: 'gr.png' },
        { nombre: 'Jose Lujan', equipo: 'Galácticos', goles: '1', carpetaEquipo: 'galacticos', foto: 'jl.png' },
        { nombre: 'Cesar Sanchez', equipo: 'Real Caguama', goles: '1', carpetaEquipo: 'caguama', foto: 'cs.png' },
        { nombre: 'Braiam Hernandez', equipo: 'SAT Football Club', goles: '1', carpetaEquipo: 'sat', foto: '' },
        { nombre: 'Antonio Durán', equipo: 'Dragones FC', goles: '1', carpetaEquipo: 'dragones', foto: 'ad.png' },
        { nombre: 'Oswaldo Llanes', equipo: 'Atlético Temozón', goles: '1', carpetaEquipo: 'temozon', foto: '' },
        { nombre: 'Axel Ocampo', equipo: 'Dragones FC', goles: '1', carpetaEquipo: 'dragones', foto: '' },
        { nombre: 'Derek Soriano', equipo: 'Corinthians FC', goles: '1', carpetaEquipo: 'corinthians', foto: 'ds.png' },
        { nombre: 'Eugenio Palomares', equipo: 'Capuchas FC', goles: '1', carpetaEquipo: 'capuchas', foto: 'ep.png' },
        { nombre: 'Arturo Herrera', equipo: 'Atlético Temozón', goles: '1', carpetaEquipo: 'temozon', foto: 'ah.png' },
        { nombre: 'Edwin Sadrac', equipo: 'Dragones FC', goles: '1', carpetaEquipo: 'dragones', foto: 'es.png' },
        { nombre: 'Emiliano Meneses', equipo: 'SAT Football Club', goles: '1', carpetaEquipo: 'sat', foto: '' },
        { nombre: 'Zammer Rosas', equipo: 'Estelares FC', goles: '1', carpetaEquipo: 'estelares', foto: 'zr.png' },
        { nombre: 'Alexis Huerta', equipo: 'Capuchas FC', goles: '1', carpetaEquipo: 'capuchas', foto: 'ah.png' },
        { nombre: 'Javier Hernández', equipo: 'Atlético Temozón', goles: '1', carpetaEquipo: 'temozon', foto: 'ju.png' },
        { nombre: 'Edwin Romo', equipo: 'FC Crystal', goles: '1', carpetaEquipo: 'crystal', foto: '' },
        { nombre: 'Wilberth Loeza', equipo: 'Atlético Temozón', goles: '1', carpetaEquipo: 'temozon', foto: 'wl.png' },
        { nombre: 'Jonathan Poot', equipo: 'Galácticos', goles: '1', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Edgar Osalde', equipo: 'Dragones FC', goles: '1', carpetaEquipo: 'dragones', foto: 'eo.png' },
        { nombre: 'Kevin Torres', equipo: 'FC Crystal', goles: '1', carpetaEquipo: 'crystal', foto: 'kt.png' },
        { nombre: 'Adrián Paxtian', equipo: 'Estelares FC', goles: '', carpetaEquipo: 'estelares', foto: 'ap.png' },
        { nombre: 'Alexi Cauich', equipo: 'Galácticos', goles: '', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Angel Zavala', equipo: 'SAT Football Club', goles: '', carpetaEquipo: 'sat', foto: 'az.png' },
        { nombre: 'Brayan Lázaro', equipo: 'Corinthians FC', goles: '', carpetaEquipo: 'corinthians', foto: 'bl.png' },
        { nombre: 'César Flores', equipo: 'FC Crystal', goles: '', carpetaEquipo: 'crystal', foto: 'cf.png' },
        { nombre: 'Cristian Alexander', equipo: 'Real Caguama', goles: '', carpetaEquipo: 'caguama', foto: 'ca.png' },
        { nombre: 'Cristian Valdés', equipo: 'Real Caguama', goles: '', carpetaEquipo: 'caguama', foto: 'cv.png' },
        { nombre: 'David Canul', equipo: 'Corinthians FC', goles: '', carpetaEquipo: 'corinthians', foto: 'dc.png' },
        { nombre: 'Derek Narvaez', equipo: 'FC Crystal', goles: '', carpetaEquipo: 'crystal', foto: 'dn.png' },
        { nombre: 'Dr Oswaldo Gallegos', equipo: 'Turismólogos FC', goles: '', carpetaEquipo: 'turismologos', foto: 'og.png' },
        { nombre: 'Eber Sanchez', equipo: 'Real Caguama', goles: '', carpetaEquipo: 'caguama', foto: 'es.png' },
        { nombre: 'Edgar Dzib', equipo: 'Turismólogos FC', goles: '', carpetaEquipo: 'turismologos', foto: '' },
        { nombre: 'Edilberto Izquierdo', equipo: 'Turismólogos FC', goles: '', carpetaEquipo: 'turismologos', foto: 'ei.png' },
        { nombre: 'Edwin Canche', equipo: 'Fósiles FC', goles: '', carpetaEquipo: 'fosiles', foto: 'ec.png' },
        { nombre: 'Edwin Pech', equipo: 'Fósiles FC', goles: '', carpetaEquipo: 'fosiles', foto: 'ep.png' },
        { nombre: 'Efren Pech', equipo: 'Galácticos', goles: '', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Emiliano Ortega', equipo: 'Capuchas FC', goles: '', carpetaEquipo: 'capuchas', foto: 'eo.png' },
        { nombre: 'Emmanuel Murillo', equipo: 'Real Caguama', goles: '', carpetaEquipo: 'caguama', foto: 'em.png' },
        { nombre: 'Felipe Aguas', equipo: 'Galácticos', goles: '', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Gael Ménez', equipo: 'Inges FC', goles: '', carpetaEquipo: 'inges', foto: 'gm.png' },
        { nombre: 'Gilberto de la Cruz', equipo: 'Capuchas FC', goles: '', carpetaEquipo: 'capuchas', foto: 'gdc.png' },
        { nombre: 'Ian Cisneros', equipo: 'Dragones FC', goles: '', carpetaEquipo: 'dragones', foto: 'ic.png' },
        { nombre: 'Jan Pool', equipo: 'Real Caguama', goles: '', carpetaEquipo: 'caguama', foto: 'jp.png' },
        { nombre: 'Jared Ramírez', equipo: 'Estelares FC', goles: '', carpetaEquipo: 'estelares', foto: 'jr.png' },
        { nombre: 'Javier Montalvo', equipo: 'Inges FC', goles: '', carpetaEquipo: 'inges', foto: 'jm.png' },
        { nombre: 'Jeremy Giles', equipo: 'Fósiles FC', goles: '', carpetaEquipo: 'fosiles', foto: 'jg.png' },
        { nombre: 'Jesús Perera', equipo: 'Galácticos', goles: '', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Jonathan Bacab', equipo: 'Turismólogos FC', goles: '', carpetaEquipo: 'turismologos', foto: 'jb.png' },
        { nombre: 'Jorge Soberanes', equipo: 'SAT Football Club', goles: '', carpetaEquipo: 'sat', foto: 'js.png' },
        { nombre: 'Kevin Hernandez', equipo: 'Fósiles FC', goles: '', carpetaEquipo: 'fosiles', foto: 'kh.png' },
        { nombre: 'Kike Rodas', equipo: 'Estelares FC', goles: '', carpetaEquipo: 'estelares', foto: 'kr.png' },
        { nombre: 'Luis Cordova', equipo: 'FC Crystal', goles: '', carpetaEquipo: 'crystal', foto: 'lc.png' },
        { nombre: 'Luis Cruz', equipo: 'Real Caguama', goles: '', carpetaEquipo: 'caguama', foto: 'lc.png' },
        { nombre: 'Luis Guzmán', equipo: 'Atlético Temozón', goles: '', carpetaEquipo: 'temozon', foto: 'lg.png' },
        { nombre: 'Luis Pacheco', equipo: 'FC Crystal', goles: '', carpetaEquipo: 'crystal', foto: 'lp.png' },
        { nombre: 'Manuel Alvarez', equipo: 'Fósiles FC', goles: '', carpetaEquipo: 'fosiles', foto: '' },
        { nombre: 'Misael Espinoza', equipo: 'Galácticos', goles: '', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Octavio Ramirez', equipo: 'Turismólogos FC', goles: '', carpetaEquipo: 'turismologos', foto: 'or.png' },
        { nombre: 'Omar Bautista', equipo: 'Capuchas FC', goles: '', carpetaEquipo: 'capuchas', foto: 'oba.png' },
        { nombre: 'Omar Herrera', equipo: 'Galácticos', goles: '', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Omar Muñoz', equipo: 'Fósiles FC', goles: '', carpetaEquipo: 'fosiles', foto: 'om.png' },
        { nombre: 'Orlando Echeverría', equipo: 'Inges FC', goles: '', carpetaEquipo: 'inges', foto: 'oe.png' },
        { nombre: 'Oswald Grajales', equipo: 'Corinthians FC', goles: '', carpetaEquipo: 'corinthians', foto: 'og.png' },
        { nombre: 'Randy Chan', equipo: 'SAT Football Club', goles: '', carpetaEquipo: 'sat', foto: '' },
        { nombre: 'Raymundo Lara', equipo: 'Inges FC', goles: '', carpetaEquipo: 'inges', foto: 'portero.png' },
        { nombre: 'Ricardo Monrreal', equipo: 'SAT Football Club', goles: '', carpetaEquipo: 'sat', foto: 'rm.png' },
        { nombre: 'Ricardo Tamayo', equipo: 'Galácticos', goles: '', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Richard Bernal', equipo: 'Inges FC', goles: '', carpetaEquipo: 'inges', foto: 'rb.png' },
        { nombre: 'Vicente Ramón', equipo: 'Turismólogos FC', goles: '', carpetaEquipo: 'turismologos', foto: 'vr.png' },
        { nombre: 'Williams Laines', equipo: 'Dragones FC', goles: '', carpetaEquipo: 'dragones', foto: 'wl.png' }
    ];

    const lider = goleadores[0];
    
    
    const archivoFotoLider = !lider.foto || lider.foto.trim() === "" ? "jugador.png" : lider.foto;
    const rutaLider = `../imagenes_ucaribe/plantillas/${lider.carpetaEquipo}/${archivoFotoLider}`;

    let html = `
        <div class="leader-podium">
            <div class="stats-card-vertical leader-card">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="color: #ffd700; border-color: #ffd700;">1</div>
                    <img src="${rutaLider}" class="stats-player-img" alt="Líder Goleo">
                </div>
                <div class="stats-info-centered">
                    <h3>${lider.nombre}</h3>
                    <p>${lider.equipo}</p>
                    <span class="badge-stats">${lider.goles} GOLES</span>
                </div>
            </div>
        </div>
        <div class="players-grid-stats-goleo">
    `;

    goleadores.slice(1).forEach((jugador, index) => {
        let colorMedalla = 'color: #ffffff; border-color: rgba(255,255,255,0.3);';
        if (index === 0) { colorMedalla = 'color: #c0c0c0; border-color: #c0c0c0;'; }
        else if (index === 1) { colorMedalla = 'color: #cd7f32; border-color: #cd7f32;'; }

        
        const archivoFotoJugador = !jugador.foto || jugador.foto.trim() === "" ? "jugador.png" : jugador.foto;
        const rutaJugador = `../imagenes_ucaribe/plantillas/${jugador.carpetaEquipo}/${archivoFotoJugador}`;
        const golesTexto = !jugador.goles || jugador.goles.trim() === "" ? 'SIN GOLES' : `${jugador.goles} GOLES`;

        html += `
            <div class="stats-card-vertical">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="${colorMedalla}">${index + 2}</div>
                    <img src="${rutaJugador}" alt="${jugador.nombre}" class="stats-player-img">
                </div>
                <div class="stats-info-centered">
                    <h3>${jugador.nombre}</h3>
                    <p>${jugador.equipo}</p>
                    <span class="badge-stats">${golesTexto}</span>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function renderPorteros() {
    const container = document.getElementById('contenedor-porteros');
    if (!container) return;

    
    const porteros = [
        { nombre: 'Oswald Grajales', equipo: 'Corinthians FC', golesRecibidos: 22, partidos: 10, efectividad: '85.3%', carpetaEquipo: 'corinthians', foto: 'og.png' },
        { nombre: 'Emiliano Ortega', equipo: 'Capuchas FC', golesRecibidos: 27, partidos: 10, efectividad: '82%', carpetaEquipo: 'capuchas', foto: 'eo.png' },
        { nombre: 'Luis Guzmán', equipo: 'Atlético Temozón', golesRecibidos: 32, partidos: 10, efectividad: '78.7%', carpetaEquipo: 'temozon', foto: 'lg.png' },
        { nombre: 'Ian Cisneros', equipo: 'Dragones FC', golesRecibidos: 34, partidos: 10, efectividad: '77.3%', carpetaEquipo: 'dragones', foto: 'ic.png' },
        { nombre: 'Dr Oswaldo Gallegos', equipo: 'Turismólogos FC', golesRecibidos: 22, partidos: 8, efectividad: '65.3%', carpetaEquipo: 'turismologos', foto: 'og.png' },
        { nombre: 'Jorge Soberanes', equipo: 'SAT Football Club', golesRecibidos: 52, partidos: 10, efectividad: '65.3%', carpetaEquipo: 'sat', foto: 'js.png' },
        { nombre: 'Adrián Paxtian', equipo: 'Estelares FC', golesRecibidos: 13, partidos: 6, efectividad: '51.3%', carpetaEquipo: 'estelares', foto: 'ap.png' },
        { nombre: 'Alejandro Yah', equipo: 'Inges FC', golesRecibidos: 34, partidos: 7, efectividad: '47.3%', carpetaEquipo: 'inges', foto: '' },
        { nombre: 'Kevin Torres', equipo: 'FC Crystal', golesRecibidos: 29, partidos: 5, efectividad: '30.7%', carpetaEquipo: 'crystal', foto: 'kt.png' },
        { nombre: 'César Flores', equipo: 'FC Crystal', golesRecibidos: 18, partidos: 4, efectividad: '28%', carpetaEquipo: 'crystal', foto: 'cf.png' },
        { nombre: 'Orlando Echeverría', equipo: 'Inges FC', golesRecibidos: 11, partidos: 3, efectividad: '22.7%', carpetaEquipo: 'inges', foto: 'oe.png' },
        { nombre: 'Marco Hoil', equipo: 'Galácticos', golesRecibidos: 15, partidos: 3, efectividad: '20%', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Moisés Vieyra', equipo: 'Estelares FC', golesRecibidos: 2, partidos: 2, efectividad: '18.7%', carpetaEquipo: 'estelares', foto: 'mv.png' },
        { nombre: 'Emmanuel Murillo', equipo: 'Real Caguama', golesRecibidos: 35, partidos: 4, efectividad: '16.7%', carpetaEquipo: 'caguama', foto: 'em.png' },
        { nombre: 'Javier Hernández', equipo: 'Atlético Temozón', golesRecibidos: 7, partidos: 2, efectividad: '15.3%', carpetaEquipo: 'temozon', foto: 'ju.png' },
        { nombre: 'Ricardo Tamayo', equipo: 'Galácticos', golesRecibidos: 12, partidos: 2, efectividad: '12%', carpetaEquipo: 'galacticos', foto: '' },
        { nombre: 'Emmanuel Garcia', equipo: 'Fósiles FC', golesRecibidos: 13, partidos: 2, efectividad: '11.3%', carpetaEquipo: 'fosiles', foto: 'eg.png' },
        { nombre: 'Vicente Ramón', equipo: 'Turismólogos FC', golesRecibidos: 1, partidos: 1, efectividad: '9.3%', carpetaEquipo: 'turismologos', foto: 'vr.png' },
        { nombre: 'Edilberto Izquierdo', equipo: 'Turismólogos FC', golesRecibidos: 1, partidos: 1, efectividad: '9.3%', carpetaEquipo: 'turismologos', foto: 'ei.png' },
        { nombre: 'Yordi González', equipo: 'FC Crystal', golesRecibidos: 1, partidos: 1, efectividad: '9.3%', carpetaEquipo: 'crystal', foto: 'yg.png' },
        { nombre: 'Karl Suárez', equipo: 'Estelares FC', golesRecibidos: 2, partidos: 1, efectividad: '8.7%', carpetaEquipo: 'estelares', foto: 'ks.png' },
        { nombre: 'Manuel Álvarez', equipo: 'Fósiles FC', golesRecibidos: 3, partidos: 1, efectividad: '8%', carpetaEquipo: 'fosiles', foto: '' },
        { nombre: 'Javier Montalvo', equipo: 'Inges FC', golesRecibidos: 3, partidos: 1, efectividad: '8%', carpetaEquipo: 'inges', foto: 'jm.png' },
        { nombre: 'Cristobal Camelo', equipo: 'Corinthians FC', golesRecibidos: 3, partidos: 1, efectividad: '8%', carpetaEquipo: 'corinthians', foto: 'cc.png' },
        { nombre: 'Felipe Aguas', equipo: 'Galácticos', golesRecibidos: 7, partidos: 1, efectividad: '5.3%', carpetaEquipo: 'galacticos', foto: '' }
    ];

    const liderPortero = porteros[0];
    
    
    const archivoFotoLider = !liderPortero.foto || liderPortero.foto.trim() === "" ? "portero.png" : liderPortero.foto;
    const rutaLider = `../imagenes_ucaribe/plantillas/${liderPortero.carpetaEquipo}/${archivoFotoLider}`;

    let html = `
        <div class="leader-podium">
            <div class="stats-card-vertical leader-card">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="color: #ffd700; border-color: #ffd700;">1</div>
                    <img src="${rutaLider}" class="stats-player-img" alt="Líder Portero">
                </div>
                <div class="stats-info-centered">
                    <h3>${liderPortero.nombre}</h3>
                    <p>${liderPortero.equipo}</p>
                    <p class="stats-subtext">${liderPortero.golesRecibidos} goles en ${liderPortero.partidos} partidos</p>
                    <span class="badge-stats">${liderPortero.efectividad} EFECTIVIDAD</span>
                </div>
            </div>
        </div>
        <div class="players-grid-stats-porteros">
    `;

    porteros.slice(1).forEach((portero, index) => {
        let colorMedalla = 'color: #ffffff; border-color: rgba(255,255,255,0.3);';
        if (index === 0) { colorMedalla = 'color: #c0c0c0; border-color: #c0c0c0;'; }
        else if (index === 1) { colorMedalla = 'color: #cd7f32; border-color: #cd7f32;'; }

        
        const archivoFotoPortero = !portero.foto || portero.foto.trim() === "" ? "portero.png" : portero.foto;
        const rutaPortero = `../imagenes_ucaribe/plantillas/${portero.carpetaEquipo}/${archivoFotoPortero}`;

        html += `
            <div class="stats-card-vertical">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="${colorMedalla}">${index + 2}</div>
                    <img src="${rutaPortero}" alt="${portero.nombre}" class="stats-player-img">
                </div>
                <div class="stats-info-centered">
                    <h3>${portero.nombre}</h3>
                    <p>${portero.equipo}</p>
                    <p class="stats-subtext">${portero.golesRecibidos} goles en ${portero.partidos} partidos</p>
                    <span class="badge-stats">${portero.efectividad} EFECTIVIDAD</span>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}


function renderCalendario() {
    const container = document.getElementById('calendario-container');
    if (!container) return;

    const jornadas = [
        {
            titulo: 'Jornada 1', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'FC Crystal', logoLocal: 'crystal.png', golesLocal: '2', eventosLocal: "<p>⚽ Ofir Pech </p><p>⚽ Ricardo Ortiz </p>",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', golesVisitante: '6', eventosVisitante: "<p>Mauricio Montero ⚽ 3</p><p>Tomas Soberanis ⚽ 3</p>",
                    fecha: 'Viernes 30 de Enero, 2026', hora: '14:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas_1.png', golesLocal: '2', eventosLocal: "<p>⚽ Angel Salvatierra</p><p>⚽ Emilio Rodriguez </p>",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '0', eventosVisitante: "",
                    fecha: 'Viernes 30 de Enero, 2026', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Corinthians FC', logoLocal: 'corinthians.png', golesLocal: '4', eventosLocal: "<p>Cristobal Camelo ⚽</p><p>Erick Osorio ⚽</p><p>Autogol (Real Caguama) ⚽</p>",
                    visitante: 'Real Caguama', logoVisitante: 'caguama.png', golesVisitante: '0', eventosVisitante: "",
                    fecha: 'Viernes 30 de Enero, 2026', hora: '16:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '0', eventosLocal: "<p>Fósiles pierde al no presentarse al partido</p>",
                    visitante: 'Estelares FC', logoVisitante: 'estelares.png', golesVisitante: '2', eventosVisitante: "",
                    fecha: 'Viernes 30 de Enero, 2026', hora: '17:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'SAT Football Club', logoLocal: 'sat.png', golesLocal: '3', eventosLocal: "<p>⚽ Angel Ordoñez</p><p>⚽ Diego Baudel</p><p>⚽ Luis Menejes</p>",
                    visitante: 'Inges FC', logoVisitante: 'inges.png', golesVisitante: '5', eventosVisitante: "<p>Alexander Flores ⚽ 3</p><p>Eduardo Ake ⚽</p><p>José Colorado ⚽</p><p>José Corona 🟨</p>",
                    fecha: 'Viernes 30 de Enero, 2026', hora: '18:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones_1.png', golesLocal: '7', eventosLocal: "<p>⚽ Aarón Martínez </p><p>⚽ Arturo Can </p><p>⚽⚽ Brian Escamilla 🟨</p><p>⚽⚽ Diego Couoh 🟨</p><p>⚽ Victor Itzá </p>",
                    visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', golesVisitante: '2', eventosVisitante: "<p>Marco Castillo ⚽⚽</p><p>José Lujan 🟨</p>",
                    fecha: 'Viernes 30 de Enero, 2026', hora: '19:00 hrs', esPendiente: false, mensajePendiente: ''
                }
                
            ]
        },
        {
            titulo: 'Jornada 2', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Miércoles 4 de Febrero, 2026', hora: '15:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Galácticos', logoLocal: 'galacticos_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Jueves 5 de Febrero, 2026', hora: '19:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'SAT Football Club', logoLocal: 'sat.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 6 de Febrero, 2026', hora: '14:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Atlético Temozón', logoLocal: 'temozon_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 6 de Febrero, 2026', hora: '15:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Real Caguama', logoLocal: 'caguama.png', golesLocal: '', eventosLocal: "",
                    visitante: 'FC Crystal', logoVisitante: 'crystal.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 6 de Febrero, 2026', hora: '16:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Inges FC', logoLocal: 'inges.png', golesLocal: '9', eventosLocal: "",
                    visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', golesVisitante: '3', eventosVisitante: "",
                    fecha: 'Viernes 6 de Febrero, 2026', hora: '16:00 hrs', esPendiente: false, mensajePendiente: ''
                }
                
            ]
        },
        {
            titulo: 'Jornada 3', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Miércoles 11 de Febrero, 2026', hora: '19:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'FC Crystal', logoLocal: 'crystal.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Jueves 12 de Febrero, 2026', hora: '19:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'SAT Football Club', logoVisitante: 'sat.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 13 de Febrero, 2026', hora: '14:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones_1.png', golesLocal: '2', eventosLocal: "",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '0', eventosVisitante: "<p>Turismólogos pierde al no pagar el arbitraje a tiempo</p>",
                    fecha: 'Viernes 13 de Febrero, 2026', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Real Caguama', logoLocal: 'caguama.png', golesLocal: '2', eventosLocal: "",
                    visitante: 'Estelares FC', logoVisitante: 'estelares.png', golesVisitante: '0', eventosVisitante: "<p>Estelares pierde al no pagar el arbitraje a tiempo</p>",
                    fecha: 'Viernes 13 de Febrero, 2026', hora: '17:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Corinthians FC', logoLocal: 'corinthians.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Inges FC', logoVisitante: 'inges.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'VIernes 13 de Febrero, 2026', hora: '18:00 hrs', esPendiente: true, mensajePendiente: ''
                }
                
            ]
        },
        {
            titulo: 'Jornada 4', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Atlético Temozón', logoLocal: 'temozon_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Inges FC', logoVisitante: 'inges.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Real Caguama', logoLocal: 'caguama.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Jueves 26 de Febrero, 2026', hora: '19:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Corinthians FC', logoLocal: 'corinthians.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '2', eventosLocal: "<p>⚽ Felix Lara</p><p>⚽ Uziel Solis</p><p>🟨 Miguel Rodas</p>",
                    visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', golesVisitante: '3', eventosVisitante: "<p>Arturo Can ⚽⚽</p><p>Antonio Sanchez ⚽</p>",
                    fecha: 'Jueves 19 de Febrero, 2026', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '', eventosLocal: "",
                    visitante: 'FC Crystal', logoVisitante: 'crystal.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Turismólogos FC', logoLocal: 'turismologos.png', golesLocal: '', eventosLocal: "",
                    visitante: 'SAT Football Club', logoVisitante: 'sat.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 5', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Estelares FC', logoVisitante: 'estelares.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 27 de Febrero, 2026', hora: '14:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones_1.png', golesLocal: '1', eventosLocal: "",
                    visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', golesVisitante: '2', eventosVisitante: "",
                    fecha: 'Viernes 27 de Febrero, 2026', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Real Caguama', logoLocal: 'caguama.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 27 de Febrero, 2026', hora: '16:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'SAT Football Club', logoLocal: 'sat.png', golesLocal: '', eventosLocal: "",
                    visitante: 'FC Crystal', logoVisitante: 'crystal.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 27 de Febrero, 2026', hora: '18:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Inges FC', logoLocal: 'inges.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 27 de Febrero, 2026', hora: '19:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Galácticos', logoLocal: 'galacticos_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 6', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Atlético Temozón', logoLocal: 'temozon_1.png', golesLocal: '4', eventosLocal: "<p>⚽⚽ Tomas Soberanis </p><p>⚽ K. Hernandez </p><p>⚽ Mauricio Montero</p>",
                    visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', golesVisitante: '3', eventosVisitante: "<p>Aarón Martínez ⚽</p><p>Axel Ocampo ⚽</p><p>Victor Itzá ⚽</p><p>Williams Laines 🟨</p>",
                    fecha: 'Viernes 6 de Marzo, 2026', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'FC Crystal', logoLocal: 'crystal.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '', eventosLocal: "",
                    visitante: 'SAT Football Club', logoVisitante: 'sat.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Galácticos', logoLocal: 'galacticos_1.png', golesLocal: '3', eventosLocal: "",
                    visitante: 'Inges FC', logoVisitante: 'inges.png', golesVisitante: '4', eventosVisitante: "",
                    fecha: 'Viernes 6 de Marzo, 2026', hora: '', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Turismólogos FC', logoLocal: 'turismologos.png', golesLocal: '9', eventosLocal: "<p>5 ⚽ Álvaro Madrazo</p><p>⚽⚽ Guillermo Rivas</p><p>Turismólogos (Autogol) ⚽</p>",
                    visitante: 'Real Caguama', logoVisitante: 'caguama.png', golesVisitante: '1', eventosVisitante: "<p>Leonel Uitzil ⚽</p><p>César Sanchez 🟨</p>",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 7', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'SAT Football Club', logoLocal: 'sat.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Inges FC', logoVisitante: 'inges.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Corinthians FC', logoLocal: 'corinthians.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones_1.png', golesLocal: '6', eventosLocal: "<p>4 ⚽ Aarón Martínez</p><p>⚽ Arturo Can</p><p>⚽ Eduardo Canche</p>",
                    visitante: 'Real Caguama', logoVisitante: 'caguama.png', golesVisitante: '2', eventosVisitante: "<p>Isaac Dominguez ⚽⚽</p>",
                    fecha: 'Viernes 13 de Marzo, 2026', hora: '17:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Galácticos', logoLocal: 'galacticos_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Estelares FC', logoVisitante: 'estelares.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '', eventosLocal: "",
                    visitante: 'FC Crystal', logoVisitante: 'crystal.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 8', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Galácticos', logoLocal: 'galacticos_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'FC Crystal', logoLocal: 'crystal.png', golesLocal: '2', eventosLocal: "<p>⚽ Rodrigo Almeyda</p><p>⚽ Yordi Gonzalez</p><p>🟨 Derek Narvaez</p>",
                    visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', golesVisitante: '6', eventosVisitante: "<p>Aarón Martínez ⚽ 3</p><p>Diego Couoh ⚽⚽</p><p>Edwin Alcalde ⚽</p>",
                    fecha: 'Viernes 20 de Marzo, 2026', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Inges FC', logoLocal: 'inges.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Real Caguama', logoLocal: 'caguama.png', golesLocal: '', eventosLocal: "",
                    visitante: 'SAT Football Club', logoVisitante: 'sat.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 9', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Atlético Temozón', logoLocal: 'temozon_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'FC Crystal', logoLocal: 'crystal.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Estelares FC', logoVisitante: 'estelares.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 27 de Marzo, 2026', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'SAT Football Club', logoLocal: 'sat.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Real Caguama', logoLocal: 'caguama.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Inges FC', logoVisitante: 'inges.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 10', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Corinthians FC', logoLocal: 'corinthians.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Dragones FC', logoVisitante: 'dragones_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 17 de Abril, 2026', hora: '15:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '', eventosLocal: "",
                    visitante: 'SAT Football Club', logoVisitante: 'sat.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Inges FC', logoLocal: 'inges.png', golesLocal: '', eventosLocal: "",
                    visitante: 'FC Crystal', logoVisitante: 'crystal.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Turismólogos FC', logoLocal: 'fosiles.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Fósiles FC', logoVisitante: 'turismologos.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Galácticos', logoLocal: 'galacticos_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Real Caguama', logoVisitante: 'caguama.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 11', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Atlético Temozón', logoLocal: 'temozon_1.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Galácticos', logoVisitante: 'galacticos_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Corinthians FC', logoLocal: 'corinthians.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas_1.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones_1.png', golesLocal: '4', eventosLocal: "<p>⚽ Eduardo Canché</p><p>⚽ Edgar Osalde</p><p>⚽ Antonio Sánchez</p><p>⚽ Artura Can</p>",
                    visitante: 'SAT Football Club', logoVisitante: 'sat.png', golesVisitante: '0', eventosVisitante: "",
                    fecha: 'Viernes 24 de Abril, 2026', hora: '18:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Inges FC', logoLocal: 'inges.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Estelares FC', logoVisitante: 'estelares.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'FC Crystal', logoLocal: 'crystal.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Turismólogos FC', logoVisitante: 'turismologos.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Real Caguama', logoVisitante: 'caguama.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
                }
            ]
        }
    ];

    let html = '';
    jornadas.forEach(jornada => {
        html += `
            <details class="jornada-wrapper">
                <summary class="jornada-header">
                    <h3 class="jornada-title">${jornada.titulo}</h3>
                    <span class="jornada-status-badge ${jornada.claseEstado}">${jornada.estado}</span>
                </summary>
                <div class="match-list">
        `;

        jornada.partidos.forEach(partido => {
            const scoreHTML = partido.esPendiente
                ? '<div class="match-score-box pending-match"><span class="time-vs">VS</span></div>'
                : `<div class="match-score-box"><span class="score">${partido.golesLocal}</span><span class="divider">-</span><span class="score">${partido.golesVisitante}</span></div>`;

            const detailsHTML = partido.esPendiente
                ? `<div class="pending-notice"><p>${partido.mensajePendiente}</p></div>`
                : `<div class="home-events text-right">${partido.eventosLocal}</div><div class="event-divider"></div><div class="away-events text-left">${partido.eventosVisitante}</div>`;

            html += `
                <details class="match-card">
                    <summary class="match-summary">
                        <div class="match-teams">
                            <!-- Equipo Local -->
                            <div class="team-info home-team">
                                <div class="team-logo-box">
                                    <img src="../imagenes_ucaribe/logos_equipos/${partido.logoLocal}" alt="${partido.local}" class="team-logo-img">
                                </div>
                                <span class="team-name">${partido.local}</span>
                            </div>
                            
                            ${scoreHTML}
                            
                            <!-- Equipo Visitante -->
                            <div class="team-info away-team">
                                <span class="team-name">${partido.visitante}</span>
                                <div class="team-logo-box">
                                    <img src="../imagenes_ucaribe/logos_equipos/${partido.logoVisitante}" alt="${partido.visitante}" class="team-logo-img">
                                </div>
                            </div>
                        </div>
                        <span class="click-to-expand">Ver detalles ▼</span>
                    </summary>
                    <div class="match-details">
                        <div class="match-meta">
                            <span>📅 ${partido.fecha}</span>
                            <span>|</span>
                            <span>⏰ ${partido.hora}</span>
                        </div>
                        <div class="match-events">
                            ${detailsHTML}
                        </div>
                    </div>
                </details>
            `;
        });

        html += '</div></details>';
    });

    container.innerHTML = html;
}

function renderEliminatorias() {
    const container = document.getElementById('eliminatorias-container');
    if (!container) return;

    const liguilla = [
        {
            ronda: 'Cuartos de Final',
            claseRonda: 'ucl-round-cuartos',
            partidos: [
                {
                    equipo1: 'Estelares FC', 
                    equipo2: 'FC Crystal',
                    marcador: '<small class="marcadores">Ida: Sin Información | Vuelta: Sin Información</small><br><strong>Global: 19-1</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '18:00 hrs',
                    
                    golesIda: ["Carlos Mendoza (15') ⚽"], golesVuelta: [],
                    tarjetasIda: ["Mateo Silva (30') 🟨"], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Capuchas FC', equipo2: 'Dragones FC',
                    marcador: '<small class="marcadores">Ida: Sin Información | Vuelta: Sin Información</small><br><strong>Global: 9-5</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '16:00 hrs',
                    
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Atlético Temozón', equipo2: 'Turismólogos FC',
                    marcador: '<small class="marcadores">Ida: 1-3 | Vuelta: 8-2</small><br><strong>Global: 11-3</strong>',
                    
                    
                    fechaIda: 'Miércoles 5 de Noviembre, 2025', horaIda: '14:00 hrs',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '17:00 hrs',
                    
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Inges FC', 
                    equipo2: 'Corinthians FC',
                    marcador: '<small class="marcadores">Ida: 1-2 gana Inges FC | Vuelta: 1-2 gana Corinthians FC</small><br><strong>Global: 3-3 (Pasa Inges FC por penales)</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    fechaVuelta: 'Sin Información', horaVuelta: '19:00 hrs', 
                    
                    
                    golesIda: [
                        { jugador: '⚽ Jorge Delgadillo', equipo: 'equipo2' },
                        { jugador: 'Israel Corona ⚽⚽', equipo: 'equipo1' }
                    ],
                    tarjetasIda: [
                        { jugador: '', equipo: '' }
                    ],
                    
                    
                    golesVuelta: [
                        { jugador: '⚽ José Colorado', equipo: 'equipo2' },
                        { jugador: 'Jorge Delgadillo ⚽⚽', equipo: 'equipo1' }
                    ],
                    tarjetasVuelta: [
                        { jugador: 'Moisés Vieyra 🟥', equipo: 'equipo2' }
                    ],
                    claseExtra: 'quarter-match'
                }
            ]
        },
        {
            ronda: 'Semifinales',
            claseRonda: 'ucl-round-semis',
            partidos: [
                {
                    equipo1: 'Estelares FC', equipo2: 'Capuchas FC',
                    marcador: '<small class="marcadores">Ida: 2-3 | Vuelta: 2-7</small><br><strong>Global: 9-5</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '18:00 hrs',
                    
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'final-four'
                },
                {
                    equipo1: 'Dragones FC', equipo2: 'Milan',
                    marcador: '<small class="marcadores">Ida: 3-4 | Vuelta: 7-2</small><br><strong>Global: 5-11</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '18:00 hrs',
                    
                    golesIda: [], golesVuelta: ["Héctor Moreno (5') ⚽"],
                    tarjetasIda: ["César Huerta (70') 🟨"], tarjetasVuelta: [],
                    claseExtra: 'final-four'
                }
            ]
        },
        {
            ronda: 'Gran Final',
            claseRonda: 'ucl-round-final',
            partidos: [
                {
                    equipo1: 'Estelares FC', equipo2: 'Milan',
                    marcador: '<strong>Resultado: Sin Información</strong><br><strong>🏆 ¡CAMPEÓN ESTELARES! </strong>',
                    
                    
                    fechaIda: 'Viernes 21 de noviembre, 2025', horaIda: '16:00 hrs',
                    
                    
                    fechaVuelta: null, horaVuelta: null,
                    
                    golesIda: [], golesVuelta: null, 
                    tarjetasIda: [], tarjetasVuelta: null,
                    claseExtra: 'champion-match'
                },
                {
                    equipo1: 'Capuchas FC', equipo2: 'Dragones FC',
                    marcador: '<strong>Resultado: Sin Información</strong><br><strong>🥉 ¡3ER LUGAR CAPUCHAS! </strong>',
                    
                    
                    fechaIda: 'Viernes 21 de noviembre, 2025', horaIda: '15:00 hrs',
                    
                    
                    fechaVuelta: null, horaVuelta: null,
                    
                    golesIda: [], golesVuelta: null, 
                    tarjetasIda: [], tarjetasVuelta: null,
                    claseExtra: 'bronze-match',
                    etiqueta: '3er Lugar'
                }
            ]
        }
    ];

    let html = '';

    liguilla.forEach(fase => {
        html += `<div class="round-column ${fase.claseRonda}"><h4 class="round-title">${fase.ronda}</h4><div class="match-bracket ucl-bracket-group">`;

        fase.partidos.forEach(p => {
            const dataSegura = btoa(unescape(encodeURIComponent(JSON.stringify(p))));
            const etiquetaHtml = p.etiqueta ? `<div class="match-label">${p.etiqueta}</div>` : '';
            html += `
                <div class="bracket-card ucl-match-card ${p.claseExtra}"
                    onclick="abrirModalDetalle('${dataSegura}')"
                    style="cursor: pointer;">
                    ${etiquetaHtml}
                    <div class="teams-match">
                        <span>${p.equipo1}</span> <b>vs</b> <span>${p.equipo2}</span>
                    </div>
                    <div class="scores-match">${p.marcador}</div>
                </div>
            `;
        });

        html += '</div></div>';
    });

    container.innerHTML = html;
}

function abrirModalDetalle(encodedData) {
    const p = JSON.parse(decodeURIComponent(escape(atob(encodedData))));

    document.getElementById('modal-titulo').innerText = `${p.equipo1} vs ${p.equipo2}`;

    
    const agruparEventosPorEquipo = (arregloEventos, identificadorEquipo) => {
        if (!arregloEventos || arregloEventos.length === 0) {
            return '<li style="color: #555; font-style: italic; list-style: none;">-</li>';
        }
        const filtrados = arregloEventos.filter(item => item.equipo === identificadorEquipo);
        return filtrados.length > 0
            ? filtrados.map(item => `<li style="margin-bottom: 4px;">${item.jugador}</li>`).join('')
            : '<li style="color: #555; font-style: italic; list-style: none;">-</li>';
    };

    
    const esPartidoUnico = !p.fechaVuelta || p.fechaVuelta.trim() === "";
    const textoTituloIda = esPartidoUnico ? '▶ Partido Único' : '▶ Partido de Ida';

    
    const htmlSeccionVuelta = esPartidoUnico ? '' : `
        <div style="margin-bottom: 12px; border-bottom: 1px solid #444; padding-bottom: 6px; margin-top: 25px;">
            <h4 style="color: var(--brand-teal); margin: 0 0 5px 0; font-size: 1rem; display: block;">▶ Partido de Vuelta</h4>
            <span style="font-size: 0.78rem; color: var(--text-secondary); display: block;">📅 ${p.fechaVuelta} | 🕒 ${p.horaVuelta}</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <!-- Columna Izquierda: Equipo 1 (Vuelta) -->
            <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; text-align: right;">
                <strong style="display: block; margin-bottom: 8px; font-size: 0.9rem; color: var(--brand-teal);">${p.equipo1}</strong>
                <ul style="list-style: none; padding: 0; margin: 0 0 8px 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.golesVuelta, 'equipo1')}</ul>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.tarjetasVuelta, 'equipo1')}</ul>
            </div>
            <!-- Columna Derecha: Equipo 2 (Vuelta) -->
            <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; text-align: left;">
                <strong style="display: block; margin-bottom: 8px; font-size: 0.9rem; color: var(--brand-teal);">${p.equipo2}</strong>
                <ul style="list-style: none; padding: 0; margin: 0 0 8px 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.golesVuelta, 'equipo2')}</ul>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.tarjetasVuelta, 'equipo2')}</ul>
            </div>
        </div>
    `;

    document.getElementById('modal-cuerpo').innerHTML = `
        <div style="font-family: 'Inter', sans-serif; color: var(--text-white);">
            <!-- Resultado Principal -->
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
                <div style="font-size: 1.2rem; color: var(--brand-teal); line-height: 1.4;">${p.marcador}</div>
            </div>

            <!-- 🗓️ PRIMER PARTIDO (Ida o Único) -->
            <div style="margin-bottom: 12px; border-bottom: 1px solid #444; padding-bottom: 6px;">
                <h4 style="color: var(--brand-teal); margin: 0 0 5px 0; font-size: 1rem; display: block;">${textoTituloIda}</h4>
                <span style="font-size: 0.78rem; color: var(--text-secondary); display: block;">📅 ${p.fechaIda} | 🕒 ${p.horaIda}</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: ${esPartidoUnico ? '0' : '25px'};">
                <!-- Columna Izquierda: Equipo 1 (Ida/Único) -->
                <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; text-align: right;">
                    <strong style="display: block; margin-bottom: 8px; font-size: 0.9rem; color: var(--brand-teal);">${p.equipo1}</strong>
                    <ul style="list-style: none; padding: 0; margin: 0 0 8px 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.golesIda, 'equipo1')}</ul>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.tarjetasIda, 'equipo1')}</ul>
                </div>
                <!-- Columna Derecha: Equipo 2 (Ida/Único) -->
                <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; text-align: left;">
                    <strong style="display: block; margin-bottom: 8px; font-size: 0.9rem; color: var(--brand-teal);">${p.equipo2}</strong>
                    <ul style="list-style: none; padding: 0; margin: 0 0 8px 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.golesIda, 'equipo2')}</ul>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${agruparEventosPorEquipo(p.tarjetasIda, 'equipo2')}</ul>
                </div>
            </div>

            <!-- 🗓️ SECCIÓN DINÁMICA DE VUELTA (Se dibuja o se destruye sola) -->
            ${htmlSeccionVuelta}
        </div>
    `;

    
    const modal = document.getElementById('modal-partido');
    const scrollActual = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    modal.style.position = 'absolute';
    modal.style.top = `${scrollActual}px`;
    modal.style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-partido').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-partido');
    if (event.target === modal) {
        cerrarModal();
    }
};



function openTab(evt, tabName) {
    let tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
        tabContent[i].classList.remove('active-content');
    }

    let tabBtns = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active');
    }

    const todasLasJornadas = document.querySelectorAll('.jornada-wrapper');
    todasLasJornadas.forEach(jornada => {
        jornada.removeAttribute('open');
        jornada.querySelectorAll('.match-card').forEach(partido => {
            partido.removeAttribute('open');
        });
    });

    let target = document.getElementById(tabName);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active-content');
    } else {
        console.error('No se encontró el elemento con ID: ' + tabName);
    }

    evt.currentTarget.classList.add('active');
}

function cambiarVistaEspecial(tipo) {
    document.getElementById('vista-principal-torneo').style.display = 'none';
    document.getElementById('vista-equipo').style.display = 'none';

    document.getElementById('vista-goleo').style.display = (tipo === 'goleo') ? 'block' : 'none';
    document.getElementById('vista-porteros').style.display = (tipo === 'porteros') ? 'block' : 'none';

    const linkInicio = document.querySelector('a[href="index.html"], a[href="../index.html"]');
    if (linkInicio) linkInicio.style.display = 'none';

    document.getElementById('nav-inscripcion').style.display = 'none';
    document.getElementById('nav-agentes').style.display = 'none';

    document.getElementById('nav-volver').style.display = '';

    window.scrollTo(0, 0);
}

function volverTorneo() {
    document.getElementById('vista-equipo').style.display = 'none';
    document.getElementById('vista-goleo').style.display = 'none';
    document.getElementById('vista-porteros').style.display = 'none';
    document.getElementById('vista-principal-torneo').style.display = 'block';

    const linkInicio = document.querySelector('a[href="index.html"], a[href="../index.html"]');
    if (linkInicio) linkInicio.style.display = '';

    document.getElementById('nav-inscripcion').style.display = '';
    document.getElementById('nav-agentes').style.display = '';
    document.getElementById('nav-volver').style.display = 'none';

    window.scrollTo(0, 0);
}

function initInteracciones() {
    const jornadasContainers = document.querySelectorAll('.jornada-wrapper');
    jornadasContainers.forEach(jornada => {
        jornada.addEventListener('toggle', () => {
            if (jornada.open) {
                jornadasContainers.forEach(otraJornada => {
                    if (otraJornada !== jornada && otraJornada.open) {
                        otraJornada.removeAttribute('open');
                    }
                });
            } else {
                jornada.querySelectorAll('.match-card').forEach(partido => {
                    partido.removeAttribute('open');
                });
            }
        });
    });

    const matchCards = document.querySelectorAll('.match-card');
    matchCards.forEach(card => {
        card.addEventListener('toggle', () => {
            if (card.open) {
                matchCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.open) {
                        otherCard.removeAttribute('open');
                    }
                });
            }
        });
    });
}
