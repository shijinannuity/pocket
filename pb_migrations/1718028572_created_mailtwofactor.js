/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r5bz16yynb3vh52",
    "created": "2024-06-10 14:09:32.232Z",
    "updated": "2024-06-10 14:09:32.232Z",
    "name": "mailtwofactor",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwtd6mky",
        "name": "otp",
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
        "id": "aixwqe6r",
        "name": "time",
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
  const collection = dao.findCollectionByNameOrId("r5bz16yynb3vh52");

  return dao.deleteCollection(collection);
})
