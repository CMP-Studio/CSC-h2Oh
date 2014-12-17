{
    "name": "ns1:timeSeriesResponseType",
    "declaredType": "org.cuahsi.waterml.TimeSeriesResponseType",
    "scope": "javax.xml.bind.JAXBElement$GlobalScope",
    "value": {
        "queryInfo": {
            "creationTime": null,
            "queryURL": "http://127.0.0.1:8080/nwis/iv/",
            "criteria": {
                "locationParam": "[ALL:03049640, ALL:03075070, ALL:03108490]",
                "variableParam": "[00010, 00065, 00400]",
                "timeParam": null,
                "parameter": [],
                "methodCalled": null
            },
            "note": [
                {
                    "value": "[ALL:03049640, ALL:03075070, ALL:03108490]",
                    "type": null,
                    "href": null,
                    "title": "filter:sites",
                    "show": null
                },
                {
                    "value": "[mode=LATEST, modifiedSince=PT30M]",
                    "type": null,
                    "href": null,
                    "title": "filter:timeRange",
                    "show": null
                },
                {
                    "value": "methodIds=[ALL]",
                    "type": null,
                    "href": null,
                    "title": "filter:methodId",
                    "show": null
                },
                {
                    "value": "2014-07-27T03:24:49.373Z",
                    "type": null,
                    "href": null,
                    "title": "requestDT",
                    "show": null
                },
                {
                    "value": "90c119c0-153d-11e4-af33-6cae8b6642ea",
                    "type": null,
                    "href": null,
                    "title": "requestId",
                    "show": null
                },
                {
                    "value": "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.",
                    "type": null,
                    "href": null,
                    "title": "disclaimer",
                    "show": null
                },
                {
                    "value": "sdas01",
                    "type": null,
                    "href": null,
                    "title": "server",
                    "show": null
                }
            ],
            "extension": null
        },
        "timeSeries": [
            { // source info allegheny
                "sourceInfo": {
                    "siteName": "Allegheny R at CW Bill Young L&D  at Acmetonia, PA",
                    "siteCode": [
                        {
                            "value": "03049640",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.5361788,
                            "longitude": -79.8147714
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05010009",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42129",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00010",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807042,
                            "default": true
                        }
                    ],
                    "variableName": "Temperature, water, &#176;C",
                    "variableDescription": "Temperature, water, degrees Celsius",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "deg C",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45807042",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "23.8",
                                "dateTimeAccuracyCd": null,
                                "qualifiers": [
                                    "P"
                                ],
                                "censorCode": null,
                                "dateTime": "2014-07-26T23:15:00.000-04:00",
                                "timeOffset": null,
                                "dateTimeUTC": null,
                                "methodID": null,
                                "sourceID": null,
                                "accuracyStdDev": null,
                                "sampleID": null,
                                "methodCode": null,
                                "sourceCode": null,
                                "labSampleCode": null,
                                "offsetValue": null,
                                "offsetTypeID": null,
                                "offsetTypeCode": null,
                                "codedVocabulary": null,
                                "codedVocabularyTerm": null,
                                "qualityControlLevelCode": null,
                                "metadataTime": null,
                                "oid": null
                            }
                        ],
                        "units": null,
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd",
                                "default": null
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 2
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03049640:00010:00011"
            },
            { // source info allegheny
                "sourceInfo": {
                    "siteName": "Allegheny R at CW Bill Young L&D  at Acmetonia, PA",
                    "siteCode": [
                        {
                            "value": "03049640",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.5361788,
                            "longitude": -79.8147714
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05010009",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42129",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00065",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807202,
                            "default": true
                        }
                    ],
                    "variableName": "Gage height, ft",
                    "variableDescription": "Gage height, feet",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "ft",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45807202",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "10.50",
                                "dateTimeAccuracyCd": null,
                                "qualifiers": [
                                    "P"
                                ],
                                "censorCode": null,
                                "dateTime": "2014-07-26T23:15:00.000-04:00",
                                "timeOffset": null,
                                "dateTimeUTC": null,
                                "methodID": null,
                                "sourceID": null,
                                "accuracyStdDev": null,
                                "sampleID": null,
                                "methodCode": null,
                                "sourceCode": null,
                                "labSampleCode": null,
                                "offsetValue": null,
                                "offsetTypeID": null,
                                "offsetTypeCode": null,
                                "codedVocabulary": null,
                                "codedVocabularyTerm": null,
                                "qualityControlLevelCode": null,
                                "metadataTime": null,
                                "oid": null
                            }
                        ],
                        "units": null,
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd",
                                "default": null
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 15
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03049640:00065:00011"
            },
            { // source info allegheny
                "sourceInfo": {
                    "siteName": "Allegheny R at CW Bill Young L&D  at Acmetonia, PA",
                    "siteCode": [
                        {
                            "value": "03049640",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.5361788,
                            "longitude": -79.8147714
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05010009",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42129",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00400",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45810855,
                            "default": true
                        }
                    ],
                    "variableName": "pH, water, unfiltered, field, standard units",
                    "variableDescription": "pH, water, unfiltered, field, standard units",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "std units",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45810855",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "7.7",
                                "dateTimeAccuracyCd": null,
                                "qualifiers": [
                                    "P"
                                ],
                                "censorCode": null,
                                "dateTime": "2014-07-26T23:15:00.000-04:00",
                                "timeOffset": null,
                                "dateTimeUTC": null,
                                "methodID": null,
                                "sourceID": null,
                                "accuracyStdDev": null,
                                "sampleID": null,
                                "methodCode": null,
                                "sourceCode": null,
                                "labSampleCode": null,
                                "offsetValue": null,
                                "offsetTypeID": null,
                                "offsetTypeCode": null,
                                "codedVocabulary": null,
                                "codedVocabularyTerm": null,
                                "qualityControlLevelCode": null,
                                "metadataTime": null,
                                "oid": null
                            }
                        ],
                        "units": null,
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd",
                                "default": null
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 3
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03049640:00400:00011"
            },
            { // source info monongahela
                "sourceInfo": {
                    "siteName": "Monongahela River at Elizabeth, PA",
                    "siteCode": [
                        {
                            "value": "03075070",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.26229225,
                            "longitude": -79.9011597
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05020005",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42003",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00010",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807042,
                            "default": true
                        }
                    ],
                    "variableName": "Temperature, water, &#176;C",
                    "variableDescription": "Temperature, water, degrees Celsius",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "deg C",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45807042",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "26.7",
                                "dateTimeAccuracyCd": null,
                                "qualifiers": [
                                    "P"
                                ],
                                "censorCode": null,
                                "dateTime": "2014-07-26T23:15:00.000-04:00",
                                "timeOffset": null,
                                "dateTimeUTC": null,
                                "methodID": null,
                                "sourceID": null,
                                "accuracyStdDev": null,
                                "sampleID": null,
                                "methodCode": null,
                                "sourceCode": null,
                                "labSampleCode": null,
                                "offsetValue": null,
                                "offsetTypeID": null,
                                "offsetTypeCode": null,
                                "codedVocabulary": null,
                                "codedVocabularyTerm": null,
                                "qualityControlLevelCode": null,
                                "metadataTime": null,
                                "oid": null
                            }
                        ],
                        "units": null,
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd",
                                "default": null
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 25
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03075070:00010:00011"
            },
            { // source info monongahela
                "sourceInfo": {
                    "siteName": "Monongahela River at Elizabeth, PA",
                    "siteCode": [
                        {
                            "value": "03075070",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.26229225,
                            "longitude": -79.9011597
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05020005",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42003",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00065",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807202,
                            "default": true
                        }
                    ],
                    "variableName": "Gage height, ft",
                    "variableDescription": "Gage height, feet",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "ft",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45807202",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "9.91",
                                "dateTimeAccuracyCd": null,
                                "qualifiers": [
                                    "P"
                                ],
                                "censorCode": null,
                                "dateTime": "2014-07-26T23:15:00.000-04:00",
                                "timeOffset": null,
                                "dateTimeUTC": null,
                                "methodID": null,
                                "sourceID": null,
                                "accuracyStdDev": null,
                                "sampleID": null,
                                "methodCode": null,
                                "sourceCode": null,
                                "labSampleCode": null,
                                "offsetValue": null,
                                "offsetTypeID": null,
                                "offsetTypeCode": null,
                                "codedVocabulary": null,
                                "codedVocabularyTerm": null,
                                "qualityControlLevelCode": null,
                                "metadataTime": null,
                                "oid": null
                            }
                        ],
                        "units": null,
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd",
                                "default": null
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 3
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    },
                    {
                        "value": [
                            {
                                "value": "9.90",
                                "dateTimeAccuracyCd": null,
                                "qualifiers": [
                                    "P"
                                ],
                                "censorCode": null,
                                "dateTime": "2014-07-26T23:15:00.000-04:00",
                                "timeOffset": null,
                                "dateTimeUTC": null,
                                "methodID": null,
                                "sourceID": null,
                                "accuracyStdDev": null,
                                "sampleID": null,
                                "methodCode": null,
                                "sourceCode": null,
                                "labSampleCode": null,
                                "offsetValue": null,
                                "offsetTypeID": null,
                                "offsetTypeCode": null,
                                "codedVocabulary": null,
                                "codedVocabularyTerm": null,
                                "qualityControlLevelCode": null,
                                "metadataTime": null,
                                "oid": null
                            }
                        ],
                        "units": null,
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd",
                                "default": null
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "Backup",
                                "methodLink": null,
                                "methodID": 26
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03075070:00065:00011"
            },
            { // source info monongahela
                "sourceInfo": {
                    "siteName": "Monongahela River at Elizabeth, PA",
                    "siteCode": [
                        {
                            "value": "03075070",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.26229225,
                            "longitude": -79.9011597
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05020005",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42003",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00400",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45810855,
                            "default": true
                        }
                    ],
                    "variableName": "pH, water, unfiltered, field, standard units",
                    "variableDescription": "pH, water, unfiltered, field, standard units",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "std units",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45810855",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "7.6",
                                "dateTimeAccuracyCd": null,
                                "qualifiers": [
                                    "P"
                                ],
                                "censorCode": null,
                                "dateTime": "2014-07-26T23:15:00.000-04:00",
                                "timeOffset": null,
                                "dateTimeUTC": null,
                                "methodID": null,
                                "sourceID": null,
                                "accuracyStdDev": null,
                                "sampleID": null,
                                "methodCode": null,
                                "sourceCode": null,
                                "labSampleCode": null,
                                "offsetValue": null,
                                "offsetTypeID": null,
                                "offsetTypeCode": null,
                                "codedVocabulary": null,
                                "codedVocabularyTerm": null,
                                "qualityControlLevelCode": null,
                                "metadataTime": null,
                                "oid": null
                            }
                        ],
                        "units": null,
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd",
                                "default": null
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 11
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03075070:00400:00011"
            },
            { // source info ohio
                "sourceInfo": {
                    "siteName": "Ohio R ab Montgomery Dam & Locks at Ohioview, PA",
                    "siteCode": [
                        {
                            "value": "03108490",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.6489546,
                            "longitude": -80.3833975
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05030101",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42007",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00010",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807042,
                            "default": true
                        }
                    ],
                    "variableName": "Temperature, water, &#176;C",
                    "variableDescription": "Temperature, water, degrees Celsius",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "deg C",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45807042",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [],
                        "units": null,
                        "qualifier": [],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 1
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03108490:00010:00011"
            },
            { // source info ohio
                "sourceInfo": {
                    "siteName": "Ohio R ab Montgomery Dam & Locks at Ohioview, PA",
                    "siteCode": [
                        {
                            "value": "03108490",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.6489546,
                            "longitude": -80.3833975
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05030101",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42007",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00065",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807202,
                            "default": true
                        }
                    ],
                    "variableName": "Gage height, ft",
                    "variableDescription": "Gage height, feet",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "ft",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45807202",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [],
                        "units": null,
                        "qualifier": [],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 14
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03108490:00065:00011"
            },
            { // source info ohio
                "sourceInfo": {
                    "siteName": "Ohio R ab Montgomery Dam & Locks at Ohioview, PA",
                    "siteCode": [
                        {
                            "value": "03108490",
                            "network": "NWIS",
                            "siteID": null,
                            "agencyCode": "USGS",
                            "agencyName": null,
                            "default": null
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "EST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-04:00",
                            "zoneAbbreviation": "EDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 40.6489546,
                            "longitude": -80.3833975
                        },
                        "localSiteXY": []
                    },
                    "elevationM": null,
                    "verticalDatum": null,
                    "note": [],
                    "extension": null,
                    "altname": null,
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "type": null,
                            "name": "siteTypeCd",
                            "uri": null
                        },
                        {
                            "value": "05030101",
                            "type": null,
                            "name": "hucCd",
                            "uri": null
                        },
                        {
                            "value": "42",
                            "type": null,
                            "name": "stateCd",
                            "uri": null
                        },
                        {
                            "value": "42007",
                            "type": null,
                            "name": "countyCd",
                            "uri": null
                        }
                    ],
                    "oid": null,
                    "metadataTime": null
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00400",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45810855,
                            "default": true
                        }
                    ],
                    "variableName": "pH, water, unfiltered, field, standard units",
                    "variableDescription": "pH, water, unfiltered, field, standard units",
                    "valueType": "Derived Value",
                    "dataType": null,
                    "generalCategory": null,
                    "sampleMedium": null,
                    "unit": {
                        "unitName": null,
                        "unitDescription": null,
                        "unitType": null,
                        "unitAbbreviation": "std units",
                        "unitCode": null,
                        "unitID": null
                    },
                    "options": {
                        "option": [
                            {
                                "value": null,
                                "name": "Statistic",
                                "optionID": null,
                                "optionCode": "00011"
                            }
                        ]
                    },
                    "note": [],
                    "related": null,
                    "extension": null,
                    "noDataValue": -999999,
                    "timeScale": null,
                    "speciation": null,
                    "categories": null,
                    "variableProperty": [],
                    "oid": "45810855",
                    "metadataTime": null
                },
                "values": [
                    {
                        "value": [],
                        "units": null,
                        "qualifier": [],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodCode": null,
                                "methodDescription": "",
                                "methodLink": null,
                                "methodID": 2
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:03108490:00400:00011"
            }
        ]
    },
    "nil": false,
    "globalScope": true,
    "typeSubstituted": false
}