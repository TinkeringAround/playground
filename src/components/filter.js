class ProjectFilter {
    ITEM = ["item", "item active"];
    PROJECT = ["project", "project visible"]
    PROJECTS = [[0, 1, 2, 3, 4, 5], [1, 2], [1, 3, 4, 5], [0, 4, 5]];

    items = [];
    projects = [];

    constructor() {
        this.items = document.getElementsByClassName("filter")[0].children;
        this.projects = document.getElementsByClassName("list")[0].children;

        for (let i = 0; i < this.items.length; i += 1)
            this.items[i].onclick = event => this.onFilterItemClick(event, i);

        this.selectFilter(0);
        this.filterProjects(0);
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
            const shouldBeDisplayed = this.PROJECTS[index].includes(i);
            this.projects[i].className = this.PROJECT[shouldBeDisplayed ? 1 : 0];
        }
    }
}

new ProjectFilter();
