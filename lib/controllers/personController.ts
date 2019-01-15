import * as mongoose from 'mongoose';
import { PersonSchema } from '../models/personModel';
import { Request, Response } from 'express';

const Person = mongoose.model('Person', PersonSchema);

export class PersonController {

    public addNewPerson(req: Request, res: Response) {

        let newPerson = new Person(req.body);

        newPerson.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}