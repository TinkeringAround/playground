class ProjectFilter {
    ACTIVE = "active";
    VISIBLE = "visible";

    FILTERS = ["All"];
    PROJECTS = [{link: "./icons", color: "var(--blue)"}, {link: "./designs", color: "var(--red)"}];
    FILTERED_PROJECTS = [[0,1]];

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
        filterItem.classList.add("item");
        filterItem.onclick = event => this.onFilterItemClick(event, index);
        filter.appendChild(filterItem);

        return filterItem;
    }

    createProject(list, project) {
        const projectItem = document.createElement("a");
        projectItem.href = project.link;
        projectItem.classList.add("project");
        projectItem.style.backgroundColor = project.color;
        list.appendChild(projectItem);

        return projectItem;
    }

    onFilterItemClick(event, index) {
        if (event.target.className.includes(this.ACTIVE))
            return;

        this.selectFilter(index);
        this.filterProjects(index);
    }

    selectFilter(index) {
        for (let i = 0; i < this.items.length; i += 1) {
            this.items[i].classList.remove(this.ACTIVE);
            if (i === index) this.items[i].classList.add(this.ACTIVE);
        }
    }

    filterProjects(index) {
        for (let i = 0; i < this.projects.length; i += 1) {
            this.projects[i].classList.remove(this.VISIBLE);
            if (this.FILTERED_PROJECTS[index].includes(i))
                requestAnimationFrame(() => this.projects[i].classList.add(this.VISIBLE));
        }
    }
}

//==========================================================
new ProjectFilter();
