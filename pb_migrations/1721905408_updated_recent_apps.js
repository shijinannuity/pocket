/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id )  as app,a1.user,a1.date_time,(ROW_NUMBER() OVER()) as id from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji' order by a1.created desc "
  }

  // remove
  collection.schema.removeField("wv2hrfrw")

  // remove
  collection.schema.removeField("s67qaalx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l4wqpxue",
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
    "id": "8u4ae3d4",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g5ndke3g",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT json_object('table_id',a2.id,'app_id',a2.app_id,'name',a2.name,'logo',a2.file,'internalurl',a2.internalurl,'internalport',a2.internalport,'company_id',a2.company_id )  as app,a1.user,(ROW_NUMBER() OVER()) as id from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji' order by a1.created desc "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wv2hrfrw",
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
    "id": "s67qaalx",
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
  collection.schema.removeField("l4wqpxue")

  // remove
  collection.schema.removeField("8u4ae3d4")

  // remove
  collection.schema.removeField("g5ndke3g")

  return dao.saveCollection(collection)
})
