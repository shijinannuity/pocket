/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lnzhj2228uo390j",
    "created": "2024-08-05 06:54:49.427Z",
    "updated": "2024-08-05 06:54:49.427Z",
    "name": "appscount",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eddn2tb9",
        "name": "count",
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
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,count(*) as count from apps where apps.company_id='wdyfaxu24v587e1'"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lnzhj2228uo390j");

  return dao.deleteCollection(collection);
})
