/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cp2ftzr6wgaauzj");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cp2ftzr6wgaauzj",
    "created": "2024-08-06 15:11:06.053Z",
    "updated": "2024-08-06 15:11:06.053Z",
    "name": "check_whether_in",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "inl4dlel",
        "name": "app",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "65s1fxbgy45qrki",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "gfmcnz9c",
        "name": "app_order",
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
      "query": "SELECT id,workflow_app.app,workflow_app.app_order FROM workflow_app where workflow_app.id in ('97gu2sunm1vgdcv','uuvf5m6r9wcmmuc','u7creavq8ebq3ei')"
    }
  });

  return Dao(db).saveCollection(collection);
})
