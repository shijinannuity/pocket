/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w11tkmaapa36hes")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,apps.name from apps where apps.app_id in ('8dl1q2gymdbjmqj')"
  }

  // remove
  collection.schema.removeField("qbuydicx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jdbrmcsd",
    "name": "name",
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
    "query": "SELECT a.id,a.app from alert as a where a.owner='7nzws8mbrzpxpsl' and a.app in (SELECT apps.name from apps where apps.app_id in ('8dl1q2gymdbjmqj'))"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbuydicx",
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
  collection.schema.removeField("jdbrmcsd")

  return dao.saveCollection(collection)
})
