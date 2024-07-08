/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "irphbs0gkg7edn2",
    "created": "2024-07-08 10:54:54.091Z",
    "updated": "2024-07-08 10:54:54.091Z",
    "name": "try",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ncguuszh",
        "name": "adv",
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
        "id": "g95kv4ms",
        "name": "bdv",
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
        "id": "potuzzjb",
        "name": "no",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("irphbs0gkg7edn2");

  return dao.deleteCollection(collection);
})
