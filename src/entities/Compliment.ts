import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity('compliments')
export class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User) // Muitos elogios pertecem a um usuário

  @Column()
  user_receiver: string;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User) // Muitos elogios pertecem a um usuário
  userReceiver: User;

  @Column()
  tag_id: string;

  @Column()
  message: string;
  
  @CreateDateColumn()
  created_at: Date;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag) // Muitos elogios pertecem a uma Tag
  tag: Tag;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}