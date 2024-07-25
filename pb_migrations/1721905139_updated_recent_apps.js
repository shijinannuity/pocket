/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,(SELECT DISTINCT(json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id  ))) as app,a1.user from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji' order by a1.created desc "
  }

  // remove
  collection.schema.removeField("71hh2h6j")

  // remove
  collection.schema.removeField("tdx6tdxt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8pf3kmea",
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
    "id": "9e3pyzym",
    "name": "user",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,(json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id  )) as app,a1.user from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji' order by a1.created desc "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "71hh2h6j",
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
    "id": "tdx6tdxt",
    "name": "user",
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

  // remove
  collection.schema.removeField("8pf3kmea")

  // remove
  collection.schema.removeField("9e3pyzym")

  return dao.saveCollection(collection)
})
