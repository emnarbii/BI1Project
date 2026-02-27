import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  suggForm!: FormGroup;
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre',
  ];
  constructor() {
    this.suggForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z]*$'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
      ]),
      category: new FormControl('', Validators.required),
      date: new FormControl(new Date()),
      status: new FormControl('en-attente'),
      nbrLikes: new FormControl('0'),
    });
  }

  afficher(){
    return console.log( this.suggForm.get('title')?.value)
  }

  get title(){return this.suggForm.get('title')}
}
