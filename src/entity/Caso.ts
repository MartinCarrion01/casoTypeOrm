import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Generated,
} from "typeorm";

@Entity("caso")
export class Caso {
  @PrimaryGeneratedColumn("uuid")
  oidNumeroCaso: string;
  
  @Column()
  numeroCaso: number

  @Column({ default: 0 })
  numeroIteracion: number;

  @Column()
  numeroCliente: number;

  @Column()
  observacionCaso: string;

  @CreateDateColumn()
  fechaHoraInicioCaso: Date;

  @Column({ type: "timestamp", nullable: true })
  fechaHoraFinCaso: Date;

  @Column({ type: "timestamp", nullable: true })
  fechaHoraCaducidadCaso: Date;
}
