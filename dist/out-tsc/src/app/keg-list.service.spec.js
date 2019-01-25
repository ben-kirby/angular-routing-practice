"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var keg_list_service_1 = require("./keg-list.service");
describe('KegListService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [keg_list_service_1.KegListService]
        });
    });
    it('should be created', testing_1.inject([keg_list_service_1.KegListService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=keg-list.service.spec.js.map