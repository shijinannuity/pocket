/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwucpiua",
    "name": "callback_datetime",
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
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // remove
  collection.schema.removeField("gwucpiua")

  return dao.saveCollection(collection)
})
