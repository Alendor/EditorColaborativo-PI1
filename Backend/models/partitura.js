'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partiturasSchema = Schema(
        {
        id: Number,
        fecha: String,    
        nombre_obra:String,
        descripcion_obra:{
            compositor: Array,
            genero: String,
            version: Number
            }, 
        
        descripcion_partitura: {
            instrumento: Array,
            canal_midi: Number,
            patch: Number
            }, 
        
        pentagrama:{
            cantidad_lineas: Number,
            grosor: Number,
            separacion: Number,
            ubicacion_pentagrama: Array
            },
        
        eventos: 
        [   {
                tempo: Number,
                tipo: String,
                clef: String,
                compas: Array,
                nota_midi: Number,
                ubicacion:{
                    grafica: Array,
                    cronometrica: Number,
                    mesurada: Array
                },
                figura:{
                    representacion_ascii: Number,
                    formato_cabeza: {
                        tamaño_fuente: Number,
                        color: Number
                    },
                    formato_plica: {
                        grosor: Number,
                        angulo: Number,
                        longitud: Number
                    },
                    corchete: Number,
                    signos_de_la_Figura: {
                        graficos: Number,
                        caracter: Number,
                        tamaño: Number,
                        ubicacion_en_figura: Array,
                        alteracion: Number
                    },
                    signos_entre_figuras: {
                        alcance: Number,
                        grosor: Number,
                        angulo: Number
                    },
                    barra_entre_figuras: {
                        alcance: Number,
                        grosor: Number,
                        angulo: Number,
                        cantidad_linea: Number
                    }
                },
                velocidadAtaque : Number
            }
        ]
        }

    );


    // para exportar el modelo y que se pueda usar desde cualquier
    // parte de la aplicación 

module.exports = mongoose.model('partituras', partiturasSchema);

