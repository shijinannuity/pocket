/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u5i8bb3z0mlln6b",
    "created": "2024-07-10 10:13:37.426Z",
    "updated": "2024-07-10 10:13:37.426Z",
    "name": "ddff",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ikymlkot",
        "name": "company",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "ixirsycq",
        "name": "names",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,company,(SELECT json_group_array(name) from users where users.company_id=(SELECT id from company WHERE company.company_name=t1.company)) as names FROM notloggedfor20 as t1 GROUP by company"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u5i8bb3z0mlln6b");

  return dao.deleteCollection(collection);
})
