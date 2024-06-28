/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p4439wgymqa3b9x",
    "created": "2024-06-10 11:41:26.473Z",
    "updated": "2024-06-10 11:41:26.473Z",
    "name": "alert",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "djl2y93s",
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
  const collection = dao.findCollectionByNameOrId("p4439wgymqa3b9x");

  return dao.deleteCollection(collection);
})
