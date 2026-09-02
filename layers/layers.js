var wms_layers = [];


        var lyr_argenmap_0 = new ol.layer.Tile({
            'title': 'argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_provincia_1 = new ol.format.GeoJSON();
var features_provincia_1 = format_provincia_1.readFeatures(json_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincia_1.addFeatures(features_provincia_1);
var lyr_provincia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincia_1, 
                style: style_provincia_1,
                popuplayertitle: 'Provincia',
                interactive: true,
                title: '<img src="styles/legend/provincia_1.png" /> Provincias'
            });
var format_1799_comunidadesRel_pj_2 = new ol.format.GeoJSON();
var features_1799_comunidadesRel_pj_2 = format_1799_comunidadesRel_pj_2.readFeatures(json_1799_comunidadesRel_pj_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1799_comunidadesRel_pj_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1799_comunidadesRel_pj_2.addFeatures(features_1799_comunidadesRel_pj_2);
var lyr_1799_comunidadesRel_pj_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1799_comunidadesRel_pj_2, 
                style: style_1799_comunidadesRel_pj_2,
                popuplayertitle: '1799_comunidadesRel_pj',
                interactive: true,
title: 'Comunidades Indígenas<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ffff00;vertical-align:middle;"></span> Atacama<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#704489;vertical-align:middle;"></span> Chané<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#e64c00;vertical-align:middle;"></span> Charrúa<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#aaff00;vertical-align:middle;"></span> Chicha<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#004c73;vertical-align:middle;"></span> Chorote<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#e6e600;vertical-align:middle;"></span> Chulupí (Nivaclé)<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#a87000;vertical-align:middle;"></span> Comechingón<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#e6e600;vertical-align:middle;"></span> Corundí<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff0000;vertical-align:middle;"></span> Diaguita<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#444f89;vertical-align:middle;"></span> Fiscara<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#aaff00;vertical-align:middle;"></span> Guaraní<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#aaff00;vertical-align:middle;"></span> Guaycurú<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#38a800;vertical-align:middle;"></span> Huarpe<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#0084a8;vertical-align:middle;"></span> Iogys<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff0000;vertical-align:middle;"></span> Kolla<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#569487;vertical-align:middle;"></span> Kolla Atacameño<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#4c0073;vertical-align:middle;"></span> Lule<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#8400a8;vertical-align:middle;"></span> Lule Vilela<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#0070ff;vertical-align:middle;"></span> Mapuche<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#abcd66;vertical-align:middle;"></span> Mapuche Tehuelche<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#e600a9;vertical-align:middle;"></span> Mbya Guaraní<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ffaa00;vertical-align:middle;"></span> Moqoit (Mocoví)<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#8400a8;vertical-align:middle;"></span> Ocloya<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#00d4df;vertical-align:middle;"></span> Omaguaca<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#df73ff;vertical-align:middle;"></span> Pilagá<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#004da8;vertical-align:middle;"></span> Qom (Toba)<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#a87000;vertical-align:middle;"></span> Quechua<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#4c0073;vertical-align:middle;"></span> Ranquel<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#6699cd;vertical-align:middle;"></span> Sanavirón<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#894465;vertical-align:middle;"></span> Selk´Nam (Onas)<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#444f89;vertical-align:middle;"></span> Tapiete<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#894444;vertical-align:middle;"></span> Tastil<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff5500;vertical-align:middle;"></span> Tehuelche<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#000000;vertical-align:middle;"></span> Tilián<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#267300;vertical-align:middle;"></span> Toara<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#4ce600;vertical-align:middle;"></span> Tonokoté<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff7f7f;vertical-align:middle;"></span> Vilela<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#70a800;vertical-align:middle;"></span> Wichí<br />\
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#73004c;vertical-align:middle;"></span> Yagán<br />'
});
var format_provinciacopiar_3 = new ol.format.GeoJSON();
var features_provinciacopiar_3 = format_provinciacopiar_3.readFeatures(json_provinciacopiar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provinciacopiar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provinciacopiar_3.addFeatures(features_provinciacopiar_3);
var lyr_provinciacopiar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provinciacopiar_3, 
                style: style_provinciacopiar_3,
                popuplayertitle: 'provincia copiar',
                interactive: false,
                title: '<img src="styles/legend/provinciacopiar_3.png" /> provincia copiar'
            });
var format_Indicedeconflictividad_4 = new ol.format.GeoJSON();
var features_Indicedeconflictividad_4 = format_Indicedeconflictividad_4.readFeatures(json_Indicedeconflictividad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicedeconflictividad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicedeconflictividad_4.addFeatures(features_Indicedeconflictividad_4);
var lyr_Indicedeconflictividad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicedeconflictividad_4, 
                style: style_Indicedeconflictividad_4,
                popuplayertitle: 'Indice de conflictividad',
                interactive: true,
    title: '<span class="nombre-capa">Índice de conflictividad</span><br />' +
'<img src="styles/legend/Indicedeconflictividad_4_0.png" /> Alta<br />' +
'<img src="styles/legend/Indicedeconflictividad_4_1.png" /> Media-Alta<br />' +
'<img src="styles/legend/Indicedeconflictividad_4_2.png" /> Media<br />' +
'<img src="styles/legend/Indicedeconflictividad_4_3.png" /> Menor al valor de referencia<br />',
});
var format_departamentoPolygon_5 = new ol.format.GeoJSON();
var features_departamentoPolygon_5 = format_departamentoPolygon_5.readFeatures(json_departamentoPolygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departamentoPolygon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamentoPolygon_5.addFeatures(features_departamentoPolygon_5);
var lyr_departamentoPolygon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departamentoPolygon_5, 
                style: style_departamentoPolygon_5,
                popuplayertitle: 'Departamentos',
                interactive: true,
                title: '<img src="styles/legend/departamentoPolygon_5.png" /> Departamentos'
            });
var format_Perfilproductivo_6 = new ol.format.GeoJSON();
var features_Perfilproductivo_6 = format_Perfilproductivo_6.readFeatures(json_Perfilproductivo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perfilproductivo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perfilproductivo_6.addFeatures(features_Perfilproductivo_6);
var lyr_Perfilproductivo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perfilproductivo_6, 
                style: style_Perfilproductivo_6,
                popuplayertitle: 'Perfil productivo',
                interactive: true,
                title: '<div><b>Perfil productivo</b></div>' +
       '<div><span style="display:inline-block;width:14px;height:14px;background:#1cf31b;margin-right:5px;"></span>Agricultura</div>' +
       '<div><span style="display:inline-block;width:14px;height:14px;background:#ffff84;margin-right:5px;"></span>Ganadería</div>' +
       '<div><span style="display:inline-block;width:14px;height:14px;background:#003eff;margin-right:5px;"></span>Pesca</div>' +
       '<div><span style="display:inline-block;width:14px;height:14px;background:#914c1d;margin-right:5px;"></span>Caza</div>' +
       '<div><span style="display:inline-block;width:14px;height:14px;background:#078507;margin-right:5px;"></span>Recolección</div>' +
       '<div><span style="display:inline-block;width:14px;height:14px;background:#ff8f0f;margin-right:5px;"></span>Artesanía</div>' +
       '<div><span style="display:inline-block;width:14px;height:14px;background:#24e7cd;margin-right:5px;"></span>Forestal</div>'
            });

lyr_argenmap_0.setVisible(true);lyr_provincia_1.setVisible(true);lyr_1799_comunidadesRel_pj_2.setVisible(true);lyr_provinciacopiar_3.setVisible(false);lyr_Indicedeconflictividad_4.setVisible(false);lyr_departamentoPolygon_5.setVisible(false);lyr_Perfilproductivo_6.setVisible(false);
var layersList = [
    lyr_argenmap_0,
    lyr_provincia_1,
    lyr_departamentoPolygon_5,
    lyr_Indicedeconflictividad_4,
    lyr_Perfilproductivo_6,
    lyr_1799_comunidadesRel_pj_2
];
lyr_provincia_1.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_1799_comunidadesRel_pj_2.set('fieldAliases', {'Id': 'Id', 'Nombre_com': 'Nombre de la Comunidad', 'Provincia': 'Provincia', 'Departamen': 'Departamento', 'Situación': 'Situacion Relevam', 'Estado_rel': 'Estado Relevam', 'Resolució': 'Resolución', 'Ocup_ATyP': 'Sup OATyP', 'Reconocimi': 'Recon Formal', 'Ocup_recon': 'Sup Recon Formal', 'Estado_Ins': 'Inscrip PJ', 'N°_inscri': 'N° Inscrip', 'Fecha': 'Fecha', 'Pueblo_ref': 'Pueblo ', });
lyr_provinciacopiar_3.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Indicedeconflictividad_4.set('fieldAliases', {'in1': 'Cod departamento', 'Cant de co': 'Cant Comunidades', 'Cant de _1': 'Cant Conflictos', 'Categoria': 'Categoría', 'Indice Con': 'Indice de conflictividad', 'nam': 'Departamento', });
lyr_departamentoPolygon_5.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Perfilproductivo_6.set('fieldAliases', {'Id': 'Id', 'Provincia': 'Provincia', 'Departamento': 'Departamento', 'Comunidad': 'Comunidad', 'zona de cultivo': 'zona de cultivo', 'zona de cría de animales': 'zona de cría de animales', 'zona de pesca': 'zona de pesca', 'zona de caza': 'zona de caza', 'zona de recolección': 'zona de recolección', 'producción artesanal': 'producción artesanal', 'aprovechamiento forestal': 'aprovechamiento forestal', 'Total_Actividades_Productivas': 'Total_Actividades_Productivas', '%_Agricultura': '%_Agricultura', '%_Ganaderia': '%_Ganaderia', '%_Pesca': '%_Pesca', '%_Caza': '%_Caza', '%_Recoleccion': '%_Recoleccion', '%_Artesania': '%_Artesania', '%_Forestal': '%_Forestal', 'Perfil_Productivo': 'Perfil_Productivo', 'Actividad_Principal_Productiva': 'Actividad_Principal_Productiva', 'Intensidad_Actividad_Principal': 'Intensidad_Actividad_Principal', 'N_Actividades_Productivas': 'N_Actividades_Productivas', 'Nivel_Diversidad_Productiva': 'Nivel_Diversidad_Productiva', 'Indice_Diversidad_Productiva': 'Indice_Diversidad_Productiva', 'Indice_Intensidad_Productiva': 'Indice_Intensidad_Productiva', });
lyr_provincia_1.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_1799_comunidadesRel_pj_2.set('fieldImages', {'Id': 'TextEdit', 'Nombre_com': 'TextEdit', 'Provincia': 'TextEdit', 'Departamen': 'TextEdit', 'Situación': 'TextEdit', 'Estado_rel': 'TextEdit', 'Resolució': 'TextEdit', 'Ocup_ATyP': 'TextEdit', 'Reconocimi': 'TextEdit', 'Ocup_recon': 'TextEdit', 'Estado_Ins': 'TextEdit', 'N°_inscri': 'TextEdit', 'Fecha': 'TextEdit', 'Pueblo_ref': 'TextEdit', });
lyr_provinciacopiar_3.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Indicedeconflictividad_4.set('fieldImages', {'in1': 'TextEdit', 'Cant de co': 'TextEdit', 'Cant de _1': 'TextEdit', 'Categoria': 'TextEdit', 'Indice Con': 'TextEdit', 'nam': 'TextEdit', });
lyr_departamentoPolygon_5.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Perfilproductivo_6.set('fieldImages', {'Id': 'Range', 'Provincia': 'TextEdit', 'Departamento': 'TextEdit', 'Comunidad': 'TextEdit', 'zona de cultivo': 'Range', 'zona de cría de animales': 'Range', 'zona de pesca': 'Range', 'zona de caza': 'Range', 'zona de recolección': 'Range', 'producción artesanal': 'Range', 'aprovechamiento forestal': 'Range', 'Total_Actividades_Productivas': 'Range', '%_Agricultura': 'TextEdit', '%_Ganaderia': 'TextEdit', '%_Pesca': 'TextEdit', '%_Caza': 'TextEdit', '%_Recoleccion': 'TextEdit', '%_Artesania': 'TextEdit', '%_Forestal': 'TextEdit', 'Perfil_Productivo': 'TextEdit', 'Actividad_Principal_Productiva': 'TextEdit', 'Intensidad_Actividad_Principal': 'TextEdit', 'N_Actividades_Productivas': 'Range', 'Nivel_Diversidad_Productiva': 'TextEdit', 'Indice_Diversidad_Productiva': 'TextEdit', 'Indice_Intensidad_Productiva': 'TextEdit', });
lyr_provincia_1.set('fieldLabels', {'gid': 'no label', 'entidad': 'inline label - always visible', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_1799_comunidadesRel_pj_2.set('fieldLabels', {'Id': 'no label', 'Nombre_com': 'no label', 'Provincia': 'no label', 'Departamen': 'no label', 'Situación': 'no label', 'Estado_rel': 'no label', 'Resolució': 'no label', 'Ocup_ATyP': 'no label', 'Reconocimi': 'no label', 'Ocup_recon': 'no label', 'Estado_Ins': 'no label', 'N°_inscri': 'no label', 'Fecha': 'no label', 'Pueblo_ref': 'no label', });
lyr_provinciacopiar_3.set('fieldLabels', {'gid': 'no label', 'entidad': 'hidden field', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Indicedeconflictividad_4.set('fieldLabels', {
    'in1': 'inline label - always visible',
    'Cant de co': 'inline label - always visible',
    'Cant de _1': 'inline label - always visible',
    'Categoria': 'inline label - always visible',
    'Indice Con': 'inline label - always visible',
    'nam': 'inline label - always visible'
});
lyr_departamentoPolygon_5.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Perfilproductivo_6.set('fieldLabels', {'Id': 'no label', 'Provincia': 'no label', 'Departamento': 'no label', 'Comunidad': 'no label', 'zona de cultivo': 'no label', 'zona de cría de animales': 'no label', 'zona de pesca': 'no label', 'zona de caza': 'no label', 'zona de recolección': 'no label', 'producción artesanal': 'no label', 'aprovechamiento forestal': 'no label', 'Total_Actividades_Productivas': 'no label', '%_Agricultura': 'no label', '%_Ganaderia': 'no label', '%_Pesca': 'no label', '%_Caza': 'no label', '%_Recoleccion': 'no label', '%_Artesania': 'no label', '%_Forestal': 'no label', 'Perfil_Productivo': 'no label', 'Actividad_Principal_Productiva': 'no label', 'Intensidad_Actividad_Principal': 'no label', 'N_Actividades_Productivas': 'no label', 'Nivel_Diversidad_Productiva': 'no label', 'Indice_Diversidad_Productiva': 'no label', 'Indice_Intensidad_Productiva': 'no label', });
lyr_Perfilproductivo_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});