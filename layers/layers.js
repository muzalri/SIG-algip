var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sig_1 = new ol.format.GeoJSON();
var features_sig_1 = format_sig_1.readFeatures(json_sig_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sig_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sig_1.addFeatures(features_sig_1);
var lyr_sig_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sig_1, 
                style: style_sig_1,
                popuplayertitle: 'sig',
                interactive: true,
    title: 'sig<br />\
    <img src="styles/legend/sig_1_0.png" /> 20 - 48<br />\
    <img src="styles/legend/sig_1_1.png" /> 48 - 67.6<br />\
    <img src="styles/legend/sig_1_2.png" /> 67.6 - 80.4<br />\
    <img src="styles/legend/sig_1_3.png" /> 80.4 - 87.6<br />\
    <img src="styles/legend/sig_1_4.png" /> 87.6 - 90<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_sig_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sig_1];
lyr_sig_1.set('fieldAliases', {'lintang(longitude)': 'lintang(longitude)', 'bujur(latitude)': 'bujur(latitude)', 'nama': 'nama', 'jumlah naungan': 'jumlah naungan', });
lyr_sig_1.set('fieldImages', {'lintang(longitude)': 'TextEdit', 'bujur(latitude)': 'TextEdit', 'nama': 'TextEdit', 'jumlah naungan': 'Range', });
lyr_sig_1.set('fieldLabels', {'lintang(longitude)': 'no label', 'bujur(latitude)': 'no label', 'nama': 'no label', 'jumlah naungan': 'no label', });
lyr_sig_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});