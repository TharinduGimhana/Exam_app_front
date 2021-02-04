import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/studentManagement',         title: 'Student Management',             icon:'nc-hat-3',    class: '' },
    { path: '/subjectManagement',          title: 'Subject Management',              icon:'nc-paper',      class: '' },
    { path: '/lecturerManagement', title: 'Lecturer Management',     icon:'nc-badge',    class: '' },
    { path: '/studentProfile',          title: 'Student Profile',      icon:'nc-circle-10',  class: '' },
    { path: '/lecturerProfile',         title: 'Lecturer Profile',        icon:'nc-single-02',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
