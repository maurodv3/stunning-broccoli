import {PersonController} from "../controllers/personController";

export class Routes {

    public personController: PersonController = new PersonController();

    public routes(app): void {

        app.route('/person')
            .post(this.personController.addNewPerson)

    }
}