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
        {
            pos: 1,
            equipo: 'Estelares FC',
            logo: 'estelares.png',
            pj: 1,
            g: 1,
            e: 0,
            p: 0,
            gf: 6,
            gc: 4,
            dif: '+2',
            pts: 3,
            clasifica: true
        },
        {
            pos: 2,
            equipo: 'Capuchas FC',
            logo: 'capuchas_1.png',
            pj: 1,
            g: 0,
            e: 0,
            p: 1,
            gf: 4,
            gc: 6,
            dif: '-2',
            pts: 0,
            clasifica: true
        },
        {
            pos: 3,
            equipo: 'Dragones FC',
            logo: 'dragones_1.png',
            pj: 1,
            g: 1,
            e: 0,
            p: 0,
            gf: 3,
            gc: 2,
            dif: '+1',
            pts: 3,
            clasifica: true
        },
        {
            pos: 4,
            equipo: 'Universo 7',
            logo: 'universo7.png',
            pj: 1,
            g: 1,
            e: 0,
            p: 0,
            gf: 11,
            gc: 0,
            dif: '0',
            pts: 3,
            clasifica: true
        },
        {
            pos: 5,
            equipo: 'Sportmatozoides FC',
            logo: 'sportmatozoides.png',
            pj: 1,
            g: 0,
            e: 0,
            p: 1,
            gf: 0,
            gc: 11,
            dif: '-11',
            pts: 0,
            clasifica: true
        },
        {
            pos: 6,
            equipo: 'Talacheros FC',
            logo: 'talacheros.png',
            pj: 0,
            g: 0,
            e: 0,
            p: 0,
            gf: 0,
            gc: 0,
            dif: '0',
            pts: 0,
            clasifica: true
        },
        {
            pos: 7,
            equipo: 'Kantulikin FC',
            logo: 'kantulikin.png',
            pj: 1,
            g: 0,
            e: 0,
            p: 0,
            gf: 3,
            gc: 4,
            dif: '-1',
            pts: 0,
            clasifica: true
        },
        {
            pos: 8,
            equipo: 'Sementeros FC',
            logo: 'sementeros_1.png',
            pj: 1,
            g: 1,
            e: 0,
            p: 0,
            gf: 4,
            gc: 3,
            dif: '+1',
            pts: 3,
            clasifica: true
        },
        {
            pos: 9,
            equipo: 'Corinthians FC',
            logo: 'corinthians.png',
            pj: 1,
            g: 0,
            e: 0,
            p: 1,
            gf: 2,
            gc: 3,
            dif: '-1',
            pts: 0,
            clasifica: false
        },
        {
            pos: 10,
            equipo: 'Atlético Temozón',
            logo: 'temozon_1.png',
            pj: 1,
            g: 1,
            e: 0,
            p: 0,
            gf: 9,
            gc: 4,
            dif: '+5',
            pts: 3,
            clasifica: false
        },
        {
            pos: 11,
            equipo: 'FC Crystal',
            logo: 'crystal.png',
            pj: 1,
            g: 0,
            e: 0,
            p: 1,
            gf: 4,
            gc: 9,
            dif: '-5',
            pts: 0,
            clasifica: false
        }
    ];

    const tablaOrdenada = [...tablaPosiciones].sort((equipoA, equipoB) => {
        const diferenciaA = equipoA.gf - equipoA.gc;
        const diferenciaB = equipoB.gf - equipoB.gc;

        return equipoB.pts - equipoA.pts
            || diferenciaB - diferenciaA
            || equipoB.gf - equipoA.gf
            || equipoB.g - equipoA.g;
    });

    container.innerHTML = tablaOrdenada.map((fila, indice) => {
        fila.pos = indice + 1;
        fila.clasifica = indice < 8;
        const filaClase = fila.clasifica ? 'class="zona-clasificacion"' : '';
        const diferencia = fila.gf - fila.gc;
        return `
            <tr ${filaClase}>
                <td>${indice + 1}</td>
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
                <td>${diferencia > 0 ? `+${diferencia}` : diferencia}</td>
                <td class="pts-cell">${fila.pts}</td>
            </tr>`;
    }).join('');
}

function renderCalendario() {
    const container = document.getElementById('calendario-container');
    if (!container) return;

    const jornadas = [
        {
            titulo: 'Jornada 1', estado: 'Completada', claseEstado: 'completada',
            partidos: [
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas_1.png', golesLocal: '4', eventosLocal: "<p>3 ⚽ Diegro Trejo</p><p>⚽ Samuel de la Rosa</p>",
                    visitante: 'Estelares FC', logoVisitante: 'Estelares.png', golesVisitante: '6', eventosVisitante: "<p>Tomás Estrada ⚽ 4</p><p>Joseph Sánchez ⚽⚽</p>",
                    fecha: 'Jueves 3 de Octubre, 2026', hora: '16:00 PM', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'Dragones_1.png', golesLocal: '3', eventosLocal: "<p>⚽⚽ Edgar Osalde</p><p>⚽ Arturo Can</p>",
                    visitante: 'Corinthians FC', logoVisitante: 'corinthians.png', golesVisitante: '2', eventosVisitante: "<p>Jorge Delgadillo ⚽⚽</p>",
                    fecha: 'Viernes 4 de Octubre, 2026', hora: '15:00 PM', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Universo 7', logoLocal: 'Universo7.png', golesLocal: '11', eventosLocal: "<p>7 ⚽ Alejandro Estrella</p><p>⚽⚽ José Corona</p><p>⚽ Victor Itzá</p><p>⚽ Brian Madrigal</p>",
                    visitante: 'Sportmatozoides FC', logoVisitante: 'Sportmatozoides.png', golesVisitante: '0', eventosVisitante: "",
                    fecha: 'Viernes 4 de Octubre, 2026', hora: '16:00 PM', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Sementeros FC', logoLocal: 'Sementeros.png', golesLocal: '4', eventosLocal: "<p>⚽Iván Yah</p><p>⚽ Victor Gutierrez</p><p>⚽ Axel Trejo</p><p>⚽ Giovanni Hernández</p>",
                    visitante: 'Kantulikin FC', logoVisitante: 'kantulikin.png', golesVisitante: '3', eventosVisitante: "<p>José Meneses ⚽</p><p>Isai López ⚽</p><p>Miguel de la Cruz ⚽</p>",
                    fecha: 'Viernes 4 de Octubre, 2026', hora: '18:00 PM', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Atlético Temozón', logoLocal: 'Temozon_1.png', golesLocal: '9', eventosLocal: "<p>⚽⚽ Antonio Prado</p><p>4 ⚽ Tomas Soberanis</p><p>⚽ Mauricio Montero</p><p>⚽ Rafael Huchin</p>",
                    visitante: 'FC Crystal', logoVisitante: 'Crystal.png', golesVisitante: '4', eventosVisitante: "<p>Rodrigo Almeyda ⚽</p><p>Isaac Dominguez⚽</p><p>Brian Pech ⚽</p><p>Luis Uuh Pérez⚽</p>",
                    fecha: 'Viernes 4 de Octubre, 2026', hora: '19:00 PM', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        // {
        //     titulo: 'Jornada 2', estado: 'En Curso', claseEstado: 'en-curso',
        //     partidos: [
        //         {
        //             local: 'Capuchas', logoLocal: 'Capuchas.png', golesLocal: '1', eventosLocal: "<p>Mateo Silva (40') ⚽</p>",
        //             visitante: 'Dragones', logoVisitante: 'Dragones.png', golesVisitante: '1', eventosVisitante: "<p>⚽ Raúl García (65')</p>",
        //             fecha: 'Sábado 19 de Octubre, 2025', hora: '10:00 AM', esPendiente: false, mensajePendiente: ''
        //         },
        //         {
        //             local: 'Tigres', logoLocal: 'tigres.png', golesLocal: '', eventosLocal: '',
        //             visitante: 'Estelares', logoVisitante: 'estelares.png', golesVisitante: '', eventosVisitante: '',
        //             fecha: 'Domingo 20 de Octubre, 2025', hora: '12:00 PM', esPendiente: true, mensajePendiente: 'Partido programado para jugarse el próximo domingo.'
        //         }
        //     ]
        // },
        {
            titulo: 'Jornada 2', estado: 'Próximamente', claseEstado: 'proximamente',
            partidos: [
                {
                    local: 'Corinthians FC', logoLocal: 'Corinthians.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Atlético Temozón', logoVisitante: 'Temozon_1.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Viernes 11 de Septiembre, 2026', hora: '18:00 PM', esPendiente: true, mensajePendiente: 'Horario definitivo sujeto a confirmación oficial.'
                },
                {
                    local: 'Estelares FC', logoLocal: 'Estelares.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Universo 7', logoVisitante: 'Universo7.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Viernes 11 de Septiembre, 2026', hora: '18:00 PM', esPendiente: true, mensajePendiente: 'Horario definitivo sujeto a confirmación oficial.'
                },
                {
                    local: 'FC Crystal', logoLocal: 'Crystal.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Sementeros FC', logoVisitante: 'Sementeros.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Viernes 11 de Septiembre, 2026', hora: '18:00 PM', esPendiente: true, mensajePendiente: 'Horario definitivo sujeto a confirmación oficial.'
                },
                {
                    local: 'Kantulikin FC', logoLocal: 'Kantulikin.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Capuchas FC', logoVisitante: 'Capuchas_1.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Viernes 11 de Septiembre, 2026', hora: '18:00 PM', esPendiente: true, mensajePendiente: 'Horario definitivo sujeto a confirmación oficial.'
                },
                {
                    local: 'Sportmatozoides FC', logoLocal: 'Sportmatozoides.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Talacheros FC', logoVisitante: 'Talacheros.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Viernes 11 de Septiembre, 2026', hora: '18:00 PM', esPendiente: true, mensajePendiente: 'Horario definitivo sujeto a confirmación oficial.'
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
                                <img src="../imagenes_ucaribe/logos_equipos/${partido.logoLocal}" alt="${partido.local}" class="team-logo-img">
                            </div>
                            ${scoreHTML}
                            <div class="team-info away-team">
                                <img src="../imagenes_ucaribe/logos_equipos/${partido.logoVisitante}" alt="${partido.visitante}" class="team-logo-img">
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
        { nombre: 'Alejandro Estrella', equipo: 'Universo 7', goles: '7', carpetaEquipo: 'universo7', foto: 'ce.png' },
        { nombre: 'Tomas Soberanis', equipo: 'Atlético Temozón', goles: '4', carpetaEquipo: 'temozon', foto: 'ts_1.png' },
        { nombre: 'Tomás Estrada', equipo: 'Estelares FC', goles: '4', carpetaEquipo: 'estelares', foto: 'te_1.png' },
        { nombre: 'Diego Trejo', equipo: 'Capuchas FC', goles: '3', carpetaEquipo: 'capuchas', foto: 'jugador.png' },
        { nombre: 'Edgar Osalde', equipo: 'Dragones FC', goles: '2', carpetaEquipo: 'dragones', foto: 'eo_1.png' },
        { nombre: 'Jorge Delgadillo', equipo: 'Corinthians FC', goles: '2', carpetaEquipo: 'corinthians', foto: 'jd_1.png' },
        { nombre: 'Antonio Prado', equipo: 'Atlético Temozón', goles: '2', carpetaEquipo: 'temozon', foto: 'ap_1.png' },
        { nombre: 'Joseph Sanchez', equipo: 'Estelares FC', goles: '2', carpetaEquipo: 'estelares', foto: 'js_1.png' },
        { nombre: 'José Corona', equipo: 'Universo 7', goles: '2', carpetaEquipo: 'universo7', foto: 'jc.png' },
        { nombre: 'Arturo Can', equipo: 'Dragones FC', goles: '1', carpetaEquipo: 'dragones', foto: 'ac_1.png' }
    ];

    const goleadoresOrdenados = [...goleadores].sort((jugadorA, jugadorB) => {
        return Number(jugadorB.goles) - Number(jugadorA.goles);
    });

    const lider = goleadoresOrdenados[0];
    
    
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

    goleadoresOrdenados.slice(1).forEach((jugador, index) => {
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
        { nombre: 'Ian Cisneros', equipo: 'Universo 7', golesRecibidos: 0, partidos: 1, carpetaEquipo: 'universo7', foto: 'ic.png' },
        { nombre: 'Jaziel Nava', equipo: 'Dragones FC', golesRecibidos: 2, partidos: 1, carpetaEquipo: 'dragones', foto: 'portero.png' },
        { nombre: 'Oswald Grajales', equipo: 'Corinthians FC', golesRecibidos: 3, partidos: 1, carpetaEquipo: 'corinthians', foto: 'og_1.png' },
        { nombre: 'Iván Yah', equipo: 'Sementeros FC', golesRecibidos: 3, partidos: 1, carpetaEquipo: 'sementeros', foto: 'iy.png' },
        { nombre: 'Uriel Hernández', equipo: 'Atlético Temozón', golesRecibidos: 4, partidos: 1, carpetaEquipo: 'temozon', foto: 'uh.png' },
        { nombre: 'Adrián Paxtian', equipo: 'Estelares FC', golesRecibidos: 4, partidos: 1, carpetaEquipo: 'estelares', foto: 'ap_1.png' },
        { nombre: 'Enrique Soberanis', equipo: 'Kantulikin FC', golesRecibidos: 4, partidos: 1, carpetaEquipo: 'kantulikin', foto: 'portero.png' },
        { nombre: 'Moisés Vieyra', equipo: 'Capuchas FC', golesRecibidos: 6, partidos: 1, carpetaEquipo: 'capuchas', foto: 'mv_1.png' },
        { nombre: 'Kevin Torres', equipo: 'FC Crystal', golesRecibidos: 9, partidos: 1, carpetaEquipo: 'crystal', foto: 'kt_1.png' },
        { nombre: 'Samuel Lang', equipo: 'Sportmatozoides FC', golesRecibidos: 11, partidos: 1, carpetaEquipo: 'sportmatozoides', foto: 'sl.png' }
    ];

    const mayorPromedioGoles = Math.max(...porteros.map(portero => (
        portero.partidos > 0 ? portero.golesRecibidos / portero.partidos : 0
    )));

    porteros.forEach(portero => {
        const promedioGoles = portero.partidos > 0
            ? portero.golesRecibidos / portero.partidos
            : mayorPromedioGoles;

        portero.efectividad = mayorPromedioGoles > 0
            ? Math.max(0, Math.min(100, (1 - promedioGoles / mayorPromedioGoles) * 100))
            : 100;
    });

    const porterosOrdenados = [...porteros].sort((porteroA, porteroB) => {
        return porteroB.efectividad - porteroA.efectividad
            || porteroB.partidos - porteroA.partidos
            || porteroA.golesRecibidos - porteroB.golesRecibidos;
    });

    const liderPortero = porterosOrdenados[0];
    
    
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
                    <span class="badge-stats">${liderPortero.efectividad.toFixed(1)}% EFECTIVIDAD</span>
                </div>
            </div>
        </div>
        <div class="players-grid-stats-porteros">
    `;

    porterosOrdenados.slice(1).forEach((portero, index) => {
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
                    <span class="badge-stats">${portero.efectividad.toFixed(1)}% EFECTIVIDAD</span>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

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
        estelares: {
            nombreReal: 'Estelares FC', carpetaEquipo: 'estelares', logo: 'estelares.png',
            plantilla: [
                { nombre: 'Tomás Estrada', rol: 'CAPITÁN', foto: 'te_1.png' },
                { nombre: 'Adrián Paxtian', rol: 'PORTERO', foto: 'ap_1.png' },
                { nombre: 'Zammer Rosas', rol: 'JUGADOR', foto: 'zr_1.png' },
                { nombre: 'Karl Suarez', rol: 'JUGADOR', foto: 'ks_1.png' },
                { nombre: 'Abraham Castelan', rol: 'JUGADOR', foto: 'ac_1.png' },
                { nombre: 'Derek', rol: 'JUGADOR', foto: 'd_1.png' },
                { nombre: 'Joseph Sanchez', rol: 'JUGADOR', foto: 'js_1.png' },
                { nombre: 'Alexander Flores', rol: 'JUGADOR', foto: 'af.png' },
                { nombre: 'Ramses Ponce', rol: 'JUGADOR', foto: 'rp_1.png' },
                { nombre: 'Carlos Yam', rol: 'JUGADOR', foto: 'cy.png' },
                { nombre: 'Quevedo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Miranda', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Jueves 3 de Octubre, 2026', local: 'Capuchas FC', logoLocal: 'Capuchas_1.png', marcador: '4 - 6', visitante: 'Estelares FC', logoVisitante: 'Estelares.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }]
        },
        capuchas: {
            nombreReal: 'Capuchas FC', carpetaEquipo: 'capuchas', logo: 'capuchas_1.png',
            plantilla: [
                { nombre: 'Eugenio Palomares', rol: 'CAPITÁN', foto: 'ep_1.png' },
                { nombre: 'Moisés Vieyra', rol: 'PORTERO', foto: 'mv_1.png' },
                { nombre: 'Alexis Huerta', rol: 'JUGADOR', foto: 'ah_1.png' },
                { nombre: 'Fernando Maya', rol: 'JUGADOR', foto: 'fm_1.png' },
                { nombre: 'Omar Bautista', rol: 'JUGADOR', foto: 'oba_1.png' },
                { nombre: 'Felipe Cruz', rol: 'JUGADOR', foto: 'fc.png' },
                { nombre: 'Angel Salvatierra', rol: 'JUGADOR', foto: 'as_1.png' },
                { nombre: 'Emmanuel Figueroa', rol: 'JUGADOR', foto: 'ef_1.png' },
                { nombre: 'Gilberto De La Cruz', rol: 'JUGADOR', foto: 'gdc_1.png' },
                { nombre: 'Diego Lopez', rol: 'JUGADOR', foto: 'dl.png' },
                { nombre: 'Diego Trejo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Emilio Rodriguez', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Samuel De La Rosa', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Jueves 3 de Octubre, 2026', local: 'Capuchas FC', logoLocal: 'Capuchas_1.png', marcador: '4 - 6', visitante: 'Estelares FC', logoVisitante: 'Estelares.png', resultado: 'DERROTA', claseRes: 'res-derrota' }]
        },
        dragones: {
            nombreReal: 'Dragones FC', carpetaEquipo: 'dragones', logo: 'dragones_1.png',
            plantilla: [
                { nombre: 'Aarón Martínez', rol: 'CAPITÁN', foto: 'am_1.png' },
                { nombre: 'Jaziel Nava', rol: 'PORTERO', foto: 'portero.png' },
                { nombre: 'Yordi González', rol: 'PORTERO', foto: 'yg.png' },
                { nombre: 'Antonio Duran', rol: 'JUGADOR', foto: 'ad_1.png' },
                { nombre: 'Diego Couoh', rol: 'JUGADOR', foto: 'dc_1.png' },
                { nombre: 'Edgar Osalde', rol: 'JUGADOR', foto: 'eo_1.png' },
                { nombre: 'Jacob Montaño', rol: 'JUGADOR', foto: 'jm.png' },
                { nombre: 'Antonio Sanchez', rol: 'JUGADOR', foto: 'as_1.png' },
                { nombre: 'Arturo Can', rol: 'JUGADOR', foto: 'ac_1.png' },
                { nombre: 'Edwin Sadrac', rol: 'JUGADOR', foto: 'Edwin Sadrac1.png' },
                { nombre: 'Manuel Marana', rol: 'JUGADOR', foto: 'mm.png' },
                { nombre: 'Alvaro Madrazo', rol: 'JUGADOR', foto: 'ama.png' },
                { nombre: 'Eduardo Canche', rol: 'JUGADOR', foto: 'ec_1.png' },
                { nombre: 'Anthony "Zeyken" Pozo', rol: 'JUGADOR', foto: 'ap.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Dragones FC', logoLocal: 'Dragones_1.png', marcador: '3 - 2', visitante: 'Corinthians FC', logoVisitante: 'Corinthians.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }]
        },
        universo7: {
            nombreReal: 'Universo 7', carpetaEquipo: 'universo7', logo: 'universo7.png',
            plantilla: [
                { nombre: 'Ian Cisneros', rol: 'CAPITÁN', foto: 'ic.png' },
                { nombre: 'Francisco Arellano', rol: 'JUGADOR', foto: 'fa.png' },
                { nombre: 'Jared Ramirez', rol: 'JUGADOR', foto: 'jr.png' },
                { nombre: 'Edgar Dzib', rol: 'JUGADOR', foto: 'ed.png' },
                { nombre: 'Alejandro Estrella', rol: 'JUGADOR', foto: 'ce.png' },
                { nombre: 'Jonathan Bacab', rol: 'JUGADOR', foto: 'jb.png' },
                { nombre: 'José Corona', rol: 'JUGADOR', foto: 'jc.png' },
                { nombre: 'Victor Itzá', rol: 'JUGADOR', foto: 'vi.png' },
                { nombre: 'Alexis Loeza', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Israel Corona', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Axel Ocampo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Hector Cabrera', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Brian Madrigal', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Universo 7', logoLocal: 'Universo7.png', marcador: '11 - 0', visitante: 'Sportmatozoides FC', logoVisitante: 'Sportmatozoides.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }]
        },
        kantulikin: {
            nombreReal: 'Kantulikin FC', carpetaEquipo: 'kantulikin', logo: 'kantulikin.png',
            plantilla: [
                { nombre: 'Braiam Hernández', rol: 'CAPITÁN', foto: 'jugador.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Sementeros FC', logoLocal: 'Sementeros_1.png', marcador: '4 - 3', visitante: 'Kantulikin FC', logoVisitante: 'Kantulikin.png', resultado: 'DERROTA', claseRes: 'res-derrota' }]
        },
        temozon: {
            nombreReal: 'Atlético Temozón', carpetaEquipo: 'temozon', logo: 'temozon_1.png',
            plantilla: [
                { nombre: 'Uriel Hernández', rol: 'CAPITÁN', foto: 'uh.png' },
                { nombre: 'Luis Guzman', rol: 'PORTERO', foto: 'lg_1.png' },
                { nombre: 'Wilberth Pech', rol: 'JUGADOR', foto: 'wp.png' },
                { nombre: 'Victor Cen', rol: 'JUGADOR', foto: 'vc_1.png' },
                { nombre: 'Kevin Garcia', rol: 'JUGADOR', foto: 'kg.png' },
                { nombre: 'Rafael Huchin', rol: 'JUGADOR', foto: 'rh.png' },
                { nombre: 'Miguel Espinoza', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Antonio Prado', rol: 'JUGADOR', foto: 'ap_1.png' },
                { nombre: 'Osvaldo Pacheco', rol: 'JUGADOR', foto: 'op.png' },
                { nombre: 'Arturo Herrera', rol: 'JUGADOR', foto: 'ah_1.png' },
                { nombre: 'Rodrigo', rol: 'JUGADOR', foto: 'r.png' },
                { nombre: 'Luis Balam', rol: 'JUGADOR', foto: 'lb.png' },
                { nombre: 'Tomas Soberanis', rol: 'JUGADOR', foto: 'ts_1.png' },
                { nombre: 'Mauricio Montero', rol: 'JUGADOR', foto: 'mm_1.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Atlético Temozón', logoLocal: 'Temozon_1.png', marcador: '9 - 4', visitante: 'FC Crystal', logoVisitante: 'Crystal.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }]
        },
        corinthians: {
            nombreReal: 'Corinthians FC', carpetaEquipo: 'corinthians', logo: 'corinthians.png',
            plantilla: [
                { nombre: 'Gabriel Rivadeneira', rol: 'CAPITÁN', foto: 'gr_1.png' },
                { nombre: 'Oswald Grajales', rol: 'PORTERO', foto: 'og_1.png' },
                { nombre: 'Williams Laines', rol: 'JUGADOR', foto: 'wl.png' },
                { nombre: 'Cristobal Camelo', rol: 'JUGADOR', foto: 'cc_1.png' },
                { nombre: 'Cristhian Aguilar', rol: 'JUGADOR', foto: 'ca.png' },
                { nombre: 'Kenneth Aguirre', rol: 'JUGADOR', foto: 'ka_1.png' },
                { nombre: 'Dereck Soriano', rol: 'JUGADOR', foto: 'ds_1.png' },
                { nombre: 'Jorge Delgadillo', rol: 'JUGADOR', foto: 'jd_1.png' },
                { nombre: 'Antuan De La Rosa', rol: 'JUGADOR', foto: 'adr_1.png' },
                { nombre: 'Vicente Ramon', rol: 'JUGADOR', foto: 'vr_1.png' },
                { nombre: 'Erik Osorio', rol: 'JUGADOR', foto: 'eo_1.png' },
                { nombre: 'Edilberto Izquierdo', rol: 'JUGADOR', foto: 'ei.png' },
                { nombre: 'Diego Juarez', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Diego Bernal', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Dragones FC', logoLocal: 'Dragones_1.png', marcador: '3 - 2', visitante: 'Corinthians FC', logoVisitante: 'Corinthians.png', resultado: 'DERROTA', claseRes: 'res-derrota' }]
        },
        crystal: {
            nombreReal: 'FC Crystal', carpetaEquipo: 'crystal', logo: 'crystal.png',
            plantilla: [
                { nombre: 'Rodrigo Almeyda', rol: 'CAPITÁN', foto: 'ra_2.png' },
                { nombre: 'Kevin Torres', rol: 'PORTERO', foto: 'kt_1.png' },
                { nombre: 'Alan Soto', rol: 'PORTERO', foto: 'as_1.png' },
                { nombre: 'Angel Ordoñez', rol: 'JUGADOR', foto: 'ao_1.png' },
                { nombre: 'Omar Torres', rol: 'JUGADOR', foto: 'ot_1.png' },
                { nombre: 'Luis Cordova', rol: 'JUGADOR', foto: 'lc_2.png' },
                { nombre: 'Juan Manuel Noh', rol: 'JUGADOR', foto: 'jm_1.png' },
                { nombre: 'Luis Uuh Perez', rol: 'JUGADOR', foto: 'lup.png' },
                { nombre: 'Sebastian Lopez', rol: 'JUGADOR', foto: 'sl.png' },
                { nombre: 'Isaac Dominguez', rol: 'JUGADOR', foto: 'id_1.png' },
                { nombre: 'Brian Pech', rol: 'JUGADOR', foto: 'bp_1.png' },
                { nombre: 'Diego Zavala', rol: 'JUGADOR', foto: 'dz.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Atlético Temozón', logoLocal: 'Temozon_1.png', marcador: '9 - 4', visitante: 'FC Crystal', logoVisitante: 'Crystal.png', resultado: 'DERROTA', claseRes: 'res-derrota' }]
        },
        talacheros: {
            nombreReal: 'Talacheros FC', carpetaEquipo: 'talacheros', logo: 'talacheros.png',
            plantilla: [
                { nombre: 'Ángel Sánchez', rol: 'CAPITÁN', foto: 'jugador.png' },
                { nombre: 'Portero Talacheros', rol: 'PORTERO', foto: 'portero.png' },
                { nombre: 'Iker Andrade', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Jeshua Soto', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Carlos Avila', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'José Nájera', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Kevin Silveira', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Nestor Chuc', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Edy Gomez', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Osiris Garfias', rol: 'JUGADOR', foto: 'jugador.png' }
            ], historial: []
        },
        sementeros: {
            nombreReal: 'Sementeros FC', carpetaEquipo: 'sementeros', logo: 'sementeros_1.png',
            plantilla: [
                { nombre: 'Iván Yah', rol: 'PORTERO', foto: 'iy.png' },
                { nombre: 'Marlon Lopez', rol: 'CAPITÁN', foto: 'jugador.png' },
                { nombre: 'Cristian Valdés', rol: 'JUGADOR', foto: 'cv.png' },
                { nombre: 'Eber', rol: 'JUGADOR', foto: 'e.png' },
                { nombre: 'Victor Gutierrez', rol: 'JUGADOR', foto: 'vg.png' },
                { nombre: 'Jan Pool', rol: 'JUGADOR', foto: 'j.png' },
                { nombre: 'Luis Chan', rol: 'JUGADOR', foto: 'l.png' },
                { nombre: 'Jaip', rol: 'JUGADOR', foto: 'j.png' },
                { nombre: 'Edwin Romo', rol: 'JUGADOR', foto: 'er.png' },
                { nombre: 'Jonathan Carrillo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Axel Trejo', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Iñaki Rello', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Francisco Peraza', rol: 'JUGADOR', foto: 'jugador.png' },
                { nombre: 'Giovanni Hernández', rol: 'JUGADOR', foto: 'jugador.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Sementeros FC', logoLocal: 'Sementeros_1.png', marcador: '4 - 3', visitante: 'Kantulikin FC', logoVisitante: 'Kantulikin.png', resultado: 'VICTORIA', claseRes: 'res-victoria' }]
        },
        sportmatozoides: {
            nombreReal: 'Sportmatozoides FC', carpetaEquipo: 'sportmatozoides', logo: 'sportmatozoides.png',
            plantilla: [
                { nombre: 'Jahir Vadillo', rol: 'CAPITÁN', foto: 'jv.png' },
                { nombre: 'Samuel Lang', rol: 'PORTERO', foto: 'sl.png' },
                { nombre: 'Ivan Guzman', rol: 'JUGADOR', foto: 'ig.png' },
                { nombre: 'Julio Mukul', rol: 'JUGADOR', foto: 'jm.png' },
                { nombre: 'Emiliano', rol: 'JUGADOR', foto: 'e.png' },
                { nombre: 'Guillermo Rivas', rol: 'JUGADOR', foto: 'gr.png' },
                { nombre: 'Travis Sanchez', rol: 'JUGADOR', foto: 'ts.png' },
                { nombre: 'Victor Ruiz', rol: 'JUGADOR', foto: 'vr.png' },
                { nombre: 'Yashar Gamboa', rol: 'JUGADOR', foto: 'yg.png' },
                { nombre: 'Angel Sanchez', rol: 'JUGADOR', foto: 'as.png' },
                { nombre: 'Omar Nava', rol: 'JUGADOR', foto: 'on.png' },
                { nombre: 'Leonel Uitzil', rol: 'JUGADOR', foto: 'lu.png' },
                { nombre: 'Luis Mex', rol: 'JUGADOR', foto: 'lm.png' }
            ],
            historial: [{ jornada: 'Jornada 1', fecha: 'Viernes 4 de Octubre, 2026', local: 'Universo 7', logoLocal: 'Universo7.png', marcador: '11 - 0', visitante: 'Sportmatozoides FC', logoVisitante: 'Sportmatozoides.png', resultado: 'DERROTA', claseRes: 'res-derrota' }]
        }
    };

    const equipo = baseDatosEquipos[idEquipo] || {
        nombreReal: idEquipo,
        carpetaEquipo: '',
        logo: 'jugador.png',
        plantilla: [],
        historial: []
    };

    document.getElementById('titulo-equipo-dinamico').innerText = equipo.nombreReal;
    document.getElementById('logo-equipo-dinamico').src = '../imagenes_ucaribe/logos_equipos/' + equipo.logo;

    let htmlPlantilla = '';
    if (equipo.plantilla.length === 0) {
        htmlPlantilla = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">No hay jugadores registrados aún.</p>';
    } else {
        equipo.plantilla.forEach(jugador => {
            const rutaFoto = `../imagenes_ucaribe/plantillas/${equipo.carpetaEquipo}/${jugador.foto}`;
            htmlPlantilla += `
                <div class="player-card-pro">
                    <div class="player-img-left"><img src="${rutaFoto}" alt="${jugador.nombre}" onerror="this.onerror=null;this.src='../imagenes_ucaribe/apertura2025/goleo_apertura2025/jugador.png';"></div>
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
