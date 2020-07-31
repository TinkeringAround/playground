import {addStylesheet} from "../../utility.js";

//==========================================================
class ProjectFilter {
    ITEM = ["item", "item active"];
    PROJECT = ["project", "project visible"];

    FILTERS = ["All"];
    PROJECTS = [{link: "./test", color: "var(--blue)"}];
    FILTERED_PROJECTS = [[0]];

    items = [];
    projects = [];

    constructor() {
        const filter = document.getElementsByClassName("filter")[0];
        const list = document.getElementsByClassName("list")[0];

        for (let i = 0; i < this.FILTERS.length; i += 1)
            this.items.push(this.createItem(filter, this.FILTERS[i], i));

        for (let i = 0; i < this.PROJECTS.length; i += 1)
            this.projects.push(this.createProject(list, this.PROJECTS[i]));

        this.selectFilter(0);
        this.filterProjects(0);
    }

    createItem(filter, filterName, index) {
        const filterItem = document.createElement("li");
        filterItem.innerText = filterName;
        filterItem.className = this.ITEM[0];
        filterItem.onclick = event => this.onFilterItemClick(event, index);
        filter.appendChild(filterItem);

        return filterItem;
    }

    createProject(list, project) {
        const projectItem = document.createElement("a");
        projectItem.href = project.link;
        projectItem.className = this.PROJECT[0];
        projectItem.style.backgroundColor = project.color;
        list.appendChild(projectItem);

        return projectItem;
    }

    onFilterItemClick(event, index) {
        if (event.target.className.includes(this.ITEM[1]))
            return;

        this.selectFilter(index);
        this.filterProjects(index);
    }

    selectFilter(index) {
        for (let i = 0; i < this.items.length; i += 1)
            this.items[i].className = this.ITEM[i === index ? 1 : 0];
    }

    filterProjects(index) {
        for (let i = 0; i < this.projects.length; i += 1) {
            const shouldBeDisplayed = this.FILTERED_PROJECTS[index].includes(i);
            this.projects[i].className = this.PROJECT[shouldBeDisplayed ? 1 : 0];
        }
    }
}

//==========================================================
addStylesheet("./pages/index/index.css");
new ProjectFilter();
