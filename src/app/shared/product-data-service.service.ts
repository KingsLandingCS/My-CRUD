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
      section: 'A1',
      progress: 95,
      marks: 80,
      school: 'ABC School',
      image: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      rollNo: 2,
      name: 'Mark',
      class: 10,
      section: 'B2',
      progress: 60,
      marks: 49,
      school: 'ABC School',
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      rollNo: 3,
      name: 'Lewis',
      class: 10,
      section: 'A2',
      progress: 100,
      marks: 100,
      school: 'ABC School',
      image: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      rollNo: 4,
      name: 'Roger',
      class: 10,
      section: 'B1',
      progress: 65,
      marks: 69,
      school: 'ABC School',
      image: "https://images.unsplash.com/photo-1592188657297-c6473609e988?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      rollNo: 5,
      name: 'Alex',
      class: 10,
      section: 'A3',
      progress: 85,
      marks: 92,
      school: 'ABC School',
      image: "https://images.unsplash.com/photo-1630178836733-3d61d8974258?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  constructor() {

  }
}
