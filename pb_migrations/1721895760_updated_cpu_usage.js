/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epn7ut4ozl6z1pk")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_YqWsUdf` ON `cpu_usage` (`data_id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epn7ut4ozl6z1pk")

  collection.indexes = []

  return dao.saveCollection(collection)
})
