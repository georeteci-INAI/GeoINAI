var size = 0;
var placement = 'point';
function categories_1799_comunidadesRel_pj_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Atacama':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Chané':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.3000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(112,68,137,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Charrúa':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(230,76,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Chicha':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(170,255,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Chorote':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.3000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,76,115,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Chulupí (Nivaclé)':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(230,230,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Comechingón':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.3000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(168,112,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Corundí':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(230,230,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Diaguita':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Fiscara':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(68,79,137,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Guaraní':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(170,255,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Guaycurú':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.3000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(170,255,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Huarpe':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(56,168,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Iogys':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,132,168,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Kolla':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
	case 'Kolla Atacameño':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),
            fill: new ol.style.Fill({color: 'rgba(86,148,135,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

        case 'Lule':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(76,0,115,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Lule Vilela':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.3000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(132,0,168,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Mapuche':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.3000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,112,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Mapuche Tehuelche':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(171,205,102,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Mbya Guaraní':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(230,0,169,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Moqoit (Mocoví)':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(255,170,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Ocloya':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(132,0,168,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Omaguaca':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,212,223,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Pilagá':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(223,115,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Qom (Toba)':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,77,168,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Quechua':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(168,112,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Ranquel':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(76,0,115,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Sanavirón':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(102,153,205,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Selk´Nam (Onas)':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.3000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(137,68,101,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Tapiete':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(68,79,137,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Tastil':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(137,68,68,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Tehuelche':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(255,85,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Tilián':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Toara':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(38,115,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Tonokoté':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(76,230,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Vilela':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(255,127,127,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Wichí':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(112,168,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Yagán':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(115,0,76,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
        
            break;

        default:
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),
            fill: new ol.style.Fill({color: 'rgba(201,81,207,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
            break;
    }
};

var style_1799_comunidadesRel_pj_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("Pueblo_ref");

    // TAMAÑO DE LOS PUNTOS DE LAS COMUNIDADES
    var size = 2;

    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';

    if ("" !== null) {
        labelText = String("");
    }

    var style = categories_1799_comunidadesRel_pj_2(
        feature,
        value,
        size,
        resolution,
        labelText,
        labelFont,
        labelFill,
        bufferColor,
        bufferWidth,
        placement,
        textAlign,
        offsetX,
        offsetY,
        overflow,
        repeat
    );

    return style;
};

   