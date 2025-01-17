/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j2nq2lbe2f0ua90",
    "created": "2024-06-11 11:20:14.222Z",
    "updated": "2024-06-11 11:20:14.222Z",
    "name": "trigger",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "weirhirn",
        "name": "reminder",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "09zimh2vxvjfnjm",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "h5lye4xn",
        "name": "triggerdate",
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
  const collection = dao.findCollectionByNameOrId("j2nq2lbe2f0ua90");

  return dao.deleteCollection(collection);
})
