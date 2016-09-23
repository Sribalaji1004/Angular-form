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
var core_1 = require('@angular/core');
var Car_1 = require('./Car');
var CarFormComponent = (function () {
    function CarFormComponent() {
        this.models = ['Fast', 'Medium', 'weak'];
        this.model = new Car_1.Car(1, 'BMW', this.models[0], 'Street Rider');
        this.submitted = false;
    }
    CarFormComponent.prototype.onsubmit = function () { this.submitted = true; };
    Object.defineProperty(CarFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    CarFormComponent = __decorate([
        core_1.Component({
            selector: 'car-form',
            templateUrl: 'app/car-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CarFormComponent);
    return CarFormComponent;
}());
exports.CarFormComponent = CarFormComponent;
//# sourceMappingURL=car-form.component.js.map