export const template =
{
    "type": "view",
    "fields": [
        {
        "field": "id",
        "map": "id"
        }
    ],
    "datasources": [
        {
            "id": 0,
            "resource": [
                {
                    "id": 0,
                    "title": "text"
                },
                {
                    "id": 1,
                    "title": "boolean"
                },
                {
                    "id": 2,
                    "title": "date"
                },
                {
                    "id": 3,
                    "title": "time"
                },
                {
                    "id": 4,
                    "title": "number"
                },
                {
                    "id": 5,
                    "title": "memo"
                },
                {
                    "id": 6,
                    "title": "label"
                },
                {
                    "id": 7,
                    "title": "group"
                },
                {
                    "id": 8,
                    "title": "endgroup"
                },
                {
                    "id": 9,
                    "title": "heading"
                },
                {
                    "id": 10,
                    "title": "detail"
                },
                {
                    "id": 11,
                    "title": "conditional"
                }
            ]
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
                    },
                    {
                        "element": "select",
                        "datasource": 0,
                        "title": "Type",
                        "field": "datatype"
                    }
                ]
            },
            {
            "element": "card",
                "elements": [
                    {
                        "element": "button",
                        "title": "Back",
                        "action": "context.propCrumb",
                        "styles": ["back"]
                    }
                ]
            }
        ]
    }
};