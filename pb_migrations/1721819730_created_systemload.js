/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e113lqcmj51dtyg",
    "created": "2024-07-24 11:15:30.158Z",
    "updated": "2024-07-24 11:15:30.158Z",
    "name": "systemload",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qbd3kr29",
        "name": "date",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "svvwnn3y",
        "name": "systemload",
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
  const collection = dao.findCollectionByNameOrId("e113lqcmj51dtyg");

  return dao.deleteCollection(collection);
})
