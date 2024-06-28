/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  collection.name = "users"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  collection.name = "user"

  return dao.saveCollection(collection)
})
