/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "32om4nbzac8k70l",
    "created": "2024-05-21 06:00:11.033Z",
    "updated": "2024-05-21 06:00:11.033Z",
    "name": "profile_settings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hsx99vb1",
        "name": "field",
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
        "id": "zopdfhs9",
        "name": "email_notification",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "lw59mn5c",
        "name": "sound_notification",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "2o9uo5cd",
        "name": "mobile_notification",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("32om4nbzac8k70l");

  return dao.deleteCollection(collection);
})
