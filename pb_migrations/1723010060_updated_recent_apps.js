/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "WITH RankedAccess AS (\n  SELECT \n    a1.event,\n    a1.id,\n  (CASE a2.isactive\n  WHEN TRUE THEN\n    json_object(\n      'table_id', a2.id,\n      'app_id', a2.app_id,\n      'name', a2.name,\n      'logo', a2.file,\n      'internalurl', a2.internalurl,\n      'internalport', a2.internalport,\n      'company_id', a2.company_id\n    ) ELSE NULL END) as app  ,\n    a1.date_time,\n    ROW_NUMBER() OVER (PARTITION BY a1.event ORDER BY a1.date_time DESC) as rn\n  FROM \n    access as a1 \n  JOIN \n    apps as a2 \n  ON \n    a1.event = a2.app_id \n  WHERE \n    a1.user = 'ar_shiji'\n)\nSELECT \n  event,\n  id,\n  app,\n  date_time\nFROM \n  RankedAccess\nWHERE \n  rn = 1 ORDER BY date_time DESC limit 10;"
  }

  // remove
  collection.schema.removeField("4gobkcgw")

  // remove
  collection.schema.removeField("6u8mcsxg")

  // remove
  collection.schema.removeField("0bczgn3l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whb4dqhn",
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
    "id": "w7z9q8iz",
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
    "id": "7ogovson",
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
    "query": "WITH RankedAccess AS (\n  SELECT \n    a1.event,\n    a1.id,\n    json_object(\n      'table_id', a2.id,\n      'app_id', a2.app_id,\n      'name', a2.name,\n      'logo', a2.file,\n      'internalurl', a2.internalurl,\n      'internalport', a2.internalport,\n      'company_id', a2.company_id\n    ) as app,\n    a1.date_time,\n    ROW_NUMBER() OVER (PARTITION BY a1.event ORDER BY a1.date_time DESC) as rn\n  FROM \n    access as a1 \n  JOIN \n    apps as a2 \n  ON \n    a1.event = a2.app_id \n  WHERE \n    a1.user = 'ar_shiji'\n)\nSELECT \n  event,\n  id,\n  app,\n  date_time\nFROM \n  RankedAccess\nWHERE \n  rn = 1 ORDER BY date_time DESC limit 10;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4gobkcgw",
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
    "id": "6u8mcsxg",
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
    "id": "0bczgn3l",
    "name": "date_time",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("whb4dqhn")

  // remove
  collection.schema.removeField("w7z9q8iz")

  // remove
  collection.schema.removeField("7ogovson")

  return dao.saveCollection(collection)
})
