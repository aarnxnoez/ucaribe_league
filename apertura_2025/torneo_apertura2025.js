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
        { pos: 1, equipo: 'Estelares FC', logo: 'estelares.png', pj: 9, g: 7, e: 1, p: 1, gf: 54, gc: 15, dif: '+39', pts: 22, clasifica: true },
        { pos: 2, equipo: 'Capuchas FC', logo: 'capuchas.png', pj: 9, g: 7, e: 0, p: 2, gf: 51, gc: 19, dif: '+32', pts: 21, clasifica: true },
        { pos: 3, equipo: 'Dragones FC', logo: 'dragones.png', pj: 9, g: 6, e: 2, p: 1, gf: 46, gc: 19, dif: '+27', pts: 20, clasifica: true },
        { pos: 4, equipo: 'Milan', logo: 'milan.png', pj: 9, g: 6, e: 1, p: 2, gf: 57, gc: 26, dif: '+31', pts: 19, clasifica: true },
        { pos: 5, equipo: 'Galácticos', logo: 'galacticos.png', pj: 8, g: 5, e: 0, p: 3, gf: 21, gc: 32, dif: '-11', pts: 16, clasifica: true },
        { pos: 6, equipo: 'Real Caribe FC', logo: 'caribe.png', pj: 9, g: 5, e: 0, p: 4, gf: 51, gc: 32, dif: '+19', pts: 15, clasifica: true },
        { pos: 7, equipo: 'Palmeras CF', logo: 'palmeras.png', pj: 9, g: 5, e: 0, p: 4, gf: 53, gc: 38, dif: '+15', pts: 15, clasifica: true },
        { pos: 8, equipo: 'Sementeros FC', logo: 'sementeros.png', pj: 9, g: 4, e: 1, p: 4, gf: 27, gc: 36, dif: '-9', pts: 13, clasifica: true },
        { pos: 9, equipo: 'Fósiles FC', logo: 'fosiles.png', pj: 9, g: 3, e: 1, p: 5, gf: 25, gc: 42, dif: '-17', pts: 10, clasifica: false },
        { pos: 10, equipo: 'Atlético Temozón', logo: 'temozon.png', pj: 9, g: 2, e: 0, p: 7, gf: 14, gc: 39, dif: '-25', pts: 6, clasifica: false },
        { pos: 11, equipo: 'Perceptrones', logo: 'perceptrones.png', pj: 9, g: 0, e: 2, p: 7, gf: 18, gc: 66, dif: '-48', pts: 2, clasifica: false },
        { pos: 12, equipo: 'Wizards', logo: 'wizards.png', pj: 9, g: 0, e: 1, p: 8, gf: 18, gc: 47, dif: '-29', pts: 1, clasifica: false }
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

function renderCalendario() {
    const container = document.getElementById('calendario-container');
    if (!container) return;

    const jornadas = [
        {
            titulo: 'Jornada 1', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas.png', golesLocal: '5', eventosLocal: "",
                    visitante: 'Wizards', logoVisitante: 'wizards.png', golesVisitante: '2', eventosVisitante: "",
                    fecha: 'Viernes 29 de Agosto, 2025', hora: '14:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Real Caribe FC', logoLocal: 'caribe.png', golesLocal: '5', eventosLocal: "",
                    visitante: 'Dragones FC', logoVisitante: 'dragones.png', golesVisitante: '3', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                }
                
            ]
        },
        {
            titulo: 'Jornada 2', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Wizards', logoLocal: 'wizards.png', golesLocal: '7', eventosLocal: "",
                    visitante: 'Real Caribe FC', logoVisitante: 'caribe.png', golesVisitante: '12', eventosVisitante: "",
                    fecha: 'Viernes 5 de Septiembre, 2025', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones.png', golesLocal: '4', eventosLocal: "",
                    visitante: 'Sementeros FC', logoVisitante: 'sementeros.png', golesVisitante: '4', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 3', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Milan', logoLocal: 'milan.png', golesLocal: '10', eventosLocal: "",
                    visitante: 'Wizards', logoVisitante: 'wizards.png', golesVisitante: '0', eventosVisitante: "",
                    fecha: 'Viernes 12 de Septiembre, 2025', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Palmeras CF', logoLocal: 'palmeras.png', golesLocal: '2', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas.png', golesVisitante: '9', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '2', eventosLocal: "",
                    visitante: 'Sementeros FC', logoVisitante: 'sementeros.png', golesVisitante: '3', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Atlético Temozón', logoLocal: 'temozon.png', golesLocal: '0', eventosLocal: "",
                    visitante: 'Dragones FC', logoVisitante: 'dragones.png', golesVisitante: '4', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 4', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Perceptrones', logoLocal: 'perceptrones.png', golesLocal: '2', eventosLocal: "",
                    visitante: 'Dragones FC', logoVisitante: 'dragones.png', golesVisitante: '6', eventosVisitante: "",
                    fecha: 'Viernes 19 de Septiembre, 2025', hora: '14:00', esPendiente: false, mensajePendiente: ''
                }, 
                {
                    local: 'Wizards', logoLocal: 'wizards.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 19 de Septiembre, 2025', hora: '15:00 hrs', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 5', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Dragones FC', logoLocal: 'dragones.png', golesLocal: '3', eventosLocal: "",
                    visitante: 'Wizards', logoVisitante: 'wizards.png', golesVisitante: '2', eventosVisitante: "",
                    fecha: 'Viernes, 26 de Septiembre, 2025', hora: '14:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '0', eventosLocal: "",
                    visitante: 'Galácticos', logoVisitante: 'galacticos.png', golesVisitante: '2', eventosVisitante: "",
                    fecha: 'Miércoles 22 de Octubre, 2025', hora: '20:00 hrs', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 6', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Milan', logoLocal: 'milan.png', golesLocal: '3', eventosLocal: "",
                    visitante: 'Galácticos', logoVisitante: 'galacticos.png', golesVisitante: '5', eventosVisitante: "",
                    fecha: 'Viernes 3 de Octubre, 2025', hora: '18:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Wizards', logoLocal: 'wizards.png', golesLocal: '0', eventosLocal: "",
                    visitante: 'Estelares FC', logoVisitante: 'estelares.png', golesVisitante: '5', eventosVisitante: "",
                    fecha: 'Sin información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Fósiles FC', logoLocal: 'fosiles.png', golesLocal: '4', eventosLocal: "",
                    visitante: 'Dragones FC', logoVisitante: 'dragones.png', golesVisitante: '4', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 7', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '10', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon.png', golesVisitante: '0', eventosVisitante: "",
                    fecha: 'Martes 21 de Octubre, 2025', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Sementeros FC', logoLocal: 'sementeros.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Perceptrones', logoVisitante: 'perceptrones.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Miércoles 29 de Octubre, 2025', hora: '19:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Milan', logoLocal: 'milan.png', golesLocal: '7', eventosLocal: "",
                    visitante: 'Capuchas FC', logoVisitante: 'capuchas.png', golesVisitante: '3', eventosVisitante: "",
                    fecha: 'Viernes 24 de Octubre, 2025', hora: '17:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones.png', golesLocal: '10', eventosLocal: '',
                    visitante: 'Galácticos', logoVisitante: 'galacticos.png', golesVisitante: '0', eventosVisitante: '',
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: false, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 8', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Atlético Temozón', logoLocal: 'temozon.png', golesLocal: '3', eventosLocal: '',
                    visitante: 'Palmeras CF', logoVisitante: 'palmeras.png', golesVisitante: '4', eventosVisitante: '',
                    fecha: 'Viernes 24 de Octubre, 2025', hora: '15:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Dragones FC', logoLocal: 'dragones.png', golesLocal: '5', eventosLocal: '',
                    visitante: 'Milan', logoVisitante: 'milan.png', golesVisitante: '1', eventosVisitante: '',
                    fecha: 'Viernes 24 de Octubre, 2025', hora: '16:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Galácticos', logoLocal: 'galacticos.png', golesLocal: '5', eventosLocal: '',
                    visitante: 'Real Caribe', logoVisitante: 'caribe.png', golesVisitante: '4', eventosVisitante: '',
                    fecha: 'Viernes 24 de Octubre, 2025', hora: '19:00 hrs', esPendiente: false, mensajePendiente: ''
                },
                {
                    local: 'Estelares FC', logoLocal: 'estelares.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Jueves 30 de Octubre, 2025', hora: '17:00 hrs', esPendiente: true, mensajePendiente: ''
                }
            ]
        },
        {
            titulo: 'Jornada 9', estado: 'Completada', claseEstado: 'Completada',
            partidos: [
                {
                    local: 'Capuchas FC', logoLocal: 'capuchas.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Atlético Temozón', logoVisitante: 'temozon.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 31 de Octubre, 2025', hora: '14:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Real Caribe FC', logoLocal: 'caribe.png', golesLocal: '', eventosLocal: '',
                    visitante: 'Milan', logoVisitante: 'milan.png', golesVisitante: '', eventosVisitante: '',
                    fecha: 'Viernes 31 de Octubre, 2025', hora: '15:00 hrs', esPendiente: true, mensajePendiente: 'Partido programado para jugarse el próximo domingo.'
                },
                {
                    local: 'Sementeros FC', logoLocal: 'sementeros.png', golesLocal: '', eventosLocal: "",
                    visitante: 'Fósiles FC', logoVisitante: 'fosiles.png', golesVisitante: '', eventosVisitante: "",
                    fecha: 'Viernes 31 de Octubre, 2025', hora: '20:00 hrs', esPendiente: true, mensajePendiente: ''
                },
                {
                    local: 'Palmeras CF', logoLocal: 'palmeras.png', golesLocal: '1', eventosLocal: "",
                    visitante: 'Dragones FC', logoVisitante: 'dragones.png', golesVisitante: '7', eventosVisitante: "",
                    fecha: 'Sin Información', hora: 'Sin Información', esPendiente: true, mensajePendiente: ''
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
                    equipo2: 'Sementeros FC',
                    marcador: '<small class="marcadores">Ida: Sin Información | Vuelta: Sin Información</small><br><strong>Global: 19-1</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '18:00 hrs',
                    
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Capuchas FC', equipo2: 'Palmeras CF',
                    marcador: '<small class="marcadores">Ida: Sin Información | Vuelta: Sin Información</small><br><strong>Global: 9-5</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '16:00 hrs',
                    
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Dragones FC', equipo2: 'Real Caribe FC',
                    marcador: '<small class="marcadores">Ida: 1-3 | Vuelta: 8-2</small><br><strong>Global: 11-3</strong>',
                    
                    
                    fechaIda: 'Miércoles 5 de Noviembre, 2025', horaIda: '14:00 hrs',
                    
                    
                    fechaVuelta: 'Viernes 7 de Noviembre, 2025', horaVuelta: '17:00 hrs',
                    
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
                    claseExtra: 'quarter-match'
                },
                {
                    equipo1: 'Milan', equipo2: 'Galácticos',
                    marcador: '<small class="marcadores">Partido Único: 7-0</small><br><strong>Global: 7-0</strong>',
                    
                    
                    fechaIda: 'Sin Información', horaIda: 'Sin Información',
                    
                    
                    fechaVuelta: 'Sin Información', horaVuelta: 'Sin Información',
                    
                    golesIda: [], golesVuelta: [],
                    tarjetasIda: [], tarjetasVuelta: [],
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

    const crearLista = (arr) => (arr && arr.length > 0)
        ? arr.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')
        : '<li style="color: #666; font-style: italic;">Ninguno</li>';

    
    const esPartidoUnico = !p.fechaVuelta;
    const textoTituloIda = esPartidoUnico ? '▶ Partido Único' : '▶ Partido de Ida';

    
    const htmlSeccionVuelta = esPartidoUnico ? '' : `
        <div style="margin-bottom: 12px; border-bottom: 1px solid #444; padding-bottom: 6px;">
            <h4 style="color: var(--brand-teal); margin: 0 0 5px 0; font-size: 1rem; display: block;">▶ Partido de Vuelta</h4>
            <span style="font-size: 0.78rem; color: var(--text-secondary); display: block;">📅 ${p.fechaVuelta} | 🕒 ${p.horaVuelta}</span>
        </div>
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
                <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; margin-bottom: 5px; font-size: 0.9rem;">⚽ Goles</strong>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${crearLista(p.golesIda)}</ul>
                </div>
                <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; margin-bottom: 5px; font-size: 0.9rem;">🟨 Tarjetas</strong>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #ddd;">${crearLista(p.tarjetasIda)}</ul>
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
