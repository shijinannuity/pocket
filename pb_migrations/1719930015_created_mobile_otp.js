/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ebu8cwlevphnzbl",
    "created": "2024-07-02 14:20:15.605Z",
    "updated": "2024-07-02 14:20:15.605Z",
    "name": "mobile_otp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "amvc2vuc",
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
        "id": "iqjv44nw",
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
  const collection = dao.findCollectionByNameOrId("ebu8cwlevphnzbl");

  return dao.deleteCollection(collection);
})
