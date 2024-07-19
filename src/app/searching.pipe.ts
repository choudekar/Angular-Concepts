import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(listings: { id: number, title: string }[], searchTerm: string) {
    if (searchTerm == '') {
      return listings;
    } else {
      searchTerm = searchTerm.toLowerCase();
      let searchResults: { id: number, title: string }[] = [];
      listings.forEach((listing) => {
        if (listing.title.toLowerCase().indexOf(searchTerm) > -1) {
          searchResults.push(listing)
        }
      })
      return searchResults;
    }

  }

}
