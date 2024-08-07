/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w11tkmaapa36hes")

  collection.options = {
    "query": "SELECT a.id,a.app from reminder as a where a.owner_user_id='7nzws8mbrzpxpsl'\nand a.app in (SELECT apps.name from apps where apps.id in ('8dl1q2gymdbjmqj'))"
  }

  // remove
  collection.schema.removeField("1jvgpecg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmsafltg",
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
    "query": "SELECT a.id,a.app from alert as a where a.owner='7nzws8mbrzpxpsl'\nand a.app in (SELECT apps.name from apps where apps.id in ('8dl1q2gymdbjmqj'))"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1jvgpecg",
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
  collection.schema.removeField("tmsafltg")

  return dao.saveCollection(collection)
})
