import { prisma } from '../../data/postgres';
import { CreateDoctorDto, DoctorDatasource, DoctorEntity, UpdateDoctorDto } from '../../domain';




export class  DoctorDatasourceImpl implements DoctorDatasource {

  async create( createDoctorDto: CreateDoctorDto ): Promise<DoctorEntity> {
    const Doctor = await prisma.Doctor.create({
      data: createDoctorDto!
    });

    return DoctorEntity.fromObject( Doctor );
  }

  async getAll(): Promise<DoctorEntity[]> {
    const Doctors = await prisma.Doctor.findMany();
    return Doctors.map( Doctor => DoctorEntity.fromObject(Doctor) );
  }

  async findById( id: number ): Promise<DoctorEntity> {
    const Doctor = await prisma.Doctor.findFirst({
      where: { id }
    });

    if ( !Doctor ) throw `Doctor with id ${ id } not found`;
    return DoctorEntity.fromObject(Doctor);
  }

  async updateById( updateDoctorDto: UpdateDoctorDto ): Promise<DoctorEntity> {
    await this.findById( updateDoctorDto.id );
    
    const updatedDoctor = await prisma.Doctor.update({
      where: { id: updateDoctorDto.id },
      data: updateDoctorDto!.values
    });

    return DoctorEntity.fromObject(updatedDoctor);
  }

  async deleteById( id: number ): Promise<DoctorEntity> {
    await this.findById( id );
    const deleted = await prisma.Doctor.delete({
      where: { id }
    });

    return DoctorEntity.fromObject( deleted );
  }

}