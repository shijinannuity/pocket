/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epn7ut4ozl6z1pk")

  collection.name = "cpu_usage"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epn7ut4ozl6z1pk")

  collection.name = "r_images"

  return dao.saveCollection(collection)
})
