export const template =
{
  "type": "view",
  "fields": [
      {
            "field": "id",
            "map": "id"
      }
  ],
  "body": {
    "elements": [
        {
            "element": "group",
            "title": "Section Item",
            "elements": [
                {
                    "element": "input",
                    "title": "Id",
                    "field": "id"
                },
                {
                    "element": "input",
                    "title": "Name",
                    "field": "name"
                }
            ]
        }
    ]
  }
};