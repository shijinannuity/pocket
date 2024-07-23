/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7inf4sybmb0zyg9",
    "created": "2024-07-22 09:42:09.398Z",
    "updated": "2024-07-22 09:42:09.398Z",
    "name": "whitelist_ip",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "foqdru9w",
        "name": "ip_addr",
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
        "id": "r9aobpt1",
        "name": "company",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "zgt0nr3n4wtdqd8",
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
  const collection = dao.findCollectionByNameOrId("7inf4sybmb0zyg9");

  return dao.deleteCollection(collection);
})
