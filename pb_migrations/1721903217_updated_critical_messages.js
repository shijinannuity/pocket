/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pd1l3g2dyq3sxff")

  collection.name = "critical_alerts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pd1l3g2dyq3sxff")

  collection.name = "critical_messages"

  return dao.saveCollection(collection)
})
