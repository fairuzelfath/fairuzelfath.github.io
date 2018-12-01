// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Stateful esri/toolbars/draw esri/geometry/Polyline esri/geometry/Polygon esri/geometry/Point esri/graphic esri/geometry/geometryEngineAsync esri/units".split(" "),function(c,d,e,k,l,f,g,h,b){return c([e,d],{startPoint:null,_setStartPoint:function(a){this._set("startPoint",a)},endPoint:null,_setEndPoint:function(a){this._set("endPoint",a)},lengthUnit:"meters",_setLengthUnit:function(a){this._set("lengthUnit",a)},angleUnit:"degrees",_setAngle:function(a){this._set("angleUnit",
a)},isDiameter:!0,constructor:function(){h.isSimple(new f({x:-122.65,y:45.53,spatialReference:{wkid:4326}}))},getRadiusUnitType:function(){var a=b.METERS;switch(this.lengthUnit){case "meters":a=b.METERS;break;case "feet":a=b.FEET;break;case "kilometers":a=b.KILOMETERS;break;case "miles":a=b.MILES;break;case "nautical-miles":a=b.NAUTICAL_MILES;break;case "yards":a=b.YARDS}return a},addStartGraphic:function(a,b){this.removeStartGraphic();this.startGraphic=new g(a,b);this.map.graphics.add(this.startGraphic)},
removeStartGraphic:function(){this.startGraphic&&this.map.graphics.remove(this.startGraphic);this.startGraphic=null}})});