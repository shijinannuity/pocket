/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6yak5on5owqxsr")

  collection.listRule = "@request.auth.id!=''"
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6yak5on5owqxsr")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
