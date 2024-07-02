/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  collection.deleteRule = "@collection.reminder.id=@collection.alert.reminder"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
