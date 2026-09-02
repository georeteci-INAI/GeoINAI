var map = new ol.Map({
    target: 'map',
    renderer: 'canvas',
    layers: layersList,
    view: new ol.View({
        constrainResolution: true,
        maxZoom: 28,
        minZoom: 1
    })
});

// initial view - epsg:3857 coordinates if not "Match project CRS"
map.getView().fit(
    [-8437429.360940, -5197273.820585, -4429926.447683, -2867493.547489],
    map.getSize()
);


// =====================================================
// CURSOR
// =====================================================

function pointerOnFeature(evt) {

    if (evt.dragging) {
        return;
    }

    var hasFeature = map.hasFeatureAtPixel(evt.pixel, {
        layerFilter: function(layer) {
            return layer && (layer.get("interactive"));
        }
    });

    map.getViewport().style.cursor =
        hasFeature ? "pointer" : "";
}

map.on('pointermove', pointerOnFeature);


function styleCursorMove() {

    map.on('pointerdrag', function() {
        map.getViewport().style.cursor = "move";
    });

    map.on('pointerup', function() {
        map.getViewport().style.cursor = "default";
    });
}

styleCursorMove();


// =====================================================
// SMALL SCREEN
// =====================================================

var hasTouchScreen =
    map.getViewport().classList.contains('ol-touch');

var isSmallScreen =
    window.innerWidth < 650;


// =====================================================
// CONTROLS CONTAINER
// =====================================================

// top left
var topLeftContainer = new ol.control.Control({
    element: (() => {

        var topLeftContainer =
            document.createElement('div');

        topLeftContainer.id =
            'top-left-container';

        return topLeftContainer;

    })(),
});

map.addControl(topLeftContainer);


// bottom left
var bottomLeftContainer = new ol.control.Control({
    element: (() => {

        var bottomLeftContainer =
            document.createElement('div');

        bottomLeftContainer.id =
            'bottom-left-container';

        return bottomLeftContainer;

    })(),
});

map.addControl(bottomLeftContainer);


// top right
var topRightContainer = new ol.control.Control({
    element: (() => {

        var topRightContainer =
            document.createElement('div');

        topRightContainer.id =
            'top-right-container';

        return topRightContainer;

    })(),
});

map.addControl(topRightContainer);


// bottom right
var bottomRightContainer = new ol.control.Control({
    element: (() => {

        var bottomRightContainer =
            document.createElement('div');

        bottomRightContainer.id =
            'bottom-right-container';

        return bottomRightContainer;

    })(),
});

map.addControl(bottomRightContainer);


// =====================================================
// POPUP
// =====================================================

var container =
    document.getElementById('popup');

var content =
    document.getElementById('popup-content');

var closer =
    document.getElementById('popup-closer');

var sketch;


function stopMediaInPopup() {

    var mediaElements =
        container.querySelectorAll('audio, video');

    mediaElements.forEach(function(media) {

        media.pause();
        media.currentTime = 0;

    });
}


closer.onclick = function() {

    container.style.display = 'none';

    closer.blur();

    stopMediaInPopup();

    return false;
};


var overlayPopup = new ol.Overlay({

    element: container,

    autoPan: true

});

map.addOverlay(overlayPopup);


// =====================================================
// POPUP CONSTANTS
// =====================================================

var NO_POPUP = 0;
var ALL_FIELDS = 1;


// =====================================================
// OBTENER CAMPOS DEL POPUP
// =====================================================

function getPopupFields(layerList, layer) {

    var idx =
        layersList.indexOf(layer) -
        (layersList.length - popupLayers.length);

    return popupLayers[idx];
}


// =====================================================
// HIGHLIGHT
// =====================================================

var collection =
    new ol.Collection();


var featureOverlay =
    new ol.layer.Vector({

        map: map,

        source: new ol.source.Vector({

            features: collection,

            useSpatialIndex: false

        }),

        style: [

            new ol.style.Style({

                stroke: new ol.style.Stroke({

                    color: '#f00',

                    width: 1

                }),

                fill: new ol.style.Fill({

                    color:
                        'rgba(255,0,0,0.1)'

                })

            })

        ],

        updateWhileAnimating: true,

        updateWhileInteracting: true

    });


var doHighlight = false;
var doHover = false;


// =====================================================
// CREAR CONTENIDO DEL POPUP
// =====================================================

function createPopupField(
    currentFeature,
    currentFeatureKeys,
    layer
) {

    var popupText = '';


   // PROVINCIAS
if (
    layer.get('popuplayertitle') ===
    'Provincia'
) {
    currentFeatureKeys = [
        'nam',
        'in1'
    ];

    var provinceFieldAliases = {
        'nam': 'Nombre',
        'in1': 'Cod'
    };

    layer.set('fieldAliases', provinceFieldAliases);
}
    // DEPARTAMENTOS
if (
    layer.get('popuplayertitle') ===
    'Departamentos'
) {
    currentFeatureKeys = [
        'nam',
        'in1'
    ];

    var departmentFieldAliases = {
        'nam': 'Nombre',
        'in1': 'Cod'
    };

    layer.set('fieldAliases', departmentFieldAliases);
}


    // =================================================
    // INDICE DE CONFLICTIVIDAD
    // =================================================

    if (
        layer.get('popuplayertitle') ===
        'Indice de conflictividad'
    ) {

        currentFeatureKeys = [

            'in1',
            'nam',
            'Cant de co',
            'Cant de _1',
            'Categoria',
            'Indice Con'

        ];

    }


    // =================================================
    // PERFIL PRODUCTIVO
    // =================================================

    if (
        layer.get('popuplayertitle') ===
        'Perfil productivo'
    ) {

        var agricultura =
            parseFloat(
                currentFeature.get('%_Agricultura')
            ) || 0;

        var ganaderia =
            parseFloat(
                currentFeature.get('%_Ganaderia')
            ) || 0;

        var pesca =
            parseFloat(
                currentFeature.get('%_Pesca')
            ) || 0;

        var caza =
            parseFloat(
                currentFeature.get('%_Caza')
            ) || 0;

        var recoleccion =
            parseFloat(
                currentFeature.get('%_Recoleccion')
            ) || 0;

        var artesania =
            parseFloat(
                currentFeature.get('%_Artesania')
            ) || 0;

        var forestal =
            parseFloat(
                currentFeature.get('%_Forestal')
            ) || 0;


        var a1 = agricultura;

        var a2 =
            a1 + ganaderia;

        var a3 =
            a2 + pesca;

        var a4 =
            a3 + caza;

        var a5 =
            a4 + recoleccion;

        var a6 =
            a5 + artesania;


        var grafico =

            'conic-gradient(' +

            '#1cf31b 0% ' +
            a1 + '%, ' +

            '#ffff84 ' +
            a1 + '% ' +
            a2 + '%, ' +

            '#003eff ' +
            a2 + '% ' +
            a3 + '%, ' +

            '#914c1d ' +
            a3 + '% ' +
            a4 + '%, ' +

            '#078507 ' +
            a4 + '% ' +
            a5 + '%, ' +

            '#ff8f0f ' +
            a5 + '% ' +
            a6 + '%, ' +

            '#24e7cd ' +
            a6 + '% 100%)';


        popupText +=

            '<tr>' +

            '<td colspan="2">' +

            '<strong>Comunidad:</strong> ' +

            (
                currentFeature.get(
                    'Comunidad'
                ) || ''
            ) +

            '</td>' +

            '</tr>';


        popupText +=

            '<tr>' +

            '<td><strong>ID:</strong></td>' +

            '<td>' +

            (
                currentFeature.get(
                    'Id'
                ) || ''
            ) +

            '</td>' +

            '</tr>';


        popupText +=

            '<tr>' +

            '<td><strong>Provincia:</strong></td>' +

            '<td>' +

            (
                currentFeature.get(
                    'Provincia'
                ) || ''
            ) +

            '</td>' +

            '</tr>';


        popupText +=

            '<tr>' +

            '<td><strong>Departamento:</strong></td>' +

            '<td>' +

            (
                currentFeature.get(
                    'Departamento'
                ) || ''
            ) +

            '</td>' +

            '</tr>';


        popupText +=

            '<tr>' +

            '<td colspan="2" style="text-align:center;">' +

            '<strong>Perfil productivo</strong>' +

            '<br><br>' +

            '<div style="' +

            'display:flex;' +

            'align-items:center;' +

            'justify-content:center;' +

            'gap:15px;' +

            '">' +


            '<div style="' +

            'width:150px;' +

            'height:150px;' +

            'border-radius:50%;' +

            'background:' +

            grafico +

            ';"' +

            '></div>' +


            '<div style="' +

            'text-align:left;' +

            'font-size:12px;' +

            '">';


        if (agricultura > 0)

            popupText +=

                '<div>' +

                '<span style="color:#1cf31b;">●</span> ' +

                'Agricultura: ' +

                agricultura +

                '%</div>';


        if (ganaderia > 0)

            popupText +=

                '<div>' +

                '<span style="color:#ffff84;">●</span> ' +

                'Ganadería: ' +

                ganaderia +

                '%</div>';


        if (pesca > 0)

            popupText +=

                '<div>' +

                '<span style="color:#003eff;">●</span> ' +

                'Pesca: ' +

                pesca +

                '%</div>';


        if (caza > 0)

            popupText +=

                '<div>' +

                '<span style="color:#914c1d;">●</span> ' +

                'Caza: ' +

                caza +

                '%</div>';


        if (recoleccion > 0)

            popupText +=

                '<div>' +

                '<span style="color:#078507;">●</span> ' +

                'Recolección: ' +

                recoleccion +

                '%</div>';


        if (artesania > 0)

            popupText +=

                '<div>' +

                '<span style="color:#ff8f0f;">●</span> ' +

                'Artesanía: ' +

                artesania +

                '%</div>';


        if (forestal > 0)

            popupText +=

                '<div>' +

                '<span style="color:#24e7cd;">●</span> ' +

                'Forestal: ' +

                forestal +

                '%</div>';


        popupText +=

            '</div>' +

            '</div>' +

            '<br>' +

            '</td>' +

            '</tr>';


        return popupText;

    }


    // =================================================
    // RESTO DE LAS CAPAS
    // =================================================

    for (
        var i = 0;
        i < currentFeatureKeys.length;
        i++
    ) {

        if (

            currentFeatureKeys[i] != 'geometry' &&

            currentFeatureKeys[i] != 'layerObject' &&

            currentFeatureKeys[i] != 'idO' &&

            currentFeatureKeys[i] != '_mvtLayer_'

        ) {


            var popupField = '';


            if (
                layer.get('fieldLabels') &&
                layer.get('fieldLabels')[
                    currentFeatureKeys[i]
                ] == "hidden field"
            ) {

                continue;

            }


            else if (

                layer.get('fieldLabels') &&

                layer.get('fieldLabels')[
                    currentFeatureKeys[i]
                ] == "inline label - visible with data"

            ) {

                if (
                    currentFeature.get(
                        currentFeatureKeys[i]
                    ) == null
                ) {

                    continue;

                }

            }


            var fieldLabel =
                layer.get('fieldLabels') &&
                layer.get('fieldLabels')[
                    currentFeatureKeys[i]
                ];


            var fieldAlias =
    (
        layer.get('fieldAliases') &&
        layer.get('fieldAliases')[
            currentFeatureKeys[i]
        ]
    ) || currentFeatureKeys[i];


popupField +=
    '<td colspan="2"><strong>' +
    fieldAlias +
    ':</strong> ';
          

            if (

                fieldLabel ==
                "header label - visible with data"

            ) {

                if (
                    currentFeature.get(
                        currentFeatureKeys[i]
                    ) == null
                ) {

                    continue;

                }

            }


            if (

                fieldLabel ==
                "header label - always visible"

                ||

                fieldLabel ==
                "header label - visible with data"

            ) {

                popupField +=

                    '<strong>' +

                    (
                        fieldAlias ||
                        currentFeatureKeys[i]
                    ) +

                    '</strong><br />';

            }


            var fieldImages =
                layer.get('fieldImages');


            if (

                !fieldImages ||

                fieldImages[
                    currentFeatureKeys[i]
                ] != "ExternalResource"

            ) {

                var valor =
                    currentFeature.get(
                        currentFeatureKeys[i]
                    );


                popupField +=

                    valor != null

                    ?

                    autolinker.link(
                        valor.toLocaleString()
                    ) +

                    '</td>'

                    :

                    '';

            }


            else {

                var fieldValue =
                    currentFeature.get(
                        currentFeatureKeys[i]
                    );


                if (

                    fieldValue != null &&

                    /\.(gif|jpg|jpeg|tif|tiff|png|avif|webp|svg)$/i
                        .test(fieldValue)

                ) {

                    popupField +=

                        '<img src="images/' +

                        fieldValue
                            .replace(/[\\\/:]/g, '_')
                            .trim() +

                        '" /></td>';

                }


                else if (

                    fieldValue != null &&

                    /\.(mp4|webm|ogg|avi|mov|flv)$/i
                        .test(fieldValue)

                ) {

                    popupField +=

                        '<video controls>' +

                        '<source src="images/' +

                        fieldValue
                            .replace(/[\\\/:]/g, '_')
                            .trim() +

                        '" type="video/mp4">' +

                        'Il tuo browser non supporta il tag video.' +

                        '</video></td>';

                }


                else if (

                    fieldValue != null &&

                    /\.(mp3|wav|ogg|aac|flac)$/i
                        .test(fieldValue)

                ) {

                    popupField +=

                        '<audio controls>' +

                        '<source src="images/' +

                        fieldValue
                            .replace(/[\\\/:]/g, '_')
                            .trim() +

                        '" type="audio/mpeg">' +

                        'Il tuo browser non supporta il tag audio.' +

                        '</audio></td>';

                }


                else {

                    popupField +=

                        fieldValue != null

                        ?

                        autolinker.link(
                            fieldValue.toLocaleString()
                        ) +

                        '</td>'

                        :

                        '';

                }

            }


            popupText +=
                '<tr>' +
                popupField +
                '</tr>';

        }

    }


    return popupText;

}


// =====================================================
// AUTOLINKER
// =====================================================

var highlight;

var autolinker =
    new Autolinker({
        truncate: {
            length: 30,
            location: 'smart'
        }
    });


// =====================================================
// POPUP / HOVER
// =====================================================

function onPointerMove(evt) {

    if (!doHover && !doHighlight) {
        return;
    }


    var pixel =
        map.getEventPixel(
            evt.originalEvent
        );


    var coord =
        evt.coordinate;


    var currentFeature;
    var currentLayer;
    var currentFeatureKeys;
    var clusteredFeatures;
    var clusterLength;


    var popupText = '<ul>';


    var featuresAndLayers = [];


    map.forEachFeatureAtPixel(
        pixel,
        function(feature, layer) {

            if (

                layer &&

                feature instanceof ol.Feature &&

                (
                    layer.get("interactive") ||
                    layer.get("interactive") === undefined
                )

            ) {

                featuresAndLayers.push({
                    feature: feature,
                    layer: layer
                });

            }

        }
    );


    for (
        var i = featuresAndLayers.length - 1;
        i >= 0;
        i--
    ) {

        var feature =
            featuresAndLayers[i].feature;

        var layer =
            featuresAndLayers[i].layer;


        var doPopup = false;


        var fieldImages =
            layer.get('fieldImages');


        if (fieldImages) {

            for (var k in fieldImages) {

                if (
                    fieldImages[k] != "Hidden"
                ) {

                    doPopup = true;

                }

            }

        }


        currentFeature =
            feature;

        currentLayer =
            layer;


        clusteredFeatures =
            feature.get("features");


        if (clusteredFeatures) {

            clusterLength =
                clusteredFeatures.length;

        }


        if (
            typeof clusteredFeatures !==
            "undefined"
        ) {

            if (doPopup) {

                for (
                    var n = 0;
                    n < clusteredFeatures.length;
                    n++
                ) {

                    currentFeature =
                        clusteredFeatures[n];

                    currentFeatureKeys =
                        currentFeature.getKeys();


                    popupText +=
                        '<li><table>';

popupText +=
    '<tr>' +
    '<td colspan="2" style="' +
    'font-weight:bold;' +
    'font-size:13px;' +
    'color:#000;' +
    'padding:4px 2px 6px 2px;' +
    'border-bottom:2px solid #000;' +
    '">' +
    layer.get('popuplayertitle') +
    '</td>' +
    '</tr>';


                    popupText +=
                        createPopupField(
                            currentFeature,
                            currentFeatureKeys,
                            layer
                        );


                    popupText +=
                        '</table></li>';

                }

            }

        }


        else {

            currentFeatureKeys =
                currentFeature.getKeys();


            if (doPopup) {

                popupText +=
                    '<li><table>';


          popupText +=
    '<tr>' +
    '<td colspan="2" style="' +
    'font-weight:bold;' +
    'font-size:13px;' +
    'color:#000;' +
    'padding:4px 2px 6px 2px;' +
    'border-bottom:2px solid #000;' +
    '">' +
    layer.get('popuplayertitle') +
    '</td>' +
    '</tr>';


                popupText +=
                    createPopupField(
                        currentFeature,
                        currentFeatureKeys,
                        layer
                    );


                popupText +=
                    '</table></li>';

            }

        }

    }


    if (popupText == '<ul>') {

        popupText = '';

    }

    else {

        popupText += '</ul>';

    }


    if (doHighlight) {

        if (
            currentFeature !== highlight
        ) {

            if (highlight) {

                featureOverlay
                    .getSource()
                    .removeFeature(
                        highlight
                    );

            }


            if (currentFeature) {

                var featureStyle;


                if (
                    typeof clusteredFeatures ===
                    "undefined"
                ) {

                    var style =
                        currentLayer.getStyle();


                    var styleFunction =
                        typeof style === 'function'
                        ?
                        style
                        :
                        function() {
                            return style;
                        };


                    var styles =
                        styleFunction(
                            currentFeature
                        );


                    if (
                        Array.isArray(styles)
                    ) {

                        featureStyle =
                            styles[0];

                    }

                    else {

                        featureStyle =
                            styles;

                    }

                }


                if (
                    currentFeature
                        .getGeometry()
                        .getType() === 'Point'

                    ||

                    currentFeature
                        .getGeometry()
                        .getType() === 'MultiPoint'
                ) {

                    var radius = 8;


                    if (
                        featureStyle &&
                        featureStyle.getImage &&
                        featureStyle.getImage()
                    ) {

                        if (
                            featureStyle
                                .getImage()
                                .getRadius
                        ) {

                            radius =
                                featureStyle
                                    .getImage()
                                    .getRadius();

                        }

                    }


                    radius =
                        Math.max(
                            radius + 4,
                            12
                        );


                    var highlightStyle =
                        new ol.style.Style({

                            image:
                                new ol.style.Circle({

                                    fill:
                                        new ol.style.Fill({

                                            color:
                                                "rgba(255,255,0,1.00)"

                                        }),

                                    stroke:
                                        new ol.style.Stroke({

                                            color:
                                                "#ff0000",

                                            width: 2

                                        }),

                                    radius:
                                        radius

                                })

                        });


                    featureOverlay
                        .getSource()
                        .addFeature(
                            currentFeature
                        );


                    featureOverlay
                        .setStyle(
                            highlightStyle
                        );

                }


                else if (

                    currentFeature
                        .getGeometry()
                        .getType() ===
                    'LineString'

                    ||

                    currentFeature
                        .getGeometry()
                        .getType() ===
                    'MultiLineString'

                ) {

                    var featureWidth =
                        featureStyle &&
                        featureStyle.getStroke
                        ?
                        featureStyle
                            .getStroke()
                            .getWidth()
                        :
                        2;


                    highlightStyle =
                        new ol.style.Style({

                            stroke:
                                new ol.style.Stroke({

                                    color:
                                        'rgba(255,255,0,1.00)',

                                    lineDash:
                                        null,

                                    width:
                                        featureWidth + 2

                                })

                        });


                    featureOverlay
                        .getSource()
                        .addFeature(
                            currentFeature
                        );


                    featureOverlay
                        .setStyle(
                            highlightStyle
                        );

                }


                else {

                    highlightStyle =
                        new ol.style.Style({

                            fill:
                                new ol.style.Fill({

                                    color:
                                        'rgba(255,255,0,1.00)'

                                })

                        });


                    featureOverlay
                        .getSource()
                        .addFeature(
                            currentFeature
                        );


                    featureOverlay
                        .setStyle(
                            highlightStyle
                        );

                }

            }


            highlight =
                currentFeature;

        }

    }


    if (doHover) {

        if (popupText) {

            content.innerHTML =
                popupText;

            container.style.display =
                'block';

            overlayPopup.setPosition(
                coord
            );

        }

        else {

            container.style.display =
                'none';

            closer.blur();

        }

    }

}


map.on(
    'pointermove',
    onPointerMove
);


// =====================================================
// POPUP VARIABLES
// =====================================================

var popupContent = '';

var popupCoord = null;

var featuresPopupActive = false;


// =====================================================
// UPDATE POPUP
// =====================================================

function updatePopup() {

    if (popupContent) {

        content.innerHTML =
            popupContent;

        container.style.display =
            'block';

        overlayPopup.setPosition(
            popupCoord
        );

    }

    else {

        container.style.display =
            'none';

        closer.blur();

        stopMediaInPopup();

    }

}


// =====================================================
// CLICK EN FEATURES
// =====================================================

function onSingleClickFeatures(evt) {

    if (doHover || sketch) {
        return;
    }


    if (!featuresPopupActive) {
        featuresPopupActive = true;
    }


    var pixel =
        map.getEventPixel(
            evt.originalEvent
        );


    var coord =
        evt.coordinate;


    var datosPopup = [];


    var capasEncontradas = {

        comunidad: false,

        departamento: false,

        conflictividad: false,

        perfil: false

    };


    // =================================================
    // BUSCAR TODAS LAS CAPAS EN EL PUNTO
    // =================================================

    map.forEachFeatureAtPixel(

        pixel,

        function(feature, layer) {


            if (
                !layer ||
                !(feature instanceof ol.Feature)
            ) {

                return;

            }


            if (

                !layer.get("interactive") &&

                layer.get("interactive") !==
                undefined

            ) {

                return;

            }


            var tituloCapa =
                layer.get(
                    'popuplayertitle'
                ) || '';


            console.log(
                'CAPA CLICKEADA:',
                tituloCapa
            );


            // =================================================
            // COMUNIDADES
            // =================================================

            /*
             * No dependemos de que el nombre sea exactamente
             * "1799_comunidadesRel_pj".
             *
             * También acepta:
             * 1799_comunidadesRel_pj_2
             * u otra variante generada por qgis2web.
             */

            var esComunidad =

                tituloCapa
                    .toLowerCase()
                    .indexOf(
                        'comunidadesrel'
                    ) !== -1;


            if (esComunidad) {

                if (
                    !capasEncontradas.comunidad
                ) {

                    var keysComunidad =
                        feature.getKeys();


                    var popupComunidad =
                        '<li><table>';


                    popupComunidad +=

    '<tr>' +

    '<th colspan="2" ' +

    'style="' +
    'font-weight:bold;' +
    'font-size:13px;' +
    'color:#000;' +
    'padding:4px 2px 6px 2px;' +
    'border-bottom:2px solid #000;' +
    '">' +

    'Comunidades Indígenas' +

    '</th>' +

    '</tr>';

                    popupComunidad +=

                        createPopupField(

                            feature,

                            keysComunidad,

                            layer

                        );


                    popupComunidad +=
                        '</table></li>';


                    datosPopup.push({

                        orden: 1,

                        contenido:
                            popupComunidad

                    });


                    capasEncontradas.comunidad =
                        true;

                }


                return;

            }


            // =================================================
            // DEPARTAMENTOS
            // =================================================

            if (
                tituloCapa ===
                'Departamentos'
            ) {

                if (
                    !capasEncontradas.departamento
                ) {

                    var popupDepartamento =
                        '<li><table>';


                    popupDepartamento +=

    '<tr>' +

    '<th colspan="2" ' +

    'style="' +
    'font-weight:bold;' +
    'font-size:13px;' +
    'color:#000;' +
    'padding:4px 2px 6px 2px;' +
    'border-bottom:2px solid #000;' +
    '">' +

    'Departamento' +

    '</th>' +

    '</tr>';


                    popupDepartamento +=

                        createPopupField(

                            feature,

                            [
                                'nam',
                                'in1'
                            ],

                            layer

                        );


                    popupDepartamento +=
                        '</table></li>';


                    datosPopup.push({

                        orden: 2,

                        contenido:
                            popupDepartamento

                    });


                    capasEncontradas.departamento =
                        true;

                }


                return;

            }


            // =================================================
            // INDICE DE CONFLICTIVIDAD
            // =================================================

            if (
                tituloCapa ===
                'Indice de conflictividad'
            ) {

                if (
                    !capasEncontradas.conflictividad
                ) {

                    var popupConflictividad =
                        '<li><table>';


                    popupConflictividad +=

    '<tr>' +

    '<th colspan="2" ' +

    'style="' +
    'font-weight:bold;' +
    'font-size:13px;' +
    'color:#000;' +
    'padding:4px 2px 6px 2px;' +
    'border-bottom:2px solid #000;' +
    '">' +

    'Índice de conflictividad' +

    '</th>' +

    '</tr>';

                    popupConflictividad +=

                        createPopupField(

                            feature,

                            feature.getKeys(),

                            layer

                        );


                    popupConflictividad +=
                        '</table></li>';


                    datosPopup.push({

                        orden: 3,

                        contenido:
                            popupConflictividad

                    });


                    capasEncontradas.conflictividad =
                        true;

                }


                return;

            }


            // =================================================
            // PERFIL PRODUCTIVO
            // =================================================

            if (
                tituloCapa ===
                'Perfil productivo'
            ) {

                if (
                    !capasEncontradas.perfil
                ) {

                    var popupPerfil =
                        '<li><table>';


                    popupPerfil +=

    '<tr>' +

    '<th colspan="2" ' +

    'style="' +
    'font-weight:bold;' +
    'font-size:13px;' +
    'color:#000;' +
    'padding:4px 2px 6px 2px;' +
    'border-bottom:2px solid #000;' +
    '">' +

    'Perfil productivo' +

    '</th>' +

    '</tr>';


                    popupPerfil +=

                        createPopupField(

                            feature,

                            feature.getKeys(),

                            layer

                        );


                    popupPerfil +=
                        '</table></li>';


                    datosPopup.push({

                        orden: 4,

                        contenido:
                            popupPerfil

                    });


                    capasEncontradas.perfil =
                        true;

                }


                return;

            }


            // =================================================
            // OTRAS CAPAS INTERACTIVAS
            // =================================================

            var fieldImages =
                layer.get(
                    'fieldImages'
                );


            var doPopup =
                false;


            if (fieldImages) {

                for (
                    var key in fieldImages
                ) {

                    if (
                        fieldImages[key] !=
                        "Hidden"
                    ) {

                        doPopup = true;

                    }

                }

            }


            if (doPopup) {

                var popupOtraCapa =
                    '<li><table>';


                popupOtraCapa +=

    '<tr>' +

    '<th colspan="2" ' +

    'style="' +
    'font-weight:bold;' +
    'font-size:13px;' +
    'color:#000;' +
    'padding:4px 2px 6px 2px;' +
    'border-bottom:2px solid #000;' +
    '">' +

    tituloCapa +

    '</th>' +

    '</tr>';

                popupOtraCapa +=

                    createPopupField(

                        feature,

                        feature.getKeys(),

                        layer

                    );


                popupOtraCapa +=
                    '</table></li>';


                datosPopup.push({

                    orden: 10,

                    contenido:
                        popupOtraCapa

                });

            }

        }

    );


    // =================================================
    // ORDENAR
    // =================================================

    datosPopup.sort(
        function(a, b) {

            return a.orden - b.orden;

        }
    );


    // =================================================
    // ARMAR POPUP
    // =================================================

    var popupText = '';


    if (
        datosPopup.length > 0
    ) {

        popupText = '<ul>';


        for (
            var i = 0;
            i < datosPopup.length;
            i++
        ) {

            popupText +=
                datosPopup[i].contenido;

        }


        popupText +=
            '</ul>';

    }


    popupContent =
        popupText;

    popupCoord =
        coord;


    updatePopup();

}


// =====================================================
// WMS
// =====================================================

function onSingleClickWMS(evt) {

    if (doHover || sketch) {
        return;
    }


    if (!featuresPopupActive) {

        popupContent = '';

    }


    var coord =
        evt.coordinate;


    var viewProjection =
        map.getView().getProjection();


    var viewResolution =
        map.getView().getResolution();


    for (
        var i = 0;
        i < wms_layers.length;
        i++
    ) {


        if (

            wms_layers[i][1] &&

            wms_layers[i][0].getVisible()

        ) {


            var url =

                wms_layers[i][0]
                    .getSource()
                    .getFeatureInfoUrl(

                        evt.coordinate,

                        viewResolution,

                        viewProjection,

                        {
                            'INFO_FORMAT':
                                'text/html'
                        }

                    );


            if (url) {


                const wmsTitle =
                    wms_layers[i][0]
                        .get(
                            'popuplayertitle'
                        );


                var ldsRoller =

                    '<div class="roller-switcher" ' +

                    'style="height:25px;width:25px;">' +

                    '</div>';


                popupCoord =
                    coord;


                popupContent +=
                    ldsRoller;


                updatePopup();


                var timeoutPromise =

                    new Promise(
                        (resolve, reject) => {

                            setTimeout(
                                () => {

                                    reject(
                                        new Error(
                                            'Timeout exceeded'
                                        )
                                    );

                                },
                                5000
                            );

                        }
                    );


                function tryFetch(urls) {

                    if (
                        urls.length === 0
                    ) {

                        return Promise.reject(
                            new Error(
                                'All fetch attempts failed'
                            )
                        );

                    }


                    return fetch(
                        urls[0]
                    )

                    .then(
                        function(response) {

                            if (
                                response.ok
                            ) {

                                return response.text();

                            }

                            else {

                                throw new Error(
                                    'Fetch failed'
                                );

                            }

                        }
                    )

                    .catch(
                        function() {

                            return tryFetch(
                                urls.slice(1)
                            );

                        }
                    );

                }


                var urlsToTry = [

                    url,

                    encodeURIComponent(
                        url
                    ),

                    'https://api.allorigins.win/raw?url=' +
                    encodeURIComponent(url)

                ];


                Promise.race([

                    tryFetch(urlsToTry),

                    timeoutPromise

                ])

                .then(
                    function(html) {

                        if (
                            html.indexOf(
                                '<table'
                            ) !== -1
                        ) {

                            popupContent +=

                                '<a><b>' +

                                wmsTitle +

                                '</b></a>';


                            popupContent +=
                                html +
                                '<p></p>';


                            updatePopup();

                        }

                    }
                )

                .finally(
                    function() {

                        setTimeout(
                            function() {

                                var loaderIcon =
                                    document.querySelector(
                                        '.roller-switcher'
                                    );


                                if (
                                    loaderIcon
                                ) {

                                    loaderIcon.remove();

                                }

                            },
                            500
                        );

                    }
                );

            }

        }

    }

}


map.on(
    'singleclick',
    onSingleClickFeatures
);

map.on(
    'singleclick',
    onSingleClickWMS
);


// =====================================================
// CONTENEDORES
// =====================================================

var topLeftContainerDiv =
    document.getElementById(
        'top-left-container'
    );


var bottomLeftContainerDiv =
    document.getElementById(
        'bottom-left-container'
    );


var topRightContainerDiv =
    document.getElementById(
        'top-right-container'
    );


var bottomRightContainerDiv =
    document.getElementById(
        'bottom-right-container'
    );


// =====================================================
// TITULO GEOINAI
// =====================================================

var geoInaiTitle =
    document.createElement('div');


geoInaiTitle.innerHTML =
    'GeoINAI';


geoInaiTitle.style.fontSize =
    '24px';


geoInaiTitle.style.fontWeight =
    'bold';


geoInaiTitle.style.color =
    '#242c4f';


geoInaiTitle.style.padding =
    '8px 10px';


geoInaiTitle.style.backgroundColor =
    '#ffffff';


geoInaiTitle.style.textAlign =
    'center';


geoInaiTitle.style.fontFamily =
    'Arial, sans-serif';


geoInaiTitle.style.position =
    'absolute';


geoInaiTitle.style.left =
    '70px';


geoInaiTitle.style.top =
    '10px';


geoInaiTitle.style.zIndex =
    '1000';


map.getViewport()
    .appendChild(
        geoInaiTitle
    );


// =====================================================
// LAYER SWITCHER
// =====================================================

var layerSwitcher =
    new ol.control.LayerSwitcher({

        activationMode:
            'click',

        startActive:
            true,

        tipLabel:
            "Layers",

        target:
            'top-right-container',

        collapseLabel:
            '»',

        collapseTipLabel:
            'Close'

    });


map.addControl(
    layerSwitcher
);


if (
    hasTouchScreen ||
    isSmallScreen
) {

    document.addEventListener(
        'DOMContentLoaded',
        function() {

            setTimeout(
                function() {

                    layerSwitcher
                        .hidePanel();

                },
                500
            );

        }
    );

}


// =====================================================
// ATTRIBUTION
// =====================================================

var bottomAttribution =
    new ol.control.Attribution({

        collapsible:
            false,

        collapsed:
            false,

        className:
            'bottom-attribution'

    });


map.addControl(
    bottomAttribution
);


map.once(
    'rendercomplete',
    function() {

        var bottomAttributionUl =
            bottomAttribution.element
                .querySelector('ul');


        if (bottomAttributionUl) {

            var layerAttrs =
                Array.from(
                    bottomAttributionUl
                        .querySelectorAll('li')
                )
                .map(
                    function(li) {

                        return li.innerHTML
                            .trim();

                    }
                )
                .filter(Boolean);


            var attribHtml =

                '<a href="https://github.com/qgis2web/qgis2web">' +
                'qgis2web' +
                '</a> &middot; ' +

                '<a href="https://openlayers.org/">' +
                'OpenLayers' +
                '</a> &middot; ' +

                '<a href="https://qgis.org/">' +
                'QGIS' +
                '</a>';


            if (
                layerAttrs.length > 0
            ) {

                attribHtml +=
                    ' &nbsp;|&nbsp; ' +
                    layerAttrs.join(', ');

            }


            bottomAttributionUl.innerHTML =
                '<li>' +
                attribHtml +
                '</li>';

        }

    }
);


// =====================================================
// DESACTIVAR HOVER EN CONTROLES
// =====================================================

var preDoHover =
    doHover;


var preDoHighlight =
    doHighlight;


var isPopupAllActive =
    false;


document.addEventListener(
    'DOMContentLoaded',
    function() {

        if (
            doHover ||
            doHighlight
        ) {

            var controlElements =
                document.getElementsByClassName(
                    'ol-control'
                );


            for (
                var i = 0;
                i < controlElements.length;
                i++
            ) {

                controlElements[i]
                    .addEventListener(
                        'mouseover',
                        function() {

                            doHover =
                                false;

                            doHighlight =
                                false;

                        }
                    );


                controlElements[i]
                    .addEventListener(
                        'mouseout',
                        function() {

                            doHover =
                                preDoHover;


                            if (
                                isPopupAllActive
                            ) {

                                return;

                            }


                            doHighlight =
                                preDoHighlight;

                        }
                    );

            }

        }

    }
);


// =====================================================
// MOVER CONTROLES
// =====================================================

// zoom
var zoomControl =
    document.getElementsByClassName(
        'ol-zoom'
    )[0];


if (zoomControl) {

    topLeftContainerDiv
        .appendChild(
            zoomControl
        );

}


// geolocate
if (
    typeof geolocateControl !==
    'undefined'
) {

    topLeftContainerDiv
        .appendChild(
            geolocateControl
        );

}


// measure
if (
    typeof measureControl !==
    'undefined'
) {

    topLeftContainerDiv
        .appendChild(
            measureControl
        );

}


// geocoder
var searchbar =
    document.getElementsByClassName(
        'photon-geocoder-autocomplete ol-unselectable ol-control'
    )[0];


if (searchbar) {

    topLeftContainerDiv
        .appendChild(
            searchbar
        );

}


// search layer
var searchLayerControl =
    document.getElementsByClassName(
        'search-layer'
    )[0];


if (searchLayerControl) {

    topLeftContainerDiv
        .appendChild(
            searchLayerControl
        );

}


// scale line
var scaleLineControl =
    document.getElementsByClassName(
        'ol-scale-line'
    )[0];


if (scaleLineControl) {

    scaleLineControl.className +=
        ' ol-control';

    bottomLeftContainerDiv
        .appendChild(
            scaleLineControl
        );

}


// attribution
var attributionControl =
    document.getElementsByClassName(
        'bottom-attribution'
    )[0];


if (attributionControl) {

    bottomRightContainerDiv
        .appendChild(
            attributionControl
        );

}


// =====================================================
// BUSCADOR DE COMUNIDADES
// =====================================================

var inputBusqueda =
    document.getElementById(
        'buscar-comunidad'
    );


var resultadosBusqueda =
    document.getElementById(
        'resultados-busqueda'
    );


// =====================================================
// CAPA DE SELECCION
// =====================================================

var comunidadSeleccionadaSource =
    new ol.source.Vector();


var comunidadSeleccionadaLayer =
    new ol.layer.Vector({

        source:
            comunidadSeleccionadaSource,

        style:
            new ol.style.Style({

                image:
                    new ol.style.Circle({

                        /*
                         * Aumentamos mucho el tamaño
                         * respecto del punto original.
                         */

                        radius:
                            16,

                        fill:
                            new ol.style.Fill({

                                color:
                                    'rgba(255,255,0,0.75)'

                            }),

                        stroke:
                            new ol.style.Stroke({

                                color:
                                    '#ff0000',

                                width:
                                    4

                            })

                    })

            })

    });


map.addLayer(
    comunidadSeleccionadaLayer
);


// =====================================================
// OBTENER COMUNIDADES
// =====================================================

var comunidadesFeatures = [];


if (
    typeof jsonSource_1799_comunidadesRel_pj_2 !==
    'undefined'
) {

    comunidadesFeatures =
        jsonSource_1799_comunidadesRel_pj_2
            .getFeatures();

}


// =====================================================
// BUSCADOR
// =====================================================

if (
    inputBusqueda &&
    resultadosBusqueda
) {


    inputBusqueda.addEventListener(
        'input',
        function() {


            var texto =
                inputBusqueda.value
                    .toLowerCase()
                    .trim();


            resultadosBusqueda.innerHTML =
                '';


            if (
                texto.length === 0
            ) {

                resultadosBusqueda.style.display =
                    'none';

                return;

            }


            var coincidencias =
                comunidadesFeatures.filter(
                    function(feature) {


                        var id =
                            String(
                                feature.get(
                                    'Id'
                                ) || ''
                            )
                            .toLowerCase();


                        var nombre =
                            String(
                                feature.get(
                                    'Nombre_com'
                                ) ||
                                feature.get(
                                    'Comunidad'
                                ) ||
                                ''
                            )
                            .toLowerCase();


                        return (

                            id.includes(
                                texto
                            )

                            ||

                            nombre.includes(
                                texto
                            )

                        );

                    }
                );


            coincidencias
                .slice(0, 10)
                .forEach(
                    function(feature) {


                        var id =
                            feature.get(
                                'Id'
                            ) || '';


                        var nombre =
                            feature.get(
                                'Nombre_com'
                            ) ||

                            feature.get(
                                'Comunidad'
                            ) ||

                            '';


                        var resultado =
                            document.createElement(
                                'div'
                            );


                        resultado.innerHTML =

                            '<strong>' +

                            nombre +

                            '</strong><br>' +

                            '<small>ID: ' +

                            id +

                            '</small>';


                        resultado.style.padding =
                            '8px';


                        resultado.style.cursor =
                            'pointer';


                        resultado.style.borderBottom =
                            '1px solid #ddd';


                        resultado.addEventListener(
                            'mouseenter',
                            function() {

                                resultado.style.backgroundColor =
                                    '#eeeeee';

                            }
                        );


                        resultado.addEventListener(
                            'mouseleave',
                            function() {

                                resultado.style.backgroundColor =
                                    '#ffffff';

                            }
                        );


                        resultado.addEventListener(
                            'click',
                            function() {


                                // ---------------------------------
                                // LIMPIAR SELECCION ANTERIOR
                                // ---------------------------------

                                comunidadSeleccionadaSource
                                    .clear();


                                // ---------------------------------
                                // AGREGAR COMUNIDAD SELECCIONADA
                                // ---------------------------------

                                var seleccion =
                                    feature.clone();


                                comunidadSeleccionadaSource
                                    .addFeature(
                                        seleccion
                                    );


                                // ---------------------------------
                                // OBTENER GEOMETRIA
                                // ---------------------------------

                                var geometria =
                                    feature.getGeometry();


                                if (geometria) {


                                    var extent =
                                        geometria.getExtent();


                                    /*
                                     * maxZoom 14 evita que el
                                     * mapa se acerque demasiado.
                                     */

                                    map.getView().fit(
                                        extent,
                                        {

                                            padding:
                                                [
                                                    100,
                                                    100,
                                                    100,
                                                    100
                                                ],

                                            maxZoom:
                                                14,

                                            duration:
                                                800

                                        }
                                    );

                                }


                                inputBusqueda.value =
                                    nombre;


                                resultadosBusqueda.style.display =
                                    'none';


                            }
                        );


                        resultadosBusqueda
                            .appendChild(
                                resultado
                            );


                    }
                );


            resultadosBusqueda.style.display =

                coincidencias.length > 0

                ?

                'block'

                :

                'none';


        }
    );

}