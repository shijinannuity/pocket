/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q6yak5on5owqxsr",
    "created": "2024-08-13 09:58:29.905Z",
    "updated": "2024-08-13 09:58:29.905Z",
    "name": "isalive",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ekxsm5vp",
        "name": "datetime",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("q6yak5on5owqxsr");

  return dao.deleteCollection(collection);
})
