import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { animals } from 'src/app/models/animal';
import { animalservice } from 'src/app/services/animal.service';

@Component({
  selector: 'app-add-edit-animal',
  templateUrl: './add-edit-animal.component.html',
  styleUrls: ['./add-edit-animal.component.css']
})
export class AddEditAnimalComponent implements OnInit {
  animals: FormGroup;
  AnimalId = 0;
  accion = 'Add';
  loading = false;
  animal: animals;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private animalservice: animalservice, private router: Router) {
    this.animals = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('AnimalId') > 0) {
      this.AnimalId = +this.route.snapshot.paramMap.get('AnimalId');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }

  saveanimal() {
    debugger
    if (this.accion === 'Add') {
      const producto: animals = {
        name: this.animals.get('name').value,
        breed: this.animals.get('breed').value,
        birthDate: this.animals.get('birthDate').value,
        sex: this.animals.get('sex').value,
        price: this.animals.get('price').value,
        status: this.animals.get('status').value,
      };
      this.animalservice.almacenarProducto(producto).subscribe(data => {
        this.router.navigate(['/animals']);
      });
    } else {
      const animal: animals = {
        id: this.animal.id,
        name: this.animals.get('name').value,
        breed: this.animals.get('breed').value,
        birthDate: this.animals.get('birthDate').value,
        sex: this.animals.get('sex').value,
        price: this.animals.get('price').value,
        status: this.animals.get('status').value,
      };
      this.animalservice.actualizarProducto(this.AnimalId, animal).subscribe(data => {
        this.router.navigate(['/animals']);

      });

    }
  }

  esEditar() {
    debugger
    if (this.AnimalId > 0)
      this.accion = 'Edit';
    this.animalservice.getAnimal(this.AnimalId).subscribe(data => {
      this.animal = data;
      this.animals.patchValue({
        name: data.name,
        breed: data.breed,
        birthDate: data.birthDate,
        sex: data.sex,
        price: data.price,
        status: data.status
      });
    });
  }


}
