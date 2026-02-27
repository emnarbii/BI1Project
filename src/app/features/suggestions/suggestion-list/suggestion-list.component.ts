import { Component } from '@angular/core';
import { Suggestion } from '../../../models/Suggestion';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrl: './suggestion-list.component.css',
})
export class SuggestionListComponent {
  favoriteList: Suggestion[] = [];
  searchItem: string = '';
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description:
        'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de léquipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10,
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description:
        'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0,
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description:
        'Mise en place dun programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'acceptee',
      nbLikes: 2,
    },
    {
      id: 4,
      title: 'Moderniser linterface utilisateur',
      description:
        'Refonte complète de linterface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0,
    },
  ];

  incrementNbLikes(suggestion: Suggestion) {
    return suggestion.nbLikes++;
  }

  addToFavorite(suggestion: Suggestion) {
    if (!this.favoriteList.includes(suggestion)) {
      return this.favoriteList.push(suggestion);
    } else {
      return alert('suggestion already exist!!!!!');
    }
  }

  filter() {
    return this.suggestions.filter(
      (sugg) =>
        sugg.title.toLowerCase().includes(this.searchItem.toLowerCase()) ||
        sugg.category.toLowerCase().includes(this.searchItem.toLowerCase()),
    );
  }
}
