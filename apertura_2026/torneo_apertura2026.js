document.addEventListener('DOMContentLoaded', () => {
    renderTablaGeneral();
    renderCalendario();
    renderEliminatorias();
    renderGoleo();
    renderPorteros();
    initInteracciones();
});

function renderTablaGeneral() {
    const container = document.getElementById('tabla-general-body');
    if (!container) return;

    const tablaPosiciones = [
        { pos: 1, equipo: 'Estelares FC', logo: 'Estelares.png', pj: 9, g: 7, e: 1, p: 1, gf: 54, gc: 15, dif: '+39', pts: 22, clasifica: true },
        { pos: 2, equipo: 'Capuchas FC', logo: 'Capuchas.png', pj: 9, g: 7, e: 0, p: 2, gf: 51, gc: 19, dif: '+32', pts: 21, clasifica: true },
        { pos: 3, equipo: 'Dragones FC', logo: 'Dragones.png', pj: 9, g: 6, e: 2, p: 1, gf: 46, gc: 19, dif: '+27', pts: 20, clasifica: true },
        { pos: 4, equipo: 'Milan', logo: 'Milan.png', pj: 9, g: 6, e: 1, p: 2, gf: 57, gc: 26, dif: '+31', pts: 19, clasifica: true },
        { pos: 5, equipo: 'Galácticos', logo: 'Galacticos.png', pj: 8, g: 5, e: 0, p: 3, gf: 21, gc: 32, dif: '-11', pts: 16, clasifica: true },
        { pos: 6, equipo: 'Real Caribe FC', logo: 'Real_Caribe.png', pj: 9, g: 5, e: 0, p: 4, gf: 51, gc: 32, dif: '+19', pts: 15, clasifica: true },
        { pos: 7, equipo: 'Palmeras CF', logo: 'Palmeras.png', pj: 9, g: 5, e: 0, p: 4, gf: 53, gc: 38, dif: '+15', pts: 15, clasifica: true },
        { pos: 8, equipo: 'Sementeros FC', logo: 'Sementeros.png', pj: 9, g: 4, e: 1, p: 4, gf: 27, gc: 36, dif: '-9', pts: 13, clasifica: true },
        { pos: 9, equipo: 'Fósiles FC', logo: 'Fosiles.png', pj: 9, g: 3, e: 1, p: 5, gf: 25, gc: 42, dif: '-17', pts: 10, clasifica: false },
        { pos: 10, equipo: 'Atlético Temozón', logo: 'Atletico_Temozon.png', pj: 9, g: 2, e: 0, p: 7, gf: 14, gc: 39, dif: '-25', pts: 6, clasifica: false },
        { pos: 11, equipo: 'Perceptrones', logo: 'Perceptrones.png', pj: 9, g: 0, e: 2, p: 7, gf: 18, gc: 66, dif: '-48', pts: 2, clasifica: false },
        { pos: 12, equipo: 'Wizards', logo: 'Wizards.png', pj: 9, g: 0, e: 1, p: 8, gf: 18, gc: 47, dif: '-29', pts: 1, clasifica: false }
    ];

    container.innerHTML = tablaPosiciones.map(fila => {
        const filaClase = fila.clasifica ? 'class="zona-clasificacion"' : '';
        return `
            <tr ${filaClase}>
                <td>${fila.pos}</td>
                <td class="text-left team-cell">
                    <img src="../imagenes_ucaribe/apertura2025/logos_apertura2025/${fila.logo}" alt="${fila.equipo}" class="team-logo-img">
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

function renderCalendario() {
    const container = document.getElementById('calendario-container');
    if (!container) return;

    const jornadas = [
        {
            titulo: 'Jornada 1', estado: 'Completada', claseEstado: '',
            partidos: [
                {
                    local: 'Estelares', logoLocal: '../estelares.png', golesLocal: '2', eventosLocal: "<p>Carlos Mendoza (15') ⚽</p><p>Luis Navarro (89') 🟨</p>",
                    visitante: 'Capuchas', logoVisitante: 'Capuchas.png', golesVisitante: '1', eventosVisitante: "<p>⚽ Javier Ortiz (45')</p><p>🟨 Mateo Silva (30')</p>",
                    fecha: 'Sábado 12 de Octubre, 2025', hora: '10:00 AM', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Dragones', logoLocal: 'Dragones.png', golesLocal: '0', eventosLocal: "<p>🟨 Oscar Pérez (55')</p>",
                    visitante: 'Tigres', logoVisitante: 'tigres.png', golesVisitante: '3', eventosVisitante: "<p>⚽ Jesús Corona (22', 71')</p><p>⚽ Hugo Sánchez (85')</p>",
                    fecha: 'Domingo 13 de Octubre, 2025', hora: '12:00 PM', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 2', estado: 'En Curso', claseEstado: 'en-curso',
            partidos: [
                {
                    local: 'Capuchas', logoLocal: 'Capuchas.png', golesLocal: '1', eventosLocal: "<p>Mateo Silva (40') ⚽</p>",
                    visitante: 'Dragones', logoVisitante: 'Dragones.png', golesVisitante: '1', eventosVisitante: "<p>⚽ Raúl García (65')</p>",
                    fecha: 'Sábado 19 de Octubre, 2025', hora: '10:00 AM', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Tigres', logoLocal: 'tigres.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Estelares', logoVisitante: 'estelares.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Domingo 20 de Octubre, 2025', hora: '12:00 PM', esPendiente: true, mensajePendiente: 'Partido programado para jugarse el próximo domingo.'
                }
            ]
        },
        {
            titulo: 'Jornada 3', estado: 'Próximamente', claseEstado: 'proximamente',
            partidos: [
                {
                    local: 'Estelares', logoLocal: 'estelares.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Dragones', logoVisitante: 'Dragones.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Sábado 26 de Octubre, 2025', hora: '10:00 AM', esPendiente: true, mensajePendiente: 'Horario definitivo sujeto a confirmación oficial.'
                },
                {
                    local: 'Capuchas', logoLocal: 'Capuchas.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Tigres', logoVisitante: 'tigres.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Domingo 27 de Octubre, 2025', hora: '12:00 PM', esPendiente: true, mensajePendiente: 'Venta de accesos disponible próximamente en campus.'
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
                            <div class="team-info home-team">
                                <span class="team-name">${partido.local}</span>
                                <img src="../imagenes_ucaribe/logos/${partido.logoLocal}" alt="${partido.local}" class="team-logo-img">
                            </div>
                            ${scoreHTML}
                            <div class="team-info away-team">
                                <img src="../imagenes_ucaribe/logos/${partido.logoVisitante}" alt="${partido.visitante}" class="team-logo-img">
                                <span class="team-name">${partido.visitante}</span>
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
                    equipo1: 'Estelares', equipo2: 'Tigres',
                    marcador: '<small>Ida: 0-0 | Vuelta: 2-1</small><br><strong>Global: 2-1</strong>',
                    fecha: 'Sábado 12 de Octubre, 2025', hora: '10:00 AM',
                    golesIda: ["Carlos Mendoza (15') ⚽"], golesVuelta: ["Javier Ortiz (45') ⚽"],
                    tarjetasIda: ["Mateo Silva (30') 🟨"], tarjetasVuelta: ["Luis Navarro (89') 🟨"],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Capuchas', equipo2: 'Dragones',
                    marcador: '<small>Ida: 1-0 | Vuelta: 1-1</small><br><strong>Global: 2-1</strong>',
                    fecha: 'Sábado 12 de Octubre, 2025', hora: '12:00 PM',
                    golesIda: ["Alan Ruiz (60') ⚽"], golesVuelta: [],
                    tarjetasIda: ["Fernando Diaz (20') 🟨"], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Rayados', equipo2: 'Águilas',
                    marcador: '<small>Ida: 1-0 | Vuelta: 2-0</small><br><strong>Global: 3-0</strong>',
                    fecha: 'Domingo 13 de Octubre, 2025', hora: '10:00 AM',
                    golesIda: ["Rogelio Funes (30') ⚽"], golesVuelta: ["Rogelio Funes (15') ⚽"],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Pumas', equipo2: 'Chivas',
                    marcador: '<small>Ida: 0-0 | Vuelta: 1-1</small><br><strong>Global: 1-1 (Pen: 4-3)</strong>',
                    fecha: 'Domingo 13 de Octubre, 2025', hora: '12:00 PM',
                    golesIda: [], golesVuelta: ["Juan Dinenno (80') ⚽"],
                    tarjetasIda: [], tarjetasVuelta: ["Alexis Vega (50') 🟨"],
                    claseExtra: 'quarter-match'
                }
            ]
        },
        {
            ronda: 'Semifinales',
            claseRonda: 'ucl-round-semis',
            partidos: [
                {
                    equipo1: 'Estelares', equipo2: 'Capuchas',
                    marcador: '<small>Ida: 2-0 | Vuelta: 0-0</small><br><strong>Global: 2-0</strong>',
                    fecha: 'Sábado 19 de Octubre, 2025', hora: '10:00 AM',
                    golesIda: ["Mateo Silva (10') ⚽", "Luis Navarro (85') ⚽"], golesVuelta: [],
                    tarjetasIda: ["Andrés Ortiz (40') 🟨"], tarjetasVuelta: [],
                    claseExtra: 'final-four'
                },
                {
                    equipo1: 'Rayados', equipo2: 'Pumas',
                    marcador: '<small>Ida: 0-1 | Vuelta: 1-1</small><br><strong>Global: 1-2</strong>',
                    fecha: 'Sábado 19 de Octubre, 2025', hora: '12:00 PM',
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
                    equipo1: 'Estelares', equipo2: 'Pumas',
                    marcador: '<strong>Pendiente</strong>',
                    fecha: 'Domingo 27 de Octubre, 2025', hora: '20:00 PM',
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'champion-match'
                },
                {
                    equipo1: 'Capuchas', equipo2: 'Rayados',
                    marcador: '<strong>Pendiente</strong>',
                    fecha: 'Domingo 27 de Octubre, 2025', hora: '18:00 PM',
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
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

    const crearLista = (arr) => (arr && arr.length > 0)
        ? arr.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')
        : '<li style="color: #666; font-style: italic;">Ninguno</li>';

    document.getElementById('modal-cuerpo').innerHTML = `
        <div style="font-family: 'Inter', sans-serif; color: var(--text-white);">
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
                <p style="margin: 0 0 10px 0; font-size: 0.95rem;"><strong>📅 Fecha:</strong> ${p.fecha} | <strong>⏰ ${p.hora}</strong></p>
                <div style="font-size: 1.1rem; color: var(--brand-teal); line-height: 1.4;">${p.marcador}</div>
            </div>

            <h4 style="color: var(--brand-teal); margin-bottom: 10px; border-bottom: 1px solid #444; padding-bottom: 5px; font-size: 1rem;">▶ Partido de Ida</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; margin-bottom: 5px; font-size: 0.9rem;">⚽ Goles</strong>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${crearLista(p.golesIda)}</ul>
                </div>
                <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; margin-bottom: 5px; font-size: 0.9rem;">🟨 Tarjetas</strong>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${crearLista(p.tarjetasIda)}</ul>
                </div>
            </div>

            <h4 style="color: var(--brand-teal); margin-bottom: 10px; border-bottom: 1px solid #444; padding-bottom: 5px; font-size: 1rem;">▶ Partido de Vuelta</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; margin-bottom: 5px; font-size: 0.9rem;">⚽ Goles</strong>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${crearLista(p.golesVuelta)}</ul>
                </div>
                <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; margin-bottom: 5px; font-size: 0.9rem;">🟨 Tarjetas</strong>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${crearLista(p.tarjetasVuelta)}</ul>
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal-partido').style.display = 'flex';
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

function renderGoleo() {
    const container = document.getElementById('contenedor-goleo');
    if (!container) return;

    const goleadores = [
        { nombre: 'Tomas Estrada', equipo: 'Estelares FC', goles: '24' },
        { nombre: 'Jesús Rodríguez', equipo: 'Real Caribe', goles: '17' },
        { nombre: 'Mauricio Montero', equipo: 'Palmeras CF', goles: '14' },
        { nombre: 'Antonio Sanchez', equipo: 'Dragones FC', goles: '13' },
        { nombre: 'Angel Herrera **', equipo: 'Milan', goles: '12' },
        { nombre: 'Tommas Soberanis **', equipo: 'Palmeras CF', goles: '12' },
        { nombre: 'Arturo Can', equipo: 'Real Caribe', goles: '12' },
        { nombre: 'Luis Balam', equipo: 'Milan', goles: '12' },
        { nombre: 'Eduardo de la Cruz', equipo: 'Capuchas FC', goles: '11' },
        { nombre: 'Tommas Soberanis', equipo: 'Dragones FC', goles: '10' },
        { nombre: 'Carlos Yam', equipo: 'Palmeras CF', goles: '9' },
        { nombre: 'Ramsés Ponce', equipo: 'Estelares FC', goles: '9' },
        { nombre: 'Jafeth Pacheco', equipo: 'Milan', goles: '8' },
        { nombre: 'Angel Salvatierra', equipo: 'Galácticos', goles: '8' },
        { nombre: 'Abraham Castelan', equipo: 'Milan', goles: '7' },
        { nombre: 'Víctor Itzá', equipo: 'Milan', goles: '7' },
        { nombre: 'Diego Trejo', equipo: 'Capuchas FC', goles: '7' },
        { nombre: 'Rafael Berzunza', equipo: 'Real Caribe', goles: '6' },
        { nombre: 'Diego Lopez', equipo: 'Capuchas FC', goles: '6' },
        { nombre: 'Eugenio Palomares', equipo: 'Capuchas FC', goles: '6' }
    ];

    const lider = goleadores[0];
    let html = `
        <div class="leader-podium">
            <div class="stats-card-vertical leader-card">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="color: #ffd700; border-color: #ffd700;">1</div>
                    <img src="../imagenes_ucaribe/apertura2025/goleo_apertura2025/jugador.png" class="stats-player-img" alt="Líder Goleo">
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

        html += `
            <div class="stats-card-vertical">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="${colorMedalla}">${index + 2}</div>
                    <img src="../imagenes_ucaribe/apertura2025/goleo_apertura2025/jugador.png" alt="${jugador.nombre}" class="stats-player-img">
                </div>
                <div class="stats-info-centered">
                    <h3>${jugador.nombre}</h3>
                    <p>${jugador.equipo}</p>
                    <span class="badge-stats">${jugador.goles} GOLES</span>
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
        { nombre: 'Ian Cisneros', equipo: 'Dragones FC', efectividad: '19 GOLES EN 9 PARTIDOS' },
        { nombre: 'Emerick Lang', equipo: 'Palmeras CF', efectividad: '38 GOLES EN 9 PARTIDOS' },
        { nombre: 'Jorge Soberanes', equipo: 'Perceptrones', efectividad: '66 GOLES EN 9 PARTIDOS' },
        { nombre: 'Moisés Vieyra', equipo: 'Estelares FC', efectividad: '10 GOLES EN 8 PARTIDOS' },
        { nombre: 'Adrián Paxtian', equipo: 'Real Caribe', efectividad: '26 GOLES EN 7 PARTIDOS' },
        { nombre: 'Fabián Castro', equipo: 'Fósiles FC', efectividad: '29 GOLES EN 7 PARTIDOS' },
        { nombre: 'Mario Hoil', equipo: 'Galácticos', efectividad: '32 GOLES EN 7 PARTIDOS' },
        { nombre: 'Erick Reyes', equipo: 'Wizards', efectividad: '42 GOLES EN 7 PARTIDOS' },
        { nombre: 'José Cohuo', equipo: 'Milan', efectividad: '16 GOLES EN 6 PARTIDOS' },
        { nombre: 'Luis Guzmán', equipo: 'Atlético Temozón', efectividad: '22 GOLES EN 6 PARTIDOS' },
        { nombre: 'José Prado', equipo: 'Capuchas FC', efectividad: '8 GOLES EN 5 PARTIDOS' },
        { nombre: 'Gilberto de la Cruz', equipo: 'Capuchas FC', efectividad: '11 GOLES EN 4 PARTIDOS' },
        { nombre: 'Alan Soto', equipo: 'Sementeros FC', efectividad: '16 GOLES EN 4 PARTIDOS' },
        { nombre: 'Uriel Hernández', equipo: 'Atlético Temozón', efectividad: '17 GOLES EN 3 PARTIDOS' },
        { nombre: 'Jorge Campos', equipo: 'Milan', efectividad: '9 GOLES EN 2 PARTIDOS' },
        { nombre: 'Erick Osorio', equipo: 'Milan', efectividad: '1 GOLES EN 1 PARTIDOS' },
        { nombre: 'Isai López', equipo: 'Wizards', efectividad: '2 GOLES EN 1 PARTIDOS' },
        { nombre: 'Karl Suárez', equipo: 'Estelares FC', efectividad: '5 GOLES EN 1 PARTIDOS' },
        { nombre: 'Aram Martínez', equipo: 'Wizards', efectividad: '5 GOLES EN 1 PARTIDOS' },
        { nombre: 'Alejandro Yah', equipo: 'Sementeros FC', efectividad: '10 GOLES EN 1 PARTIDOS' }
    ];

    const liderPortero = porteros[0];
    let html = `
        <div class="leader-podium">
            <div class="stats-card-vertical leader-card">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="color: #ffd700; border-color: #ffd700;">1</div>
                    <img src="../imagenes_ucaribe/apertura2025/porteros_apertura2025/portero.png" class="stats-player-img" alt="Líder Portero">
                </div>
                <div class="stats-info-centered">
                    <h3>${liderPortero.nombre}</h3>
                    <p>${liderPortero.equipo}</p>
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

        html += `
            <div class="stats-card-vertical">
                <div class="stats-img-wrapper">
                    <div class="stats-pos-badge" style="${colorMedalla}">${index + 2}</div>
                    <img src="../imagenes_ucaribe/apertura2025/porteros_apertura2025/portero.png" alt="${portero.nombre}" class="stats-player-img">
                </div>
                <div class="stats-info-centered">
                    <h3>${portero.nombre}</h3>
                    <p>${portero.equipo}</p>
                    <span class="badge-stats">${portero.efectividad} EFECTIVIDAD</span>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function mostrarEquipo(nombreEquipo) {
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
        'Estelares': {
            logo: 'estelares.png',
            plantilla: [
                { nombre: 'Carlos Mendoza', dorsal: '10', rol: 'CAPITÁN', foto: 'foto_jugador.jpg' },
                { nombre: 'Luis Navarro', dorsal: '01', rol: 'PORTERO', foto: 'foto_jugador.jpg' },
                { nombre: 'Mateo Silva', dorsal: '04', rol: 'JUGADOR', foto: 'foto_jugador.jpg' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '12 Oct 2025', local: 'Estelares', logoLocal: 'estelares.png', marcador: '2 - 1', visitante: 'Capuchas', logoVisitante: 'Capuchas.png', resultado: 'VICTORIA', claseRes: 'res-victoria' },
                { jornada: 'Jornada 3', fecha: '26 Oct 2025', local: 'Estelares', logoLocal: 'estelares.png', marcador: '0 - 2', visitante: 'Tigres', logoVisitante: 'tigres.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        },
        'Cuervos': {
            logo: 'cuervos.png',
            plantilla: [
                { nombre: 'Javier Ortiz', dorsal: '09', rol: 'CAPITÁN', foto: 'foto_jugador.jpg' },
                { nombre: 'Alan Ruiz', dorsal: '07', rol: 'MEDIO', foto: 'foto_jugador.jpg' }
            ],
            historial: [
                { jornada: 'Jornada 1', fecha: '12 Oct 2025', local: 'Estelares', logoLocal: 'estelares.png', marcador: '2 - 1', visitante: 'Cuervos', logoVisitante: 'cuervos.png', resultado: 'DERROTA', claseRes: 'res-derrota' }
            ]
        }
    };

    const equipo = baseDatosEquipos[nombreEquipo] || { logo: nombreEquipo.toLowerCase() + '.png', plantilla: [], historial: [] };

    document.getElementById('titulo-equipo-dinamico').innerText = nombreEquipo;
    document.getElementById('logo-equipo-dinamico').src = '../imagenes_ucaribe/logos/' + equipo.logo;

    let htmlPlantilla = '';
    if (equipo.plantilla.length === 0) {
        htmlPlantilla = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">No hay jugadores registrados aún.</p>';
    } else {
        equipo.plantilla.forEach(jugador => {
            htmlPlantilla += `
                <div class="player-card-pro">
                    <div class="player-img-left"><img src="${jugador.foto}" alt="${jugador.nombre}"></div>
                    <div class="player-info-right">
                        <h3>${jugador.nombre}</h3>
                        <p class="role-tag">Dorsal: ${jugador.dorsal}</p>
                        <span class="badge-role">${jugador.rol}</span>
                    </div>
                </div>`;
        });
    }
    document.getElementById('contenedor-plantilla-dinamica').innerHTML = htmlPlantilla;

    let htmlHistorial = '';
    if (equipo.historial.length === 0) {
        htmlHistorial = '<tr><td colspan="6" style="color:var(--text-secondary); text-align:center; padding: 20px;">No hay partidos registrados en el historial.</td></tr>';
    } else {
        equipo.historial.forEach(partido => {
            const htmlLocal = partido.local === nombreEquipo ? `<strong>${partido.local}</strong>` : partido.local;
            const htmlVisitante = partido.visitante === nombreEquipo ? `<strong>${partido.visitante}</strong>` : partido.visitante;
            const colorRojo = partido.claseRes === 'res-derrota' ? "style='color: #ef4444;'" : '';

            htmlHistorial += `
                <tr>
                    <td>${partido.jornada}</td>
                    <td class="text-muted">${partido.fecha}</td>
                    <td class="text-left team-cell"><img src="../imagenes_ucaribe/logos/${partido.logoLocal}" class="team-logo-img"> ${htmlLocal}</td>
                    <td class="pts-cell text-teal" ${colorRojo}>${partido.marcador}</td>
                    <td class="text-left team-cell"><img src="../imagenes_ucaribe/logos/${partido.logoVisitante}" class="team-logo-img"> ${htmlVisitante}</td>
                    <td><span class="badge-resultado ${partido.claseRes}">${partido.resultado}</span></td>
                </tr>`;
        });
    }
    document.getElementById('contenedor-historial-dinamico').innerHTML = htmlHistorial;
}

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
