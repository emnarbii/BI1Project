import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionListComponent,
    SuggestionDetailsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule, //ngModel
    ReactiveFormsModule
  ]
})
export class SuggestionsModule { }
