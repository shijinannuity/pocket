/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT \n  id,\n  app,\n  user\nFROM (\n  SELECT \n    ROW_NUMBER() OVER (ORDER BY a1.created DESC) as id,\n    json_object(\n      'table_id', a2.id,\n      'app_id', a2.app_id,\n      'name', a2.name,\n      'logo', a2.file,\n      'internalurl', a2.internalurl,\n      'internalport', a2.internalport,\n      'company_id', a2.company_id\n    ) as app,\n    a1.user\n  FROM \n    access as a1 \n  JOIN \n    apps as a2 \n  ON \n    a1.event = a2.app_id \n  WHERE \n    a1.user = 'ar_shiji'\n) as subquery\nWHERE id = 1;"
  }

  // remove
  collection.schema.removeField("robfs0bm")

  // remove
  collection.schema.removeField("z9sdazgi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvkq4e8b",
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
    "id": "q13y9agw",
    "name": "user",
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
    "query": "SELECT DISTINCT a1.event,a1.id,json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id )  as app from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji'  "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "robfs0bm",
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
    "id": "z9sdazgi",
    "name": "app",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("gvkq4e8b")

  // remove
  collection.schema.removeField("q13y9agw")

  return dao.saveCollection(collection)
})
