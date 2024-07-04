/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  collection.listRule = ""
  collection.viewRule = "@request.auth.company_id=company_id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  collection.listRule = "@request.auth.company_id=company_id"
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
