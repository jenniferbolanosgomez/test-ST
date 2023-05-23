import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animals } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-see-animal',
  templateUrl: './see-animal.component.html',
  styleUrls: ['./see-animal.component.css']
})
export class SeeAnimalComponent implements OnInit {
  sellAnimalFb: FormGroup;
  loading = false;
  animal: Animals;
  animalId: number;
  cantidadActual: number;
  cantidadVenta: number;
  cedula: string;
  precio: number;


  constructor(private animalService: AnimalService, private route: ActivatedRoute,
    private fb: FormBuilder, private router: Router,
  ) {
    this.sellAnimalFb = this.fb.group({   
      total: ['', Validators.required],
      document: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.animalId = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.showAnimal();
  }


  sellAnimal() {
    debugger
    this.loading = false;
    this.animalService.deleteAnimal(this.animalId).subscribe(() => {
      swal("Compra ingresada satisfactoriamente.");
      this.router.navigate(['/productos']);
    });
  }


  showAnimal() {
    this.loading = true;
    this.animalService.showAnimal(this.animalId).subscribe(data => {
      this.loading = false;
      this.animal = data;
    })
  }







}
