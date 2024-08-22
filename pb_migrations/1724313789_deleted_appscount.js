/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lnzhj2228uo390j");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "lnzhj2228uo390j",
    "created": "2024-08-05 06:54:49.427Z",
    "updated": "2024-08-05 06:58:26.175Z",
    "name": "appscount",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nn6kqi3h",
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
        "id": "hnlhzd0g",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,company.company_id,count(*) as count from apps join company on apps.company_id=company.id where apps.company_id='wdyfaxu24v587e1'"
    }
  });

  return Dao(db).saveCollection(collection);
})
