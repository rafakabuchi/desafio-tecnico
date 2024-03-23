import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;

  @Output() emitindoItemParaEditar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
}
