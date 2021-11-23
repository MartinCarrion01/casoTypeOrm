import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Caso } from "./Caso";

@Entity("casoInstancia")
export class CasoInstancia {
  @PrimaryGeneratedColumn("increment")
  ordenCasoInstancia: number;

  @Column()
  observaciones: String;

  @ManyToOne(() => Caso, { cascade: true })
  @JoinColumn({ name: "numeroCaso" })
  caso: Caso;
}
