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
        },
        {
            "id": 1,
            "field": "context.sections"
        },
        {
            "id": 2,
            "field": "model.optionalSections"
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
                    },
                    {
                        "element": "template",
                        "template": 2,
                        "condition": "model.datatype < 7"
                    },
                    {
                        "element": "template",
                        "template": 1,
                        "condition": "model.datatype == 10"
                    },
                    {
                        "element": "template",
                        "template": 0,
                        "condition": "model.datatype == 11"
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
                    },
                    {
                        "element": "button",
                        "title": "Validate Field",
                        "attributes": {
                            "click.delegate": "context.validateOnKeyField(model.defaultValue)",
                            "if.bind": "model.defaultIsOnKey == true"
                        },
                        "styles": ["action"]
                    },
                    {
                        "element": "button",
                        "title": "Print",
                        "action": "context.print"
                    }
                ]
            }
        ]
    },
    "templates": [
        {
            "id": 0,
            "elements": [
                {
                    "element": "h3",
                    "content": "Conditional sections to fill in"
                },
                {
                    "element": "details",
                    "datasource": 2,
                    "template": 3,
                    "action": "model.addOptionalSection"
                }
            ]
        },
        {
            "id": 1,
            "elements": [
                {
                    "element": "h3",
                    "content": "Section to use to capture details"
                },
                {
                    "element": "select",
                    "datasource": 1,
                    "title": "Detail Section",
                    "field": "detailSection.id"
                },
            ]
        },
        {
            "id": 2,
            "elements": [
                {
                    "element": "h3",
                    "content": "Default Value"
                },
                {
                    "element": "input",
                    "field": "defaultValue",
                    "title": "Value",
                    "attributes": {
                        "type": "text"
                    }
                },
                {
                    "element": "checkbox",
                    "field": "defaultIsOnKey",
                    "title": "Value is a On Key field"
                }
            ]
        },
        {
            "id": 3,
            "elements": [
                {
                    "element": "input",
                    "field": "id",
                    "title": "Id",
                    "as-detail": true
                },
                {
                    "element": "input",
                    "field": "name",
                    "title": "Name",
                    "as-detail": true
                },
                {
                    "element": "select",
                    "datasource": 1,
                    "title": "Section",
                    "field": "sectionId"
                }
            ]
        }
    ]
};