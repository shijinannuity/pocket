/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("krrthc50jjhqi4b");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "krrthc50jjhqi4b",
    "created": "2024-08-09 06:53:44.101Z",
    "updated": "2024-08-09 08:39:56.385Z",
    "name": "chatgpt",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nmslkar0",
        "name": "app_name",
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
        "id": "arjvuejm",
        "name": "d",
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
      "query": "WITH \nfiltered_data AS (\n    SELECT \n        STRFTIME('%Y-%m-%d', datetime) AS date,\n        STRFTIME('%H', datetime) AS hour,\n        app_name,\n        app_status\n    FROM \n        app_health\n    WHERE \n        STRFTIME('%Y-%m-%d', datetime) = '2024-08-08'\n)\nSELECT \n    (ROW_NUMBER() OVER()) as id,\n    p.app_name,\n    json_object(\n        '00', MAX(CASE WHEN hour = '00' THEN app_status END),\n        '01', MAX(CASE WHEN hour = '01' THEN app_status END),\n        '02', MAX(CASE WHEN hour = '02' THEN app_status END),\n        '03', MAX(CASE WHEN hour = '03' THEN app_status END),\n        '04', MAX(CASE WHEN hour = '04' THEN app_status END),\n        '05', MAX(CASE WHEN hour = '05' THEN app_status END),\n        '06', MAX(CASE WHEN hour = '06' THEN app_status END),\n        '07', MAX(CASE WHEN hour = '07' THEN app_status END),\n        '08', MAX(CASE WHEN hour = '08' THEN app_status END),\n        '09', MAX(CASE WHEN hour = '09' THEN app_status END),\n        '10', MAX(CASE WHEN hour = '10' THEN app_status END),\n        '11', MAX(CASE WHEN hour = '11' THEN app_status END),\n        '12', MAX(CASE WHEN hour = '12' THEN app_status END),\n        '13', MAX(CASE WHEN hour = '13' THEN app_status END),\n        '14', MAX(CASE WHEN hour = '14' THEN app_status END),\n        '15', MAX(CASE WHEN hour = '15' THEN app_status END),\n        '16', MAX(CASE WHEN hour = '16' THEN app_status END),\n        '17', MAX(CASE WHEN hour = '17' THEN app_status END),\n        '18', MAX(CASE WHEN hour = '18' THEN app_status END),\n        '19', MAX(CASE WHEN hour = '19' THEN app_status END),\n        '20', MAX(CASE WHEN hour = '20' THEN app_status END),\n        '21', MAX(CASE WHEN hour = '21' THEN app_status END),\n        '22', MAX(CASE WHEN hour = '22' THEN app_status END),\n        '23', MAX(CASE WHEN hour = '23' THEN app_status END)\n    ) AS d\nFROM \n    filtered_data p\nGROUP BY \n    p.app_name;\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
