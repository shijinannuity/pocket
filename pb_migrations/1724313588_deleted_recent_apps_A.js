/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gn6z3add0yq1xnz");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "gn6z3add0yq1xnz",
    "created": "2024-08-07 06:37:36.128Z",
    "updated": "2024-08-07 06:44:24.594Z",
    "name": "recent_apps_A",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT ac.id from access as ac where user='ar_shiji' AND ac.event in (SELECT apps.app_id FROM apps WHERE apps.id in ('8dl1q2gymdbjmqj'))"
    }
  });

  return Dao(db).saveCollection(collection);
})
