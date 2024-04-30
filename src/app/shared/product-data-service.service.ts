import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataServiceService {
  public userData: any[] = [
    {
      rollNo: 1,
      name: 'John',
      class: 10,
      section: 'A',
      progress: 95,
      marks: 80,
      school: 'ABC School',
    },
    {
      rollNo: 2,
      name: 'Mark',
      class: 10,
      section: 'B',
      progress: 60,
      marks: 55,
      school: 'ABC School',
    },
    {
      rollNo: 3,
      name: 'Lewis',
      class: 10,
      section: 'A',
      progress: 100,
      marks: 100,
      school: 'ABC School',
    },
    {
      rollNo: 4,
      name: 'Roger',
      class: 10,
      section: 'B',
      progress: 65,
      marks: 75,
      school: 'ABC School',
    },
    {
      rollNo: 5,
      name: 'Alex',
      class: 10,
      section: 'A',
      progress: 85,
      marks: 92,
      school: 'ABC School',
    },
  ];
  constructor() {

  }
}
