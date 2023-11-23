import { Router } from 'express';
import { DoctorsController } from './controller';
import { DoctorDatasourceImpl } from '../../infrastructure/datasource/Doctor.datasource.impl';
import { DoctorRepositoryImpl } from '../../infrastructure/repositories/Doctor.repository.impl';


export class DoctorRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new DoctorDatasourceImpl();
    const DoctorRepository = new DoctorRepositoryImpl( datasource );
    const DoctorController = new DoctorsController(DoctorRepository);

    router.get('/', DoctorController.getDoctors );
    router.get('/:id', DoctorController.getDoctorById );
    
    router.post('/', DoctorController.createDoctor );
    router.put('/:id', DoctorController.updateDoctor );
    router.delete('/:id', DoctorController.deleteDoctor );


    return router;
  }


}