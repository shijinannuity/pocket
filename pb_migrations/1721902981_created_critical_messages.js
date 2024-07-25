/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pd1l3g2dyq3sxff",
    "created": "2024-07-25 10:23:01.629Z",
    "updated": "2024-07-25 10:23:01.629Z",
    "name": "critical_messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t0ha8nwn",
        "name": "message",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pd1l3g2dyq3sxff");

  return dao.deleteCollection(collection);
})
