/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r99bc9lrj6m6dun",
    "created": "2024-07-11 05:46:06.007Z",
    "updated": "2024-07-11 05:46:06.007Z",
    "name": "loc",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oj7rph6z",
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
      },
      {
        "system": false,
        "id": "d3f92upf",
        "name": "company_name",
        "type": "text",
        "required": false,
        "presentable": true,
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,users.name,company.company_name from users join company on users.company_id=company.id where users.lock >=10"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r99bc9lrj6m6dun");

  return dao.deleteCollection(collection);
})
