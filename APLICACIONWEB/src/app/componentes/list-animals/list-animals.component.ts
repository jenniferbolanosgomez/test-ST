import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {
  listAnimals: Animals[];
  loading = false;
  constructor(private animalsService: AnimalsService) {


  }
  ngOnInit(): void {
    this.showAnimal();
  }

  showAnimal() {
    this.loading = true;
    this.animalService.getListAnimals().subscribe(data => {
      this.loading = false;
      this.listServices = data;
    })
  }

  eliminar(id: number) {
    this.loading = true;
    this.animalService.deleteAnimal(id).subscribe(data => {
      this.showAnimal()
      this.loading = false;

    })

  }
}
