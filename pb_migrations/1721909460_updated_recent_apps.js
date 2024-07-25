/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "WITH RankedAccess AS (\n  SELECT \n    a1.event,\n    a1.id,\n    json_object(\n      'table_id', a2.id,\n      'app_id', a2.app_id,\n      'name', a2.name,\n      'logo', a2.file,\n      'internalurl', a2.internalurl,\n      'internalport', a2.internalport,\n      'company_id', a2.company_id\n    ) as app,\n    a1.date_time,\n    ROW_NUMBER() OVER (PARTITION BY a1.event ORDER BY a1.date_time DESC) as rn\n  FROM \n    access as a1 \n  JOIN \n    apps as a2 \n  ON \n    a1.event = a2.app_id \n  WHERE \n    a1.user = 'ar_shiji'\n)\nSELECT \n  event,\n  id,\n  app,\n  date_time\nFROM \n  RankedAccess\nWHERE \n  rn = 1;\n"
  }

  // remove
  collection.schema.removeField("rvlhxgxb")

  // remove
  collection.schema.removeField("jalbco3x")

  // remove
  collection.schema.removeField("vgijcjvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzrgj4j5",
    "name": "event",
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
    "id": "ydyufufp",
    "name": "app",
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
    "id": "mefnwxeu",
    "name": "date_time",
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
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT a1.event,a1.id,json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id )  as app,a1.date_time from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji'  ORDER by a1.date_time DESC"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rvlhxgxb",
    "name": "event",
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
    "id": "jalbco3x",
    "name": "app",
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
    "id": "vgijcjvn",
    "name": "date_time",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("pzrgj4j5")

  // remove
  collection.schema.removeField("ydyufufp")

  // remove
  collection.schema.removeField("mefnwxeu")

  return dao.saveCollection(collection)
})
