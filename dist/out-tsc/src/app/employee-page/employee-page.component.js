"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var keg_1 = require("../models/keg");
var router_1 = require("@angular/router");
var keg_list_service_1 = require("../keg-list.service");
var EmployeePageComponent = /** @class */ (function () {
    function EmployeePageComponent(router, kegListService) {
        this.router = router;
        this.kegListService = kegListService;
        this.editKeg = false;
        this.displayBeer = false;
    }
    EmployeePageComponent.prototype.ngOnInit = function () {
        this.kegList = this.kegListService.getKegList();
    };
    EmployeePageComponent.prototype.editBeer = function () {
        this.editKeg = !this.editKeg;
    };
    EmployeePageComponent.prototype.newBeer = function () {
        this.displayBeer = !this.displayBeer;
    };
    EmployeePageComponent.prototype.addKeg = function () {
        if (this.newBeerName && this.newBeerBrand && this.newPintPrice && this.newABV) {
            this.kegListService.addKeg(new keg_1.Keg(this.newBeerName, this.newBeerBrand, parseInt(this.newPintPrice), parseInt(this.newABV)));
            this.displayBeer = false;
            this.newBeerName = null;
            this.newBeerBrand = null;
            this.newPintPrice = null;
            this.newABV = null;
        }
    };
    EmployeePageComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-page',
            templateUrl: './employee-page.component.html',
            styleUrls: ['./employee-page.component.css'],
            providers: [keg_list_service_1.KegListService]
        }),
        __metadata("design:paramtypes", [router_1.Router, keg_list_service_1.KegListService])
    ], EmployeePageComponent);
    return EmployeePageComponent;
}());
exports.EmployeePageComponent = EmployeePageComponent;
//# sourceMappingURL=employee-page.component.js.map