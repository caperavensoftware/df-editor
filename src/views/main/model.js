import {template as modelSchema} from './schemas/model';
import {template as projectSchema} from './schemas/project';
import {template as sectionSchema} from './schemas/section';
import {template as sectionItemSchema} from './schemas/section-item';

export class Base {
    id;
    name;
    items;

    constructor() {
        this.items = [];
    }

    nextId() {
        return this.items.length + 1;
    }
}

export class Model extends Base {
    constructor() {
        super();
        this.name = "Dynamic Forms";
    }

    add() {
        const project = new Project();
        project.id = this.nextId();
        project.name = "new project";
        project.projectPdf = "project.pdf";
        project.projectCsv = "project.csv";
        project.formula = '$table.field = "value"';

        this.items.push(project);
    }
}

export class Project extends Base {
    projectPdf;
    projectCsv;
    formula;

    add() {
        const section = new Section();
        section.id = this.nextId();
        section.name = "new section";
        section.description = "describe new section in one short line";
        section.schemaCsv = "section.csv";
        section.schemaPdf = "section.pdf";

        this.items.push(section);
    }
}

export class Section extends Base {
    description;
    schemaCsv;
    schemaPdf;

    add() {
        const item = new SectionItem();
        item.id = this.nextId();
        item.name = "section item name";
        item.label = "display label";
        item.datatype = "text";
        item.options = "";

        this.items.push(item);
    }
}

export class SectionItem extends Base {
    fields;
    label;
    datatype;
    options;

    constructor () {
        super();
        this.fields = [];
    }
}

export const modelToSchemaMapping = new Map([
    ["Model", modelSchema],
    ["Project", projectSchema],
    ["Section", sectionSchema],
    ["SectionItem", sectionItemSchema]
]);
