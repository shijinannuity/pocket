/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b4zy80prc6gzsvd",
    "created": "2024-07-10 08:44:07.363Z",
    "updated": "2024-07-10 08:44:07.363Z",
    "name": "nouserfromacompanyloggedfor20",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e50s4lxy",
        "name": "company",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,company from notloggedfor20 GROUP BY company"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b4zy80prc6gzsvd");

  return dao.deleteCollection(collection);
})
