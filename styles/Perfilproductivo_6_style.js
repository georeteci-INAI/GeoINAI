var size = 0;

var style_Perfilproductivo_6 = function(feature, resolution) {

    var valores = [
        parseFloat(feature.get("%_Agricultura")) || 0,
        parseFloat(feature.get("%_Ganaderia")) || 0,
        parseFloat(feature.get("%_Pesca")) || 0,
        parseFloat(feature.get("%_Caza")) || 0,
        parseFloat(feature.get("%_Recoleccion")) || 0,
        parseFloat(feature.get("%_Artesania")) || 0,
        parseFloat(feature.get("%_Forestal")) || 0
    ];

    var colores = [
        "#1cf31b",  // Agricultura
        "#ffff84",  // Ganadería
        "#003eff",  // Pesca
        "#914c1d",  // Caza
        "#078507",  // Recolección
        "#ff8f0f",  // Artesanía
        "#24e7cd"   // Forestal
    ];

    var total = valores.reduce(function(a, b) {
        return a + b;
    }, 0);

    if (total <= 0) {
        return [];
    }

    var svg = '';
    var cx = 50;
    var cy = 50;
    var r = 45;

    var inicio = -Math.PI / 2;

    for (var i = 0; i < valores.length; i++) {

        if (valores[i] <= 0) {
            continue;
        }

        var angulo = (valores[i] / total) * Math.PI * 2;
        var fin = inicio + angulo;

        var x1 = cx + r * Math.cos(inicio);
        var y1 = cy + r * Math.sin(inicio);

        var x2 = cx + r * Math.cos(fin);
        var y2 = cy + r * Math.sin(fin);

        var grande = angulo > Math.PI ? 1 : 0;

        var path =
            "M " + cx + " " + cy +
            " L " + x1 + " " + y1 +
            " A " + r + " " + r + " 0 " + grande + " 1 " + x2 + " " + y2 +
            " Z";

        svg +=
            '<path d="' + path +
            '" fill="' + colores[i] +
            '" stroke="#333333" stroke-width="1"/>';

        inicio = fin;
    }

    svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">' +
        svg +
        '</svg>';

    var src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

    return [
        new ol.style.Style({
            image: new ol.style.Icon({
                src: src,
                imgSize: [100, 100],
                scale: Math.max(0.14, Math.min(0.40, 0.20 + (1 / resolution) * 0.0008))
            })
        })
    ];
};