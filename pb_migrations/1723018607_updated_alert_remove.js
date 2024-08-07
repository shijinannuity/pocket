/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w11tkmaapa36hes")

  collection.options = {
    "query": "SELECT a.id,a.app from alert as a where a.owner='7nzws8mbrzpxpsl' and a.app in (SELECT apps.name from apps where apps.app_id in ('8dl1q2gymdbjmqj'))"
  }

  // remove
  collection.schema.removeField("mk7sly96")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eiaimuar",
    "name": "app",
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
  const collection = dao.findCollectionByNameOrId("w11tkmaapa36hes")

  collection.options = {
    "query": "SELECT a.id,a.app from alert as a where a.owner='7nzws8mbrzpxpsl' "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mk7sly96",
    "name": "app",
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
  collection.schema.removeField("eiaimuar")

  return dao.saveCollection(collection)
})
