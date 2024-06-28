/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvnfya0m",
    "name": "repeat_day",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 7,
      "values": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvnfya0m",
    "name": "repeat_day",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 7,
      "values": [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
