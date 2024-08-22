/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("slzo5jp7axvaygf");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "slzo5jp7axvaygf",
    "created": "2024-06-10 08:01:58.625Z",
    "updated": "2024-06-10 09:03:53.505Z",
    "name": "wf",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "amf2eiyn",
        "name": "wfname",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4mg4qtlz",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "p59w4sej4aswrhx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "vfdjhzo7",
        "name": "description",
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
        "id": "w428eggc",
        "name": "isactive",
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
      "query": "select id,wfname,user_id,description,isactive,updated from workflow ORDER by workflow.isactive==TRUE "
    }
  });

  return Dao(db).saveCollection(collection);
})
