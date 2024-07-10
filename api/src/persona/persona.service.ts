import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Persona } from './schemas/persona.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class PersonaService {
  constructor(
    @InjectModel(Persona.name)
    @InjectModel(Persona.name) private readonly personaModel: Model<Persona>,
  ) {}

  async buscartodos(): Promise<Persona[]> {
    const personas = await this.personaModel.find();
    return personas;
  }

  async create(persona: Persona): Promise<Persona> {
    const res = await this.personaModel.create(persona);
    return res;
  }

  async buscar(cedula: number): Promise<Persona> {
    const res = await this.personaModel.findOne({ cedula }).exec();
    return res;
  }

  async modificar(cedula: number, persona: Persona): Promise<Persona> {
    const res = await this.personaModel.findOneAndUpdate(
      { cedula }, 
      { $set: persona }, 
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    return res;
  }  

  async eliminar(cedula: number): Promise<Persona> {
    const res = await this.personaModel.find({ cedula }).deleteOne();
    return res;
  }
}
