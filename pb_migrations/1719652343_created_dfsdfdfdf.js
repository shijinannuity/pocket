/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oj07cck3cgnbtk9",
    "created": "2024-06-29 09:12:23.919Z",
    "updated": "2024-06-29 09:12:23.919Z",
    "name": "dfsdfdfdf",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sswtsbug",
        "name": "triggdate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "xfgrhvzl",
        "name": "active",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,alert.triggdate,alert.active from  alert  WHERE reminder = \"7m4hrbw4wjoxmy6\" AND triggdate <> \"2024-06-20\""
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oj07cck3cgnbtk9");

  return dao.deleteCollection(collection);
})
