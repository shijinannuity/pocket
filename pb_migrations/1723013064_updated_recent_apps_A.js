/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gn6z3add0yq1xnz")

  collection.options = {
    "query": "SELECT ac.id from access as ac where user='ar_shiji' AND ac.event in (SELECT apps.app_id FROM apps WHERE apps.id in ('8dl1q2gymdbjmqj'))"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gn6z3add0yq1xnz")

  collection.options = {
    "query": "SELECT ac.id from access as ac join apps as ap on ac.event=ap.app_id where  user='ar_shiji' AND ap.id in ('8dl1q2gymdbjmqj')"
  }

  return dao.saveCollection(collection)
})
