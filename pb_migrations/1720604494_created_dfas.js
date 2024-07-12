/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "58s8dmviyb6wx36",
    "created": "2024-07-10 09:41:34.136Z",
    "updated": "2024-07-10 09:41:34.136Z",
    "name": "dfas",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "763nod3w",
        "name": "name",
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
    "options": {
      "query": "select (ROW_NUMBER() OVER()) as id, name FROM notloggedfor20 GROUP BY company"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36");

  return dao.deleteCollection(collection);
})
