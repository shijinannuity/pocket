/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,app_name,json_object('0',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='00' AND a.app_name=p.app_name),'1',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='01' AND a.app_name=p.app_name),'2',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='02' AND a.app_name=p.app_name),'3',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='03' AND a.app_name=p.app_name),'4',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='04' AND a.app_name=p.app_name),'5',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='05' AND a.app_name=p.app_name),'6',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='06' AND a.app_name=p.app_name),'7',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='07' AND a.app_name=p.app_name),'8',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='08' AND a.app_name=p.app_name),'9',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='09' AND a.app_name=p.app_name),'10',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='10' AND a.app_name=p.app_name),'11',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='11' AND a.app_name=p.app_name),'12',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='12' AND a.app_name=p.app_name),'13',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='13' AND a.app_name=p.app_name),'14',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='14' AND a.app_name=p.app_name),'15',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='15' AND a.app_name=p.app_name),'16',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='16' AND a.app_name=p.app_name),'17',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='17' AND a.app_name=p.app_name),'18',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='18' AND a.app_name=p.app_name),'19',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='19' AND a.app_name=p.app_name),'20',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='20' AND a.app_name=p.app_name),'21',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='21' AND a.app_name=p.app_name),'22',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='22' AND a.app_name=p.app_name),'23',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='23' AND a.app_name=p.app_name) ) as d from app_health as p GROUP by p.app_name"
  }

  // remove
  collection.schema.removeField("jt7qwadp")

  // remove
  collection.schema.removeField("rer7tv5c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vr1xys9n",
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
    "id": "4sqbd2jb",
    "name": "d",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,app_name,json_object('0',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='0' AND a.app_name=p.app_name) ) as d from app_health as p GROUP by p.app_name"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jt7qwadp",
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
    "id": "rer7tv5c",
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
  collection.schema.removeField("vr1xys9n")

  // remove
  collection.schema.removeField("4sqbd2jb")

  return dao.saveCollection(collection)
})
