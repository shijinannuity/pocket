/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0x3xcmtmvmg6bxf",
    "created": "2024-07-02 09:12:47.741Z",
    "updated": "2024-07-02 09:12:47.741Z",
    "name": "r_data",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ckqilfby",
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
      },
      {
        "system": false,
        "id": "bv1rqj7v",
        "name": "file",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("0x3xcmtmvmg6bxf");

  return dao.deleteCollection(collection);
})
