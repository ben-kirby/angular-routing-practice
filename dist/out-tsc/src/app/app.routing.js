"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var keg_list_component_1 = require("./keg-list/keg-list.component");
var employee_page_component_1 = require("./employee-page/employee-page.component");
var appRoutes = [
    {
        path: '',
        component: keg_list_component_1.KegListComponent
    },
    {
        path: 'employee',
        component: employee_page_component_1.EmployeePageComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map