import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilterPipe'
})
export class UserFilterPipePipe implements PipeTransform {

  transform(value: any[], filterData: any): any[] {
    const searchTerm = filterData;
    console.log(value);
    console.log(searchTerm);
    return value.filter(
      (user: any) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.class.toLowerCase().includes(searchTerm) ||
        user.section.toLowerCase().includes(searchTerm) ||
        user.progress.toLowerCase().includes(searchTerm) ||
        user.marks.toLowerCase().includes(searchTerm) ||
        user.school.toLowerCase().includes(searchTerm)
    );
  }
}

