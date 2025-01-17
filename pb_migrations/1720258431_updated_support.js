/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ep4z7s15xkypf7")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ep4z7s15xkypf7")

  collection.listRule = "@request.auth.id!=\"\""
  collection.viewRule = "@request.auth.id!=\"\""
  collection.createRule = "@request.auth.id!=\"\""
  collection.updateRule = "@request.auth.id!=\"\""

  return dao.saveCollection(collection)
})
