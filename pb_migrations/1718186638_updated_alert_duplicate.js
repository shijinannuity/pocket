/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bu2mb2j17mcccg")

  collection.name = "alert"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bu2mb2j17mcccg")

  collection.name = "alert_duplicate"

  return dao.saveCollection(collection)
})
