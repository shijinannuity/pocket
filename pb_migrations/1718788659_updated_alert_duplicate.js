/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  collection.name = "alert"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  collection.name = "alert_duplicate"

  return dao.saveCollection(collection)
})
