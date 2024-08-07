/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "w11tkmaapa36hes",
    "created": "2024-08-07 08:07:23.904Z",
    "updated": "2024-08-07 08:07:23.904Z",
    "name": "alert_remove",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mk7sly96",
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
      "query": "SELECT a.id,a.app from alert as a where a.owner='7nzws8mbrzpxpsl' "
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w11tkmaapa36hes");

  return dao.deleteCollection(collection);
})
