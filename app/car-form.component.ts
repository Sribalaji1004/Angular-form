import {Component} from '@angular/core';

import {Car} from './Car'

@Component({

    selector:'car-form',
    templateUrl:'app/car-form.component.html'
})



export class CarFormComponent {

models = ['Fast','Medium','weak'];

model = new Car(1,'BMW',this.models[0],'Street Rider');


submitted = false;


onsubmit()
{this.submitted=true;}

get diagnostic ()

{

    return JSON.stringify(this.model);

}

}







}