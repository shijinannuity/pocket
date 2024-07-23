/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lh2tx49v",
    "name": "agent_notes",
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
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // remove
  collection.schema.removeField("lh2tx49v")

  return dao.saveCollection(collection)
})
