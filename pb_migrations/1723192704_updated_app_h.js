/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "WITH App_health_hour AS (SELECT STRFTIME('%H',datetime) as hour,app_name,app_status from app_health WHERE STRFTIME('%Y-%m-%d',datetime)='2024-08-08')\nSELECT (ROW_NUMBER() OVER()) as id,a.app_name,JSON_OBJECT('data',(SELECT json_object(p.hour,p.app_status) from App_health_hour p WHERE p.app_name=a.app_name)) as data from App_health_hour as a GROUP by a.app_name\n\n\n\n"
  }

  // remove
  collection.schema.removeField("r6blee9t")

  // remove
  collection.schema.removeField("fdhotnwc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mzejoxpu",
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
    "id": "j2wncu6f",
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
    "query": "WITH App_health_hour AS (SELECT STRFTIME('%H',datetime) as hour,app_name,app_status from app_health WHERE STRFTIME('%Y-%m-%d',datetime)='2024-08-08')\nSELECT (ROW_NUMBER() OVER()) as id,app_name,JSON_OBJECT('0',(CASE hour WHEN '00' THEN app_status ELSE NULL END),'01',(CASE hour WHEN '01' THEN app_status ELSE NULL END),'02',(CASE hour WHEN '02' THEN app_status ELSE NULL END),'03',(CASE hour WHEN '03' THEN app_status ELSE NULL END),'04',(CASE hour WHEN '04' THEN app_status ELSE NULL END),'05',(CASE hour WHEN '05' THEN app_status ELSE NULL END),'06',(CASE hour WHEN '06' THEN app_status ELSE NULL END),'07',(CASE hour WHEN '07' THEN app_status ELSE NULL END),'08',(CASE hour WHEN '08' THEN app_status ELSE NULL END),'09',(CASE hour WHEN '09' THEN app_status ELSE NULL END),'10',(CASE hour WHEN '10' THEN app_status ELSE NULL END),'11',(CASE hour WHEN '11' THEN app_status ELSE NULL END),'12',(CASE hour WHEN '12' THEN app_status ELSE NULL END),'13',(CASE hour WHEN '13' THEN app_status ELSE NULL END),'14',(CASE hour WHEN '14' THEN app_status ELSE NULL END),'15',(CASE hour WHEN '15' THEN app_status ELSE NULL END),'16',(CASE hour WHEN '16' THEN app_status ELSE NULL END),'17',(CASE hour WHEN '17' THEN app_status ELSE NULL END),'18',(CASE hour WHEN '18' THEN app_status ELSE NULL END),'19',(CASE hour WHEN '19' THEN app_status ELSE NULL END),'20',(CASE hour WHEN '20' THEN app_status ELSE NULL END),'21',(CASE hour WHEN '21' THEN app_status ELSE NULL END),'22',(CASE hour WHEN '22' THEN app_status ELSE NULL END),'23',(CASE hour WHEN '23' THEN app_status ELSE NULL END)) as data from App_health_hour GROUP by app_name\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r6blee9t",
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
    "id": "fdhotnwc",
    "name": "data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("mzejoxpu")

  // remove
  collection.schema.removeField("j2wncu6f")

  return dao.saveCollection(collection)
})
