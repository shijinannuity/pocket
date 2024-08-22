/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w11tkmaapa36hes");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "w11tkmaapa36hes",
    "created": "2024-08-07 08:07:23.904Z",
    "updated": "2024-08-07 08:22:00.814Z",
    "name": "alert_remove",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j848hxp3",
        "name": "app",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT a.id,a.app from alert as a where a.owner='7nzws8mbrzpxpsl' and a.app in (SELECT apps.name from apps where apps.id in ('8dl1q2gymdbjmqj'))"
    }
  });

  return Dao(db).saveCollection(collection);
})
