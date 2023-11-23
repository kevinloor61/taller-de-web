import { Request, Response } from 'express';
import { CreateDoctorDto, UpdateDoctorDto } from '../../domain/dtos';
import { CreateDoctor, DeleteDoctor, GetDoctor, GetDoctors, DoctorRepository, UpdateDoctor } from '../../domain';


export class DoctorsController {

  //* DI
  constructor(
    private readonly DoctorRepository: DoctorRepository,
  ) { }


  public getDoctors = ( req: Request, res: Response ) => {

    new GetDoctors( this.DoctorRepository )
      .execute()
      .then( Doctors => res.json( Doctors ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getDoctorById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetDoctor( this.DoctorRepository )
      .execute( id )
      .then( Doctor => res.json( Doctor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createDoctor = ( req: Request, res: Response ) => {
    const [ error, createDoctorDto ] = CreateDoctorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateDoctor( this.DoctorRepository )
      .execute( createDoctorDto! )
      .then( Doctor => res.json( Doctor ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateDoctor = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateDoctorDto ] = UpdateDoctorDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateDoctor( this.DoctorRepository )
      .execute( updateDoctorDto! )
      .then( cDoctor => res.json( cDoctor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteDoctor = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteDoctor( this.DoctorRepository )
      .execute( id )
      .then( Doctor => res.json( Doctor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 