/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT a1.event,a1.id,json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id )  as app from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji'  "
  }

  // remove
  collection.schema.removeField("ia11raz5")

  // remove
  collection.schema.removeField("13jvtjul")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT a1.event,json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id )  as app,(ROW_NUMBER() OVER()) as id from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji'  "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ia11raz5",
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
    "id": "13jvtjul",
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
  collection.schema.removeField("robfs0bm")

  // remove
  collection.schema.removeField("z9sdazgi")

  return dao.saveCollection(collection)
})
