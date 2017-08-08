import {template as modelSchema} from './schemas/model';
import {template as projectSchema} from './schemas/project';
import {template as sectionSchema} from './schemas/section';
import {template as sectionItemSchema} from './schemas/section-item';

import {bindable} from 'aurelia-framework';

export class NamedItem {
    id;
    name;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

export class Base extends NamedItem{
    id;
    name;
    items;
    itemsDescription;

    constructor() {
        super();
        this.items = [];
        this.itemsDescription = "No Items";
    }

    nextId() {
        return this.items.length + 1;
    }
}

export class Model extends Base {
    constructor() {
        super();
        this.name = "Dynamic Forms";
        this.itemsDescription = "Projects";
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

    constructor() {
        super();
        this.itemsDescription = "Sections";
    }

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

    get title() {
        return this.name;
    }

    constructor() {
        super();
        this.itemsDescription = "Section Items";
    }

    add() {
        const item = new SectionItem();
        item.id = this.nextId();
        item.name = "section item name";
        item.label = "display label";

        this.items.push(item);
    }
}

export class SectionItem extends Base {
    fields;
    label;
    options;
    detailSection;
    defaultValue;
    defaultIsOnKey;
    datatype;

    @bindable optionalSections;

    constructor () {
        super();
        this.defaultValue = "table.field";
        this.defaultIsOnKey = true;
        this.datatype = 0;
        this.fields = [];

        this.optionalSections = [];
        this.optionalSections.push(new NamedItem(0));
        this.optionalSections.push(new NamedItem(0));
        this.optionalSections.push(new NamedItem(0));

        this.detailSection = new NamedItem();
        this.detailSection.id = 0;
    }

    /**
     * TODO: have the ability to store sections collection.
     * Define a repeated list like perhaps details to list details and allow selection of the detail from the list in a drop down.
     *
     * Adding a addSibling function would help capturing a lot.
     */

    addOptionalSection() {
        return new NamedItem(0);
    }
}

export const modelToSchemaMapping = new Map([
    ["Model", modelSchema],
    ["Project", projectSchema],
    ["Section", sectionSchema],
    ["SectionItem", sectionItemSchema]
]);
