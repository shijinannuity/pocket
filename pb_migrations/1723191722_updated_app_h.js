/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "WITH App_health_hour AS (SELECT STRFTIME('%H',datetime) as hour,app_name,app_status from app_health WHERE STRFTIME('%Y-%m-%d',datetime)='2024-08-08')\nSELECT (ROW_NUMBER() OVER()) as id,app_name,JSON_OBJECT('0',(CASE hour WHEN '00' THEN app_status ELSE NULL END),'01',(CASE hour WHEN '01' THEN app_status ELSE NULL END),'02',(CASE hour WHEN '02' THEN app_status ELSE NULL END),'03',(CASE hour WHEN '03' THEN app_status ELSE NULL END),'04',(CASE hour WHEN '04' THEN app_status ELSE NULL END),'05',(CASE hour WHEN '05' THEN app_status ELSE NULL END),'06',(CASE hour WHEN '06' THEN app_status ELSE NULL END),'07',(CASE hour WHEN '07' THEN app_status ELSE NULL END),'08',(CASE hour WHEN '08' THEN app_status ELSE NULL END),'09',(CASE hour WHEN '09' THEN app_status ELSE NULL END),'10',(CASE hour WHEN '10' THEN app_status ELSE NULL END),'11',(CASE hour WHEN '11' THEN app_status ELSE NULL END),'12',(CASE hour WHEN '12' THEN app_status ELSE NULL END),'13',(CASE hour WHEN '13' THEN app_status ELSE NULL END),'14',(CASE hour WHEN '14' THEN app_status ELSE NULL END),'15',(CASE hour WHEN '15' THEN app_status ELSE NULL END),'16',(CASE hour WHEN '16' THEN app_status ELSE NULL END),'17',(CASE hour WHEN '17' THEN app_status ELSE NULL END),'18',(CASE hour WHEN '18' THEN app_status ELSE NULL END),'19',(CASE hour WHEN '19' THEN app_status ELSE NULL END),'20',(CASE hour WHEN '20' THEN app_status ELSE NULL END),'21',(CASE hour WHEN '21' THEN app_status ELSE NULL END),'22',(CASE hour WHEN '22' THEN app_status ELSE NULL END),'23',(CASE hour WHEN '23' THEN app_status ELSE NULL END)) as data from App_health_hour \n\n\n\n"
  }

  // remove
  collection.schema.removeField("6tfsvc1p")

  // remove
  collection.schema.removeField("hot1rezn")

  // remove
  collection.schema.removeField("y2psonsa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ox9tdcbm",
    "name": "app_name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cyz6twuh",
    "name": "data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,(SELECT STRFTIME('%Y-%m-%d',datetime) from app_health) as date, app_name,json_object('0',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='00' AND a.app_name=p.app_name),'1',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='01' AND a.app_name=p.app_name),'2',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='02' AND a.app_name=p.app_name),'3',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='03' AND a.app_name=p.app_name),'4',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='04' AND a.app_name=p.app_name),'5',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='05' AND a.app_name=p.app_name),'6',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='06' AND a.app_name=p.app_name),'7',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='07' AND a.app_name=p.app_name),'8',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='08' AND a.app_name=p.app_name),'9',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='09' AND a.app_name=p.app_name),'10',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='10' AND a.app_name=p.app_name),'11',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='11' AND a.app_name=p.app_name),'12',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='12' AND a.app_name=p.app_name),'13',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='13' AND a.app_name=p.app_name),'14',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='14' AND a.app_name=p.app_name),'15',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='15' AND a.app_name=p.app_name),'16',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='16' AND a.app_name=p.app_name),'17',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='17' AND a.app_name=p.app_name),'18',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='18' AND a.app_name=p.app_name),'19',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='19' AND a.app_name=p.app_name),'20',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\n STRFTIME('%H',datetime)='20' AND a.app_name=p.app_name),'21',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='21' AND a.app_name=p.app_name),'22',(SELECT app_status from app_health as a where  STRFTIME('%H',datetime)='22' AND a.app_name=p.app_name),'23',(SELECT app_status from app_health as a where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and\nSTRFTIME('%H',datetime)='23' AND a.app_name=p.app_name) ) as d from app_health as p GROUP by p.app_name\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6tfsvc1p",
    "name": "date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hot1rezn",
    "name": "app_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y2psonsa",
    "name": "d",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("ox9tdcbm")

  // remove
  collection.schema.removeField("cyz6twuh")

  return dao.saveCollection(collection)
})
