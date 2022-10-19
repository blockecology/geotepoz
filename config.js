var config = {
    style: 'mapbox://styles/sblockmunguia/cl9egjax5000n14mnkyka3q56',
    accessToken: 'pk.eyJ1Ijoic2Jsb2NrbXVuZ3VpYSIsImEiOiJja2oxaW03bHYzZjJsMnNscjR2eWpocmIwIn0.q_m1XCzj8ObBA3_4aKFKVg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Montañas de agua y fuego',
    subtitle: 'La historia geológica de Tepoztlán',
    byline: 'por Sebastián Block Munguía',
    footer: '',
    chapters: [
        {
            id: 'intro-general',
            alignment: 'right',
            hidden: false,
            title: 'Un viaje en el tiempo',
            // image: './path/to/image/source.png',
            description: '<font size="+0.5">Caminar por las montañas que rodean a Tepoztlán es como viajar en el tiempo. Las rocas de este paisaje nos cuentan partes de la historia de los últimos 100 millones de años del planeta.</font>',
            location: {
                center: [-99.09186, 19.03562],
                zoom: 10.65,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                //    layer: 'derrames-chichi-epsg3857-ckpb87',
                //    opacity: 1
                //     duration: 5000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cerros-marinos1',
            alignment: 'right',
            hidden: false,
            title: 'Cerros marinos',
            image: './images/North_america_75mya.png',
            description: '<p><font size="+0.5">Las montañas más antiguas de la región son las de la Sierra de Corona, cerca de San Andrés de la Cal. Se formaron hace más de 100 millones de años, en el periodo Cretácico, cuando los dinosaurios aún rondaban la Tierra.</p> <p> En aquel entonces, una gran parte de Norteamérica, incluído lo que hoy es Tepoztlán, estaba cubierto por un mar tropical poco profundo llamado mar de Niobrara, un verdadero  <a href="https://chichinautzin.com/?p=143"> mar de dragones</a>.</font></p> <p><font size="-2">Imagen modificada de <a href="https://commons.wikimedia.org/wiki/File:North_america_75mya.png"> Ron Blakely</a>, <a href="https://creativecommons.org/licenses/by/1.0/deed.en"> CC BY 1.0</a>.</font></p>',
            location: {
                center: [-99.07817, 18.95997],
zoom: 11.67,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                  layer: 'form-morelos-adrog0',
                  opacity: 0.65  
                }
            ],
            onChapterExit: [
                {
                  layer: 'form-morelos-adrog0',
                  opacity: 0  
                }
            ]
        },
        {
            id: 'volcanes-mioceno-preludio1',
            alignment: 'center',
            hidden: false,
        //    title: 'La sierra del Tepozteco',
        //    image: './images/subduccion.png',
            description: '<font size="+0.5">Mucho tiempo después, cuando el mar de Niobrara llevaba seco ya más de ochenta millones de años, una era volcánica comenzó en el centro de México.</font>',
            location: {
                center: [-99.07817, 18.95997],
zoom: 11.67,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0.65
            //    }
                
            ],
            onChapterExit: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0
            //   }
                
            ]
        },
        {
            id: 'volcanes-mioceno-preludio2',
            alignment: 'center',
            hidden: false,
        //    title: 'La sierra del Tepozteco',
            image: './images/cocos.png',
            description: '<p><font size="+0.5">A un ritmo de casi 7 mm por año, la placa tectónica de Cocos, al sur de México en el oceano Pacífico, comenzó a incrustarse debajo de la placa de Norteamérica (un proceso llamado <a href = "https://es.wikipedia.org/wiki/Subducci%C3%B3n"> subducción</a> ).</font></p> <p><font size="-2">Imagen modificada de <a href="https://commons.wikimedia.org/wiki/File:Cocos_Plate_map-fr.png"> Sting y Réhmi</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5/deed.en"> CC BY-SA 2.5</a>.</font></p>',
            location: {
                center: [-99.07817, 18.95997],
zoom: 11.67,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0.65
            //    }
                
            ],
            onChapterExit: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0
            //   }
                
            ]
        },
        {
            id: 'volcanes-mioceno-preludio3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/subduccion.png',
            description: '<p><font size="+0.5">Al hundirse poco a poco en las profundidades incandescentes de la Tierra, la placa de Cocos se fue calentando. Llegó un punto en que algunas rocas de la placa de Cocos empezaron a derretirse y, al ser menos densas que las otras rocas alrededor, flotar hacia la superficie. Estas rocas derretidas, llamadas magma, forman volcanes cuando emergen en la superficie terrestre. Por eso los volcanes son tan comunes a lo largo de zonas de subducción, normalmente entre 100 y 200 km de la fosa oceánica en donde una placa se hunde debajo de la otra. Pero la placa de Cocos es diferente.</font></p> <p><font size="-2">Imagen original: "Subduction_es.svg" de Wikimedia Commons por <a href="https://commons.wikimedia.org/wiki/File:Cocos_Plate_map-fr.png"> K.D. Schroeder</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"> CC BY-SA 4.0</a>.</font></p>',
            location: {
                center: [-99.07817, 18.95997],
zoom: 11.67,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0.65
            //    }
                
            ],
            onChapterExit: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0
            //   }
                
            ]
        },
        {
            id: 'volcanes-mioceno-preludio4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/cocos_subduction.png',
            description: '<p><font size="+0.5">En vez de hundirse cerca de la fosa oceánica como otras placas tectónicas, la placa de Cocos se deslizó debajo de la placa de Norteamérica por unos 250 km de manera casi horizontal, sin hundirse más de 50 km. Entonces, justo debajo de lo que ahora es Tepoztlán, la placa de Cocos se dobló abruptamente y empezó a hundirse lo suficiente para que sus rocas se derretieran y empezaran a producir volcanes. Es por esta peculiaridad de la placa de Cocos que hay tantos volcanes alrededor de Tepoztlán y de la ciudad de México. De otro modo todos los volcanes estarían más cerca de la costa.</font></p><p><font size="-2">Esquema basado en la figura 3 de <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2008GL035127"> Pérez-Campos et al. 2008</a>.</font></p>',
            location: {
                center: [-99.07817, 18.95997],
zoom: 11.67,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0.65
            //    }
                
            ],
            onChapterExit: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0
            //   }
                
            ]
        },
        {
            id: 'volcanes-mioceno-preludio5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/cocos_TMVB.png',
            description: '<p><font size="+0.5">Cuando al fin sucedió esto, hace unos 22 millones de años, empezaron a nacer volcanes en el centro de México, de Nayarit a Veracruz. El resultado fue el eje neovolcánico transversal, una cordillera que ha sido una cuna de biodiversidad.</font></p> <p><font size="-1">Sabemos esto porque las ondas sísmicas pueden usarse para hacer un tipo de ultrasonido de las entrañas del planeta. El Experimento de Subducción Mesoamericano (ESMA, o MASE en inglés) es un arreglo de 100 estaciones sismológicas desde Acapulco hasta Tempoal, cerca del Golfo de México. Los registros sismológicos de estas estaciones se han usado para estudiar la estructura de la placa de Cocos y su proceso de subducción.</font></p> <p><font size="-2">Imagen tomada de la figura 1 de <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015TC003908"> Gérault et al. 2015</a>.</font></p>',
            location: {
                center: [-99.07817, 18.95997],
zoom: 11.67,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0.65
            //    }
                
            ],
            onChapterExit: [
            //    {
            //        layer: 'form-tepoz-mapbox-5df4g6',
            //        opacity: 0
            //   }
                
            ]
        },
        {
            id: 'volcanes-mioceno1',
            alignment: 'left',
            hidden: false,
            title: 'Sierra del Tepozteco',
          //  image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.5">Los cerros de la <a href="https://chichinautzin.com/?p=164"> Sierra del Tepozteco</a>, alrededor de Tepoztlán, contienen la historia de los inicios del eje neovolcánico.</font></p>',
            location: {
                center: { lon: -99.12668, lat: 18.97988 },
zoom: 11.16,
pitch: 47.60,
bearing: -13.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'form-tepoz-mapbox-5df4g6',
                    opacity: 0.65
                }
                
            ],
            onChapterExit: [
                {
                 //   layer: 'form-tepoz-mapbox-5df4g6',
                 //   opacity: 0
                }
                
            ]
        },
        {
            id: 'volcanes-mioceno2',
            alignment: 'center',
            hidden: false,
            title: 'Millones de años de volcanes y ríos',
            image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">Muchos volcanes nacieron y murieron alrededor de Tepoztlán y Malinalco entre 22 y 19 millones de años atrás. Los restos de sus cenizas y lavas, además de otros sedimentos depositados en los ríos que cruzaban la región, conforman las distintas capas de los cerros de la Sierra del Tepozteco y de Malinalco.</font></p><p><font size="-2"> Imagen modificada de la figura 16 de <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-3091.2010.01203.x"> Lenhardt et al. 2011</a>.</font></p>',
            location: {
                center: [-99.26367, 18.98109],
zoom: 10.36,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'form-tepoz-mapbox-5df4g6',
                    opacity: 0.65
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'form-tepoz-mapbox-5df4g6',
                    opacity: 0
                }
                
            ]
        },
        {
            id: 'volcanes-mioceno3',
            alignment: 'center',
            hidden: true,
            title: '',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '',
            location: {
                center: [-99.26367, 18.98109],
zoom: 10.00,
pitch: 46.90,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'form-tepoz-mapbox-5df4g6',
                    opacity: 0.65
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'form-tepoz-mapbox-5df4g6',
                    opacity: 0
                }
                
            ]
        },
        {
            id: 'chichi-intro-1',
            alignment: 'center',
            hidden: false,
            title: '',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">El resto de las rocas y montañas de la región son el resultado de actividad volcánica mucho más reciente.</p> <p><font size="+0.25">Después de un largo periodo de relativa tranquilidad, hace aproximadamente un millón de años las entrañas de la región que rodea a Tepoztlán comenzaron poco a poco a agitarse de nuevo.</font></p> <p><font size="+0.25">Desde entonces, más de 220 volcanes han hecho erupción en la región, tras lo cual se extinguen para siempre. Este tipo de volcanes, que hacen erupción una sola vez, se llaman monogenéticos. Veamos sólo algunos de los derrames volcánicos cercanos a Tepoztlán para los que se han estimado fechas aproximadas, y cómo su historia se relaciona a la historia del orígen de la raza humana.</font></p><font size="-2"> Las fechas y los mapas de los distintos derrames de lava están basados en <a href="https://www.sciencedirect.com/science/article/abs/pii/S0377027317306819"> Jaimes-Viera et al. 2018</a> y <a href="https://link.springer.com/article/10.1007/s00445-003-0304-z"> Siebe et al. 2004</a> y <a href="https://www.sciencedirect.com/science/article/pii/S037702730400349X?casa_token=Yn_Psbn8_Q4AAAAA:6pCLsRtnTt64ffy4xebisU0CGgOQErg9Hfmu1fQmPip4UxZlOv9_3ICKk4tp1PWQ9TDOQGE13Sun"> 2005</a>.</font></p>',
            location: {
                center: { lon: -99.11316, lat: 18.91104 },
zoom: 9.80,
pitch: 40.21,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                  //  layer: 'form-tepoz-mapbox-5df4g6',
                 //   opacity: 0
                }
                
            ],
            onChapterExit: [
                {
                 //   layer: 'form-tepoz-mapbox-5df4g6',
                 //   opacity: 0
                }
                
            ]
        },
        {
            id: 'chichi-tetillas',
            alignment: 'left',
            hidden: false,
            title: 'Hace unos 986 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">Hace un millón de años, un simple parpadeo en tiempo geológico, la fauna del mundo era aún más diversa y asombrosa que ahora. Había muchos más animales grandes en todos los continentes. Por ejemplo, en México había mamuts, mastodontes, armadillos, perezosos y lobos gigantes, leones y tigres dientes de sable, entre muchos otros. Todavía no existían los humanos modernos, pero nuestros ancestros los <em>Homo erectus</em> vivían en Asia y en África.</font></p><p><font size="+0.25">Así estaban las cosas cuando un volcán al sur de Tepoztlán, hoy llamado "Las Tetillas", hizo erupción. Hoy la ciudad de Yautepec se extiende sobre la lava de Las Tetillas.</font></p> ',
            location: {
                center: { lon: -99.11316, lat: 18.91104 },
zoom: 9.80,
pitch: 40.21,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-tetillas-3a23io',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-tetillas-3a23io',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-quepil',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 181 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">Ya había humanos modernos en lo que hoy es Etiopía. Al norte de Tepoztlán, el volcán Quepil hizo erupción cerca de Jaras Verdes.</font></p> ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-quepil-4a56qg',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-quepil-4a56qg',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-malacatepec',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 95 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">En Eurasia, los humanos ya habían desarrollado comercio e inventado joyería. Cerca de Tepoztlán, la erupción del volcán Malacatepec, justo al lado del Quepil, continuó dando forma a la sierra.</font></p> ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-malacatepec-9y429m',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-malacatepec-9y429m',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-zitla',
            alignment: 'left',
            hidden: false,
            title: 'Hace unos 35 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">Cuando el volcán Zitlaltépetl hizo erupción, las pinturas en cavernas más antiguas ya tenían <a href="https://news.artnet.com/art-world/indonesia-pig-art-oldest-painting-1937110#:~:text=Archaeologists%20believe%20they%20have%20discovered,found%20in%20Leang%20Tedongnge%20cave."> varios miles de años</a>.</font></p> ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-zitlaltepetl-5a1oe7',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-zitlaltepetl-5a1oe7',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-mamut',
            alignment: 'left',
            hidden: false,
            title: 'Hace unos 17 mil años',
            image: './images/Woolly_mammoth.jpeg',
            description: '<p><font size="+0.25">Más o menos a la vez que se pintaba la famosa cueva de Lascaux, en Francia, un desafortunado <a href="https://link.springer.com/article/10.1007/s00445-015-0903-5"> mamut lanudo</a> quedó atrapado en un deslave cerca de donde ahora está el poblado de Santa Ana Tlacotenco, en Milpa Alta. Ahí, entre terrazas agrícolas, se encontraron los restos del mamut en diciembre de 2011.</font></p><p><font size="-2"> Imagen de <a href="https://commons.wikimedia.org/wiki/File:Woolly_mammoth.jpg"> Flying Puffin</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en"> CC BY-SA 2.0</a>.</font></p> ',
            location: {
                center: { lon: -99.00422, lat: 19.16824 },
zoom: 13.28,
pitch: 0.00,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-zitlaltepetl-5a1oe7',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-zitlaltepetl-5a1oe7',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-pelado',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 10 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">La erupción del volcán Pelado, junto a lo que ahora es Parres, pudo haber sido una de las primeras presenciadas por humanos en esta sierra. Para ese entonces nómadas recolectores ya habitaban la región, la última era glacial llegaba a su fin, y muchas especies de megafauna estaban en declive.</font></p> ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-pelado-cr0ayx',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'cderrame-pelado-cr0ayx',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-tecmilco',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 7 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">Para cuando el volcán Tecmilco hizo erupción entre las antiguas serranías del Tepozteco, los humanos ya eran de los animales más grandes que quedaban en Tepoztlán.</font></p> ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-tecmilco-1w2n43',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-tecmilco-1w2n43',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-tlaloc',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 6 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">El volcán Tlaloc, uno de los más altos de la sierra, hizo erupción.</font></p> ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-tlaloc-5bbhyr',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-tlaloc-5bbhyr',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-suchiooc',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 5 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">La lava del volcán Suchiooc se derramó entre las cañadas de la antigua sierra del Tepozteco. Durante el derrame se formaron algunas de las cuevas de lava más grandes del mundo, que hoy alojan a muchos de los murciélagos de Tepoztlán.</font></p> ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-suchiooc-0a221l',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-suchiooc-0a221l',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-guespa',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 4 mil años',
            image: './images/acrobata-tlatlilco.jpeg',
            description: '<p><font size="+0.25">Cuando el volcán Guespalapa hizo erupción, el valle de Tepoztlán y sus alrededores ya tenían sus primeras aldeas agrícolas. Y menos de 800 años después, la ciudad de Tlatlilco en el valle de México muestra la evidencia más temprana de jerarquías y divisiones sociopolíticas.</font></p></p><p><font size="-2"> Fotografía del Acrobata de Tlatlilco, de <a href="https://commons.wikimedia.org/wiki/File:Acr%C3%B3bata_de_Tlatilco_(de_frente).JPG"> El Comandante</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en"> CC BY-SA 2.0</a>.</font></p>  ',
            location: {
                center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-guespalapa-cz702p',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-guespalapa-cz702p',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'chichi-chichi',
            alignment: 'right',
            hidden: false,
            title: 'Hace unos 2 mil años',
            // image: './images/Tepoz_Mioceno_Paleoambiente.png',
            description: '<p><font size="+0.25">Cuando el volcán Chichinautzin hizo erupción, ya habían pasado más de 700 años desde el apogeo de Chalcatzingo. El Chichinautzin, o "Señor que Quema" en náhuatl, le da nombre a toda la Sierra, <a href="https://chichinautzin.com/?p=789"> un mosaico de derrames de lava de distintas edades y condiciones ecológicas</a>.</font></p>',
            location: {
               center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-chichinautzin-ae0mvj',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-chichinautzin-ae0mvj',
                    opacity: 0.65
                }
                
            ]
        },
        {
            id: 'final',
            alignment: 'center',
            hidden: false,
            title: 'La historia continurá',
            image: './images/erupcion-xitle-gonzalez-camarena.jpeg',
            description: '<font size="+0.25">Alrededor de un siglo después de la erupción del Chichinautzin, el derrame de lava del volcán Xitle destruyó la ciudad prehispánica de Cuicuilco en el valle de México. Ese fue el último volcán en nacer en la Sierra del Chichinautzin.</p><p>¿Cuál será el próximo?</font></p></p><font size="-2"> Imagen: "La erupción del Xitle", de Jorge González Camarena. </font></p>',
            location: {
               center: { lon: -99.00773, lat: 19.03933 },
zoom: 10.57,
pitch: 39.39,
bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'derrame-chichinautzin-ae0mvj',
                    opacity: 0.8
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'derrame-chichinautzin-ae0mvj',
                    opacity: 0.65
                }
                
            ]
        }
        
    ]
};
