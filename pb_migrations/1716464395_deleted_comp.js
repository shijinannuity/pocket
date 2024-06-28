/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("evnr4v5230tdmvg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "evnr4v5230tdmvg",
    "created": "2024-05-23 04:55:02.990Z",
    "updated": "2024-05-23 04:55:02.990Z",
    "name": "comp",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7wop1dzx",
        "name": "company_id",
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
        "id": "t3flsylb",
        "name": "company_name",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,users.company_id,users.company_name from users GROUP by users.company_id;"
    }
  });

  return Dao(db).saveCollection(collection);
})
